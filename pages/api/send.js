const axios = require('axios')

export default (req, res) => {
  const { senderName, senderEmail, message } = req.body

  axios.post('https://api.sendgrid.com/v3/mail/send', {
    personalizations:
      [
        {
          to: [
            {
              email: "travis.v.williams@gmail.com",
              name: "Travis Williams"
            }
          ],
          subject: "Test"
        }
      ],
    content:
      [
        {
          type: "text/plain",
          value: message
        }
      ],
    from:
    {
      email: "travis.v.williams@gmail.com",
      name: "Travis Williams"
    },
    reply_to:
    {
      email: senderEmail,
      name: senderName
    }
  }, {
    headers: {
      Authorization: 'Bearer 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',
      'Content-type': 'application/json'
    }
  })
    .then(res => console.log(res))
    .catch(err => console.log(err))

  res.send('it worked')
}