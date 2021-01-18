import Link from 'next/link'

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand">
        <Link href='/'>
          <a className='navbar-brand'>Travis Williams</a>
        </Link>
        <div className="navbar-nav ml-auto">
          <Link href='/bio' className='nav-item'>
            <a className='nav-link'>Bio</a>
          </Link>
          <Link href='/videos' className='nav-item'>
            <a className='nav-link'>Videos</a>
          </Link>
          <Link href='https://github.com/travisofwilliam' className='nav-item'>
            <a target='_blank' className='nav-link'>GitHub</a>
          </Link>
          <Link href='/contact' className='nav-item'>
            <a className='nav-link'>Contact</a>
          </Link>
        </div>
      </nav>
      {props.children}
    </div>
  )
}

export default Navbar