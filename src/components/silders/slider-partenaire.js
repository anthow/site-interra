import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const Slidepartenaire = () => (
  <StaticQuery
  query={graphql`
  {
    datoCmsDecouvrirInterra {
          imagesNosPartenaires {
            alt
            gatsbyImageData (width:150)
      }
    }
  }
`}
    render={data => 
      <ul className="flex flex-col flex-wrap md:flex-row md:space-x-10 items-center">

{data.datoCmsDecouvrirInterra.imagesNosPartenaires.map(pic => 
  <li className="self-center">

<figure className="">
                
                <GatsbyImage image={pic.gatsbyImageData} className={pic.alt} />
                </figure>
                </li>
            
            )}

  



</ul>
        
                
  
        
     }
  ></StaticQuery>
)

export default Slidepartenaire

