// Email Configuration Test Script
// Run this to test if your email credentials are working
// Usage: node test-email.js

require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

console.log('\n========================================');
console.log('  AIpath Studio - Email Test');
console.log('========================================\n');

// Check if credentials are configured
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
  console.error('❌ ERROR: Email credentials not found in .env.local');
  console.log('\nPlease run the setup script first:');
  console.log('  powershell -ExecutionPolicy Bypass -File setup-email.ps1\n');
  process.exit(1);
}

// Check for placeholder values
if (
  process.env.EMAIL_USER === 'your-email@gmail.com' ||
  process.env.EMAIL_PASSWORD === 'your-app-password-here'
) {
  console.error('❌ ERROR: Email credentials are still using placeholder values');
  console.log('\nPlease update .env.local with your actual Gmail credentials.');
  console.log('Run the setup script:');
  console.log('  powershell -ExecutionPolicy Bypass -File setup-email.ps1\n');
  process.exit(1);
}

console.log('✓ Email credentials found in .env.local');
console.log(`✓ Email User: ${process.env.EMAIL_USER}`);
console.log(`✓ Password Length: ${process.env.EMAIL_PASSWORD.length} characters\n`);

// Create transporter - supports both Gmail and custom SMTP
console.log('Creating email transporter...');
const isGmail = process.env.EMAIL_USER.includes('@gmail.com');

const transporter = nodemailer.createTransport(
  isGmail
    ? {
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      }
    : {
        host: process.env.SMTP_HOST || 'smtp.hostinger.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        requireTLS: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false
        }
      }
);

console.log(`✓ Using ${isGmail ? 'Gmail' : 'Custom SMTP'} configuration`);

// Test email content
const testMailOptions = {
  from: process.env.EMAIL_USER,
  to: 'sales@aidiginext.com',
  cc: 'aidiginext@gmail.com',
  subject: '✅ AIpath Studio - Email Test Successful',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
      <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
        ✅ Email Configuration Test Successful!
      </h2>
      
      <div style="margin: 20px 0; padding: 15px; background-color: #f0fdf4; border-left: 4px solid #10b981; border-radius: 5px;">
        <p style="color: #065f46; margin: 0;">
          <strong>Congratulations!</strong> Your email configuration is working correctly.
        </p>
      </div>
      
      <div style="margin: 20px 0;">
        <h3 style="color: #4b5563;">Test Details:</h3>
        <p style="margin: 10px 0;">
          <strong>Sent From:</strong> ${process.env.EMAIL_USER}
        </p>
        <p style="margin: 10px 0;">
          <strong>Sent To:</strong> sales@aidiginext.com
        </p>
        <p style="margin: 10px 0;">
          <strong>CC:</strong> aidiginext@gmail.com
        </p>
        <p style="margin: 10px 0;">
          <strong>Test Time:</strong> ${new Date().toLocaleString()}
        </p>
      </div>
      
      <div style="margin: 20px 0; padding: 15px; background-color: #eff6ff; border-radius: 5px;">
        <h3 style="color: #1e40af; margin-top: 0;">✅ What's Working:</h3>
        <ul style="color: #1f2937; line-height: 1.8;">
          <li>Gmail SMTP connection established</li>
          <li>Authentication successful</li>
          <li>Email delivery working</li>
          <li>Contact forms ready to use</li>
        </ul>
      </div>
      
      <div style="margin: 20px 0; padding: 15px; background-color: #fef3c7; border-radius: 5px;">
        <h3 style="color: #92400e; margin-top: 0;">📋 Next Steps:</h3>
        <ol style="color: #1f2937; line-height: 1.8;">
          <li>Test the contact form at: <a href="http://localhost:3000/contact">http://localhost:3000/contact</a></li>
          <li>Test the demo scheduling form</li>
          <li>Verify emails arrive in both inboxes</li>
          <li>Check spam folder if emails don't appear</li>
        </ol>
      </div>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #6b7280; font-size: 12px;">
        <p>This is a test email from AIpath Studio</p>
        <p>AIpath DigiNext Private Limited</p>
        <p>🌐 <a href="https://www.aidiginext.com" style="color: #2563eb;">www.aidiginext.com</a></p>
      </div>
    </div>
  `,
};

// Send test email
console.log('Sending test email...');
console.log('This may take a few seconds...\n');

transporter.sendMail(testMailOptions)
  .then((info) => {
    console.log('========================================');
    console.log('  ✅ SUCCESS!');
    console.log('========================================\n');
    console.log('✓ Test email sent successfully!');
    console.log(`✓ Message ID: ${info.messageId}`);
    console.log(`✓ Response: ${info.response}\n`);
    console.log('📧 Check these inboxes:');
    console.log('   - sales@aidiginext.com');
    console.log('   - aidiginext@gmail.com\n');
    console.log('💡 If you don\'t see the email:');
    console.log('   1. Check your spam/junk folder');
    console.log('   2. Wait a few minutes (delivery can be delayed)');
    console.log('   3. Check Gmail\'s "Sent" folder\n');
    console.log('🎉 Your contact forms are now ready to use!\n');
  })
  .catch((error) => {
    console.error('========================================');
    console.error('  ❌ ERROR');
    console.error('========================================\n');
    console.error('Failed to send test email.\n');
    console.error('Error details:');
    console.error(`  Code: ${error.code || 'Unknown'}`);
    console.error(`  Message: ${error.message}\n`);
    
    // Provide specific troubleshooting advice
    if (error.code === 'EAUTH') {
      console.error('🔍 Authentication Failed\n');
      console.error('This means your Gmail credentials are incorrect.\n');
      console.error('Solutions:');
      console.error('  1. Make sure you\'re using an App Password (not your regular Gmail password)');
      console.error('  2. Verify the App Password is exactly 16 characters');
      console.error('  3. Remove any spaces from the App Password');
      console.error('  4. Generate a new App Password at: https://myaccount.google.com/apppasswords');
      console.error('  5. Update .env.local with the new password');
      console.error('  6. Make sure 2-Step Verification is enabled\n');
    } else if (error.code === 'ESOCKET' || error.code === 'ETIMEDOUT') {
      console.error('🔍 Network Error\n');
      console.error('Solutions:');
      console.error('  1. Check your internet connection');
      console.error('  2. Disable VPN if you\'re using one');
      console.error('  3. Check if your firewall is blocking SMTP (port 587/465)');
      console.error('  4. Try again in a few minutes\n');
    } else if (error.message?.includes('Invalid login')) {
      console.error('🔍 Invalid Login\n');
      console.error('Solutions:');
      console.error('  1. You must use an App Password, not your regular Gmail password');
      console.error('  2. Generate an App Password at: https://myaccount.google.com/apppasswords');
      console.error('  3. Update EMAIL_PASSWORD in .env.local');
      console.error('  4. Run this test again\n');
    } else {
      console.error('🔍 Unknown Error\n');
      console.error('Solutions:');
      console.error('  1. Check the error message above for clues');
      console.error('  2. Verify your .env.local file is correct');
      console.error('  3. Try regenerating your App Password');
      console.error('  4. Check the EMAIL_SETUP_GUIDE.md for more help\n');
    }
    
    console.error('📖 For detailed troubleshooting, see: EMAIL_SETUP_GUIDE.md\n');
    process.exit(1);
  });