import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"



const Contact = ({ data }) => (
  <Layout className="">
    <Seo title="Contact " />
    <div className="w-12/12">
      <article className=" mt-10 flex flex-col space-y-20   m-auto">
        <h1 className="font-black text-4xl  text-vert-interra  bg-white text-center"> Contact </h1>
        <section className="  md:grid grid-cols-3   gap-x-10 gap-y-20" >



          {

            data.allDatoCmsPersonneContact.edges.map(({ node }) => {
              return (

                <div className="flex flex-col justify-items-center">


                    <GatsbyImage image={node.photo.gatsbyImageData} alt={node.photo.alt} className="m-auto" />

                  <div>
                    <h2 className="font-black text-lg mt-2 text-vert-interra  text-center"> {node.nomPrNom} </h2>
                    <h3 className="font-black text-m  text-orange-interra  text-center"> {node.fonction} </h3>
                    <p className="mt-2 text-center">{node.adresseMail} <br />{node.numRoDeTLPhone}</p>

                  </div>

                </div>
              )
            })}





        </section>
        <h1 className="font-black text-3xl text-center text-orange-interra mb-10 ">Nous contacter </h1>
        <div className="mt-10 sm:mt-0">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form   action="https://formspree.io/f/mnqwavrb"
 method="POST">
              <div className="overflow-hidden ">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Prénom</label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 border focus:ring-vert-500 focus:border-vert-interra block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Nom
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 border focus:ring-vert-interra focus:border-vert-interra block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Adresse mail
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 border focus:ring-vert-interra focus:border-vert-interra block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Numéro de téléphone
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 border focus:ring-vert-interra focus:border-vert-interra block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-4 mt-10">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Message </label>
                    <textarea class="w-full  px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4"></textarea>
                  </div>
                </div>
                <div className="px-4  sm:px-6">
                  <button
                    type="submit"
                    className="bg-vert-interra text-white text-center md:font-black  md:w-auto m-auto  mb-2 md:mb-0 p-2 hover:opacity-70" >
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1264.9645310757742!2d5.5797528516939625!3d50.647008579961884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0fb168a534c71%3A0x92e757af419bc5b!2sInterra!5e0!3m2!1sfr!2sbe!4v1643196795125!5m2!1sfr!2sbe" className="w-12/12" height="600"  allowfullscreen="" loading="lazy"></iframe>

      </article>
      
    </div>

  </Layout>
)


export const query = graphql`
  {
    allDatoCmsPersonneContact(sort: {fields: originalId} filter: {enLigneHorsLigne: {eq: true}})  {
      edges {
        node {
          nomPrNom
          numRoDeTLPhone
          photo {
            gatsbyImageData
            alt
          }
          adresseMail
          fonction
        }
      }
    }
  }
`


export default Contact






