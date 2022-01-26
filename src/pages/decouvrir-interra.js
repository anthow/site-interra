import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import Listprojet from "../components/listprojets"
import Sliderpartenaire from "../components/silders/slider-partenaire"



const DecouvrirPage = ({ data }) => (
    <Layout className="">
        <Seo title="Découvrir Interra" />
        <div className="w-12/12">
            <article className="w-10/12  m-auto">
                <h1 className="font-black text-4xl mt-10 md:mt-0 mb-10 md:mb-20 text-vert-interra  bg-white text-center " id="adn">
                     {data.datoCmsDecouvrirInterra.titreAdn}</h1>
                <section className="md:grid grid-cols-2 md:space-x-10  mb-10">
                    <figure className="row-span-2">
                        <GatsbyImage image={data.datoCmsDecouvrirInterra.imageAdn.gatsbyImageData}
                         alt={data.datoCmsDecouvrirInterra.imageAdn.alt} className=" h-min mb-5 md:mb-0" />

                    </figure>
                    <div>
                        <h2 className="mb-5 text-2xl text-orange-interra">{data.datoCmsDecouvrirInterra.titreQuiSommesNous}</h2>

                            <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.texteQuiSommesNous }} className=""></div>


                        <h2 className="mb-5 text-orange-interra mt-20 text-2xl">{data.datoCmsDecouvrirInterra.deuxConstats}
                        </h2 >
                        <p>
                         
                            <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.texteDeuxConstatsUn }} className=""></div>
                            <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.texteDeuxConstatsDeux }} className="mt-10"></div>


                        </p>
                    </div>
                </section>
                </article>
                <section className="w-12/12  md:w-10/12 bg-orange-interra py-10  m-auto text-white">
                <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.introductionListeConstat }} className="text-center text-xl w-10/12 m-auto"></div>
                <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.listeDeuxConstats }} className="text-xl text-center"></div>

                </section>
                <article className="w-10/12  m-auto">

                <section className=" m-auto md:grid grid-cols-2  flex flex-col gap-x-10 my-10">
                    <div className="flex flex-col space-y-5 md:space-y-10 order-2 md:-order-1 ">
                        <h2 className="text-2xl text-orange-interra  "> {data.datoCmsDecouvrirInterra.titreLien}</h2>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.texteLien }} className=""></div>

                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.listeLien }} className=""></div>


                    </div>

                    <figure className="order-1 md:-order-2 mb-5 md:mb-0">
                    <GatsbyImage image={data.datoCmsDecouvrirInterra.imageLien.gatsbyImageData} alt={data.datoCmsDecouvrirInterra.imageLien.alt} className="h-full mt-10 md:mt-0 " />
                    </figure>
                </section>
                <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.phraseLien }} className="font-black text-xl text-vert-interra m-auto text-center mb-10 md:mb-20" id="missions"></div>

            </article >

            <article className="w-full bg-vert-interra text-white py-5 md:py-20 h-12/12  " >
                <h1 className="font-white text-4xl mb-10 font-black   text-center"> {data.datoCmsDecouvrirInterra.titreNosMissions} </h1>
                <section className="md:grid grid-cols-2 w-10/12  m-auto  gap-x-10 mb-10">
                    <figure className="">
                    <GatsbyImage image={data.datoCmsDecouvrirInterra.imageMission.gatsbyImageData} alt={data.datoCmsDecouvrirInterra.imageMission.alt} className="" />
                    </figure>
                    <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.texteNosMissions }} className=" mt-10 md:mt-0" ></div>


                </section>

            </article>
            <article className="w-10/12  py-5 md:py-20    m-auto " id="valeurs">
                <h1 className="font-black text-4xl mb-10  bg-white text-center text-vert-interra">  {data.datoCmsDecouvrirInterra.titreValeurs} </h1>
                <section className="md:grid grid-cols-2 grid-rows-2 gap-x-10 mb-10">
                    <figure className="row-span-2 mb-10 md:mb-0">
                    <GatsbyImage image={data.datoCmsDecouvrirInterra.imageValeurs.gatsbyImageData} alt={data.datoCmsDecouvrirInterra.imageValeurs.alt} className="h-full" />
                    </figure>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.listeValeurs }} className="p-1  flex flex-col space-y-2  bg-orange-interra text-center font-black text-white place-content-center mb-10"></div>
                    <div className="flex flex-col ">
                        <h2 className="text-2xl text-orange-interra mb-5"> {data.datoCmsDecouvrirInterra.titrePourquoiInterra} </h2>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsDecouvrirInterra.textePourquoiInterra }} className=""></div>
                    </div>
                </section>

            </article>
          

            <article className="w-7/12 py-5 md:py-20 m-auto" id="partenaires">
                <h1 className="font-black text-4xl mb-10 text-vert-interra  bg-white text-center">  {data.datoCmsDecouvrirInterra.titreNosPartenaires} </h1>
                <div>
                <figure className="idden md:block">

                    <Sliderpartenaire />
                    </figure>
                </div>
            </article>
        </div>
    </Layout>
)

export const query = graphql`
  {
    datoCmsDecouvrirInterra {
      deuxConstats
      imageAdn {
        gatsbyImageData
      }
      imageLien {
        gatsbyImageData
      }
      imageMission {
        gatsbyImageData
      }
      imageValeurs {
        gatsbyImageData
      }
      imagesNosPartenaires {
        gatsbyImageData
      }
      deuxConstats
      introductionListeConstat
      listeDeuxConstats
      listeLien
      listeValeurs
      texteDeuxConstatsDeux
      texteDeuxConstatsUn
      texteLien
      texteNosMissions
      textePourquoiInterra
      texteQuiSommesNous
      titreAdn
      titreLien
      titreNosMissions
      titreNosPartenaires
      titreNosProjets
      titrePourquoiInterra
      titreQuiSommesNous
      titreValeurs
      phraseLien
    }
  }
`


export default DecouvrirPage

