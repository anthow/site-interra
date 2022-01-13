import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const HistoirePage = ({ data }) => (
  <Layout className="">
    <Seo title={"Histoire de " + data.datoCmsHistoireDe.nomDeLaPersonne} />

    <article className="w-10/12  my-20 md:grid grid-cols-2  gap-x-10  m-auto">
      <figure className="mb-5">
        <GatsbyImage image={data.datoCmsHistoireDe.imagePrSentation.gatsbyImageData} alt={data.datoCmsHistoireDe.imagePrSentation.alt} className="" />
      </figure>
      <section className="flex flex-col">
        <h1 className="text-4xl text-vert-interra"> {data.datoCmsHistoireDe.nomDeLaPersonne} </h1>
        <h2 className="text-3xl text-orange-interra mb-10" > {data.datoCmsHistoireDe.nomDeLActivit} </h2>
        <div dangerouslySetInnerHTML={{ __html: data.datoCmsHistoireDe.texteActivit }} className=" "></div>
      </section>
    </article>
    <article className="w-10/12  my-10 md:grid grid-cols-2 gap-x-10 gap-y-5  m-auto">
      <section>
        <h2 className=" text-3xl text-orange-interra mb-10">{data.datoCmsHistoireDe.nomDeLaPersonne} parle nous de ton parcours</h2>
        <div dangerouslySetInnerHTML={{ __html: data.datoCmsHistoireDe.texteParcours }} className=" "></div>
      </section>
      <figure className="mb-5">
        <GatsbyImage image={data.datoCmsHistoireDe.imageParcours.gatsbyImageData} alt={data.datoCmsHistoireDe.imageParcours.alt} className="w-full" />
      </figure>
    </article>
    <article className="w-10/12  mb-20  m-auto">
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsHistoireDe.texteParcoursDeux }} className=""></div>
    </article>
    <article className="w-10/12 my-10 md:grid grid-cols-2 gap-x-10 gap-y-5  m-auto">
      <figure className="mb-5">
        <GatsbyImage image={data.datoCmsHistoireDe.passions.gatsbyImageData} alt={data.datoCmsHistoireDe.passions.alt} className="w-full" />
      </figure>
      <section>
        <h2 className=" text-3xl text-orange-interra mb-10"> Tes plus grandes passions
        </h2>
        <div dangerouslySetInnerHTML={{ __html: data.datoCmsHistoireDe.textesPassions }} className=" "></div>
      </section>
    </article>
    <article className="w-10/12 mmb-20  m-auto">
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsHistoireDe.textPassionsDeux }} className=""></div>
    </article>
    <article className="w-12/12 bg-vert-interra">
      <section className=" w-10/12 py-10  m-auto text-white">
        <h2 className=" text-3xl  mb-10">
          Qu'est-ce-que tu aimes le plus à Liège ?</h2>
        <div dangerouslySetInnerHTML={{ __html: data.datoCmsHistoireDe.texteLiGe }} className=""></div>

      </section>

    </article>
    <article className="w-10/12  mt-20 mb-10 md:grid grid-cols-3 gap-x-10 gap-y-5  m-auto">
      <section className="col-span-2">
    <h2 className=" text-3xl text-orange-interra mb-10">
        Quel est ton plus grand souhait ?
      </h2>
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsHistoireDe.texteLiGe }} className=""></div>
      </section>
      <figure className="mb-5 place-self-end">
        <GatsbyImage image={data.datoCmsHistoireDe.imageSouhait.gatsbyImageData} alt={data.datoCmsHistoireDe.imageSouhait.alt} className="" />
      </figure>
    </article>
  </Layout>
)

export const query = graphql`
query histoirePageQuery($url: String){
    datoCmsHistoireDe (url: {eq: $url}) {
          imageAccueil {
            gatsbyImageData( height: 600)
            alt
          }
          passions {
            gatsbyImageData
          }
          texteParcoursDeux
          nomDeLActivit
          nomDeLaPersonne
          textePageDAccueil
          url
          id
          nomDeLActivit
          nomDeLaPersonne
          textePageDAccueil
          imageActivit {
              alt
            gatsbyImageData
          }
          imageParcours {
              alt
            gatsbyImageData
          }
          imagePrSentation {
              alt
            gatsbyImageData
          }
          imageSouhait {
              alt
            gatsbyImageData(
              height: 600)
            
          }
          phraseDeFin
          texteActivit
          texteLiGe
          texteParcours
          texteParcoursDeux
          texteSouhait
          textesPassions
          textPassionsDeux
      }
  }`

export default HistoirePage




