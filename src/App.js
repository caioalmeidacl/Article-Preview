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
    <main className='p-4'>
      <div className='flex flex-col bg-white w-full desktop:max-w-6xl rounded-2xl'>
        <section class="zoom-container rounded-t-2xl">
          <img src={Image} alt='' className='translate-y-5  scale-125'/>        
        </section>

        <article className='p-8 pb-4'>
          <div className='items-center desktop:max-w-lg flex flex-col '>
            <div className='my-auto'> 
                <h1 className="font-bold text-very-dark-grayish-blue text-base desktop:text-2xl pb-4 pr-4">Shift the overall look and feel by adding these wonderful 
                touches to furniture in your home</h1> 
                <p className='text-body desktop:text-body text-desaturated-dark-blue pr-6 '>Ever been in a room and felt like something was missing? Perhaps 
                it felt slightly bare and uninviting. I’ve got some simple tips 
                to help you make any room feel complete.</p>
            </div>
          </div>
        </article>

        <section className='relative w-full py-3  px-4'>
          <div className='flex w-full items-center px-4 justify-between'>
                <div className='flex items-center'>
                  <img src={ProfilePicture} alt='' className='h-10 rounded-full'/>
                  <div className='flex flex-col pl-2 '>
                    <h2 className='text-sm desktop:text-lg font-bold text-very-dark-grayish-blue'>Michelle Appleton</h2>
                    <p className='text-body text-desaturated-dark-blue'>28 Jun 2020</p>  
                  </div>


                  <div className={`${shareOpen ? ' absolute z-50 left-0 top-0 flex h-full w-full rounded-b-xl items-center ' : 'hidden'}  bg-very-dark-grayish-blue`}>
                    <ul className='flex items-center ml-5'>
                      <li>
                        <p className='text-base leading-8 tracking-widest uppercase pl-2 text-grayish-blue'>Share</p>             
                      </li>
                      <li className='mx-3'>
                        <img src={IconFacbook} alt=''/>
                      </li>
                      <li className='mx-3'>
                        <img src={IconTwitter} alt=''/>
                      </li>
                      <li className='mx-3'>
                        <img src={IconPinterest} alt=''/>
                      </li>
                    </ul>
                  </div>
                </div>

                
                <div className='z-50'>
                  <button 
                  onClick={() => setShareOpen(!shareOpen)}
                  className={`${shareOpen ? 'bg-desaturated-dark-blue  ': 'bg-light-grayish-blue border-light-grayish-blue border ' } rounded-full p-3`}
                  >
                    <img src={shareOpen ? IconShareWhite : IconShare} alt='' width={15} height={13} />
                  </button>
                </div>
            </div>
        </section>
      </div>
    </main>
  );
}

export default App;
