import Link from 'next/link'
import { FC } from 'react'

interface ButtonProps {
    text?: string
    href?: string
}

const Button: FC<ButtonProps> = ({ href = '/', text = 'Home' }: ButtonProps) => {
    return (
        <div className="flex flex-col">
            <button>
                <div className="px-4 py-2 text-xl text-white capitalize transition-opacity duration-300 bg-pink-500 border-2 border-pink-600 rounded-md font-roboto hover:opacity-80">
                    <Link href={href}>{text}</Link>
                </div>
            </button>
        </div>
    )
}

export default Button
