import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage} from "gatsby-plugin-image"
import { Link } from "gatsby"
import Slidehome from "../components/silders/slider-home"
import Informationun from "../components/informations/information-un"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Accueil" />
    <section className="  w-10/12 flex flex-col pt-4 md:pt-0 content-center  m-auto md:grid grid-cols-3 gap-x-20 mb-10 ">
      <article className=" order-2 md:order-1 flex flex-col space-y-4 md:space-y-10 self-center    md:mb-0">
        <h1 className=" text-2xl text-vert-interra md:text-5xl  font-black">
          {data.datoCmsAccueil.titreHeader}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: data.datoCmsAccueil.texteHeader }}
        ></div>
      </article>
      <figure className=" order-1 col-span-2 mb-5 md:mb-0 md-order-2 hidden md:block">
        <Slidehome className="hidden md:block" />
      </figure>
      <figure className=" order-1 col-span-2 mb-5 md:mb-0 md-order-2 md:hidden">
        <GatsbyImage
          image={data.datoCmsAccueil.imagesHeader[1].gatsbyImageData}
          alt={data.datoCmsAccueil.imagesHeader[1].alt}
          className=""
        />
      </figure>
    </section>

    <section className="bg-vert-interra ">
      <div className="w-10/12  m-auto py-20 md:grid grid-cols-5  gap-x-20 ">
        <GatsbyImage
          image={data.datoCmsAccueil.imagePartieDeux.gatsbyImageData}
          alt={data.datoCmsAccueil.imagePartieDeux.alt}
          className="w-full col-span-2"
        />

        <article className="col-span-3 md:w-10/12 m-auto">
          <h2 className=" text-2xl md:text-4xl font-black text-white text-center my-5 md:mt-0 mb-5">
            {data.datoCmsAccueil.titrePartieDeux}
            <br />{" "}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsAccueil.textePartieDeux,
            }}
          ></div>

          <Link to="../decouvrir-interra">
            <button
              className=" mt-5 text-orange-interra bg-white font-black  p-1 px-2  
          rounded hover:bg-orange-interra hover:text-white"
            >
              {" "}
              Découvrir Interra{" "}
            </button>
          </Link>
        </article>
      </div>
    </section>

    <section className="md:bg-vert-interra pb-10 md:pb-0 ">
      <div className="w-10/12 md:pb-20 mt-10 md:mt-0  m-auto">
        <h2 className=" text-2xl md:text-4xl font-black text-vert-interra md:text-white   md:mb-10">
          {" "}
          L'histoire de ...
        </h2>
      </div>
    </section>
    <section className=" pb-5 md:pb-0 ">
      <div className="w-10/12  m-auto">
        <div className="md:grid grid-cols-3  gap-x-5 ">
          <figure className=" md:relative  md:bottom-20 ">
            <GatsbyImage
              image={data.datoCmsAccueil.imageHistoireDe.gatsbyImageData}
              alt={data.datoCmsAccueil.imageHistoireDe.alt}
              className=""
            />
          </figure>
          <article className="self-center flex flex-col justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsHistoireDe.textePageDAccueil,
              }}
              className="px-2 my-5 md:my text-center"
            ></div>
            <Link
              to={/histoires/ + data.datoCmsHistoireDe.url}
              className="w-max m-auto"
            >
              <button className=" mt-5 text-white bg-vert-interra font-black  p-1 px-2  rounded hover:bg-white-interra hover:text-vert-interra hover:bg-white border hover:border-vert-interra">
                {" "}
                Découvrir son histoire{" "}
              </button>
            </Link>
            <Link to="/histoires" className="w-max m-auto">
              <button className=" mt-5 mb-10 md:mb-0 text-white bg-orange-interra font-black  p-1 px-2  rounded hover:bg-white-interra hover:text-orange-interra hover:bg-white border hover:border-orange-interra">
                {" "}
                Voir toutes les histoires{" "}
              </button>
            </Link>
          </article>
          <figure className=" md:relative  md:bottom-20 ">
            <GatsbyImage
              image={data.datoCmsHistoireDe.imageAccueil.gatsbyImageData}
              alt={data.datoCmsHistoireDe.imageAccueil.alt}
              className=""
            />
          </figure>
        </div>
      </div>
    </section>
    <section className="w-10/12  m-auto">
      <h2 className=" text-2xl md:text-4xl text-vert-interra font-black mt-10 mb-5  md:my-10">
        Actus / Evenements
      </h2>
      <Informationun />
    </section>
    <section className="w-12/12 md:10/12  m-auto md:grid grid-cols-3 mt-10 md:mt-40 auto-cols-fr content-center">
      <div className="bg-orange-interra flex flex-col md:grid grid-cols-2 col-span-2 py-16">
        <article className="   flex flex-col place-self-center order-2 px-10 md:px-0 py-5 md:pt-0  ">
          <h2 className=" text-2xl md:text-4xl md:pl-20 font-black text-white text-center  mb-5">
            {" "}
            {data.datoCmsAccueil.titreAgirAvecNous}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsAccueil.texteAgirAvecNous,
            }}
            className="text-white md:pl-20"
          ></div>
        </article>
        <article className="place-self-center order-3 pb-5 md:pb-0 ">
          <ul className="flex flex-col gap-2 justify-self-right items-center m-auto content-center self-center   ">
                  <Link to="/agir-avec-nous/talent-interact">
                    <li>
                    <button className="   text-white font-black border p-1 px-2 border-white rounded hover:bg-white hover:text-orange-interra">
                      {data.datoCmsMenu.sousMenuAgirAvecNousDevenirTalent}{" "}
                      </button>
                    </li>
                  </Link>
                  <Link to="/agir-avec-nous/former-duo">
                    <li>
                    <button className="   text-white font-black border p-1 px-2 border-white rounded hover:bg-white hover:text-orange-interra">

                      {data.datoCmsMenu.sousMenuAgirAvecNousFormerUnduo}
</button>
                    </li>
                  </Link>
                  <Link to="/agir-avec-nous/interlab">
                    <li>
                    <button className="   text-white font-black border p-1 px-2 border-white rounded hover:bg-white hover:text-orange-interra">

                      {data.datoCmsMenu.sousMenuAgirAvecNousDevenirCoah}
                      </button>
                    </li>
                  </Link>
                  <Link to="/agir-avec-nous/participer-formation">
                    <li className="">
                    <button className="   text-white font-black border p-1 px-2 border-white rounded hover:bg-white hover:text-orange-interra">
                      {
                        data.datoCmsMenu.sousMenuAgirAvecNousParticiperFormation
                      }</button>
                    </li>
                  </Link>
                  <Link to="/agir-avec-nous/devenir-volontaire">
                    <li>
                    <button className="   text-white font-black border p-1 px-2 border-white rounded hover:bg-white hover:text-orange-interra">
                      {
                        data.datoCmsMenu.sousMenuAgirAvecNousDevenirVolontaire
                      }</button>
                    </li>
                  </Link>
                  <Link to="/agir-avec-nous/#don">
                    <li>
                    <button className="   text-white font-black border p-1 px-2 border-white rounded hover:bg-white hover:text-orange-interra">
                      {data.datoCmsMenu.sousMenuAgirAvecNousFaireDon}{" "}
                      </button>
                    </li>
                  </Link>

</ul>

        </article>
      </div>
      <article>
        <figure className=" md:relative mt-10 md:mt-0  m-auto md:bottom-20 right-20 mb-10 md:mb-0 w-10/12 md:w-12/12    ">
          <GatsbyImage
            image={data.datoCmsAccueil.imageAgirAvecNous.gatsbyImageData}
            alt={data.datoCmsAccueil.imageAgirAvecNous.alt}
            className="order-1"
          />
        </figure>
        <Link to="../agenda" className="hidden">
          <button className=" m-auto text-white text-center font-black bg-vert-interra font-black md:ml-10 p-1 px-2  rounded hover:bg-white-interra hover:text-vert-interra hover:bg-white border hover:border-vert-interra   mb-2 md:mb-0  ">
            Nos prochains événements
          </button>
        </Link>
      </article>
    </section>
  </Layout>
)

export const query = graphql`
  {
    datoCmsHistoireDe {
      textePageDAccueil
      url
      imageAccueil {
        gatsbyImageData
      }
    }
    datoCmsAccueil {
      titreTiquette
      titreSAnceDInformation
      titrePartieDeux
      titreHeader
      titreEntreprise
      titreAiderMigrant
      titreAgir
      texteTiquette
      texteSAnceDInformation
      textePartieDeux
      texteHeader
      texteEntreprise
      texteAiderMigrant
      texteAgir
      imageAgirAvecNous {
        alt
        gatsbyImageData(width: 400)
      }
      texteAgirAvecNous
      titreAgirAvecNous
      imagesHeader {
        alt
        gatsbyImageData
      }
      imageAgir {
        alt
        gatsbyImageData
      }
      imageAiderLesMigrants {
        alt
        gatsbyImageData
      }
      imageEtiquetteUn {
        alt
        gatsbyImageData
      }
      imageHistoireDe {
        alt
        gatsbyImageData
      }
      imagePartieDeux {
        alt
        gatsbyImageData(width: 500)
      }
      imageSAnceDInformation {
        alt
        gatsbyImageData
      }
    }
    datoCmsMenu {
      sousMenuAgirAvecNousDevenirCoah
      sousMenuAgirAvecNousDevenirVolontaire
      sousMenuAgirAvecNousDevenirTalent
      sousMenuAgirAvecNousFaireDon
      sousMenuAgirAvecNousFormerUnduo
      sousMenuAgirAvecNousParticiperFormation
    }
  }
`

export default IndexPage
