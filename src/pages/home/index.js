import React from 'react';
import Button from '../../components/buttonGradient';
import Header from './../../components/header';
import person from './../../config/config';
import ilustImage from './../../assets/images/intro-section-illustration.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Home() {
  return (
    <main>
      <Header phone={person.phone} />
      <section >
        {/** home section */}
        <div className="introSection ">
          <div className="container vh-100 d-flex align-items-center ">
            <div className="row align-items-center ">
              <div className="col ">
                <h1 className="display-2">
                  <span className="display-2-title">
                    {`Hey i'm ${person.name} ${person.lastName}`}
                  </span>
                  <span className="display-2-discraption">{`${person.Bio}`}</span>
                </h1>
                <Button content="Get in Touch" icon="arrow-circle-right" />
              </div>
              <div className="col position-relative">
                <img src={ilustImage} alt="ilustrater" />
                <span className="position-absolute top-50 start-50 translate-middle display-1">
                  <button className=" bg-transparent border-0">
                    <FontAwesomeIcon className="" icon="play-circle"></FontAwesomeIcon>
                  </button>

                </span>
              </div>
            </div>

          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="header-shape-gradient" x2="0.35" y2="1">
              <stop offset="0%" stopColor="#9926f0" />
              <stop offset="30%" stopColor="#bb6ef5" />
            </linearGradient>
          </defs>
          <path fill="#bb6ef5" fillOpacity="1" d="M0,64L30,85.3C60,107,120,149,180,181.3C240,213,300,235,360,208C420,181,480,107,540,106.7C600,107,660,181,720,192C780,203,840,149,900,112C960,75,1020,53,1080,64C1140,75,1200,117,1260,122.7C1320,128,1380,96,1410,80L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
        {/**end home section */}

      </section>

    </main>
  )
}
