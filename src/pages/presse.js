import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"



const Presse = ({ data }) => (
    <Layout>

<Seo title="Presse" />
<div className="w-12/12" >
<h1 className="font-black text-4xl  text-vert-interra mt-2  bg-white text-center mb-20"> Presse </h1>
<section className=" w-10/12 md:w-7/12 flex flex-col mb-20  md:space-x-10 m-auto space-y-40 content-start ">

{

data.allDatoCmsPresse.edges.map(({ node }) => {
  return (

    <div className="flex flex-col md:grid  grid-cols-2 space-x-10   w-12/12 ">

<figure className="m-auto  ">
        <GatsbyImage image={node.logoMedia.gatsbyImageData} alt={node.logoMedia.alt} className=" mb-10  m-auto md:justify-self-center   " />
        </figure>

      <div className=" ">
      <h3 className="font-black text-m  text-orange-interra "> {node.nomDuMDia} </h3>
        <h2 className="font-black text-lg mt-4 text-vert-interra italic mb-2 "> {node.nomDeLArticle} </h2>
        <div dangerouslySetInnerHTML={{ __html: node.extrait }} className=" italic mb-10"></div>
        <a href={node.urlArticle} rel="noreferrer" target="_blank" className="mt-10 text-center"> 
        <button className=" md:mb-0 text-white bg-orange-interra font-black  p-1 px-2  rounded hover:bg-white-interra hover:text-orange-interra hover:bg-white border hover:border-orange-interra"> lire l'article </button>

         </a>

      </div>

    </div>
  )
})}

</section>
</div>
 
  </Layout>
)


export const query = graphql`
  {
    allDatoCmsPresse   {
      edges {
        node {
          extrait
          logoMedia {
            alt
            gatsbyImageData(width:300)
            
        }
          nomDeLArticle
          nomDuMDia
          urlArticle
        }
      }
    }
  }
`


export default Presse






