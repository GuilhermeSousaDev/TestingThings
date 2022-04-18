import nodemailer from 'nodemailer';

class SendMail {
    transporter;

    constructor (account) {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'monvjvrefmbe4zxv@ethereal.email',
                pass: '3zJf9Va28s1rdGVkbr',
            }
        });
    }

    async send({ from, to, subject, text }) {
        const info = await this.transporter.sendMail({
            from,
            to,
            subject,
            text,
        });

        console.log('id: %s', info.messageId);
        console.log('url: %s', nodemailer.getTestMessageUrl(info));
    }
}

export default SendMail;