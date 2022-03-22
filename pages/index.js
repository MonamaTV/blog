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
          <meta name="description" content="I am a South African developer who enjoys typing some weird coloful text on my computer. " />
          <meta property="og:image" content="https://a.storyblok.com/f/147977/500x500/09296ef791/cover-image.png" />
          <meta property="og:title" content="Home of Monama TV - Software Developer, Blogger, YouTuber" />
          <meta property="og:site_name" content={"TadV"} />
          <meta property="og:type" content="website" />
          {/* Twitter Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Home of Monama TV - Software Developer, Blogger, YouTuber" />
          <meta name="twitter:description" content="Software Developer, Blogger, YouTuber, South African Software Engineer" />
          <meta name="twitter:image" content="https://a.storyblok.com/f/147977/500x500/09296ef791/cover-image.png" />
      </Head>
      <About />
      {/* <Blog /> */}
      <Contacts />
    </>
  )
}
