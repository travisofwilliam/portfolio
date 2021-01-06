// solar
// pulse
// cyborg

// images
import beerPunk from '../img/beer_punk.png'
import blog from '../img/Blog.png'
import chuckNorris from '../img/chuck_norris.png'
import movieSearch from '../img/movie_search.png'
import tempConverter from '../img/temp_converter.png'
import weatherSearch from '../img/weather_search.png'

const projects = [
  {
    name: 'Beer Punk',
    img: beerPunk,
    desc: 'Fetch and filter beers from the Beer Punk API',
    url: 'https://beerpunk.vercel.app/'
  },
  {
    name: 'Blog',
    img: blog,
    desc: 'Create, edit and delete blog posts to a MongoDB database',
    url: 'https://primblog.vercel.app/'
  },
  {
    name: 'Chuck Norris Facts',
    img: chuckNorris,
    desc: 'Chuck Norris fact generator',
    url: 'https://chucknorrisfacts.vercel.app/'
  },
  {
    name: 'Movie Search',
    img: movieSearch,
    desc: 'Search movies and television shows',
    url: 'https://moviesearch.vercel.app/'
  },
  {
    name: 'Temperature Unit Converter',
    img: tempConverter,
    desc: 'Convert temperature to given unit of measurement',
    url: 'https://tempconverter.vercel.app/'
  },
  {
    name: 'Weather Search',
    img: weatherSearch,
    desc: 'Search weather by city and state',
    url: 'https://weather-search.vercel.app/'
  }

]

const Index = () => {

  return (
    <div>
      <div
        className="container"
        style={{
          marginTop: '25px',
          textAlign: 'center'
        }}
      >
        <h1>My Projects</h1>
        <br />
        <div className="row">
          {
            projects.map((project, idx) => {
              return (
                <div key={idx} className="card col-sm-4" style={{ border: 'none' }} >
                  <img className="card-img-top" src={project.img} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.desc}</p>
                    <a href={project.url} target="_blank" className="btn btn-primary">View App</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Index