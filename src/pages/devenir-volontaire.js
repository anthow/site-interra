import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"


const devenirBenevole = () => (
        <Layout className="">
    <Seo title="Devenir volontaire " />
    <div className="w-12/12">
      <h1 className="font-black text-4xl  text-vert-interra  bg-white text-center">
        Devenir volontaire Interra
      </h1>

      <article className="  mt-10   m-auto">
        <form className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <label>Nom</label>
            <input
              type="text"
              name="nom"
              id="nom"
              className="border"
            />
          </div>
          <div className="flex flex-col gap-5">
            <label>Prénom</label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              className="border"
            />
          </div>
          <div className="flex flex-col gap-5">
            <label>téléphone</label>
            <input
              type="text"
              name="telephone"
              id="telephone"
              className="border"
            />
          </div>
          <div className="flex flex-col  gap-5">
            <label>mail</label>
            <input
              type="mail"
              name="mail"
              id="mail"
              className="border"
            />
          </div>
        </form>
      </article>
    </div>    </Layout>
)



export default devenirBenevole

