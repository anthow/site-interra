import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
                                                

const HistoirePage = ({ data }) => (
    <Layout className="">
          <Seo title="Histoire de" />

        <div className="w-12/12">
            <article className="w-10/12  my-10   m-auto">
              <h1 className="mb-10 text-4xl"> Histoire de...</h1>

        <section className="flex w-full md:grid grid-cols-2 gap-x-10 gap-y-10  flex-wrap ">


            {   
    
    data.allDatoCmsHistoireDe.edges.map(({ node }) => {
return(
    <div className="flex place-content-stretch items-center flex-col">
      <Link to={node.url} > 
<figure className="mb-5">
<GatsbyImage image={node.imageAccueil.gatsbyImageData} alt={node.imageAccueil.alt} className="" />
</figure>
</Link>
<h2 className="text-2xl text-vert-interra">{node.nomDeLaPersonne}</h2>
<h3 className="text-xl text-orange-interra mb-2"> {node.nomDeLActivit}</h3>
<div  dangerouslySetInnerHTML={{ __html: node.textePageDAccueil }} className="text-center"></div>
<Link to={node.url} > 
<p className="mt-2 text-vert-interra"> Lire la suite ... </p>
</Link>
</div>

)
 })}
      
        </section>
                </article>
        </div>
    </Layout>
)

export const query = graphql`
  {
    allDatoCmsHistoireDe {
      edges {
        node {
          imageAccueil {
            gatsbyImageData( height: 600)
            alt
          }
          nomDeLActivit
          nomDeLaPersonne
          textePageDAccueil
          url
          id
        }
      }
    }
  }`

export default HistoirePage

