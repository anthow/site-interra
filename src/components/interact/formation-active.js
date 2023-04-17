import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const FormationActive = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsAtelier(filter: {inactifActif: {eq: true}}) {
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
  return <>
  
  <section className="flex flex-col md:flex-row gap-5">
  <h2 className="font-black text-3xl mb-10 text-vert-interra"> Nos prochains ateliers</h2>
             <Link to="../inter-act/agenda/">
            <p className=" text-white bg-vert-interra font-black
            p-1 px-2 mb-2 md:mb-0  rounded hover:bg-white-interra text-center hover:text-vert-interra 
            hover:bg-white border hover:border-vert-interra">Agenda</p>
                       </Link></section>

    <div className="flex flex-col md:grid grid-cols-4 mb-20 gap-x-10  gap-y-10 ">


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
                    <GatsbyImage image={node.image.gatsbyImageData} alt={node.image.alt} className="h-full w-full" />
                  </figure>
                  <div class="relative ">
                    <div class=" p-10 py-24">
                      <div
                        class="transition-all transform 
                        translate-y-2 w-12/12 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                        <div class="">
                          <p class="text-lg text-center text-white ">
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
              <h3 className="font-black text-lg text-center p-2 mb-5 text-vert-interra"> {node.nomDeLAtelier}</h3>

            </a>

          </>

          )
        })}


    </div>

  </>
}

export default FormationActive
