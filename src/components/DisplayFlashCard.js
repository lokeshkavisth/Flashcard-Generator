import React from 'react'
import { Link } from 'react-router-dom'
import Subnav from './Subnav'
import { useSelector } from 'react-redux'

const DisplayFlashCard = () => {
    const data = useSelector(state => state)
    console.log('redux data', data.actionReducer.flashCard);
    return (
        <div className="max-w-screen-2xl px-3 mx-auto my-8 mt-20 xl:px-20 lg:px-14 md:px-10">
            <Subnav />
            <div
                className="p-4 m-6 mx-auto flex flex-col space-y-3 items-center justify-center bg-white rounded-md text-black w-[23rem] h-[13rem] relative border-2 border-slate-200"
            >
                <div className="absolute -top-9">
                    <img
                        className="rounded-full w-16 h-16 object-cover aspect-square"
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XhmHVK5ZbLk-6c6i1V9sSvSFJjjBTvb1ZU3CSqP_DOKFZZyoYw-6yRNzCtjJhG-RBw5HAzVK3AA&usqp=CAU&ec=48600113'
                        alt='img'
                    />
                </div>
                <h2 className="font-bold text-lg">{data.actionReducer.flashCard.group}</h2>
                <p className="text-center font-medium text-sm text-slate-600 line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, aliquam, autem unde, minus dolorem velit illum dolor praesentium fuga reprehenderit perferendis? Quaerat obcaecati tenetur rerum cum sunt sit iusto voluptatem!
                </p>
                <p className="font-medium text-sm text-slate-700">
                    Number of Cards
                </p>
                <Link to='/carddetails'>
                    <button
                        className="py-1 px-16 text-red-600 font-bold rounded-sm border-red-600 ring-2 ring-red-600"
                    >
                        View Cards
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default DisplayFlashCard