import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./navbarlinks"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"



const Navigation = styled.nav`
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 999;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    height: 15vh;
    padding-bottom:1vh; 
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    margin-top:10vh;
    padding-top:10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 0vh;
    left: ${props => (props.open ? "-100%" : "0")};
    height:100vh;
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
        props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <Navigation classname=" ">

            <figure className="md:hidden">

                <StaticImage
                    src="../../images/interra-logo-300x300.jpeg"
                    width={100}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Logo Interra"
                />      </figure>
                   <figure className="hidden md:block">
                   <Link to="/">

                <StaticImage
                    src="../../images/interra-logo-300x300.jpeg"
                    width={150}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby astronaut"
                />      
                  </Link>
                </figure>
              
            <Toggle
                navbarOpen={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navbarOpen ? (
                <Navbox>

                    <NavbarLinks />
                </Navbox>
            ) : (
                <Navbox open>
                    <NavbarLinks />
                </Navbox>
            )}

        </Navigation>
    )
}

export default Navbar
