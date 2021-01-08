const Contact = () => {

  return (
    <div className='container' style={{ marginTop: '25px', textAlign: 'center' }}>
      <h1>Contact</h1>
      <form className="contact-form" action="success" name="contact" method="POST" netlify >
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
          <label htmlFor="yourname" >Name</label>
          <input required type="text" className="form-control" placeholder="Name" name="name" id="yourname" />
        </div>
        <div className="form-group">
          <label htmlfor="youremail" >Email address</label>
          <input required type="email" className="form-control" placeholder="name@example.com" name="email" id="youremail" />
        </div>
        <div className="form-group">
          <label htmlFor="yourmessage">Message</label>
          <textarea required className="form-control" name="message" id="yourmessage" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact