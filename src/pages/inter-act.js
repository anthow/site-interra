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
                <h1 className="font-black text-4xl mb-10  text-vert-interra  bg-white text-center"> {data.datoCmsInterAct.titre}</h1>
                <div className="mb-20 w-10/12 px-3 m-auto" dangerouslySetInnerHTML={{ __html: data.datoCmsInterAct.introduction }}></div>

                <div className="flex flex-col md:gap-y-32 gap-y-10 ">


                {

data.allDatoCmsAtelier.edges.map(({ node }) => {
  return (
<section className="md:grid grid-cols-2 gap-x-10 flex flex-col gap-y-5 md:gap-y-0  ">


<figure className="md:justify-self-center">
    <GatsbyImage image={node.image.gatsbyImageData} alt={node.image.alt} className="" />
</figure>
<div>
    <h2 className="font-black text-3xl mb-2 text-vert-interra"> {node.organisateur}</h2>
    <h3 className="font-black text-3xl mb-5 text-orange-interra"> {node.nomDeLAtelier}</h3>
    <div dangerouslySetInnerHTML={{ __html: node.presentationAtelier }}></div>


</div>
</section>

   
  )
})}




                <h2 className="font-black text-3xl mb-2 text-center text-orange-interra"> et encore bien d'autres !</h2>

                </div>
            </article>
        </div>
    </Layout>
)

export const query = graphql`
{
    datoCmsInterAct {
      introduction
      titre
    }
    allDatoCmsAtelier (sort: {fields: id, order: ASC}) {
        edges {
          node {
            image {
              gatsbyImageData
              (aspectRatio: 1.1)
              alt
            }
            nomDeLAtelier
            organisateur
            presentationAtelier
          }
        }
      }
  }
`



export default Interactpage

