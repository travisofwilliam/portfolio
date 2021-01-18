import YouTube from 'react-youtube'

const Videos = () => {

  const videos = [
    {
      title: 'Working with Response Objects',
      id: 'JG1Bc-uj5jI',
      desc: 'In this video, I teach you how to make a GET request to a public API using the Axios request library. Then, I show you how to understand the response object received as a result, plus how to access data from the response object and display said data inside of a view on the front end.'
    },
    {
      title: 'How to Use the .filter() Array Prototype Method',
      id: 'wTRX38Yh9pw',
      desc: 'How to Use the .filter() Array Prototype Method in a Real Project (NextJS, ReactJS)'
    },
    {
      title: 'Building a Chuck Norris Fact Generator',
      id: '0FMymeLdPYI',
      desc: 'In this video I build a Chuck Norris fact generator using the NextJS framework for ReactJS and the Axios promise-based library for HTTP requests.'
    },
    {
      title: 'Building a Basic To-Do List With Next JS',
      id: 'iEN3SAM3LbA',
      desc: 'In this video, I walk through the process of building a simple To-Do List using the NextJS framework. It is meant to demonstrate the efficiency and ease of developing ReactJS applications with the NextJS framework.'
    }
  ]

  const opts = {
    height: '200px',
    // width: '17rem',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }

  const onReady = (e) => { e.target.pauseVideo }

  return (
    <div className='container' style={{ marginTop: '25px', textAlign: 'center' }}>
      <h1>Videos</h1>
      <br />
      <div className='row'>
        {
          videos.map((video, idx) => {
            return (
              <div key={idx} className="card col-md-4" style={{ border: 'none' }}>
                <YouTube className='card-img-top' videoId={video.id} opts={opts} onReady={onReady} />
                <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                  <p className="card-text">{video.desc}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Videos