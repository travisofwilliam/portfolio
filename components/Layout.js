import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Travis Williams</title>

        {/* Cancel automatic favicon request */}
        <link rel="icon" href="data:,"></link>

        {/* Use Bootstrap */}
        <link rel="stylesheet" href="https://bootswatch.com/4/pulse/bootstrap.min.css" />
      </Head>

      <Navbar />
      {children}
    </div>
  )
}

export default Layout