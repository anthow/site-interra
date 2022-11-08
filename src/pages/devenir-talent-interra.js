import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"


const devenirTalent = () => (
    <Layout className="">
        <Seo title="Agir avec nous " />
        <div className="w-12/12">
        <h1 className="font-black text-4xl  text-vert-interra mb-10  bg-white text-center"> Devenir
         un talent Interra </h1>

            <article className="w-10/12  mt-10   m-auto">

            <form className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                  <label>Nom</label>
                  <input type="text" name="nom" id="nom" className="border" />  
                </div>
                <div className="flex flex-col gap-5">
                  <label>Prénom</label>
                  <input type="text"  name="prenom" id="prenom" className="border" />  
                </div>
                <div className="flex flex-col gap-5">
                  <label>téléphone</label>
                  <input type="text"  name="telephone" id="telephone" className="border" />  
                </div>
                <div className="flex flex-col  gap-5">
                  <label>mail</label>
                  <input type="mail"  name="mail" id="mail"  className="border"/>  
                </div>
                <div className="flex flex-col gap-5">
                  <label>Idée d'atelier</label>
                  <textarea  name="idee" id="idee" className="border" />  
                </div>
                <input type="submit" value="Envoyer" className="border p-1 w-max" ></input>
            </form>
                        
           </article>
           </div>
    </Layout>
)





export default devenirTalent

