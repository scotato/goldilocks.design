require('dotenv').config()
const fetch = require('node-fetch')
const { EMAIL_TOKEN } = process.env

exports.handler = async event => {
  const { subscribe, email } = JSON.parse(event.body).payload
  const canSubscribe = subscribe && email
  console.log(`Recieved a submission: ${subscribe} ${email}`)
  console.log('body', JSON.parse(event.body))
  
  return canSubscribe ? fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${EMAIL_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Buttondown:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
  : null
}
