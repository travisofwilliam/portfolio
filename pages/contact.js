const Placeholder = () => {
  return (
    <div className='container' style={{ marginTop: '25px', textAlign: 'center' }}>
      <h1>Contact</h1>
      <form>
        <div className="form-group">
          <label htmlFor="formControlInput1">Name</label>
          <input type="text" className="form-control" id="formControlInput1" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="formControlInput2">Email address</label>
          <input type="email" className="form-control" id="formControlInput1" placeholder="name@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Placeholder