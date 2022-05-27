/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/Button'
import Confetti from '../components/Confetti'
import Header from '../components/Header'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Happy Birthday Pranay!</title>
                <meta name="description" content="Happy Birthday Pranay!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="flex flex-col items-center justify-center min-h-screen py-2 background">
                    <Header />
                    <Confetti/>
                    <img className=" pt-6 space-x-4 w-128 h-128 full mx-auto" src="/Pranay.png" alt="Pranay" />
                    <div className="flex items-center justify-center pt-6 space-x-4">
                        <Button href="wishes" text="Wishes" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
