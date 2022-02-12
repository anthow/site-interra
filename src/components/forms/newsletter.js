import { Link } from "gatsby"
import * as React from "react"

const Newsletter = () => (
  <section className="col-span-2 flex flex-col place-content-center content-center place-items-start " >
   
                    <h2 className="text-white text-xl font-black mb-5">Envie de rester informé(e) ?</h2>
                    <Link to="../../newsletter">
                  <button className="text-white bg-orange-interra font-black  
          p-1 px-2  rounded hover:bg-white-interra hover:text-orange-interra 
          hover:bg-white  "> S'inscrire à notre newsletter</button>


          </Link>
  </section>
)


export default Newsletter

















