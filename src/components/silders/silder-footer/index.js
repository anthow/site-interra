import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



const SlideFooter = () => (
  <StaticQuery
  query={graphql`
  {
  datoCmsFooter {
        soutiens {
          gatsbyImageData (height:70)
          alt
          customData
    }
  }
}
`}
    render={data => 

<>
      
<ul className="flex flex-col flex-wrap md:flex-row md:space-x-10 gap-y-5 md:gap-y-10 items-center">


{data.datoCmsFooter.soutiens.map(node => 
        <li className="self-center">
          <a href={node.customData.url} rel="noreferrer" target="_blank" >

                <figure className="md:w-12/12 w-1/2 m-auto mb-8 md:m-0 self-center ">
                <GatsbyImage image={node.gatsbyImageData} className=" w-max "
                alt={node.alt}
                  />
                </figure>
                </a>
                </li>
            
            )}

  



</ul>
            
</>
        
     }

     
  ></StaticQuery>
)

export default SlideFooter

