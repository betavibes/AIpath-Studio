# 🚨 Quick Fix: "Failed to send email" Error

## The Problem
Your contact forms are showing "Failed to send email" because the email credentials in `.env.local` are not configured.

---

## ⚡ Quick Solution (5 Minutes)

### Option 1: Use the Setup Wizard (Recommended)

Run this command in PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File setup-email.ps1
```

The wizard will guide you through:
1. Generating a Gmail App Password
2. Entering your credentials
3. Saving the configuration

---

### Option 2: Manual Setup

#### Step 1: Generate Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Select **Mail** → **Other (Custom name)**
3. Enter: **AIpath Studio**
4. Click **Generate**
5. Copy the 16-character password (remove spaces)

#### Step 2: Update .env.local

Open `.env.local` and replace:

```env
EMAIL_USER=aidiginext@gmail.com
EMAIL_PASSWORD=your-16-char-app-password-here
```

**Important**: 
- Use your actual Gmail address
- Use the App Password (NOT your regular Gmail password)
- Remove all spaces from the password

#### Step 3: Restart Server

```powershell
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

---

## ✅ Test Your Configuration

### Quick Test (Recommended)

Run this command to send a test email:

```powershell
node test-email.js
```

This will:
- ✓ Verify your credentials are correct
- ✓ Send a test email to sales@aidiginext.com
- ✓ Show detailed error messages if something is wrong

### Manual Test

1. Go to: http://localhost:3000/contact
2. Fill out the "Send Us a Message" form
3. Click "Send Message"
4. Check your inbox: sales@aidiginext.com

---

## 🔍 Common Issues

### "Email service not configured"
**Fix**: Run the setup wizard or manually update `.env.local`

### "Email authentication failed"
**Fix**: Make sure you're using an App Password (not regular password)

### "Invalid login"
**Fix**: 
1. Enable 2-Step Verification on your Gmail account
2. Generate a new App Password
3. Update `.env.local`
4. Restart the server

---

## 📚 Need More Help?

- **Detailed Guide**: See `EMAIL_SETUP_GUIDE.md`
- **Test Script**: Run `node test-email.js`
- **Setup Wizard**: Run `setup-email.ps1`

---

## 🎯 Summary

1. **Generate App Password**: https://myaccount.google.com/apppasswords
2. **Update .env.local**: Add your Gmail and App Password
3. **Restart Server**: `npm run dev`
4. **Test**: Run `node test-email.js`

That's it! Your contact forms will work after these steps. 🎉