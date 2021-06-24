import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export default function SnapBar ()  {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 700px)");
      mediaQuery.addListener(handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);

      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
      if (mediaQuery.matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    const toggleNav = () => {
      setNavVisibility(!isNavVisible);
    };

  return (
    <>
      <header className="Header">
        <h1 className="name">GTD</h1>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">
            <a href="/">Inicio</a>
            <a href="/">Calendario</a>
            <a href="/">Acerca de</a>
            <button>Logout</button>
          </nav>
        </CSSTransition>
        <button onClick={toggleNav} className="Burger">
            🗈
        </button>
      </header>

    <style jsx >{`
        .Header {
          position: fixed;
          top: 0; /* Stick it to the top */
          max-height: 70px;
          width: 100vw;
        
          display: grid;
          grid-template-areas: "logo nav";
        
          /* Cosmetics */
          background-color: #0000;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0);
        }
        .name{
          margin-left : 50px;
        }
        .Logo {
          grid-area: logo;
          height: 70px;
        }
        
        .Nav {
          display: grid;
          grid-area: nav;
          grid-template-columns: repeat(4, auto);
          align-items: center;
          justify-items: center;
        }
        .Nav a {
          color: #fff;
          font-size: 20px;
          font-weight: 400;
          transition: 0.5s;
          text-decoration: none;
          font-family: 'Roboto', 'Sans serif';
        }
        .Nav a:hover {
          transform: scale(1.1);
        }
        .Nav button {
          padding: 10px;
          outline: none;
          border: none;
          font-size: 20px;
          color: #fff;
          font-weight: 600;
          background-color: rgba(255, 0, 0, 0.5);
          box-shadow: 0px 5px 0px 0px rgba(255, 0, 0, 0.25);
          border-radius: 10px;
          cursor: pointer;
          transition: 70ms;
        }
        
        .Nav button:active {
          transform: translateY(3px);
          box-shadow: 0px 2px 0px 0px rgba(255, 0, 0, 0.25);
        }
        
        .Burger {
          display: none;
          grid-area: burger;
          margin: 0 20px 0 0;
          padding: 0;
          justify-self: end;
          font-size: 40px;
          border: none;
          background: none;
          outline: none;
          transition: 0.1s;
        }
        .Burger:active {
          transform: scale(1.2);
        }
        
        @media (max-width: 700px) {
          .Header {
            grid-template-areas: "logo burger" "nav nav";
          }
          .Nav {
            grid-template-rows: repeat(4, auto);
            grid-template-columns: none;
            grid-row-gap: 20px;
            padding: 30px 0 30px;
            background: rgba(255, 255, 255, 0.75);
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }
          .Burger {
            display: inline;
            color: white;
          }
          .Nav a {
            color: black;
            font-size: 25px;
            font-weight: 400;
            transition: 0.5s;
            text-decoration: none;
            font-family: 'Roboto', 'Sans serif';
          }
        }
        
        .NavAnimation-enter {
          opacity: 0;
          transform: scale(0.5);
        }
        .NavAnimation-enter-active {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 350ms, transform 350ms;
        }
        .NavAnimation-exit {
          opacity: 1;
        }
        .NavAnimation-exit-active {
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 350ms, transform 350ms;
        }
      `}
    </style>
    </>
  );
}