import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export class EmailService {
  static sendEmail(form: HTMLFormElement): Promise<EmailJSResponseStatus> {
    return emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form,
      {
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      }
    );
  }
}
