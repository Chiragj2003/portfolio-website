import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "chiragj2019@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Message from Portfolio Contact Form
          </h2>
          
          <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #374151;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> 
              <a href="mailto:${email}" style="color: #4F46E5;">${email}</a>
            </p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <strong style="color: #374151;">Message:</strong>
            <div style="margin-top: 10px; padding: 15px; background-color: #FFFFFF; border-left: 4px solid #4F46E5; border-radius: 4px;">
              ${message.replace(/\n/g, "<br />")}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB; color: #6B7280; font-size: 12px;">
            <p>This message was sent from your portfolio website contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("Resend API Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
