import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"


const devenirBenevole = () => (
    <Layout className="">
        <Seo title="former un duo2change" />
        <div className="w-12/12">
            <h1 className="font-black text-4xl  text-vert-interra  bg-white text-center"> Former duo2change </h1>

            <article className="  mt-10   m-auto">

<form className="flex flex-col gap-10">
    <div className="flex flex-col gap-5">
    <h2 className="font-black text-2xl mb-5 text-orange-interra" >Personne primo-arrivante</h2>
      <label>Nom</label>
      <input type="text" name="nomprimo" id="nomprimo" className="border" />  
    </div>
    <div className="flex flex-col gap-5">
      <label>Prénom</label>
      <input type="text"  name="prenomprimo" id="prenomprimo" className="border" />  
    </div>
    <div className="flex flex-col gap-5">
      <label>téléphone</label>
      <input type="text"  name="telephoneprimo" id="telephoneprimo" className="border" />  
    </div>
    <div className="flex flex-col  gap-5">
      <label>mail</label>
      <input type="mail"  name="mailprimo" id="mailprimo"  className="border"/>  
    </div>
    <h2 className="font-black text-2xl mb-5 text-orange-interra">Personne locale</h2>
    <div className="flex flex-col gap-5">
    <label>Nom</label>
      <input type="text" name="nomlocale" id="nomplocale" className="border" />  
    </div>
    <div className="flex flex-col gap-5">
      <label>Prénom</label>
      <input type="text"  name="prenomlocale" id="prenomlocale" className="border" />  
    </div>
    <div className="flex flex-col gap-5">
      <label>téléphone</label>
      <input type="text"  name="telephonelocale" id="telephonelocale" className="border" />  
    </div>
    <div className="flex flex-col  gap-5">
      <label>mail</label>
      <input type="mail"  name="maillocale" id="maillocale"  className="border"/>
    <input type="submit" value="Envoyer" className=" text-white bg-vert-interra font-black
            p-1 px-2 mb-2 md:mb-0  rounded hover:bg-white-interra text-center hover:text-vert-interra 
            hover:bg-white border hover:border-vert-interra w-min" ></input>
    </div>
</form>
          </article>
          </div>
    </Layout>
)



export default devenirBenevole

