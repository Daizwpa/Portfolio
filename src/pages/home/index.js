import React from 'react';
import Button from '../../components/buttonGradient';
import Header from './../../components/header';
import person from './../../config/config';
import ilustImage from './../../assets/images/intro-section-illustration.png';
export default function Home() {
  return (
    <main>
      <Header phone={person.phone} />
      <section >
        {/** home section */}
        <div className="introSection">
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
              <div className="col">
                <img src={ilustImage} alt="ilustrater" />
              </div>
            </div>
          </div>
        </div>
        {/**end home section */}

      </section>

    </main>
  )
}
