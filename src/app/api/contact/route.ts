import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, organization, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    /*
     * ─────────────────────────────────────────────────────────────────
     * OPTION A — Resend (recommended)
     * npm install resend
     * ─────────────────────────────────────────────────────────────────
     *
     * import { Resend } from "resend";
     * const resend = new Resend(process.env.RESEND_API_KEY);
     *
     * await resend.emails.send({
     *   from: "website@ifeanyianagoandco.com",
     *   to: process.env.CONTACT_EMAIL ?? "info@ifeanyianagoandco.com",
     *   replyTo: email,
     *   subject: `New Enquiry: ${subject} — ${firstName} ${lastName}`,
     *   html: `
     *     <h2>New Website Enquiry</h2>
     *     <p><strong>Name:</strong> ${firstName} ${lastName}</p>
     *     <p><strong>Email:</strong> ${email}</p>
     *     <p><strong>Phone:</strong> ${phone ?? "Not provided"}</p>
     *     <p><strong>Organisation:</strong> ${organization ?? "Not provided"}</p>
     *     <p><strong>Matter Type:</strong> ${subject}</p>
     *     <hr/>
     *     <p><strong>Message:</strong></p>
     *     <p>${message.replace(/\n/g, "<br/>")}</p>
     *   `,
     * });
     *
     * ─────────────────────────────────────────────────────────────────
     * OPTION B — Nodemailer (SMTP)
     * npm install nodemailer @types/nodemailer
     * ─────────────────────────────────────────────────────────────────
     *
     * import nodemailer from "nodemailer";
     * const transporter = nodemailer.createTransport({
     *   host: process.env.SMTP_HOST,
     *   port: Number(process.env.SMTP_PORT),
     *   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
     * });
     * await transporter.sendMail({ from, to, subject, html });
     */

    // For now — log and return success (replace with real email sending above)
    console.log("Contact form submission:", {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      subject,
      organization,
      message,
    });

    return NextResponse.json(
      { success: true, message: "Your message has been received. We will be in touch within one business day." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
