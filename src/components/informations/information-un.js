import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"



const Informationun = () => (
  <StaticQuery
  query={graphql`
  {
    allDatoCmsInformation(
    filter: {horsLigneEnLigne: {eq: true}}
    sort: {fields: originalId, order: ASC}
  ) {
    edges {
      node {
        titre
        texteButton
        texte
        urlButton
        image {
          gatsbyImageData
        }
      }
    }
  }
}

`}
    render={data => 

<>
<div className="md:grid grid-cols-3  gap-x-5 ">
{
data.allDatoCmsInformation.edges.map(({ node }) => {
              return (
<article>
          <h3 className="text-lg mb-2 text-orange-interra font-semibold">
            {node.titre}{" "}
          </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: node.texte,
            }}
            className="mb-5"
          ></div>

          <figure className=" mb-10 md:mb-0    ">
            <GatsbyImage
              image={node.image.gatsbyImageData}
              alt={node.image.alt}
              className=""
            />
          </figure>
          <Link to={node.urlButton}>
            <button className=" mt-5 text-white bg-vert-interra font-black  p-1 px-2  rounded hover:bg-white-interra hover:text-vert-interra hover:bg-white border hover:border-vert-interra">
              {" "}
             {node.texteButton}
            </button>
          </Link>
        </article>
                )
            })}

</div>            
</>
        
     }

     
  ></StaticQuery>
)

export default Informationun

