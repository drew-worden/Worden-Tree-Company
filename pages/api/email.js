//Import Packages
import nodemailer from "nodemailer"

//Email Endpoint
export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            const { name, email, phone, subject, inquiry } = req.body

            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "shea@wordentree.com",
                    pass: process.env.pass
                }
            })

            let info = await transporter.sendMail({
                from: name + " <" + email + ">",
                to: "shea@wordentree.com",
                subject,
                text: `Contact:\nEmail - ${email}\nPhone - ${phone}\n\nMessage:\n${inquiry}`
            })

            console.log(info)

            return res.status(200).end()
        } else {
            return res.status(405).end()
        }
    } catch (error) {
        console.error(error)
    }
}
