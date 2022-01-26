// NavbarLink.js

import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const NavbarLinks = () => {
  return (
    <div className=" w-auto flex flex-col ">
      <nav name="presse" className=" order-2 md:order-1  md:col-span-2 md:items-center md:self-end md:justify-self-end">
        <ul className="md:items-center m-auto  md:flex md:content-start flex-col md:flex-row md:space-x-2">
          <li className=" w-auto text-center mb-2 md:mb-0  hover:text-yellow-500 ">
            <Link to="/presse">
              Presse
            </Link></li>
            <Link to="/agir-avec-nous/#don">
          <li className=" text-white bg-vert-interra font-black
            p-1 px-2  rounded hover:bg-white-interra hover:text-vert-interra 
            hover:bg-white border hover:border-vert-interra">Faire un don</li>
          </Link >
          <Link to="/agir-avec-nous/#membre">
          <li className=" text-white bg-orange-interra font-black  
          p-1 px-2  rounded hover:bg-white-interra hover:text-orange-interra 
          hover:bg-white border hover:border-orange-interra ">Devenir membre</li>
          </Link>
          <li className="w-auto text-center mb-2 md:mb-0  m-auto">
            <a href="https://api.whatsapp.com/send?phone=0032491520520" rel="noreferrer" target="_blank" >
<figure className="">
                <StaticImage
                  src="../../../images/whatsapp.png"
                  width={40}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="bouton whatsapp"
                />      </figure>
            </a>

          </li>

          <li className="w-auto text-center mb-2 md:mb-0 ">
            <a href="https://www.facebook.com/InterraCult" rel="noreferrer" target="_blank" >

              <figure className="">
                <StaticImage
                  src="../../../images/facebook-header.png"
                  width={30}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Page Facebook d'Interra"
                />      </figure>
            </a>
          </li>



        </ul>
      </nav>
      <nav name="menu" className="mt-5 order-1 md:order-2 mb-10 md:mb-0 ">
        <ul className=" text-lg   flex-col md:flex-row md:flex  m-auto md:space-x-10 ">
          <Link to="/">
            <li className="hover:text-yellow-500 text-center mb-2 md:mb-0 ">Accueil</li>
          </Link>
          <li className="text-center mb-2">
            <div class="dropdown inline-block relative">
              <button class="  hover:text-yellow-500 text-center  md:mb-0   rounded inline-flex items-center">
                <Link to="/decouvrir-interra">
                  Découvrir Interra
                </Link>
                <svg class="fill-current h-4 w-4 mr-1" 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
              </button>
              <ul class="dropdown-menu absolute hidden z-50 bg-white  text-gray-700  p-4 pt-3">
                <Link to="/decouvrir-interra/#adn">

                  <li className="hover:text-yellow-500 text-center mb-2 "> Notre ADN</li>
                </Link>
                <Link to="/decouvrir-interra/#missions">
                  <li className="hover:text-yellow-500 text-center mb-2 "> Nos missions </li>
                </Link>
                <Link to="/decouvrir-interra/#valeurs">

                  <li className="hover:text-yellow-500 text-center mb-2"> Nos valeurs</li>
                </Link>
                <Link to="/decouvrir-interra/#partenaires">

                  <li className="hover:text-yellow-500 text-center mb-2"> Nos partenaires</li>
                </Link>

              </ul>
            </div>
          </li>

          <li className="text-center mb-2">
            <div class="dropdown inline-block m-auto relative">
              <button class="  hover:text-yellow-500 text-center    rounded inline-flex items-center">
                <Link to="/projets">Projets </Link>
                <svg class="fill-current h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
              </button>
              <ul class="dropdown-menu absolute hidden z-50 bg-white  text-gray-700  p-4 pt-3">
                <Link to="/inter-act">
                  <li className="hover:text-yellow-500 text-center mb-2 "> Inter-act</li>
                </Link>
                <Link to="/duo2change">
                  <li className="hover:text-yellow-500 text-center mb-2 "> Duo2Change </li>
                </Link>
                <Link to="/interlab">
                  <li className="hover:text-yellow-500 text-center mb-2"> Interlab </li>
                </Link>
                <Link to="/formation-interculturelle">
                  <li className="hover:text-yellow-500 text-center mb-2"> Formation Interculturelle </li>
                </Link>

              </ul>
            </div>
          </li>
          <Link to="/agenda">
          <li className="hover:text-yellow-500 text-center mb-2 md:mb-0 "> Agenda </li>
          </Link>
          <li className="text-center mb-2">
            <div class="dropdown inline-block relative">
              <button class="  hover:text-yellow-500 text-center mb-2 md:mb-0   rounded inline-flex items-center">
                <Link to="/agir-avec-nous">
                  Agir avec nous              </Link>
                <svg class="fill-current h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
              </button>
              <ul class="dropdown-menu absolute hidden z-50 bg-white  text-gray-700  p-4 pt-3">
                <Link to="/agir-avec-nous/#don">

                  <li className="hover:text-yellow-500 text-center mb-2 ">  faire un don </li>
                </Link>
                <Link to="/agir-avec-nous/#membre">
                  <li className="hover:text-yellow-500 text-center mb-2 "> Devenir membre  </li>
                </Link>
                <Link to="/agir-avec-nous/#benevole">
                  <li className="hover:text-yellow-500 text-center mb-2"> Devenir bénévole </li>
                </Link>
                <Link to="/agir-avec-nous/#talent">
                  <li className="hover:text-yellow-500 text-center mb-2"> Devenir talent Interra </li>
                </Link>
                <Link to="/agir-avec-nous/#duo">
                  <li className="hover:text-yellow-500 text-center mb-2"> former un Duo langue </li>
                </Link>


              </ul>
            </div>
          </li>

          <li className="hover:text-yellow-500 text-center mb-2 md:mb-0">                <Link to="/contact">
            Contact </Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default NavbarLinks