import "server-only";

import nodemailer, { Transporter } from "nodemailer";
import env from "./env-server";

// Create transporter once
const transporter: Transporter = nodemailer.createTransport({
  service: env.SMTP_HOST,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASSWORD,
  },
});

// Verify transporter connection
transporter
  .verify()
  // .then(() => {
  //   console.log("Email transporter is ready");
  // })
  .catch((error) => {
    console.error("Error with email transporter:", error);
  });

export default transporter;
