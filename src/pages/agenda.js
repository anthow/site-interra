import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import moment from "moment"

const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
const now = moment().format('D MMM YYYY, k:mm'); // January 26th 2022, 11:59:34 am
const agenda = ({ data }) => (
  <Layout className="">
    <Seo title="Agenda" />
    <div className="w-12/12">
      <h1 className="font-black text-4xl  text-vert-interra mb-10  bg-white text-center">Agenda </h1>
      <h1 className="font-black text-3xl text-center text-orange-interra mb-20 ">Nos événements réguliers </h1>

      <article className="w-10/12  mt-10   m-auto">

        <div className="flex flex-col md:grid grid-cols-3 gap-x-20">

        {

data.allDatoCmsAgendaRegule.edges.map(({ node }) => {
    return (

      <div className="border-2 pb-4 border-vert-interra mb-10 md:mb-0">


        <GatsbyImage image={node.imageEvenement.gatsbyImageData} alt={node.imageEvenement.alt} className="m-auto" />

        <div>
          <h2 className="font-black text-lg mt-2  text-vert-interra px-2 "> {node.nomDeLVNement} </h2>
          <h3 className="font-black text-s  text-orange-interra px-2 "> {node.dateEvenement} </h3>
          <p className="mt-4 p-2 text-sm">{node.texteEvenement} </p>
          <div className="flex  gap-x-2 px-2 mt-5 items-center">
            <p className="text-sm">inscription:</p>
            <a href="https://api.whatsapp.com/send?phone=0032491520520" rel="noreferrer" target="_blank" >
              <figure className="">
                <StaticImage
                  src="../../../images/whatsapp.png"
                  width={40}
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="bouton whatsapp"
                />      </figure>
            </a>
          </div>
        </div>

      </div>
    )
  
})}





        </div>
      </article>


      <h1 className="font-black text-3xl text-center text-orange-interra my-20 ">Nos événements réguliers </h1>
      <article className="w-10/12  mt-10   m-auto">

        <div className="flex flex-col md:grid grid-cols-3 gap-x-20">

          {

            data.allDatoCmsAgenda.edges.map(({ node }) => {
              if (node.dateDeLVNement <= now) {
                return (

                  <div className="border-2 pb-4 border-vert-interra mb-10 md:mb-0">


                    <GatsbyImage image={node.imageEvenement.gatsbyImageData} alt={node.imageEvenement.alt} className="m-auto" />

                    <div>
                      <h2 className="font-black text-lg mt-2  text-vert-interra px-2 "> {node.nomDeLVNement} </h2>
                      <h3 className="font-black text-s  text-orange-interra px-2 "> {node.dateDeLVNement} </h3>
                      <p className="mt-4 p-2 text-sm">{node.texteEvenement} </p>
                      <div className="flex  gap-x-2 px-2 mt-5 items-center">
                        <p className="text-sm">inscription:</p>
                        <a href="https://api.whatsapp.com/send?phone=0032491520520" rel="noreferrer" target="_blank" >
                          <figure className="">
                            <StaticImage
                              src="../../../images/whatsapp.png"
                              width={40}
                              quality={95}
                              formats={["auto", "webp", "avif"]}
                              alt="bouton whatsapp"
                            />      </figure>
                        </a>
                      </div>
                    </div>

                  </div>
                )
              }
            })}
        </div>





      </article>
    </div>
  </Layout>
)
export const query = graphql`
  {
    allDatoCmsAgenda {
      edges {
        node {
          dateDeLVNement(formatString: "D MMM YYYY, k:mm")
          imageEvenement {
              alt
            gatsbyImageData(
                width:400
                height:400
            )
          }
          nomDeLVNement
          texteEvenement
        }
      }
    }
  
  allDatoCmsAgendaRegule {
    edges {
      node {
        dateEvenement
        imageEvenement {
          gatsbyImageData(
            width:400
            height:400
        )
        }
        nomDeLVNement
        texteEvenement
      }
    }
  }
}

`



export default agenda

