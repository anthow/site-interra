import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

const Interactpage = ({ data }) => (
    <Layout className="">
        <Seo title="Inter-act" />
        <div className="w-12/12">
            <article className="w-10/12  mt-10   m-auto">
                <h1 className="font-black text-4xl mb-10 md:mb-20 text-vert-interra  bg-white text-center"> {data.datoCmsInterAct.titre}</h1>
                <div className="flex flex-col md:gap-y-32 gap-y-10 ">
                <section className="md:grid grid-cols-2   ">
                    <figure className="md:justify-self-center">
                        <GatsbyImage image={data.datoCmsInterAct.imageAtelierDanse.gatsbyImageData} alt={data.datoCmsInterAct.imageAtelierDanse.alt} className=" mb-5 md:mb-0 " />
                    </figure>
                    <div className="">
                        <h2 className="font-black text-3xl mb-2 text-vert-interra"> {data.datoCmsInterAct.personneAtelierDanse}</h2>
                        <h3 className="font-black text-3xl mb-5 text-orange-interra"> {data.datoCmsInterAct.titreAtelierDanse}</h3>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsInterAct.texteAtelierDanse }}></div>


                    </div>
</section>
                    <section className="md:grid grid-cols-2 grid-gap-x-10 flex flex-col gap-y-5 md:gap-y-0  ">


                    <div className="order-2 mb:order-1">
                        <h2 className="font-black text-3xl mb-2 text-vert-interra"> {data.datoCmsInterAct.personneAtelierSport}</h2>
                        <h3 className="font-black text-3xl mb-5 text-orange-interra"> {data.datoCmsInterAct.titreAtelierSport}</h3>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsInterAct.texteAtelierSport }}></div>


                    </div>

                    <figure className="order-1 mb:order-2 md:justify-self-center">
                        <GatsbyImage image={data.datoCmsInterAct.imageAtelierSport.gatsbyImageData} alt={data.datoCmsInterAct.imageAtelierSport.alt} className="" />
                    </figure>
</section>
<section className="md:grid grid-cols-2 gap-x-10 flex flex-col gap-y-5 md:gap-y-0  ">


                    <figure className="md:justify-self-center">
                        <GatsbyImage image={data.datoCmsInterAct.imageAtelierLangue.gatsbyImageData} alt={data.datoCmsInterAct.imageAtelierLangue.alt} className="" />
                    </figure>
                    <div>
                        <h2 className="font-black text-3xl mb-2 text-vert-interra"> {data.datoCmsInterAct.personnesAtelierLangue}</h2>
                        <h3 className="font-black text-3xl mb-5 text-orange-interra"> {data.datoCmsInterAct.titreAtelierLangue}</h3>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsInterAct.texteAtelierLangue }}></div>


                    </div>
                    </section>
                    <section className="md:grid grid-cols-2 grid-gap-x-10 flex flex-col gap-y-5 md:gap-y-0  ">

                    <div className="order-2 mb:order-1">
                        <h2 className="font-black text-3xl mb-2 text-vert-interra"> {data.datoCmsInterAct.personneAtelierPhilo}</h2>
                        <h3 className="font-black text-3xl mb-5 text-orange-interra"> {data.datoCmsInterAct.titreAtelierPhilo}</h3>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsInterAct.texteAtelierPhilo }}></div>


                    </div>

                    <figure className="order-1 mb:order-2 md:justify-self-center">
                        <GatsbyImage image={data.datoCmsInterAct.imageAtelierPhilo.gatsbyImageData} alt={data.datoCmsInterAct.imageAtelierPhilo.alt} className="" />
                    </figure>
</section>
<section className="md:grid grid-cols-2 grid-gap-x-10 flex flex-col gap-y-5 md:gap-y-0  ">

                    <figure className="md:justify-self-center">
                        <GatsbyImage image={data.datoCmsInterAct.imageAtelierPsycho.gatsbyImageData} alt={data.datoCmsInterAct.imageAtelierPsycho.alt} className="" />
                    </figure>
                    <div>
                        <h2 className="font-black text-3xl mb-2 text-vert-interra"> {data.datoCmsInterAct.personneAtelierPsycho}</h2>
                        <h3 className="font-black text-3xl mb-5 text-orange-interra"> {data.datoCmsInterAct.nomAtelierPsycho}</h3>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsInterAct.texteAtelierPsycho }}></div>


                    </div>
                    </section>
                    <section className="md:grid grid-cols-2 grid-gap-x-10 flex flex-col gap-y-5 md:gap-y-0  ">

                    <div className="order-2 mb:order-1">
                        <h2 className="font-black text-3xl mb-2 text-vert-interra"> {data.datoCmsInterAct.personneAtelierCuisine}</h2>
                        <h3 className="font-black text-3xl mb-5 text-orange-interra"> {data.datoCmsInterAct.titreAtelierCuisine}</h3>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsInterAct.texteAtelierCuisine }}></div>


                    </div>

                    <figure className="order-1 mb:order-2 md:justify-self-center">
                        <GatsbyImage image={data.datoCmsInterAct.imageAtelierCuisine.gatsbyImageData} alt={data.datoCmsInterAct.imageAtelierCuisine.alt} className="" />
                    </figure>

                </section>
                </div>
            </article>
        </div>
    </Layout>
)

export const query = graphql`
{
    datoCmsInterAct {
      imageAtelierCuisine {
          alt
        gatsbyImageData
        (aspectRatio: 1.1)

      }
      imageAtelierDanse {
          alt
        gatsbyImageData
        (aspectRatio: 1.1)
      }
      imageAtelierLangue {
          alt
        gatsbyImageData
        (aspectRatio: 1.1)

      }
      imageAtelierPhilo {
          alt
        gatsbyImageData
        (aspectRatio: 1.1)

      }
      imageAtelierPsycho {
          alt
        gatsbyImageData
        (aspectRatio: 1.1)

      }
      imageAtelierSport {
          alt
        gatsbyImageData
        (aspectRatio: 1.1)

      }
      nomAtelierPsycho
      personneAtelierCuisine
      personneAtelierDanse
      personneAtelierPhilo
      personneAtelierPsycho
      personneAtelierSport
      personnesAtelierLangue
      texteAtelierCuisine
      texteAtelierDanse
      texteAtelierPhilo
      texteAtelierLangue
      texteAtelierPsycho
      texteAtelierSport
      titre
      titreAtelierCuisine
      titreAtelierDanse
      titreAtelierLangue
      titreAtelierPhilo
      titreAtelierSport
    }
  }
`



export default Interactpage

