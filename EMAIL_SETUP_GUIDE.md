# Email Configuration Guide for AIpath Studio

## 🚨 Current Issue: "Failed to send email"

This error occurs because the email credentials in `.env.local` are not properly configured. Follow this guide to fix it.

---

## ✅ Solution: Configure Gmail App Password

### Step 1: Prepare Your Gmail Account

1. **Use the Gmail account**: `aidiginext@gmail.com` (or another Gmail account you want to use)
2. **Enable 2-Step Verification** (required for App Passwords):
   - Go to: https://myaccount.google.com/security
   - Click on "2-Step Verification"
   - Follow the setup process if not already enabled

### Step 2: Generate Gmail App Password

1. **Go to App Passwords page**:
   - Visit: https://myaccount.google.com/apppasswords
   - Or navigate: Google Account → Security → 2-Step Verification → App passwords

2. **Create a new App Password**:
   - Select app: **Mail**
   - Select device: **Other (Custom name)**
   - Enter name: **AIpath Studio Website**
   - Click **Generate**

3. **Copy the 16-character password**:
   - It will look like: `abcd efgh ijkl mnop` (with spaces)
   - **IMPORTANT**: Remove the spaces when copying
   - Example: `abcdefghijklmnop`

### Step 3: Update .env.local File

1. **Open the file**: `.env.local` in the project root directory

2. **Replace the placeholder values**:

```env
# Email Configuration
EMAIL_USER=aidiginext@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
```

**Replace**:
- `aidiginext@gmail.com` with your actual Gmail address
- `abcdefghijklmnop` with your 16-character App Password (no spaces)

3. **Save the file**

### Step 4: Restart the Development Server

**CRITICAL**: Environment variables are only loaded when the server starts!

1. **Stop the current server**:
   - Press `Ctrl + C` in the terminal running `npm run dev`

2. **Start the server again**:
   ```powershell
   npm run dev
   ```

3. **Wait for the server to fully start** before testing

---

## 🧪 Testing the Email Functionality

### Test 1: Contact Form
1. Go to: http://localhost:3000/contact
2. Scroll to "Send Us a Message" section
3. Fill out the form with test data
4. Click "Send Message"
5. You should see: "Message sent successfully!"

### Test 2: Schedule Demo Form
1. Go to: http://localhost:3000/contact
2. Scroll to "Schedule Your Free Demo" section
3. Fill out all required fields
4. Click "Schedule Demo"
5. You should see: "Demo scheduled successfully!"

### Test 3: Check Email Inbox
1. Check `sales@aidiginext.com` inbox
2. Check `aidiginext@gmail.com` inbox (CC)
3. Both should receive the test emails

---

## 🔍 Troubleshooting

### Error: "Email service not configured"
**Cause**: `.env.local` file doesn't exist or environment variables are missing

**Solution**:
1. Make sure `.env.local` exists in the project root
2. Check that it contains `EMAIL_USER` and `EMAIL_PASSWORD`
3. Restart the development server

---

### Error: "Email service not properly configured"
**Cause**: Still using placeholder values in `.env.local`

**Solution**:
1. Open `.env.local`
2. Replace `your-email@gmail.com` with actual Gmail address
3. Replace `your-app-password-here` with actual App Password
4. Restart the development server

---

### Error: "Email authentication failed"
**Cause**: Invalid Gmail credentials or App Password

**Solutions**:
1. **Verify the Gmail address is correct**
2. **Regenerate the App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Delete the old App Password
   - Create a new one
   - Update `.env.local` with the new password
3. **Make sure 2-Step Verification is enabled**
4. **Remove any spaces from the App Password**
5. **Restart the development server**

---

### Error: "Invalid login"
**Cause**: Using regular Gmail password instead of App Password

**Solution**:
- **DO NOT** use your regular Gmail password
- **MUST** use a 16-character App Password generated from Google Account settings
- Follow Step 2 above to generate a proper App Password

---

### Error: "Network error"
**Cause**: Internet connection issue or firewall blocking SMTP

**Solutions**:
1. Check your internet connection
2. Try disabling VPN if you're using one
3. Check if your firewall is blocking port 587 or 465
4. Try using a different network

---

### Emails not arriving in inbox
**Possible causes**:
1. **Check Spam/Junk folder** - Gmail might flag automated emails
2. **Email addresses incorrect** - Verify `sales@aidiginext.com` and `aidiginext@gmail.com` are correct
3. **Gmail sending limits** - Gmail has daily sending limits (500 emails/day for free accounts)

---

## 🔐 Security Best Practices

### ✅ DO:
- Use App Passwords (not regular passwords)
- Keep `.env.local` in `.gitignore` (already configured)
- Never commit `.env.local` to Git
- Use different App Passwords for different applications
- Revoke App Passwords you're no longer using

### ❌ DON'T:
- Share your App Password with anyone
- Commit `.env.local` to version control
- Use your regular Gmail password
- Hardcode credentials in source code
- Share screenshots of your `.env.local` file

---

## 🚀 Alternative Email Solutions (For Production)

For production deployment, consider using professional email services:

### Option 1: SendGrid (Recommended)
- Free tier: 100 emails/day
- Better deliverability than Gmail
- Setup: https://sendgrid.com/

### Option 2: AWS SES (Amazon Simple Email Service)
- Very affordable ($0.10 per 1,000 emails)
- Highly reliable
- Setup: https://aws.amazon.com/ses/

### Option 3: Mailgun
- Free tier: 5,000 emails/month
- Good for transactional emails
- Setup: https://www.mailgun.com/

### Option 4: Resend
- Modern email API
- Free tier: 3,000 emails/month
- Setup: https://resend.com/

---

## 📝 Current Configuration

**Emails are sent to**:
- Primary: `sales@aidiginext.com`
- CC: `aidiginext@gmail.com`

**Emails are sent from**:
- The Gmail account configured in `EMAIL_USER`

**Forms that send emails**:
1. Contact Form (`/contact` - "Send Us a Message")
2. Schedule Demo Form (`/contact` - "Schedule Your Free Demo")

---

## 🆘 Still Having Issues?

If you've followed all steps and still experiencing issues:

1. **Check the terminal/console for error messages**
2. **Check the browser console** (F12 → Console tab)
3. **Verify all steps were completed**:
   - [ ] 2-Step Verification enabled
   - [ ] App Password generated (not regular password)
   - [ ] `.env.local` updated with correct values
   - [ ] No spaces in the App Password
   - [ ] Development server restarted
   - [ ] Waited for server to fully start

4. **Try a different Gmail account** to rule out account-specific issues

5. **Check Gmail account settings**:
   - Make sure the account is not suspended
   - Verify you can log in to Gmail normally
   - Check if there are any security alerts

---

## 📧 Contact Information

If you need further assistance:
- Email: sales@aidiginext.com
- CC: aidiginext@gmail.com

---

**Last Updated**: January 2024
**Project**: AIpath Studio by AIpath DigiNext Private Limited