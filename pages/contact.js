import { useState } from 'react'
const axios = require('axios')

const Contact = () => {

  const [senderName, setSenderName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    axios.post('api/send', {
      senderName,
      senderEmail,
      message
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div className='container' style={{ marginTop: '25px', textAlign: 'center' }}>
      <h1>Contact</h1>
      <form onSubmit={sendEmail} className="contact-form" name="contact" >
        <div className="form-group">
          <label>Name</label>
          <input onChange={(e) => {
            setSenderName(e.target.value)
          }} required type="text" className="form-control" placeholder="Name" name="name" id="yourname" />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input onChange={(e) => {
            setSenderEmail(e.target.value)
          }} required type="email" className="form-control" placeholder="name@example.com" name="email" id="youremail" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea onChange={(e) => {
            setMessage(e.target.value)
          }} required className="form-control" name="message" id="yourmessage" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact