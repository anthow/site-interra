import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FormationActive from "../components/interact/formation-active"
import FormationInactive from "../components/interact/formation-inactive"

const Interactpage = ({ data }) => (
    <Layout className="">
        <Seo title="Inter-act" />
        <div className="w-12/12">
            <article className="w-10/12  mt-10   m-auto">
                <h1 className="font-black text-4xl mb-10  text-vert-interra  bg-white text-center"> {data.datoCmsInterAct.titre}</h1>
                <div className="mb-20 w-10/12 px-3 m-auto paragraphe" dangerouslySetInnerHTML={{ __html: data.datoCmsInterAct.introduction }}></div>
          <FormationActive/>
          <FormationInactive />
       
            </article>
            <article className="w-10/12 m-auto" >
            <section className="md:w-2/12">
            <a href="https://www.facebook.com/InterraCult/events/?ref=page_internal" target="_blank" rel="noreferrer" className="w-1/12" >
            <p className=" text-white bg-vert-interra font-black
            p-1 px-2 mb-2 md:mb-0  rounded hover:bg-white-interra text-center hover:text-vert-interra 
            hover:bg-white border hover:border-vert-interra">Agenda</p>
                      </a >
                      </section>
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

