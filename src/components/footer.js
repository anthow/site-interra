import * as React from "react"
import Newsletter from "./forms/newsletter"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <footer className="mt-20  "  >
     <section className=" w-10/12 mb-10  pb-5   flex flex-col md:flex-row items-center justify-center gap-x-20 m-auto ">

<p className="text-vert-interra text-lg font-black">
      Avec le soutien de : <br />
</p>
      <ul className="flex flex-col flex-wrap md:flex-row md:space-x-10 items-center">

        <li className="self-center">
          <a href="https://www.wallonie.be/fr" rel="noreferrer" target="_blank" >

            <figure className="">
              <StaticImage
                src="../images/wallonie_v.png"
                height={70}
                quality={95}
                formats={["auto", "webp", "avif"]}
                objectFit="cover"
                alt="Logo Wallonie"
              />      </figure>
          </a>

        </li>

        <li className="self-center">
          <a href="http://www.federation-wallonie-bruxelles.be" rel="noreferrer" target="_blank" >

            <figure className="">
              <StaticImage
                src="../images/FWB_VERTI_RVB.png"
                height={70}
                quality={95}
                formats={["auto", "webp", "avif"]}
                objectFit="cover"

                alt="Logo Fédération Wallonie/Bruxelles"
              />      </figure>
          </a>

        </li>

        <li className="self-center">
          <a href="https://www.provincedeliege.be" rel="noreferrer" target="_blank" >

            <figure className="">
              <StaticImage
                src="../images/provincedeliege.png"
                height={70}
                quality={95}
                formats={["auto", "webp", "avif"]}
                objectFit="cover"

                alt="Logo Province de Liège"
              />      </figure>
          </a>

        </li>

        <li className="self-center">
          <a href="https://www.liege.be" rel="noreferrer" target="_blank" >

            <figure className="">
              <StaticImage
                src="../images/villedeliege.png"
                height={70}
                quality={95}
                formats={["auto", "webp", "avif"]}
                objectFit="contain"
                alt="Logo ville de Liège"
              />      </figure>
          </a>

        </li>

        <li className="self-center">
          <a href="https://www.crelan.be/fr/particuliers/article/crelan-foundation" rel="noreferrer" target="_blank" >

            <figure className="">
              <StaticImage
                src="../images/crelan_foundation.png"
                height={70}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Logo Crelan Foundation"
              />      </figure>
          </a>

        </li>

        <li className="self-center">
          <a href="https://vivre-ensemble.be/" rel="noreferrer" target="_blank" >

            <figure className="">
              <StaticImage
                src="../images/vivreensemble.png"
                height={70}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Logo Vivre Ensemble"
              />      </figure>
          </a>

        </li>

      </ul>
</section>
    <div className="w-12/12 pt-5 bg-vert-interra ">
    <section className=" w-10/12  pb-5 border-black  flex flex-col gap-x-20 m-auto md:grid grid-cols-4">
    <Newsletter className="" />

      <div className=" col-span-2 flex flex-col space-y-2">
        <h3 className=" text-white text-xl font-black ">Venez-nous parler de vos envies
          on s'occupera du reste ! </h3>
        <p>info@interra-asbl.be</p>

        <ul className="flex flex-col md:flex-row md:space-x-4">
        <li>
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
      </ul>
      
    </section>
  </footer>
)


export default Footer
