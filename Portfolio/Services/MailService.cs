using Portfolio.Models;
using System.Net;
using System.Net.Mail;

namespace Portfolio.Services
{
    public class MailService
    {
        private readonly IConfiguration _configuration;

        public MailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void SendMail(MessageModel meg)
        {
            var fromAddress = new MailAddress("ambi92@outlook.com", "Amarjit Singh");
            var toAddress = new MailAddress(meg.Email, meg.Name);
            const string subject = "Subject";

            var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = CreateBody(meg.Message, meg.Name),
                IsBodyHtml = true
            };

            string _password = _configuration["emailpassword"];
            NetworkCredential credentials = new NetworkCredential("ambi92@outlook.com", _password);
            SmtpClient client = new SmtpClient("smtp-mail.outlook.com")
            {
                Port = 587,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                EnableSsl = true,
                Credentials = credentials
            };

            client.Send(message);
        }

        string CreateBody(string message, string name)
        {
            string htmlbody = @"
            <!DOCTYPE html>
                <html>
                <head>
                    <meta charset='utf-8'>
                    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
                    <title></title>
                    <meta name='description' content=''>
                    <meta name='viewport' content='width=device-width, initial-scale=1'>
                    <style>
                        body {
                            margin: 30px;
                        }
                        .container-fluid{
                            width:80%;
                            height:80%;
                            border: 1px solid black;
                            margin: auto;
                        }
                        h1 {
                            text-align: center;
                            border-bottom: 1px solid black;
                        }
                        .message {
                            margin: 10px 0px 0px 0px;
                            padding: 10px;
                        }
                        .message span {
                            color: rgb(138, 138, 138);
                        }
                        .message p {
                            color: black;
                            font-size: 15px;
                        }
                    </style>
                </head>
                <body>
                    <div class='container-fluid'>
                        <div>
                            <h1>Message Send</h1>
                            <div class='message'>
                                <p><span>Hello, [{name}]<br /> Thank you for sending me a message I will get back to you. </span></p>
                                <p><span>Your message:</span> <br /> [{message}]</p>
                            </div>
                        </div>
                    </div>
                    <div class='footer'>
                        <p>Thank you, <br /> Ambi</p>
                    </div>
                </body>
                </html>
            ";
            return htmlbody.Replace("[{message}]", message).Replace("[{name}]",name);
        }
    }
}
