/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => {

  return (
    <>
    <div className=" min-h-screen flex flex-col h-screen">
    <section className=" fullheader w-12/12 m-auto fixed bg-white z-50 font-sans">
      <Header/>
      </section>
      <section className="w-12/12 mt-24 md:mt-0  m-auto font-sans">
        <main className="flex-1 md:mt-52">{children}</main>
       </section>
       <Footer className="w-12/12 m-auto font-sans" />
       </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
