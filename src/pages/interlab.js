import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"


const interlabPage = ({ data }) => (
    <Layout className="">
        <Seo title="Interlab" />
        <div className="w-12/12">
            <article className="w-10/12  mt-10   m-auto">
                <h1 className="font-black text-4xl mb-10 md:mb-20 text-vert-interra  bg-white text-center"> {data.datoCmsIncubateurInclusif.titre}</h1>
                <section className="flex flex-col md:flex-row mb-10 justify-center md:w-9/12 m-auto  gap-x-10 gap-y-10 md:gap-y-20">

                    <figure className="md:w-1/2">
                        <GatsbyImage image={data.datoCmsIncubateurInclusif.image.gatsbyImageData} alt={data.datoCmsIncubateurInclusif.image.alt} className=" " />

                    </figure>
                    <div className="md:w-1/2">
                        <div dangerouslySetInnerHTML={{ __html: data.datoCmsIncubateurInclusif.textePartieUn }} className="paragraphe"></div>
                    </div>

                </section>
                <div dangerouslySetInnerHTML={{ __html: data.datoCmsIncubateurInclusif.textePartieDeux }} className="paragraphe "></div>
                <Link to="/../devenir-membre">
                <button className=" mt-5 text-white font-black  p-1 px-2  bg-orange-interra hover:opacity-80 rounded"> Je veux soutenir le projet </button>
                </Link>
                            </article>
        </div>
    </Layout>
)

export const query = graphql`
{
    datoCmsIncubateurInclusif {
      image {
        gatsbyImageData
        alt
      }
      textePartieDeux
      textePartieUn
      titre
      titreIncubateurInclusif
    }
  }

`



export default interlabPage

