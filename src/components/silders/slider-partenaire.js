import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



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

<>
      
      <div className="flex flex-col md:flex-row   md:flex-nowrap   w-12/12  items-center  gap-x-5">


{data.datoCmsDecouvrirInterra.imagesNosPartenaires.map(pic => 

                <figure className="md:w-12/12 w-1/2 m-auto mb-8 md:m-0 self-center ">
                <GatsbyImage image={pic.gatsbyImageData} className="  "  />
                </figure>
            
            )}

  



</div>
            
</>
        
     }

     
  ></StaticQuery>
)

export default Slidepartenaire

