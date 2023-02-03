import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Map_ from '../components/Map_'
import HUD_ from '../components/HUD_'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB3x0RxMZbl6LRapAhKlegw6Xmp9rupr0g"></script>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Map_/>
        <HUD_/>
      </main>
    </div>
  )
}

export default Home
