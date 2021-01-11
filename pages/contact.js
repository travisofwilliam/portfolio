// import { useState } from 'react'
// const axios = require('axios')

const Contact = () => {

  // const [senderName, setSenderName] = useState('')
  // const [senderEmail, setSenderEmail] = useState('')
  // const [message, setMessage] = useState('')

  // const sendEmail = (e) => {
  //   e.preventDefault()

  //   axios.post('api/send', {
  //     senderName,
  //     senderEmail,
  //     message
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }


  return (
    <div className='container' style={{ marginTop: '25px', textAlign: 'center' }}>
      <h1>Contact</h1>
      <form className="contact-form" name="contact" action="https://getform.io/f/d0774737-92e3-4378-9237-c3928976762b" method="POST" >
        <div className="form-group">
          <label>Name</label>
          <input required type="text" className="form-control" placeholder="Name" name="name" id="yourname" />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input required type="email" className="form-control" placeholder="name@example.com" name="email" id="youremail" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea required type="text" className="form-control" name="message" id="yourmessage" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact