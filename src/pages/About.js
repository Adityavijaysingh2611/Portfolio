import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutInfoItem from '../components/AboutInfoItem';
import hero2Img from '../assets/images/hero2.jpg';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 13rem 0 8rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    height: 10rem;

    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 10rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Aditya Vijay Singh</span>
              </p>
              <h2 className="about__heading">NICE TO SEE YOU HERE!</h2>
              <div className="about__info">
                <PText>
                  Hi! I'm Aditya Vijay Singh, studying Computer Science and
                  Engineering. I'm fascinated by modern technologies, I'm very
                  interested in Web Development and Coding.My aspiration is to
                  leverage technology to make a meaningful difference in the
                  world through my career.
                  {/* <br />
                  <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.is modi! 
                  cing elit.is modi!
                   Reiciendis.Lorem ipsum dolor, sit amet consectetur adipisicing elit.is modi! Reiciendis. */}
                </PText>
              </div>
              <Button btnText="Resume" btnLink="#" />
            </div>
            <div className="right">
              <img src={hero2Img} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Collage"
                items={['Kalinga Institute Of Industrial Technology']}
              />
              <AboutInfoItem
                title="School"
                items={['Loyola High School ,Patna']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Skils"
                items={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'React',
                  'Github',
                  'MySQL',
                  'Java',
                  'Python',
                  'MongoDB',
                ]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
