import { FC } from 'react'

interface WishProps {
    wish: string
    author: string
}

const Wish: FC<WishProps> = ({ wish, author }: WishProps) => {
    return (
        <div className="flex flex-col px-8 pt-12 md:px-12 lg:px-56">
            <div className="border-l-4 border-blue-300">
                <p className="pl-4 leading-relaxed text-white text-normal font-roboto">{wish}</p>
            </div>
            <p className="pt-1 pl-4 text-green-400 font-roboto">- {author}</p>
        </div>
    )
}

export default Wish
