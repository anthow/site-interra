import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Listprojet = () => {
  const data = useStaticQuery(graphql`
    {
        datoCmsDuoLangue {
          chapeau
          imageListeProjets {
              alt
            gatsbyImageData
          }
          titre
        }
        datoCmsIncubateurInclusif {
          chapeau
          imageListeProjets {
              alt
            gatsbyImageData
          }
          titre
        }
        datoCmsInterAct {
          chapeau
          imageListe {
              alt
            gatsbyImageData
          }
          titre
        }
        datoCmsFormationInterculturelle {
          chapeau
          imageListeProjets {
              alt
            gatsbyImageData
          }
          titre
        }
      }
    `)
  return (


    <article className="w-10/12 my-10 mt-20   m-auto">
      <section className="flex w-full md:grid grid-cols-2 gap-x-10 gap-y-20  flex-wrap ">

        <div className="flex flex-col">
          <Link to="/inter-act">

            <GatsbyImage image={data.datoCmsInterAct.imageListe.gatsbyImageData} alt={data.datoCmsInterAct.imageListe.alt} className="mb-5" />
            <h2 className=" mb-2 text-orange-interra text-2xl"> {data.datoCmsInterAct.titre} </h2>
            <div dangerouslySetInnerHTML={{ __html: data.datoCmsInterAct.chapeau }}></div>
          </Link>
        </div>


        <div className="flex flex-col">
          <Link to="/duo-langue">
            <GatsbyImage image={data.datoCmsDuoLangue.imageListeProjets.gatsbyImageData} alt={data.datoCmsDuoLangue.imageListeProjets.alt} className="mb-5" />
            <h1 className=" text-orange-interra mb-2 text-2xl"> {data.datoCmsDuoLangue.titre} </h1>
            <div dangerouslySetInnerHTML={{ __html: data.datoCmsDuoLangue.chapeau }}></div>
          </Link>

        </div>

        <div className="flex flex-col">
          <Link to="/incubateur-inclusif">
            <GatsbyImage image={data.datoCmsIncubateurInclusif.imageListeProjets.gatsbyImageData} alt={data.datoCmsIncubateurInclusif.imageListeProjets.alt} className="mb-5" />
            <h1 className=" text-orange-interra mb-2 text-2xl"> {data.datoCmsIncubateurInclusif.titre} </h1>
            <div dangerouslySetInnerHTML={{ __html: data.datoCmsIncubateurInclusif.chapeau }}></div>
          </Link>
        </div>

        <div className="flex flex-col">
        <Link to="/formation-interculturelle">
          <GatsbyImage image={data.datoCmsFormationInterculturelle.imageListeProjets.gatsbyImageData} alt={data.datoCmsFormationInterculturelle.imageListeProjets.alt} className="mb-5" />
          <h1 className=" text-orange-interra mb-2 text-2xl"> {data.datoCmsFormationInterculturelle.titre} </h1>
          <div dangerouslySetInnerHTML={{ __html: data.datoCmsFormationInterculturelle.chapeau }}></div>
</Link>
        </div>

      </section>
    </article>

  )

}


export default Listprojet
