import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const etiquette = ({data}) => (
    <Layout className="">
        <Seo title="Agir avec nous " />
        <div className="w-12/12">
            <article className="w-10/12  mt-10   m-auto">
            <h1 className="font-black text-4xl mb-10  text-vert-interra  bg-white text-center"> {data.datoCmsAccueil.titreTiquette} </h1>
            <div className="flex flex-x-2 mb-20 w-12/12 justify-center m-auto">
                 
            <figure className=" ">
              <GatsbyImage image={data.datoCmsAccueil.imageEtiquetteUn.gatsbyImageData} alt={data.datoCmsAccueil.imageEtiquetteUn.alt} className="" />

            </figure>
            <figure className=" ">
              <GatsbyImage image={data.datoCmsAccueil.imageEtiquetteDeux.gatsbyImageData} alt={data.datoCmsAccueil.imageEtiquetteDeux.alt} className="" />

            </figure>
            </div>

            <div dangerouslySetInnerHTML={{ __html: data.datoCmsAccueil.texteTiquette }} className="mb-5"></div>
            <div dangerouslySetInnerHTML={{ __html: data.datoCmsAccueil.textEtiquetteDeux }} className="mb-5"></div>



                   </article>
        </div>
    </Layout>
)


export const query = graphql`
  {
    datoCmsAccueil {
      textEtiquetteDeux
      imageEtiquetteUn {
          alt
        gatsbyImageData
      }
      imageEtiquetteDeux {
          alt
        gatsbyImageData
      }
      texteTiquette
      titreTiquette
    }
  }
`


export default etiquette

