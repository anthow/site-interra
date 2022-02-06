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
            gatsbyImageData (width:250)
      }
    }
  }
`}
    render={data => 


      
      <div className="flex overflow-x-auto   space-x-5">


{data.datoCmsDecouvrirInterra.imagesNosPartenaires.map(pic => 

                
                <GatsbyImage image={pic.gatsbyImageData} className="self-center"  />
            
            )}

  



</div>
        
                
  
        
     }

     
  ></StaticQuery>
)

export default Slidepartenaire

