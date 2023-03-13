import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from "gatsby"


const formation = ({ data }) => (
        <Layout className="">
    <Seo title="Participer à une formation " />
    <div className="mt-10 w-12/12">
      <h1 className="font-black text-4xl  text-vert-interra  bg-white text-center">
      {data.datoCmsAgirAvecNou.titreParticiperFormation}
            </h1>

            <article className="  mt-10 border p-5 rounded border-orange-interra  m-auto">
            <form action="https://formspree.io/f/xlevvyob" method="post" className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <label className="text-orange-interra font-bold text-lg">Nom</label>
            <input
              type="text"
              name="nom"
              id="nom"
              className="border bg-gray-200 hover:bg-white focus:outline focus:outline-orange-interra "
            />
          </div>
          <div className="flex flex-col gap-5">
            <label className="text-orange-interra font-bold text-lg">Prénom</label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              className="border bg-gray-200 hover:bg-white focus:outline focus:outline-orange-interra "
            />
          </div>
          <div className="flex flex-col gap-5">
            <label className="text-orange-interra font-bold text-lg">Téléphone</label>
            <input
              type="text"
              name="telephone"
              id="telephone"
              className="border bg-gray-200 hover:bg-white focus:outline focus:outline-orange-interra "
            />
          </div>
          <div className="flex flex-col  gap-5">
            <label className="text-orange-interra font-bold text-lg">Mail</label>
            <input
              type="mail"
              name="mail"
              id="mail"
              className="border bg-gray-200 hover:bg-white focus:outline focus:outline-orange-interra "
            />
          </div>
          <input type="submit" value="Envoyer" className=" text-white bg-vert-interra font-black
            p-1 px-2 mb-2 md:mb-0  rounded hover:bg-white-interra text-center hover:text-vert-interra 
            hover:bg-white border hover:border-vert-interra w-min" >
              
            </input>
        </form>
      </article>
    </div>    </Layout>
)

export const query = graphql`
  query {
    datoCmsAgirAvecNou {
      titreBNVole
      titreDon
      titreDuoLangue
      titreMembre
      titreTalent
      titreParticiperFormation
    }
  }
`



export default formation

