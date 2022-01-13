import * as React from "react"

const Newsletter = () => (
  <section className="col-span-2 " >
    <div class="sib-form">
      <div id="sib-form-container">
        <div id="sib-container" >
          <form id="sib-form" method="POST"
            action="https://ba8902f1.sibforms.com/serve/MUIEAI1wOjONhCAyBdmvkMKlteFsSeHoPJCllv8kjb46Wi7JZwse0sO7BYQQen3RWlSqi41HSrlXVkrBpVyvQUh84d4FAGkI4OGEzebyXzhzUPESjfgLhJ_rveA-HjA3yG2qKiAcN4B5bQb6Dcjn58WDJWjPVSHAyGlTCRpgoQ4knUAGiST2k58IZhrCg_7r6_u_VaPVHKvc1JXp">
            <div >
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row ">
                    <h2 className="text-white text-xl font-black">Envie de rester informé(e) ?</h2>
                    <label class="entry__label" for="EMAIL" data-required="*">
                      Veuillez renseigner votre adresse email pour vous inscrire à notre newsletter
                    </label>

                    <div className="md:flex space-x-2 items-center ">
                      <input className="my-2 p-1 pl-2" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Email" data-required="true" required />
              <div class="sib-form-block" >
                <button class=" text-white bg-orange-interra font-black  p-1 px-2  rounded hover:bg-white-interra hover:text-orange-interra hover:bg-white  hover:border-orange-interra" form="sib-form" type="submit">

                  S'inscrire
                </button>
              </div>
            <input type="text" name="email_address_check" value="" className=" hidden input--hidden" />
            <input type="hidden" name="locale" value="fr" />
            <input type="hidden" name="html_type" value="simple" />
                    </div>
                  </div>            
                  </div>
              </div>
            </div>
            <div>
              <div class="sib-optin sib-form-block">
                <div class="form__entry entry_mcq">
                  <div class="form__label-row ">
                    <div class="entry__choice">
                      <label>
                        <div className="mt-2 flex align-top space-x-1 items-start">
                          <input type="checkbox" className="" value="1" id="OPT_IN" name="OPT_IN" />
                          <div><p className="italic  text-sm"> J'accepte de recevoir vos e-mails et confirme avoir pris connaissance de votre politique de confidentialité et mentions légales.</p>
                            <p className=" italic  text-sm">   Vous pouvez vous désinscrire à tout moment en cliquant sur le lien présent dans nos emails.</p></div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div >
            </div>
         
          </form>
        </div>
      </div>
    </div>



  </section>
)


export default Newsletter

















