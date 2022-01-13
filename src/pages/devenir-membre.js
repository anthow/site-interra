import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"


const devenirMembre = () => (
    <Layout className="">
        <Seo title="Agir avec nous " />
        <div className="w-12/12">
            <article className="w-10/12  mt-10   m-auto">
            <h1 className="font-black text-4xl  text-vert-interra  bg-white text-center"> Devenir membre </h1>

                        
            <iframe width="540" height="2305" 
            src="https://ba8902f1.sibforms.com/serve/MUIEAK4XuVKs65kbXEawmECYBvRXJmLFdkpoI5c3KUJ0pZeit1nVCIWXPwWQPpjavA5F7nWGj1Rj3P7kImA11-xOTgCNb01V_LXnrHXirGmdiSqWFphIPK6zouGQ7w3XRUYqhet0dh0fKm8AdIwknDLtG5YkR0FRnA3LOqvishQRafl8oK19DHYAPuZnyn7F06FBPpGNhLqifDI_" 
            frameborder="0" scrolling="auto" allowfullscreen styles="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>              </article>
        </div>
    </Layout>
)





export default devenirMembre

