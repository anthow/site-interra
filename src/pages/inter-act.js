import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FormationActive from "../components/interact/formation-active"
//import FormationInactive from "../components/interact/formation-inactive"

const Interactpage = ({ data }) => (
    <Layout className="">
        <Seo title="InterAct" />
        <div className="w-12/12">
            <article className="w-10/12  mt-10   m-auto">
                <h1 className="font-black text-4xl mb-10  text-vert-interra  bg-white text-center"> {data.datoCmsInterAct.titre}</h1>
               
                <div className="mb-20 w-10/12 px-3 m-auto paragraphe" dangerouslySetInnerHTML={{ __html: data.datoCmsInterAct.introduction }}></div>
          <FormationActive/>
         {/*} <FormationInactive />{*/}
       
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

