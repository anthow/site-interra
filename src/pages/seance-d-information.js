import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"


const seanceInformation = ({ data }) => (
    <Layout className="">
        <Seo title="Séance d'information" />
        <div className="w-12/12">
            <article className="w-10/12  mt-10   m-auto">
                <h1 className="font-black text-4xl  text-vert-interra  mb-10 bg-white text-center"> {data.datoCmsSAncesDInformation.titreSAnceDInformation} </h1>
                <div dangerouslySetInnerHTML={{ __html: data.datoCmsSAncesDInformation.texteDInformation }} className="mb-5"></div>
                <div className="flex mt-5 items-baseline space-x-2">
                    <p>Prochaine séance d’information :</p>
                    <div dangerouslySetInnerHTML={{ __html: data.datoCmsSAncesDInformation.dateProchaineSAnceDInformation }} className="mb-5"></div>


                </div>

                <div className="flex mt-5 items-baseline space-x-2">
                    <p>            Infos et inscriptions :
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: data.datoCmsSAncesDInformation.adresseMailSAnceDInformation }} className="mb-5"></div>


                </div>
            </article>
        </div>
    </Layout>
)


export const query = graphql`
  {
    datoCmsSAncesDInformation {
      adresseMailSAnceDInformation
      dateProchaineSAnceDInformation
      lieuxSAnceDInformation
      texteDInformation
      titreSAnceDInformation
    }
  }
`


export default seanceInformation

