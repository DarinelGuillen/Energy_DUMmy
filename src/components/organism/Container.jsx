import React, { useEffect, navigate } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimelineMax, Power2, Power4 } from 'gsap';

function Container() {
  const navigate = useNavigate();

  const handleLogin = () => {
     
    navigate('/Devices');
  };
  useEffect(() => {
    // OPEN TRIGGER
    const openTrigger = document.querySelector('.menu-trigger');
    const openTriggerTop = openTrigger.querySelector('.menu-trigger-bar.top');
    const openTriggerMiddle = openTrigger.querySelector('.menu-trigger-bar.middle');
    const openTriggerBottom = openTrigger.querySelector('.menu-trigger-bar.bottom');

    // CLOSE TRIGGER
    const closeTrigger = document.querySelector('.close-trigger');
    const closeTriggerLeft = closeTrigger.querySelector('.close-trigger-bar.left');
    const closeTriggerRight = closeTrigger.querySelector('.close-trigger-bar.right');

    // LOGO
    const logo = document.querySelector('.logo');

    // MENU
    const menuContainer = document.querySelector('.menu-container');
    const menu = document.querySelector('.menu');
    const menuTop = document.querySelector('.menu-bg.top');
    const menuMiddle = document.querySelector('.menu-bg.middle');
    const menuBottom = document.querySelector('.menu-bg.bottom');

    // TL
    const tlOpen = new TimelineMax({ paused: true });
    const tlClose = new TimelineMax({ paused: true });

    // OPEN TIMELINE
    tlOpen.add("preOpen")
      .to(logo, 0.4, {
        scale: 0.8,
        opacity: 0,
        ease: Power2.easeOut
      }, "preOpen")
      .to(openTriggerTop, 0.4, {
        x: "+80px", y: "-80px", delay: 0.1, ease: Power4.easeIn, onComplete: function () {
          closeTrigger.style.zIndex = '25';
        }
      }, "preOpen")
      .to(openTriggerMiddle, 0.4, {
        x: "+=80px", y: "-=80px", ease: Power4.easeIn,
        onComplete: function () {
          openTrigger.style.visibility = 'hidden';
        }
      }, "preOpen")
      .to(openTriggerBottom, 0.4, {
        x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn
      }, "preOpen")
      .add("open", "-=0.4")
      .to(menuTop, 0.8, {
        y: "13%",
        ease: Power4.easeInOut
      }, "open")
      .to(menuMiddle, 0.8, {
        scaleY: 1,
        ease: Power4.easeInOut
      }, "open")
      .to(menuBottom, 0.8, {
        y: "-114%",
        ease: Power4.easeInOut
      }, "open")
      .fromTo(menu, 0.6, {
        y: 30, opacity: 0, visibility: 'hidden'
      }, {
        y: 0, opacity: 1, visibility: 'visible', ease: Power4.easeOut
      }, "-=0.2")
      .add("preClose", "-=0.8")
      .to(closeTriggerLeft, 0.8, {
        x: "-=100px", y: "+=100px", ease: Power4.easeOut
      }, "preClose")
      .to(closeTriggerRight, 0.8, {
        x: "+=100px", y: "+=100px", delay: 0.2, ease: Power4.easeOut
      }, "preClose");

    // CLOSE TIMELINE
    tlClose.add("close")
      .to(menuTop, 0.2, {
        backgroundColor: "#6295ca", ease: Power4.easeInOut, onComplete: function () {
          logo.style.zIndex = '26';
          closeTrigger.style.zIndex = '5';
          openTrigger.style.visibility = 'visible';
        }
      }, "close")
      .to(menuMiddle, 0.2, {
        backgroundColor: "#6295ca", ease: Power4.easeInOut
      }, "close")
      .to(menuBottom, 0.2, {
        backgroundColor: "#6295ca", ease: Power4.easeInOut
      }, "close")
      .to(menu, 0.6, {
        y: 20, opacity: 0, ease: Power4.easeOut, onComplete: function () {
          menu.style.visibility = 'hidden';
        }
      }, "close")
      .to(logo, 0.8, {
        scale: 1, opacity: 1, ease: Power4.easeInOut
      }, "close", "+=0.2")
      .to(menuTop, 0.8, {
        y: "-113%",
        ease: Power4.easeInOut
      }, "close", "+=0.2")
      .to(menuMiddle, 0.8, {
        scaleY: 0,
        ease: Power4.easeInOut
      }, "close", "+=0.2")
      .to(menuBottom, 0.8, {
        y: "23%",
        ease: Power4.easeInOut,
        onComplete: function () {
          menuTop.style.backgroundColor = '#ffffff';
          menuMiddle.style.backgroundColor = '#ffffff';
          menuBottom.style.backgroundColor = '#ffffff';
        }
      }, "close", "+=0.2")
      .to(closeTriggerLeft, 0.2, {
        x: "+=100px", y: "-=100px", ease: Power4.easeIn
      }, "close")
      .to(closeTriggerRight, 0.2, {
        x: "-=100px", y: "-=100px", delay: 0.1, ease: Power4.easeIn
      }, "close")
      .to(openTriggerTop, 1, {
        x: "-=80px", y: "+=80px", delay: 0.2, ease: Power4.easeOut
      }, "close")
      .to(openTriggerMiddle, 1, {
        x: "-=80px", y: "+=80px", ease: Power4.easeOut
      }, "close")
      .to(openTriggerBottom, 1, {
        x: "-=80px", y: "+=80px", delay: 0.1, ease: Power4.easeOut
      }, "close");

    // EVENTS
    openTrigger.addEventListener('click', function () {
      if (tlOpen.progress() < 1) {
        tlOpen.play();
      } else {
        tlOpen.restart();
      }
    });

    closeTrigger.addEventListener('click', function () {
      if (tlClose.progress() < 1) {
        tlClose.play();
      } else {
        tlClose.restart();
      }
    });
  }, []);

  return (
    <>
    <div className='Main-Body-Container'>

      <div className="container">
        <span className="menu-trigger">
          <i className="menu-trigger-bar top"></i>
          <i className="menu-trigger-bar middle"></i>
          <i className="menu-trigger-bar bottom"></i>
        </span>
        <span className="close-trigger">
          <i className="close-trigger-bar left"></i>
          <i className="close-trigger-bar right"></i>
          
        </span>
        <span className="logo">
          <span>
          ⯃	
            <i className="logo-title">WE</i>
            <i className="logo-badge">DUM</i>
          </span>
        </span>
        <div className="inner-container">
          <i className="menu-bg top"></i>
          <i className="menu-bg middle"></i>
          <i className="menu-bg bottom"></i>
          <div className="menu-container">
            <ul className="menu">
              <li>
                <h1 className="custom-animation">Log In</h1>
              </li>
              
              <li>
                <a >
                  <input type="text" className="custom-animation" placeholder='Email' />
                </a>
              </li>
              <li>
                <a >
                  <input type="text" name="" id="" className="custom-animation" placeholder='Password'/>
                </a>
              </li>
              <li>
                <a >
                  <button className="custom-animation" onClick={handleLogin} >Log in</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Container;
