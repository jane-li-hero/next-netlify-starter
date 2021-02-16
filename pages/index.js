import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Hello <code>pages/index.js</code>
        </p>
        <h2>Posts</h2>
        <h2>Posts</h2>
        <h2>Posts</h2>
      </main>

      <Footer />
    </div>
  )
}
