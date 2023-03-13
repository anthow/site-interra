import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby"

const devenirTalent = ({ data }) => (
  <Layout className="">
    <Seo title="Agir avec nous " />
    <div className="mt-10 w-12/12">
      <h1 className="font-black text-4xl  text-vert-interra mb-10  bg-white text-center">
        {" "}
        {data.datoCmsAgirAvecNou.titreMembre}
      </h1>

      <article className="  mt-10 border p-5 rounded border-orange-interra  m-auto">
        <form
          action="https://formspree.io/f/xoqbboky"
          method="post"
          className="flex flex-col gap-5"
        >
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
            <label className="text-orange-interra font-bold text-lg">
              Prénom
            </label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              className="border bg-gray-200 hover:bg-white focus:outline focus:outline-orange-interra "
            />
          </div>
          <div className="flex flex-col gap-5">
            <label className="text-orange-interra font-bold text-lg">
              Téléphone
            </label>
            <input
              type="text"
              name="telephone"
              id="telephone"
              className="border bg-gray-200 hover:bg-white focus:outline focus:outline-orange-interra "
            />
          </div>
          <div className="flex flex-col  gap-5">
            <label className="text-orange-interra font-bold text-lg">
              Mail
            </label>
            <input
              type="mail"
              name="mail"
              id="mail"
              className="border bg-gray-200 hover:bg-white focus:outline focus:outline-orange-interra "
            />
          </div>
          <div className="flex flex-col gap-5">
            <label className="text-orange-interra font-bold text-lg">
              Idée d'atelier
            </label>
            <textarea
              name="idee"
              id="idee"
              className="border bg-gray-200 hover:bg-white focus:outline focus:outline-orange-interra "
            />
          </div>
          <input
            type="submit"
            value="Envoyer"
            className=" text-white bg-vert-interra font-black
            p-1 px-2 mb-2 md:mb-0  rounded hover:bg-white-interra text-center hover:text-vert-interra 
            hover:bg-white border hover:border-vert-interra w-min"
          ></input>
        </form>
      </article>
    </div>
  </Layout>
);

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

export default devenirTalent;
