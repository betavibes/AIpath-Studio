# AIpath Studio - Email Configuration Setup Script
# This script helps you configure email credentials for the contact forms

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  AIpath Studio - Email Setup Wizard" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if .env.local exists
$envFile = ".env.local"
if (Test-Path $envFile) {
    Write-Host "✓ Found existing .env.local file" -ForegroundColor Green
    Write-Host ""
    Write-Host "Current configuration:" -ForegroundColor Yellow
    Get-Content $envFile | Select-String "EMAIL_" | ForEach-Object {
        $line = $_.Line
        if ($line -match "EMAIL_PASSWORD") {
            Write-Host "  $($line -replace '=.*', '=********')" -ForegroundColor Gray
        } else {
            Write-Host "  $line" -ForegroundColor Gray
        }
    }
    Write-Host ""
    $overwrite = Read-Host "Do you want to update the configuration? (y/n)"
    if ($overwrite -ne "y") {
        Write-Host "Setup cancelled." -ForegroundColor Yellow
        exit
    }
} else {
    Write-Host "✗ .env.local file not found. Creating new file..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 1: Gmail Account Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Before continuing, make sure you have:" -ForegroundColor Yellow
Write-Host "  1. A Gmail account" -ForegroundColor White
Write-Host "  2. 2-Step Verification enabled" -ForegroundColor White
Write-Host "  3. Generated an App Password" -ForegroundColor White
Write-Host ""
Write-Host "To generate an App Password:" -ForegroundColor Yellow
Write-Host "  1. Go to: https://myaccount.google.com/apppasswords" -ForegroundColor White
Write-Host "  2. Select 'Mail' and 'Other (Custom name)'" -ForegroundColor White
Write-Host "  3. Enter 'AIpath Studio' as the name" -ForegroundColor White
Write-Host "  4. Copy the 16-character password (remove spaces)" -ForegroundColor White
Write-Host ""

$continue = Read-Host "Have you completed these steps? (y/n)"
if ($continue -ne "y") {
    Write-Host ""
    Write-Host "Please complete the setup steps first, then run this script again." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Opening Google App Passwords page in your browser..." -ForegroundColor Cyan
    Start-Process "https://myaccount.google.com/apppasswords"
    exit
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Step 2: Enter Credentials" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Get Gmail address
$emailUser = Read-Host "Enter your Gmail address (e.g., aidiginext@gmail.com)"
while ($emailUser -notmatch "^[a-zA-Z0-9._%+-]+@gmail\.com$") {
    Write-Host "Invalid Gmail address. Please enter a valid Gmail address." -ForegroundColor Red
    $emailUser = Read-Host "Enter your Gmail address"
}

Write-Host ""
Write-Host "✓ Gmail address: $emailUser" -ForegroundColor Green
Write-Host ""

# Get App Password
Write-Host "Enter your 16-character App Password (without spaces):" -ForegroundColor Yellow
Write-Host "Example: abcdefghijklmnop" -ForegroundColor Gray
$emailPassword = Read-Host "App Password" -AsSecureString
$emailPasswordPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($emailPassword)
)

# Remove any spaces
$emailPasswordPlain = $emailPasswordPlain -replace '\s', ''

# Validate password length
while ($emailPasswordPlain.Length -ne 16) {
    Write-Host "Invalid App Password. It should be exactly 16 characters (without spaces)." -ForegroundColor Red
    Write-Host "Current length: $($emailPasswordPlain.Length) characters" -ForegroundColor Yellow
    $emailPassword = Read-Host "App Password" -AsSecureString
    $emailPasswordPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
        [Runtime.InteropServices.Marshal]::SecureStringToBSTR($emailPassword)
    )
    $emailPasswordPlain = $emailPasswordPlain -replace '\s', ''
}

Write-Host ""
Write-Host "✓ App Password validated (16 characters)" -ForegroundColor Green
Write-Host ""

# Create .env.local content
$envContent = @"
# Email Configuration for AIpath Studio
# Generated on: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

# Gmail credentials for sending emails from contact forms
EMAIL_USER=$emailUser
EMAIL_PASSWORD=$emailPasswordPlain

# Instructions:
# - These credentials are used by the contact form and demo scheduling form
# - Emails are sent to: sales@aidiginext.com (CC: aidiginext@gmail.com)
# - Never commit this file to Git (already in .gitignore)
# - If you change these values, restart the development server

# To regenerate App Password:
# 1. Go to: https://myaccount.google.com/apppasswords
# 2. Delete the old password
# 3. Create a new one
# 4. Update EMAIL_PASSWORD above
# 5. Restart the dev server: npm run dev
"@

# Write to file
$envContent | Out-File -FilePath $envFile -Encoding UTF8 -Force

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Configuration Saved!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "✓ Email credentials saved to .env.local" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Restart your development server:" -ForegroundColor White
Write-Host "     - Press Ctrl+C to stop the current server" -ForegroundColor Gray
Write-Host "     - Run: npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "  2. Test the contact forms:" -ForegroundColor White
Write-Host "     - Go to: http://localhost:3000/contact" -ForegroundColor Gray
Write-Host "     - Fill out 'Send Us a Message' form" -ForegroundColor Gray
Write-Host "     - Fill out 'Schedule Your Free Demo' form" -ForegroundColor Gray
Write-Host ""
Write-Host "  3. Check your email inbox:" -ForegroundColor White
Write-Host "     - sales@aidiginext.com" -ForegroundColor Gray
Write-Host "     - aidiginext@gmail.com" -ForegroundColor Gray
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$openGuide = Read-Host "Would you like to open the detailed setup guide? (y/n)"
if ($openGuide -eq "y") {
    if (Test-Path "EMAIL_SETUP_GUIDE.md") {
        Start-Process "EMAIL_SETUP_GUIDE.md"
    } else {
        Write-Host "Setup guide not found." -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Setup complete! 🎉" -ForegroundColor Green
Write-Host ""