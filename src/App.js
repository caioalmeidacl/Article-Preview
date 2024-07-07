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
    <body className="bg-grayish-blue w-screen h-screen flex flex-col items-center justify-center">
      <main className='p-4 h-full flex flex-col justify-center '>
        <article className='flex flex-col desktop:flex-row w-full bg-light-grayish-blue desktop:max-w-6xl rounded-t-2xl '>
          <div class="zoom-container rounded-t-2xl">
            <img src={Image} alt='' className='translate-y-5  scale-125'/>        
          </div>
          
          <div className='p-8 items-center desktop:max-w-lg flex flex-col '>
            <div className='my-auto'> 
                <h1 className="font-bold text-very-dark-grayish-blue text-base desktop:text-2xl pb-4 pr-4">Shift the overall look and feel by adding these wonderful 
                touches to furniture in your home</h1> 
                <p className='text-body desktop:text-body text-desaturated-dark-blue pr-6 '>Ever been in a room and felt like something was missing? Perhaps 
                it felt slightly bare and uninviting. I’ve got some simple tips 
                to help you make any room feel complete.</p>
            </div>
          </div>
        </article>

        <section className='bg-light-grayish-blue rounded-b-2xl pb-6'>
            <div className='flex relative w-full desktop:my-auto px-6 '>
              <div className='z-10 flex items-center'>
                <img src={ProfilePicture} alt='' className='h-10 rounded-full'/>
                <div className='flex flex-col pl-2 '>
                  <h2 className='text-sm desktop:text-lg font-bold text-very-dark-grayish-blue'>Michelle Appleton</h2>
                  <p className='text-body text-desaturated-dark-blue'>28 Jun 2020</p>  
                </div>                
              </div>
              <div className={`${shareOpen ? ' absolute z-50 left-0 flex w-full py-4 rounded-b-2xl items-center ' : 'hidden'}  bg-very-dark-grayish-blue`}>
                <ul className='flex items-center ml-5'>
                  <li>
                    <p className='text-base leading-8 tracking-widest uppercase pl-4 text-grayish-blue'>Share</p>             
                  </li>
                  <li className='mx-2'>
                    <img src={IconFacbook} alt=''/>
                  </li>
                  <li className='mx-2'>
                    <img src={IconTwitter} alt=''/>
                  </li>
                  <li className='mx-2'>
                    <img src={IconPinterest} alt=''/>
                  </li>
                </ul>
              </div>
              <button 
              onClick={() => setShareOpen(!shareOpen)}
              className={`${shareOpen ? 'z-50 bg-desaturated-dark-blue': '' } ml-auto rounded-full p-2 border-grayish-blue border bg-inherit`}>
                <img src={shareOpen ? IconShareWhite : IconShare} alt=''width={20} height={17} />
              </button>
            </div>
        </section>
      </main>
    </body>
  );
}

export default App;
