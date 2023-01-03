import nodemailer from 'nodemailer';

type EmailType = {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
}

const port = process.env.MAILER_PORT as number | undefined;

const sendEmail = async ({ from, to, subject, text, html }: EmailType) => {
    try {
        const transport = nodemailer.createTransport({
            host: process.env.MAILER_HOST as string,
            port: port,
            auth: {
                user: process.env.MAILER_USER as string,
                pass: process.env.MAILER_PASS as string,
            }
        });

        await transport.sendMail({
            from: from,
            to: to,
            subject: subject,
            text: text,
            html: html,
        });

        console.log('Email send succesfully!');

    } catch (err) {
        console.log(err);
    }
}

export default sendEmail;