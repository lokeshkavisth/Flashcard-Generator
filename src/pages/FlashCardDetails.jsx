import React from 'react'
import flash1 from '../images/flashimg1.webp'
import { BiArrowBack } from 'react-icons/bi';
import { HiArrowUturnRight } from 'react-icons/hi2';
import { BsDownload, BsPrinter } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
export default function FlashCardDetails() {
    return (
        <div className="flex flex-col min-h-screen -pb-5">
            <div className='flex'>
                <div>
                    <BiArrowBack size={'2.5rem'} />
                </div>
                <div className="flex flex-col">
                    <p className='ml-4 mt-0.5 text-3xl'>FlashCardDetails</p>
                    <p className=" m-4 mb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quaerat nemo totam debitis sint natus libero, voluptatem tempore ea, ex repudiandae minima enim. Natus delectus ullam ipsum, harum velit illum.</p>
                </div>
            </div>
            <div className='flex flex-col gap-10 items-start xl:flex-row'>
                <div className="flex flex-col w-full shadow-md bg-white rounded-md p-5 ">
                    <p className='text-2xl mb-5 mx-10'>Flashcards</p>
                    <ul className='text-lg space-y-2'>
                        <li > Lorem ipsum</li>
                        <li > card 2</li>
                        <li > card 3</li>
                        <li > card 4</li>
                        <li > card 5</li>
                        <li > card 6</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <div className="flex  w-full xl:w-[800px] lg:w-[650px] items-start flex-col md:flex-row shadow-md bg-white rounded-md p-10 gap-10">
                        <img src={flash1} className='w-60 aspect-square object-cover' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum eius ipsum corporis adipisci amet quis totam repellat nemo illum! Beatae laboriosam adipisci, cum natus assumenda quisquam odit fugiat laborum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta blanditiis facilis ipsa exercitationem tempora dolorem voluptatem adipisci quidem ratione voluptas, rerum vitae inventore velit placeat ipsam voluptate perspiciatis porro sint.</p>
                    </div>
                    <div className='flex self-center m-5'>
                        <button
                            className="text-lg min-w-max">
                            <IoIosArrowBack className='text-2xl ' />
                        </button>
                        <h1 className='mx-10'>1/6</h1>
                        <button
                            className="text-lg min-w-max">
                            <IoIosArrowForward className='text-2xl ' />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-5">
                    <button
                        className="flex items-center px-8  py-2 text-lg shadow-md bg-white rounded-lg gap-3 min-w-max  ">
                        <HiArrowUturnRight className='text-2xl ' />
                        Share
                    </button>

                    <button
                        className="flex items-center px-8  py-2 text-lg shadow-md bg-white rounded-lg gap-3 min-w-max  ">
                        <BsDownload className='text-2xl ' />
                        Download
                    </button>

                    <button className="flex items-center px-8  py-2 text-lg shadow-md bg-white rounded-lg gap-3 min-w-max  ">
                        <BsPrinter className='text-2xl ' />
                        Print
                    </button>
                </div>
            </div>

        </div >
    )
}

