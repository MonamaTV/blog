import Head from 'next/head'
import About from '../src/components/ui/About'
import Blog from '../src/components/ui/Blog'
import Contacts from '../src/components/ui/Contacts'

export default function Home() {
  return (
    <>
      <Head>
          <title>Home of Monama TV - Software Developer, Blogger, YouTuber</title>
          <meta name="theme-color" content="#171a33" />
          <meta name="keywords" content="Software Developer, Blogger, YouTuber, South African Software Engineer" />
          <meta name="description" content="Software Developer, Blogger, YouTuber, South African Software Engineer" />
      </Head>
      <About />
      <Blog />
      <Contacts />
    </>
  )
}
