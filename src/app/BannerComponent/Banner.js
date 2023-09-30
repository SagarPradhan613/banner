import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className='main lg:flex w-full justify-between bg-[#FFC634]  relative hidden '>

                <div className='relative w-[50%] lg:w-1/3 p-5'>
                    <div className='animate-scale animate-shadow-bottom border-8 border-[#DB4B01] relative  flex rounded-[24px] shadow-bottom'>
                        <div className='bg-[#FFDFCF] lg:w-[50%] p-5 rounded rounded-tl-[15px] rounded-bl-[15px] flex justify-center align-middle animate-color-switch'>
                            <img src='/Images/SaleText.png'></img>
                        </div>
                        <div className='bg-[#FF7800] lg:w-[50%] p-5 rounded-tr-[15px] rounded-br-[15px] flex justify-center align-middle '>
                            <img src='/Images/LIVE.png'></img>
                        </div>
                        <div className='hidden lg:block absolute -top-[40%] bottom-0  left-1/2 transform -translate-x-1/2 z-20'>
                            <img src='/Images/AvaNew.png' className='h-[120px]' ></img>
                        </div>
                        <div className='block lg:hidden absolute  left-1/2 transform -translate-x-1/2 '>
                            <img src='/Images/Ava.png' className='' ></img>
                        </div>
                    </div>
                </div>
                <div className='relative w-1/4 sm:w-1/3 lg:w-1/3 flex justify-center align-middle'>
                    <img src='/Images/Middle.png' className='max-w-full'></img>
                </div>
                <div className='relative w-[25%] lg:w-1/3 p-5 flex justify-center align-middle'>
                    <div className='w-1/2 flex items-center justify-center'>
                        <p className='text-[#AD190E] text-xl font-extrabold'>Refer Friends Share 50 Million Airdrop</p>
                    </div>
                    <div className='w-1/2 px-5 mt-2'>
                        <button className='animate-button-shadow animate-glow rounded-[17px] pb-5 bg-[#FE3736] text-xl text-white font-bold py-3 w-full border-4 border-[#1A1A1A] button-shadow'>
                            BUY $SINU
                        </button>
                    </div>
                </div>
            </div>


            <div className='main lg:hidden flex justify-between bg-[#FFC634] relative px-2'>
                <div className='relative w-[50%] lg:w-1/3 '>
                    <div className='animate-scale border-8 border-[#DB4B01] relative  flex rounded-[24px] '>
                        <div className='bg-[#FFDFCF] lg:w-[50%] p-5 rounded rounded-tl-[15px] rounded-bl-[15px] flex justify-center align-middle animate-color-switch'>
                            <img src='/Images/SaleText.png' className=''></img>
                        </div>
                        <div className='bg-[#FF7800] lg:w-[50%] p-5 rounded-tr-[15px] rounded-br-[15px] flex justify-center align-middle '>
                            <img src='/Images/LIVE.png'></img>
                        </div>
                        <div className='hidden lg:block absolute -top-[40%] bottom-0  left-1/2 transform -translate-x-1/2 z-20'>
                            <img src='/Images/AvaNew.png' className='h-[120px]' ></img>
                        </div>
                        <div className='block lg:hidden absolute  left-1/2 transform -translate-x-1/2 '>
                            <img src='/Images/Ava.png' className='h-[45px]' ></img>
                        </div>
                    </div>
                </div>
                <div className='relatiive'>
                    <img src='/Images/MobGate.png' ></img>
                    <div className='absolute transform -translate-x-1/2 bottom-1 flex flex-col justify-center align-middle text-center left-[55%]'>
                        <p className='text-[#DB4B01] font-bold text-xs'>The Next</p>
                        <button className='text-xs border-[#DB4B01] bg-[#FFDFCF] border-4 text-[#DB4B01] font-bold rounded-[18px] px-3 py-1'>
                            100X
                        </button>
                    </div>
                </div>
                <div className='w-[30%]'>
                    <button className='text-white bg-[#FE3736] border-2 text-xs border-[#1A1A1A] py-2 px-1 rounded-[20px]'>
                        BUY $SINU
                    </button>
                </div>
            </div>

        </>

    )
}

export default Banner