
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const ses = new SESClient({ region: "us-east-2" });
const sendEmail = async (req,res) => {
    try {
     
  const params = {
    Source: process.env.AWS_EMAIL_SENDER, // verified email
    Destination: {
      ToAddresses: [process.env.AWS_EMAIL_RECEIVER]
    },
    Message: {
      Subject: {
        Data: "🔥 SES Test Email"
      },
      Body: {
        Html: {
          Data: `
            <h1>Hello Ravi 👋</h1>
            <p>This is a <b>test email</b> sent using <b>AWS SES</b>.</p>
            <p>You're officially sending emails now 🚀</p>
          `
        },
        Text: {
          Data: "Hello Ravi! This is a test email from AWS SES."
        }
      }
    }
  };

  await ses.send(new SendEmailCommand(params));
  console.log("✅ Email sent successfully");  
  return res.status(200).send("Email send") 
    } catch (error) {
        console.log("Something wrong:",error.message);
        throw new Error(error.message);
    }

};

module.exports = {sendEmail}
// sendEmail().catch(console.error);
