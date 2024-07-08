import './App.css';
import Image from './assets/drawers.jpg';
import ProfilePicture from './assets/avatar-michelle.jpg';
import IconShare from './assets/icon-share-blue.svg';
import IconShareWhite from './assets/icon-share-white.svg'
import IconFacbook from './assets/icon-facebook.svg';
import IconTwitter from './assets/icon-twitter.svg';
import IconPinterest from './assets/icon-pinterest.svg';
import { useState } from 'react';


function App() {
  const [shareOpen, setShareOpen] = useState(false);
  return (
    <main className="mobile:p-4 ">
      <div className="flex flex-col desktop:flex-row bg-white w-full desktop:max-w-5xl rounded-2xl">
        <section className="zoom-container desktop:rounded-none mobile:rounded-t-2xl pt-2 desktop:rounded-l-2xl">
          <img 
            src={Image} 
            alt="" 
            className="mobile:translate-y-5 desktop:translate-y-0 desktop:scale-105 mobile:scale-125 object-cover" 
          />
        </section>

        
        <div className="desktop:w-3/4">
          <article className="p-8 desktop:px-10 desktop:pt-12 desktop:pb-7">
            <div className="items-center desktop:max-w-lg flex flex-col ">
              <div> 
                  <h1 className="font-bold text-very-dark-grayish-blue mobile:text-base desktop:text-2xl pb-4 mobile:pr-4 desktop:pr-10 ">Shift the overall look and feel by adding these wonderful 
                  touches to furniture in your home</h1> 
                  <p className="text-sm desktop:text-base text-desaturated-dark-blue pr-8">Ever been in a room and felt like something was missing? Perhaps 
                  it felt slightly bare and uninviting. I’ve got some simple tips 
                  to help you make any room feel complete.</p>
              </div>
            </div>
          </article>

          <section className="relative w-full mobile:py-3 mobile:pb-4 px-4 desktop:pr-18  desktop:pl-6 ">
            <div className="flex w-full items-center px-4 justify-between">

                  <div className="flex items-center">
                    <img src={ProfilePicture} alt="" className="h-10 desktop:h-12 rounded-full"/>
                    <div className="flex flex-col pl-4 ">
                      <h2 className="text-sm desktop:text-base font-bold text-very-dark-grayish-blue">Michelle Appleton</h2>
                      <p className="text-body desktop:text-sm text-desaturated-dark-blue">28 Jun 2020</p>  
                    </div>


                    <div className={`${shareOpen ? "absolute z-50 right-0 desktop:-right-7 desktop:bottom-20 mobile:inset-y-0 flex desktop:justify-center h-full w-full desktop:w-3/6 desktop:py-8 rounded-b-xl desktop:rounded-none desktop:rounded-xl items-center arrow" : "hidden"}  bg-very-dark-grayish-blue`}>
                      <ul className="flex items-center mobile:ml-7 ">
                        <li>
                          <p className="text-base desktop:text-lg tracking-widest uppercase  text-grayish-blue">Share</p>             
                        </li>
                        <li className="mx-3">
                          <img src={IconFacbook} alt=""/>
                        </li>
                        <li className="mx-3">
                          <img src={IconTwitter} alt=""/>
                        </li>
                        <li className="mx-3">
                          <img src={IconPinterest} alt=""/>
                        </li>
                      </ul>
                    </div>
                  </div>

                  
                  <div className="z-50">
                    <button 
                    onClick={() => setShareOpen(!shareOpen)}
                    className={`${shareOpen ? "bg-desaturated-dark-blue": "bg-light-grayish-blue border-light-grayish-blue border " } rounded-full p-3 `}
                    >
                      <img src={shareOpen ? IconShareWhite : IconShare} alt="" width={15} height={13} />
                    </button>
                  </div>
              </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
