import * as React from "react"
import Newsletter from "./forms/newsletter"
import { StaticImage } from "gatsby-plugin-image"
import SlideFooter from "./silders/silder-footer"

const Footer = () => (
  <footer className="mt-20  "  >
     <section className=" w-10/12 mb-10  pb-5   flex flex-col md:flex-row items-center justify-center gap-x-20 m-auto ">

<p className="text-vert-interra text-lg font-black">
      Avec le soutien de  <br />
</p>
  <SlideFooter />
</section>
    <div className="w-12/12 pt-5 bg-vert-interra ">
    <section className=" w-10/12  pb-5 border-black  flex flex-col gap-x-20 m-auto md:grid grid-cols-3">
    <Newsletter className="" />
    <div className="  flex flex-col gap-2">
    <h3 className=" text-white text-xl font-black ">Interra ASBL </h3>
    <p>Rue des Brasseurs, 8 à 4000 Liège </p>
    <p>Num.Ent. : 0726.976.002</p>
    <p>RPM Liège</p>
    <p> N°Compte : BE65 1030 6350 8796</p>
</div>

      <div className="  flex flex-col space-y-2">
        <h3 className=" text-white text-xl font-black ">Venez nous parler de vos envies
          on s'occupera du reste ! </h3>
        <p>info@interra-asbl.be</p>

        <ul className="flex  space-x-4">
        <li>
          <a href="https://www.facebook.com/InterraCult" rel="noreferrer" target="_blank" >

            <figure className="">
              <StaticImage
                src="../images/facebook-header.png"
                width={30}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Page Facebook d'Interra"
              />      </figure>
          </a>

        </li>
        <li>
          <a href="https://www.instagram.com/_interra/?hl=fr" rel="noreferrer" target="_blank" >

            <figure className="">
              <StaticImage
                src="../images/instagram.png"
                width={30}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Page Instagram d'Interra"
              />      </figure>
          </a>

        </li>
        <li>
          <a href="https://www.linkedin.com/company/interra-culturalbridges/" rel="noreferrer" target="_blank" >

            <figure className="">
              <StaticImage
                src="../images/linkedin.png"
                width={30}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Page LinkedIn   d'Interra"
              />      </figure>
          </a>

        </li></ul>
      </div>
    </section>
   
</div>
    <section className="pt-2 w-12/12  m-auto opacity-90 bg-vert-interra opacity-30 ">
      <ul className="flex flex-col md:flex-row m-auto md:space-x-2 w-10/12 text-center justify-center">
        <li className="text-xs">
          @ Interra - Tous droits réservés -
        </li>
        <li className="text-xs">
          Politique de confidentalités</li>
          <li className="text-xs">
          site réalisé par <a href="https://liono.be/" target="_blank" rel="noopener">Liono</a> </li>
      </ul>
      
    </section>
  </footer>
)


export default Footer
