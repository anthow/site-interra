import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Listprojet from "../components/listprojets"
                                                

const projetsPage = () => (
    <Layout className="">
           <Seo title="Projets" />
<article className="< m-auto flex flex-col">
<h1 className=" text-center font-black text-4xl mb-10 text-vert-interra  bg-white "> Nos projets </h1>
<Listprojet />

</article>
    </Layout>
)



export default projetsPage

