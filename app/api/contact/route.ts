import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, interest, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Email credentials not configured in .env.local");
      return NextResponse.json(
        { error: "Email service not configured. Please contact administrator." },
        { status: 500 }
      );
    }

    // Check for placeholder values
    if (
      process.env.EMAIL_USER === "your-email@gmail.com" ||
      process.env.EMAIL_PASSWORD === "your-app-password-here"
    ) {
      console.error("Email credentials are still using placeholder values");
      return NextResponse.json(
        { error: "Email service not properly configured. Please contact administrator." },
        { status: 500 }
      );
    }

    // Create transporter - supports both Gmail and custom SMTP
    const isGmail = process.env.EMAIL_USER?.includes('@gmail.com');
    
    const transporter = nodemailer.createTransport(
      isGmail
        ? {
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASSWORD,
            },
          }
        : {
            host: process.env.SMTP_HOST || "mail.aidiginext.com",
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: process.env.SMTP_SECURE === "true",
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

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "sales@aidiginext.com",
      cc: "aidiginext@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #4b5563; margin-bottom: 15px;">Contact Information:</h3>
            
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Name:</strong> ${name}
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Email:</strong> 
              <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
            </p>
            
            ${company ? `
              <p style="margin: 10px 0;">
                <strong style="color: #374151;">Company:</strong> ${company}
              </p>
            ` : ''}
            
            ${phone ? `
              <p style="margin: 10px 0;">
                <strong style="color: #374151;">Phone:</strong> 
                <a href="tel:${phone}" style="color: #2563eb;">${phone}</a>
              </p>
            ` : ''}
            
            ${interest ? `
              <p style="margin: 10px 0;">
                <strong style="color: #374151;">Interest:</strong> ${interest}
              </p>
            ` : ''}
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
            <h3 style="color: #4b5563; margin-bottom: 10px;">Message:</h3>
            <p style="color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the AIpath Studio contact form</p>
            <p>Received on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    
    // Provide more specific error messages
    let errorMessage = "Failed to send email. Please try again later.";
    
    if (error.code === "EAUTH") {
      errorMessage = "Email authentication failed. Please contact administrator.";
      console.error("Gmail authentication failed. Check EMAIL_USER and EMAIL_PASSWORD in .env.local");
    } else if (error.code === "ESOCKET") {
      errorMessage = "Network error. Please check your internet connection.";
    } else if (error.message?.includes("Invalid login")) {
      errorMessage = "Email service authentication error. Please contact administrator.";
      console.error("Invalid Gmail credentials. Make sure you're using an App Password, not your regular password.");
    }
    
    return NextResponse.json(
      { error: errorMessage, details: error.message },
      { status: 500 }
    );
  }
}