import laptopSelfie from '../img/laptopselfie.jpg'

const Bio = () => {
  return (
    <div className='container' style={{ marginTop: '25px', textAlign: 'center' }}>
      <h1>About Me</h1>
      <div style={{ display: 'block', textAlign: 'center', margin: '25px' }}>
        <img
          src={laptopSelfie}
          style={{
            height: '250px',
            width: '250px',
            borderRadius: '50%'
          }}
        />
      </div>
      <hr style={{ marginBottom: '25px' }} />
      <div>
        <p>I am a self taught full stack web developer &#40;MERN&#41; located in San Diego, California. Most of my time is spent researching industry standard web development tools and programming concepts. My main area of interest lies in modern front end frameworks &#40;React JS&#41;. I have a passion for utilizing problem solving to bring ideas to fruition in an engaging and impactful way.</p>
        <br />
        <p>Some of my hobbies include playing guitar, singing, beer tasting, billiards, solving cube puzzles, hiking and cycling.</p>
      </div>
      <br />
    </div>
  )
}

export default Bio