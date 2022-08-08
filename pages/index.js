import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
import { useState } from 'react'

export default function Home() {

	const [darkMode,setDarkMode]=useState(true)

  return (
    <div className={darkMode ? "dark" : ""}>
     
      <Head>
        <title>Decentralised Lottery</title>
        <meta name="description" content="Created with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 min-h-screen font-Custom">
        <Header darkTheme={darkMode} setDarkTheme={setDarkMode}/>
        <LotteryEntrance/>
      </div>
      
    </div>
  )
}
