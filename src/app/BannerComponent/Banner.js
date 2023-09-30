import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="main lg:flex w-full justify-between bg-[#FFC634]  relative hidden ">
        <div className="relative w-[50%] lg:w-1/3 p-5">
          <div className="animate-scale animate-shadow-bottom border-8 border-[#DB4B01] relative  flex rounded-[24px] shadow-bottom">
            <div className="bg-[#FFDFCF] lg:w-[50%] p-5 rounded rounded-tl-[15px] rounded-bl-[15px] flex justify-center align-middle animate-color-switch">
              <img src="/Images/SaleText.png"></img>
            </div>
            <div className="bg-[#FF7800] lg:w-[50%] p-5 rounded-tr-[15px] rounded-br-[15px] flex justify-center align-middle ">
              <img src="/Images/LIVE.png"></img>
            </div>
            <div className="hidden lg:block absolute -top-[40%] bottom-0  left-1/2 transform -translate-x-1/2 z-20">
              <img src="/Images/AvaNew.png" className="h-[120px]"></img>
            </div>
            <div className="block lg:hidden absolute  left-1/2 transform -translate-x-1/2 ">
              <img src="/Images/Ava.png" className=""></img>
            </div>
          </div>
        </div>
        {/* <div className="relative w-1/4 sm:w-1/3 lg:w-1/3 flex justify-center align-middle">
          <img src="/Images/Middle.png" className="max-w-full"></img>
        </div> */}
        <div class="max-w-[450px] absolute top-0 bottom-0  left-1/2 transform -translate-x-1/2">
            <img  src="/Images/middle.png" class="h-full mx-auto" alt="Ava"></img>
          </div>
        <div className="relative w-[25%] lg:w-1/3 p-5 flex justify-center align-middle">
          <div className="w-1/2 flex items-center justify-center">
            <p className="text-[#AD190E] text-xl font-extrabold">
              Refer Friends Share 50 Million Airdrop
            </p>
          </div>
          <div className="w-1/2 px-5 mt-2">
            <button className="animate-button-shadow animate-glow rounded-[17px] pb-5 bg-[#FE3736] text-xl text-white font-bold py-3 w-full border-4 border-[#1A1A1A] button-shadow">
              BUY $SINU
            </button>
          </div>
        </div>
      </div>

      

    
      <div class="main-mobile flex bg-[#FFC634] w-full lg:hidden">
        <div class="relative  box1 w-2/4 flex items-center justify-center">
          <div class="absolute top-0 bottom-0">
            <img src="/Images/Ava.png" class="h-full mx-auto" alt="Ava"></img>
          </div>
          <div className="p-3 ">
            <div className="flex border-[8px] border-[#DB4B01] rounded-[14px] shadow-bottom  animate-shadow-bottom ">
              <div className="bg-[#FFDFCF] px-3 py-2 rounded-[8px]">
                <img src="/Images/SaleText.png"></img>
              </div>
              <div
                className="bg-[#FF7800] px-3 py-2 rounded-[8px
            ]"
              >
                <img src="/Images/LIVE.png"></img>
              </div>
            </div>
          </div>
        </div>
        <div class="relative w-1/3 box2 flex items-center justify-center">
          <div class="absolute top-0 bottom-0">
            <img
              src="/Images/MobGate.png"
              class="h-full mx-auto"
              alt="MobGate"
            ></img>
          </div>
          <div className="w-[60%] flex flex-col justify-center align-middle text-center px-1 md:px-3">
            <img src="/Images/NextNew.png"></img>
            <div className=" bg-[#FFDFCF] border-[#DB4B01]  md:text-base border-4 rounded-[10px] text-[#DB4B01] font-bold text-xs flex justify-center mt-2">
              <img src="/Images/100X.png" className="w-[60%]"></img>
            </div>
          </div>
        </div>
        <div class="box3 w-1/4 flex justify-center align-middle py-5">
          <button className="button-shadow animate-glow animate-button-shadow bg-[#FE3736] border-t-2 border-l-2 border-r-2 border-b-4 text-white font-bold text-xs py-1 px-2 rounded-[17px] pb-2 pt-2 border-[#AD190E] flex justify-center">
            <img src="/Images/buyText.png" className="w-[80%]"></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
