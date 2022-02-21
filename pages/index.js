import Head from 'next/head'
import About from '../src/components/ui/About'
import Blog from '../src/components/ui/Blog'
import Contacts from '../src/components/ui/Contacts'
import MainLayout from '../src/layouts/MainLayout'

export default function Home() {
  return (
    <>
      <Head>
          <title>The home of Monama TV - Software Developer, Blogger, YouTuber</title>
      </Head>
      <About />
      <Blog />
      <Contacts />
    </>
  )
}
