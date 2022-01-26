import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"


const FormationPage = ({ data }) => (
    <Layout className="">
        <Seo title="Formation interculturelle" />
        <div className="w-12/12">
            <article className="w-10/12 mt-2  m-auto">
                <h1 className="font-black text-4xl mb-10 md:mb-20 text-vert-interra  text-center"> {data.datoCmsFormationInterculturelle.titre}</h1>
                <section className="md:grid grid-cols-2 mb-10 flex flex-col gap-x-10 gap-y-10 md:gap-y-20">
                    <figure>
                        <GatsbyImage image={data.datoCmsFormationInterculturelle.imageUneOrganiser.gatsbyImageData} alt={data.datoCmsFormationInterculturelle.imageUneOrganiser.alt} className="" />

                    </figure>
                    <div>
                        <h2 className="font-black text-2xl mb-5 text-orange-interra "> {data.datoCmsFormationInterculturelle.titreOrganiser}</h2>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsFormationInterculturelle.texteUnOrganiser }} className="paragraphe"></div>


                    </div>

                    <div>
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsFormationInterculturelle.texteDeuxOrganiser }} className="paragraphe"></div>

                    </div>
                    <figure>
                        <GatsbyImage image={data.datoCmsFormationInterculturelle.imageDeuxOrganiser.gatsbyImageData} alt={data.datoCmsFormationInterculturelle.imageDeuxOrganiser.alt} className="" />

                    </figure>
                </section>
                <div dangerouslySetInnerHTML={{ __html: data.datoCmsFormationInterculturelle.texteTroisOrganiser }} className="paragraphe"></div>

                <section className="flex space-x-5"> <Link to="../contact">
                <button className=" mt-5 text-white font-black  p-1 px-2  bg-vert-interra hover:opacity-80 rounded">
                     Contactez nous </button></Link>
                     <Link to="../devenir-membre">
                <button className=" mt-5 text-white font-black  p-1 px-2  bg-orange-interra hover:opacity-80 rounded"> 
                Je veux soutenir le projet </button></Link>

                </section>

            </article>
        </div>
    </Layout>
)

export const query = graphql`
{
    datoCmsFormationInterculturelle {
      imageDeuxOrganiser {
        gatsbyImageData
      }
      imageUneOrganiser {
        gatsbyImageData
      }
      texteDeuxOrganiser
      texteTroisOrganiser
      texteUnOrganiser
      titre
      titreOrganiser
    }
  }

`



export default FormationPage

