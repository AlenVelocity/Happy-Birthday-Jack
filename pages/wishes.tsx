import { readdirSync, readFileSync } from 'fs'
import { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/Button'
import Confetti from '../components/Confetti'
import Wish from '../components/Wish'

type TWish = {
    wish: string
    author: string
}

type Props = {
    wishes: TWish[]
}
const Wishboard: NextPage<Props> = ({ wishes }) => {
    return (
        <>
            <Head>
                <title>Wishes for Jack!</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Wishes for Pranay!" />
            </Head>
            <div className="relative flex flex-col min-h-screen background">
                <Confetti></Confetti>
                <div className="flex items-center justify-center">
                    <h1 className="absolute px-4 text-4xl text-center text-white capitalize top-6 font-roboto">
                        Wishes for <span className="text-green-300">Pranay</span>
                    </h1>
                </div>
                <div className="py-8" />

                <div className="items-start">
                    {wishes.map((wish, index) => (
                        <Wish key={index} wish={wish.wish} author={wish.author} />
                    ))}
                </div>

                <div className="pb-6" />

                <div className="flex items-center justify-center pt-6 space-x-4">
                        <Button href="/" text="home" />
                </div>
            </div>
        </>
    )
}

export const getStaticProps = async (): Promise<{ props: Props }> => {
    return {
        props: {
            wishes: readdirSync('./wishes').map((file) => {
                return {
                    wish: readFileSync(`./wishes/${file}`, 'utf8'),
                    author: file.split('.')[0]
                }
            })
        }
    }
}

export default Wishboard
