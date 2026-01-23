import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FormsLanding.css';
import BackgroundVideo from './BackgroundVideo';

const FormsLanding = () => {
  const ENABLE_GLITCH = false;

  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    const themes = [
      "default",
      "glass",
      "neumorphism",
      "gradient",
      "ai",
      "retro",
      "minimal",
      "fluid",
      "polygon"
    ];

    const body = document.body;

    body.dataset.theme = 'default';
    setCurrentTheme('default');

    if (!ENABLE_GLITCH) return;

    let glitchInterval;
    let mainLoopTimeout;

    const startGlitchCycle = () => {
      body.classList.add("glitching");

      let i = 0;
      glitchInterval = setInterval(() => {
        body.dataset.theme = themes[i % themes.length];
        setCurrentTheme(themes[i % themes.length]);
        i++;
      }, 120);

      const glitchDuration = 900 + Math.random() * 600;

      setTimeout(() => {
        clearInterval(glitchInterval);
        body.classList.remove("glitching");

        const randomTheme =
          themes[Math.floor(Math.random() * themes.length)];
        body.dataset.theme = randomTheme;
        setCurrentTheme(randomTheme);

        const stableTime = 3000 + Math.random() * 2000;

        mainLoopTimeout = setTimeout(startGlitchCycle, stableTime);
      }, glitchDuration);
    };

    startGlitchCycle();

    return () => {
      clearInterval(glitchInterval);
      clearTimeout(mainLoopTimeout);
    };
  }, [ENABLE_GLITCH]);

  const [stackOrder, setStackOrder] = useState([0, 1, 2]);

  const handleStackClick = (clickedIndex) => {
    setStackOrder(prevOrder => {
      const newOrder = prevOrder.filter(index => index !== clickedIndex);
      newOrder.push(clickedIndex);
      return newOrder;
    });
  };

  const getStackClass = (index) => {
    const position = stackOrder.indexOf(index);
    return `mobile-stack-${position}`;
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setCurrentTheme(document.body.dataset.theme || 'glass');
    });
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="forms-landing">
      <BackgroundVideo />
      <div className="page-sections">
        <div className="section">
          <div className="forms-container">
            <div className="forms-header">
              <h1>HACKACCINO 4.0</h1>
            </div>
            <div className="forms-category-header">
              <p>Select Your Category</p>
            </div>
            <div className="forms-grid">
              <Link 
                to="/sponsor" 
                className={`form-card sponsor-card ${currentTheme === 'polygon' ? 'hexagon' : ''}`}
              >
                <div className="card-content">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div className="card-text-wrapper">
                    <h2>Sponsors</h2>
                    <p>Become a sponsor and support innovation</p>
                  </div>
                </div>
              </Link>
              <Link 
                to="/community-partner" 
                className={`form-card community-card ${currentTheme === 'polygon' ? 'heptagon' : ''}`}
              >
                <div className="card-content">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="card-text-wrapper">
                    <h2>Community Partner</h2>
                    <p>Partner with us to reach 1500+ students</p>
                  </div>
                </div>
              </Link>
              <Link 
                to="/judge" 
                className={`form-card judge-card ${currentTheme === 'polygon' ? 'nonagon' : ''}`}
              >
                <div className="card-content">
                  <div className="card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                      <path d="M4 22h16"></path>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                  </div>
                  <div className="card-text-wrapper">
                    <h2>Judges</h2>
                    <p>Join as a judge and evaluate innovation</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="section section-bottom-flex">
          <div className="content-wrapper">
            <div className="story-section">
              <div className="card-content">
                <h3 className="story-heading">What's Brewing?</h3>
                <p className="story-paragraph">
                  Hackaccino 4.0 is the annual hackathon organized by the Computer Society of India, Bennett University Chapter. It brings together students, professionals, and enthusiasts to collaborate, innovate, and create solutions to real-world problems. With a focus on fostering creativity and technical skills, Hackaccino 4.0 offers a platform for participants to showcase their talents and network with industry experts.
                </p>
              </div>
            </div>
            <div className="Image-grid">
              <div 
                className={`image-item ${getStackClass(0)}`}
                onClick={() => handleStackClick(0)}
              >
                <img src={require('../assets/Hackaccino1.JPG')} alt="Sponsors" />
              </div>
              <div 
                className={`image-item leading-image ${getStackClass(1)}`}
                onClick={() => handleStackClick(1)}
              >
                <img src={require('../assets/Hackaccino2.JPG')} alt="Community Partner" />
              </div>
              <div 
                className={`image-item ${getStackClass(2)}`}
                onClick={() => handleStackClick(2)}
              >
                <img src={require('../assets/Hackaccino3.JPG')} alt="Judges" />
              </div>
            </div>
          </div>
          <div className="bottom-bar">
            <div className="socials-section">
              <a
                href="https://www.linkedin.com/company/computer-society-of-india-bennett-university-chapter/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#0A66C2"/>
                  <path d="M12.5 13.5H10V22H12.5V13.5ZM11.25 12.25C12.08 12.25 12.75 11.58 12.75 10.75C12.75 9.92 12.08 9.25 11.25 9.25C10.42 9.25 9.75 9.92 9.75 10.75C9.75 11.58 10.42 12.25 11.25 12.25ZM22 17.25C22 15.18 20.32 13.5 18.25 13.5C17.13 13.5 16.19 14.13 15.75 15.03V13.5H13.25V22H15.75V17.5C15.75 16.67 16.42 16 17.25 16C18.08 16 18.75 16.67 18.75 17.5V22H21.25V17.25H22Z" fill="#fff"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hackaccino/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#E1306C"/>
                  <rect x="9" y="9" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="2"/>
                  <circle cx="16" cy="16" r="4" stroke="#fff" strokeWidth="2" fill="none"/>
                  <circle cx="21" cy="11" r="1" fill="#fff"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/csi_bu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#1DA1F2"/>
                  <path d="M24 12.3c-.5.2-1 .4-1.5.5.5-.3.9-.8 1.1-1.3-.5.3-1 .5-1.6.6-.5-.5-1.2-.8-2-.8-1.5 0-2.7 1.2-2.7 2.7 0 .2 0 .4.1.6-2.2-.1-4.1-1.2-5.4-2.8-.2.4-.3.8-.3 1.2 0 .9.5 1.7 1.2 2.2-.4 0-.8-.1-1.1-.3v.1c0 1.3.9 2.3 2.1 2.6-.2.1-.4.1-.7.1-.2 0-.3 0-.5-.1.3 1 1.3 1.7 2.4 1.7-1 .8-2.2 1.3-3.5 1.3-.2 0-.4 0-.6-.1 1.2.8 2.7 1.3 4.2 1.3 5 0 7.7-4.1 7.7-7.7v-.4c.5-.3.9-.8 1.2-1.3z" fill="#fff"/>
                </svg>
              </a>
              <a
                href="https://chat.whatsapp.com/JEeZsXsMtI266hzd96ebjz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="8" fill="#25D366"/>
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" fill="#fff"/>
                </svg>
              </a>
            </div>
            <div className="forms-footer">
              <p>Computer Society of India, Bennett University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsLanding;
