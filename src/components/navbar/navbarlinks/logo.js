import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsMenu {
          imageLogo {
            gatsbyImageData (width:120)
            alt
          }
          imageWallonie {
            alt
            gatsbyImageData (width:50)
          }
        }
      }
    `}
    render={data => 
        <Link to="/">
    <GatsbyImage image={data.datoCmsMenu.imageLogo.gatsbyImageData} alt={data.datoCmsMenu.alt} className="" />
    </Link>
}
  ></StaticQuery>
)

export default Logo

