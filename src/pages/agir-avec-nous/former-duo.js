import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from "gatsby"


const devenirBenevole = ({ data }) => (
    <Layout className="">
        <Seo title="former un duo2change" />
        <div className="mt-10 w-12/12">
            <h1 className="font-black text-4xl  text-vert-interra  bg-white text-center">         {data.datoCmsAgirAvecNou.titreDuoLangue}
 </h1>

            <article className=" w-10/12 md:w-1/2  mt-10 border p-5 rounded border-orange-interra  m-auto">

            <form name="inscription duo"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"  className="flex flex-col gap-5">
                          <input type="hidden" name="form-name" value="inscription duo" />{" "}

    <div className="flex flex-col gap-2">
      <label name="Nom" htmlFor="Nom" className="text-orange-interra font-bold text-lg">Nom</label>
      <input type="text" name="nom" id="nom" className="border bg-gray-200 hover:bg-white focus:outline focus:outline-orange-interra " />  
    </div>
    <div className="flex flex-col gap-2">
      <label name="prénom" htmlFor="prénom" className="text-orange-interra font-bold text-lg">Prénom</label>
      <input type="text"  name="prenom" id="prenom" className="border bg-gray-200 hover:bg-white focus:outline focus:outline-orange-interra " />  
    </div>
    <div className="flex flex-col gap-2">
      <label name="téléphone" htmlFor="téléphone" className="text-orange-interra font-bold text-lg">Téléphone</label>
      <input type="text"  name="telephone" id="telephone" className="border bg-gray-200 hover:bg-white focus:outline focus:outline-orange-interra " />  
    </div>
    <div className="flex flex-col  gap-2">
      <label name="mail" htmlFor="mail" className="text-orange-interra font-bold text-lg">Mail</label>
      <input type="mail"  name="mail" id="mail"  className="border bg-gray-200 hover:bg-white focus:outline focus:outline-orange-interra "/>  
    </div>
  
<fieldset className="flex flex-col  gap-2">
    <legend name="je suis" htmlFor="je suis " className=" mb-2 text-lg">Je suis:</legend>

    <div>
      <input type="radio" id="primo-arrivante" name="jesuis" value="primo-arrivant(e)" className="mr-2"
             />
      <label name="primo-arrivant(e)" htmlFor="primo-arrivant(e)" for="primo-arrivant(e)">Une personne "nouvellement arrivée en Wallonie" (tu ne te sens pas toujours inclus.e dans la société, tu as besoin de mieux connaitre le français, tu as peu de réseau...)</label>
    </div>

    <div className="">
      <input type="radio" id="locale" name="jesuis" value="locale" className="mr-2"/>
      <label name="locale" htmlFor="locale"  for="locale">Une personne "locale" (tu te sens inclus.e dans la société, tu as une bonne connaissance du français et tu disposes d'un réseau social suffisant)</label>
    </div>
</fieldset>
<input type="submit" value="Envoyer" className=" text-white bg-vert-interra font-black
            p-1 px-2 mb-2 md:mb-0  rounded hover:bg-white-interra text-center hover:text-vert-interra 
            hover:bg-white border hover:border-vert-interra w-min" > 
            </input>


</form>
          </article>
          </div>
    </Layout>
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

export default devenirBenevole

