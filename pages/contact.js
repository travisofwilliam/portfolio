import emailjs, { send } from 'emailjs-com'

const Placeholder = () => {

  const sendEmail = (e) => {
    e.preventDefault()

    console.log(e.target)

    emailjs.sendForm('service_eyf7ofu', 'template_8293uds', e.target, 'user_hguX7dVSTsDnOIyZs1nd9')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }
  return (
    <div className='container' style={{ marginTop: '25px', textAlign: 'center' }}>
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="formControlInput1">Name</label>
          <input type="text" className="form-control" placeholder="Name" name="user_name" />
        </div>
        <div className="form-group">
          <label htmlFor="formControlInput2">Email address</label>
          <input type="email" className="form-control" placeholder="name@example.com" name="user_email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control" name="message" rows="3"></textarea>
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default Placeholder