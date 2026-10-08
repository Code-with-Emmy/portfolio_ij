import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Simple backend validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // In a production environment, you would use nodemailer, SendGrid, or Resend here.
    console.log("Contact form submission received:", body);

    return NextResponse.json({ success: true, message: "Message received successfully." });
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred processing your request." },
      { status: 500 }
    );
  }
}
