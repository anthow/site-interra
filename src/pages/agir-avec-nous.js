import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"



const Duopage = ({ data }) => (
        <Layout className="">
                <Seo title="Agir avec nous " />
                <div className="w-12/12">
                        <article className="md:w-8/12   mt-10 flex flex-col space-y-40   m-auto">
                                <h1 className="font-black text-4xl  text-vert-interra  bg-white text-center" id="don"> Agir avec nous </h1>


                                <section className=" bg-vert-interra  flex flex-col md:flex-row  justify-around">

                                        <div id="don" className= "p-10  order-2 md:order-1  flex-grow-0 ">
                                                <h2 className="  mb-10 text-white font-black text-3xl"> {data.datoCmsAgirAvecNou.titreDon} </h2>
                                                <div dangerouslySetInnerHTML={{ __html: data.datoCmsAgirAvecNou.texteDon }} ></div>
                                                <p className="mt-10 text-white font-black">{data.datoCmsAgirAvecNou.numRoDeCompte}</p>
                                        </div>

                                        <GatsbyImage image={data.datoCmsAgirAvecNou.imageDon.gatsbyImageData} alt={data.datoCmsAgirAvecNou.imageDon.alt} className="h-max order-1 md:order-2 justify-self-end  w-full    " />


                                </section>





                                <section className=" bg-orange-interra  flex flex-col md:flex-row  justify-around" id="membre">
                                        <GatsbyImage image={data.datoCmsAgirAvecNou.imageMembre.gatsbyImageData} alt={data.datoCmsAgirAvecNou.imageMembre.alt} className="h-max  justify-self-end  w-full    " />


                                        <div className="p-10 flex-grow-0 ">
                                                <h2 className=" mb-2 mb-10 text-white font-black text-3xl"> {data.datoCmsAgirAvecNou.titreMembre} </h2>
                                                <div dangerouslySetInnerHTML={{ __html: data.datoCmsAgirAvecNou.texteMembre }} ></div>
                                                <p className="mt-10 text-white font-black">{data.datoCmsAgirAvecNou.accrocheMembre}</p>
                                                <Link to="/devenir-membre">

                                                        <button className="mt-10 bg-white text-orange-interra font-black p-2 hover:opacity-90"> Devenir membre </button>
                                                </Link>
                                        </div>



                                </section>




                                <section className=" bg-vert-interra  flex flex-col md:flex-row  justify-around" id="benevole">

                                        <div className="p-10 order-2 md:order-1  flex-grow-0 ">
                                                <h2 className=" mb-2 mb-10 text-white font-black text-3xl"> {data.datoCmsAgirAvecNou.titreBNVole} </h2>
                                                <div dangerouslySetInnerHTML={{ __html: data.datoCmsAgirAvecNou.texteBNVole }} ></div>
                                                <Link to="/devenir-benevole">

                                                        <button className="mt-10 bg-white text-vert-interra font-black p-2 hover:opacity-90"> Devenir bénévole </button>
                                                </Link>
                                        </div>

                                        <GatsbyImage image={data.datoCmsAgirAvecNou.imageBNVole.gatsbyImageData} alt={data.datoCmsAgirAvecNou.imageBNVole.alt} className="h-max order-1 md:order-2 justify-self-end  w-full    " />


                                </section>


                                <section className=" bg-orange-interra  flex flex-col md:flex-row  justify-around" id="talent">
                                        <GatsbyImage image={data.datoCmsAgirAvecNou.imageTalent.gatsbyImageData} alt={data.datoCmsAgirAvecNou.imageTalent.alt} className="h-max  justify-self-end  w-full    " />


                                        <div className="p-10 flex-grow-0 ">
                                                <h2 className=" mb-2 mb-10 text-white font-black text-3xl"> {data.datoCmsAgirAvecNou.titreTalent} </h2>
                                                <div dangerouslySetInnerHTML={{ __html: data.datoCmsAgirAvecNou.texteTalent }} ></div>
                                                <Link to="/devenir-talent-interra">

                                                <button className="mt-10 bg-white text-orange-interra font-black p-2 hover:opacity-90">  Devenir un talent interra </button>
                                                </Link>
                                        </div>



                                </section>

                            



                                <section className=" bg-vert-interra  flex flex-col md:flex-row  justify-around" id="duo">

                                        <div className="p-10 order-2 md:order-1  flex-grow-0 ">
                                                <h2 className=" mb-2 mb-10 text-white font-black text-3xl"> {data.datoCmsAgirAvecNou.titreDuoLangue} </h2>
                                                <div dangerouslySetInnerHTML={{ __html: data.datoCmsAgirAvecNou.texteDuoLangue }} ></div>
                                                <Link to="/former-duo-langue">

                                                <button className="mt-10 bg-white text-vert-interra font-black p-2 hover:opacity-90">     Former un duo-langue  </button>
                                                </Link>
                                        </div>

                                        <GatsbyImage image={data.datoCmsAgirAvecNou.imageDuoLange.gatsbyImageData} alt={data.datoCmsAgirAvecNou.imageDuoLange.alt} className="h-max order-1 md:order-2 justify-self-end  w-full    " />


                                </section>


                              
                        </article>
                </div>
        </Layout>
)



export const query = graphql`
  {
    datoCmsAgirAvecNou {
      accrocheMembre
      imageBNVole {
              alt
        gatsbyImageData
      }
      imageDon {
              alt
        gatsbyImageData
      }
      imageDuoLange {
              alt
        gatsbyImageData
      }
      imageMembre {
              alt
        gatsbyImageData
      }
      imageTalent {
              alt
        gatsbyImageData
      }
      numRoDeCompte
      texteBNVole
      texteDon
      texteDuoLangue
      texteMembre
      texteTalent
      titreBNVole
      titreDon
      titreDuoLangue
      titreMembre
      titreTalent
      seoMetaTags {
        internal {
          content
          contentDigest
          description
          fieldOwners
          ignoreType
          mediaType
          owner
          type
        }
        tags
      }
    }
  }
`


export default Duopage

