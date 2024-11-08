import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_API_TOKEN
const SENDER_EMAIL ="hello@demomailtrap.com"
const  RECIPIENT_EMAIL = "karkisanjay2002@gmail.com"

if (!TOKEN) {
    throw new Error("MAILTRAP_TOKEN environment variable is not set");
  }
  
  const client = new MailtrapClient({ token: TOKEN });
  
  const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };
  
  client
    .send({
      from: sender,
      to: [{ email: RECIPIENT_EMAIL }],
      subject: "Hello from Mailtrap!",
      text: "Welcome to Mailtrap Sending!",
    })
    .then(console.log)
    .catch(console.error);