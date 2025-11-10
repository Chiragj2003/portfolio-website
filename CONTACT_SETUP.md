# Contact Form Setup with Resend

## Overview
The contact form now uses [Resend](https://resend.com) to send email notifications when someone submits the contact form.

## Setup

### Environment Variables
The following environment variables are configured in `.env.local`:

```bash
RESEND_API_KEY=re_23ZyqAQS_3NE7GK8NwLVd921aZosZbak3
CONTACT_EMAIL=chiragj2019@gmail.com
```

### How It Works

1. **User submits the contact form** at `/contact`
2. **Form data is sent** to the API route `/api/contact`
3. **Resend API sends email** to `chiragj2019@gmail.com`
4. **Email includes**:
   - Sender's name and email
   - Subject
   - Message content
   - Reply-to header (so you can reply directly)

### Email Features

- ✅ Beautiful HTML formatted emails
- ✅ Reply-to address set to the sender's email
- ✅ Professional styling with your brand colors
- ✅ Clear contact information layout
- ✅ Automatic timestamps

### Testing

To test the contact form:
1. Go to `http://localhost:3000/contact`
2. Fill out all fields (Name, Email, Subject, Message)
3. Click "Send Message"
4. Check your email at `chiragj2019@gmail.com`

### Important Notes

- ⚠️ The `.env.local` file contains your API key and should **NEVER** be committed to Git
- ✅ It's already added to `.gitignore` as `.env*`
- 📧 Resend free tier allows 100 emails/day (3,000/month)
- 🔧 The sender address is `onboarding@resend.dev` (Resend's test domain)
- 💡 To use your own domain, add it in the Resend dashboard

### API Endpoint

**POST** `/api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss..."
}
```

**Success Response:**
```json
{
  "success": true,
  "data": { /* Resend response */ }
}
```

**Error Response:**
```json
{
  "error": "Failed to send email"
}
```

### Troubleshooting

If emails aren't being received:
1. Check that `.env.local` exists and contains the correct API key
2. Verify the API key is valid in your Resend dashboard
3. Check the terminal/console for any error messages
4. Ensure your email inbox isn't filtering the messages as spam

### Upgrading

To use your own domain:
1. Add and verify your domain in Resend dashboard
2. Update the `from` address in `/src/app/api/contact/route.ts`:
   ```typescript
   from: "Contact Form <contact@yourdomain.com>"
   ```
