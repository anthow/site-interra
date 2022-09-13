import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const FormationInactive = () => {
    const data = useStaticQuery(graphql`
    query {
      allDatoCmsAtelier(filter: {inactifActif: {eq: false}}) {
        edges {
          node {
            inactifActif
            image {
              gatsbyImageData(aspectRatio: 1.1)
              alt
            }
            nomDeLAtelier
            organisateur
            presentationAtelier
            urlAtelier
          }
        }
      }
    }
  `)
    return <><h2 className="font-black text-3xl mb-10 text-vert-interra"> Nos ateliers passés</h2>

        <div className="flex flex-col md:grid grid-cols-4 mb-10 gap-x-10 md:gap-y-32 gap-y-10 ">


            {

                data.allDatoCmsAtelier.edges.map(({ node }) => {
                    return (<>
                        <a href={node.urlAtelier} target="blank" 
                        rel="noreferrer"
                        className="">
                            <section className="  gap-x-10 flex flex-col gap-y-5 md:gap-y-0  ">

                            <div className="relative block  bg-vert-interra group">

                                <figure className="md:justify-self-center absolute
                                 inset-0 object-cover w-full h-full group-hover:opacity-50">
                                    <GatsbyImage image={node.image.gatsbyImageData} alt={node.image.alt} className="h-full" />
                                </figure>
                                <div class="relative ">
          <div class=" p-20">
            <div
              class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <div class="">
                <p class="text-lg text-center text-white">
                  par {node.organisateur}
                </p>
              </div>
            </div>
          </div>
        </div>
                                </div>
                                <div>
                                    {/*}<h2 className="font-black text-3xl mb-2 text-vert-interra"> {node.organisateur}</h2>{*/}
                                    {/*}<div dangerouslySetInnerHTML={{ __html: node.presentationAtelier }}></div>{*/}


                                </div>
                            </section>
                 <h3 className="font-black text-lg text-center p-2 mb-5 text-orange-interra"> {node.nomDeLAtelier}</h3>

                        </a>
                        
                    </>

                    )
                })}


        </div>

    </>
}

export default FormationInactive
