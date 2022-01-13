
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
}


const Sliderhome = () => (
  <StaticQuery
    query={graphql`
    {
        datoCmsAccueil {
          imagesHeader {

            gatsbyImageData
            (
width:800
              height: 600 
              )
          }
        }
      }
    `}
    render={data => 
      <Slider {...settings} className="overflow-hidden">
        
                
        {data.datoCmsAccueil.imagesHeader.map(pic => 
                
                <GatsbyImage image={pic.gatsbyImageData} className="" />
            
            )}
        
    </Slider>    }
  ></StaticQuery>
)

export default Sliderhome
