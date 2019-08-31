import React from 'react';
import { Fade, Zoom } from 'react-reveal';

const Contacts = () => {
    return (
        <div className="content-wrap">
            <div id="contacts" className="inner-content">
                <Zoom>
                    <section id="page-title" className="inner-section ui-menu-color04">
                        <div className="container-fluid nopadding">
                            <h2 className="font-accident-two-bold color01"
                                data-animation-origin="right"
                                data-animation-duration="400"
                                data-animation-delay="100"
                                data-animation-distance="50px">Cont&aacute;ctame</h2>
                            <h4 className="font-accident-two-light color01 uppercase subtitle"
                                data-animation-origin="right"
                                data-animation-duration="400"
                                data-animation-delay="200"
                                data-animation-distance="50px">Siempre dispuesto a ayudarte</h4>
                            <p className="small color01"
                                data-animation-origin="right"
                                data-animation-duration="400"
                                data-animation-delay="300"
                                data-animation-distance="50px">
                                Te comento que tengo todo un equipo altamente capacitado para ayudarnos, dise&ntilde;adores grafico, expertos en aplicaciones moviles, analistas de bases de datos.. etc.
                                <br />
                                As&iacute; que animate a cont&aacute;ctame y platiquemos de negocios.
                            </p>
                        </div>
                    </section>
                </Zoom>
                <Fade left>
                    <section id="contacts-data" className="inner-block">
                        <div className="container-fluid nopadding">
                            <div className="dividewhite8"></div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Correo:</span></div>
                                        <div className="col-sm-10"><p className="small"><a href="mailto:rodrilink@gmail.com?Subject=Hola%20estoy%20interesado%20en%20contratarte">rodrilink@gmail.com</a></p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Tel&eacute;fono:</span></div>
                                        <div className="col-sm-10"><p className="small">+52 686 202 6327</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Skype:</span></div>
                                        <div className="col-sm-10"><p className="small">@rodrigo.curiel</p></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Twitter:</span></div>
                                        <div className="col-sm-10"><p className="small"><a href="https://twitter.com/rodrilink7">https://twitter.com/rodrilink7</a></p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Facbook:</span></div>
                                        <div className="col-sm-10"><p className="small"><a href="https://www.facebook.com/rodrilink">https://www.facebook.com/rodrilink</a></p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Linkedin:</span></div>
                                        <div className="col-sm-10"><p className="small"><a href="https://www.linkedin.com/in/rodrilink/">
                                            https://www.linkedin.com/in/rodrilink/</a></p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="dividewhite1"></div>

                        </div>
                    </section>
                </Fade>
            </div>
        </div>
    )
}

export default Contacts;