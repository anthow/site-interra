import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const devenirMembre = () => (
  <Layout className="">
    <Seo title="Devenir Coach " />
    <div className="w-12/12">
      <h1 className="font-black text-4xl  text-vert-interra  bg-white text-center">
        Devenir coach pour l'Interlab
      </h1>

      <article className="  mt-10   m-auto">
        <form className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <label className="text-orange-interra">Nom</label>
            <input
              type="text"
              name="nom"
              id="nom"
              className="border"
            />
          </div>
          <div className="flex flex-col gap-5">
            <label className="text-orange-interra">Prénom</label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              className="border"
            />
          </div>
          <div className="flex flex-col gap-5">
            <label className="text-orange-interra">téléphone</label>
            <input
              type="text"
              name="telephone"
              id="telephone"
              className="border"
            />
          </div>
          <div className="flex flex-col  gap-5">
            <label className="text-orange-interra">mail</label>
            <input
              type="mail"
              name="mail"
              id="mail"
              className="border"
            />
          </div>
          <input type="submit" value="Envoyer" className=" text-white bg-vert-interra font-black
            p-1 px-2 mb-2 md:mb-0  rounded hover:bg-white-interra text-center hover:text-vert-interra 
            hover:bg-white border hover:border-vert-interra w-min" ></input>
        </form>
      </article>
    </div>
  </Layout>
);

export default devenirMembre;
