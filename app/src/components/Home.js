import React from 'react';
import Fade from 'react-reveal/Fade';

const Home = () => {

    return (
        <div className="content-wrap">
            <section className="container-fluid" data-section="home">
                <div className="row flex-row">
                    <Fade left>
                        <div id="details" className="col-md-8 flex-column bg-color01 light nopadding">
                            <div className="padding-50 flex-panel">
                                <div className="row row-no-padding">
                                    <div className="col-md-12 nopadding">
                                        <h3 className="font-accident-two-normal uppercase title">Mi Perfil</h3>
                                        <div className="quote">
                                            <h4 className="font-accident-two-normal uppercase subtitle">Profesional, Innovador y Comprometido son palabras que me identifican.</h4>
                                            <div className="dividewhite3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider-dynamic"></div>
                                <div className="row nopadding">
                                    <div className="col-md-4 infoblock nopadding">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-1 col-md-3"><i className="flaticon-tool-1 color-blue"></i>
                                                <div className="dividewhite1"></div>
                                            </div>
                                            <div className="col-xs-12 col-sm-11 col-md-9">
                                                <h4 className="font-accident-two-medium uppercase">Profesional</h4>
                                                <p className="">
                                                    Me considero un desarrollador web experimentado con fuerte interés en proyectos que requieren un trabajo de análisis fuerte y conceptos que pongan a prueba mis capacidades.
                              </p>
                                            </div>
                                        </div>
                                        <div className="divider-dynamic"></div>
                                    </div>
                                    <div className="col-md-4 infoblock nopadding">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-1 col-md-3"><i className="flaticon-pie-graph color-blue"></i>
                                                <div className="dividewhite1"></div>
                                            </div>
                                            <div className="col-xs-12 col-sm-11 col-md-9">
                                                <h4 className="font-accident-two-medium uppercase">Innovador</h4>
                                                <p className="">
                                                    Totalmente comprometido con el diseño y desarrollo de aplicaciones innovadoras, siempre buscando lo mejor para el cliente.
                              </p>
                                            </div>
                                        </div>
                                        <div className="divider-dynamic"></div>
                                    </div>
                                    <div className="col-md-4 infoblock nopadding">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-1 col-md-3"><i className="flaticon-clocks18 color-blue"></i>
                                                <div className="dividewhite1"></div>
                                            </div>
                                            <div className="col-xs-12 col-sm-11 col-md-9">
                                                <h4 className="font-accident-two-medium uppercase">Comprometido</h4>
                                                <p className="">
                                                    Mi meta principal siempre es cumplir con los objetivos del cliente en el menor tiempo posible, haciendo cada tarea con mucho dedicaci&oacute;n.
                              </p>
                                            </div>
                                        </div>
                                        <div className="divider-dynamic"></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div id="personal" className="col-md-4 flex-column light ui-block-color01 personal">
                            <div className="padding-50 flex-panel">
                                <h3 className="font-accident-two-normal uppercase title">Informaci&oacute;n Personal</h3>
                                <div className="dividewhite4"></div>
                                <div>
                                    <div className="fullwidth box">
                                        <div className="one">
                                            <p className="uppercase">Nombre:</p>
                                        </div>
                                        <div className="two">
                                            <p className="">Rodrigo Curiel</p>
                                        </div>
                                    </div>
                                    <div className="fullwidth box">
                                        <div className="one">
                                            <p className="uppercase text-nowrap">Nacimiento:</p>
                                        </div>
                                        <div className="two">
                                            <p className="">04/01/1984</p>
                                        </div>
                                    </div>
                                    <div className="fullwidth box">
                                        <div className="one">
                                            <p className="uppercase">Direcci&oacute;n:</p>
                                        </div>
                                        <div className="two">
                                            <p className="">Mexicali, M&eacute;xico</p>
                                        </div>
                                    </div>
                                    <div className="fullwidth box">
                                        <div className="one">
                                            <p className="uppercase">Tel&eacute;fono:</p>
                                        </div>
                                        <div className="two">
                                            <p className="">+52 686 202 63 27</p>
                                        </div>
                                    </div>
                                    <div className="fullwidth box">
                                        <div className="one">
                                            <p className="uppercase">Correo:</p>
                                        </div>
                                        <div className="two">
                                            <p className="">rodrilink@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dividewhite1"></div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
            <section id="professional" className="container-fluid" data-section="home">
                <div className="row flex-row">
                    <Fade down>
                        <div id="pro-experience" className="col-md-4 flex-column dark nopadding ui-block-color02 flex-col">
                            <div className="padding-50 flex-panel">
                                <h3 className="font-accident-two-normal uppercase title">Experiencia Laboral</h3>
                                <div className="dividewhite4"></div>
                                <div className="experience">
                                    <ul className="">
                                        <li className="date">02/2013 - Actual</li>
                                        <li className="company uppercase">
                                            <a>
                                                Poder Judicial
                           </a>
                                        </li>
                                        <li className="position">Desarrollador de sistemas Senior</li>
                                    </ul>
                                    <ul className="">
                                        <li className="date">08/2008 - 02/2013</li>
                                        <li className="company uppercase">
                                            <a>
                                                Secretar&iacute;a de Seguridad P&uacute;blica
                           </a>
                                        </li>
                                        <li className="position">Desarrollador de Sistemas Junior</li>
                                    </ul>
                                    <ul className="">
                                        <li className="date">04/2008 - 08/2008</li>
                                        <li className="company uppercase">
                                            <a>
                                                DIF Estatal
                           </a>
                                        </li>
                                        <li className="position">An&aacute;lista de Sistemas Junior</li>
                                    </ul>
                                </div>
                                <div className="dividewhite1"></div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div id="circle-skills" className="col-md-8 flex-column dark nopadding ui-block-color03 flex-col"
                            data-section="facts">
                            <div className="padding-50 flex-panel">
                                <h3 className="font-accident-two-normal uppercase title">Acerca de m&iacute;.</h3>
                                <p className="small">
                                    Ingeniero en Computaci&oacute;n egresado de la Universidad Aut&oacute;noma de Baja California.
                                </p>
                                {/* <div className="dividewhite4"></div> */}
                                <div className="dividewhite1"></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        {/* <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Estado:</p></div>
                                            <div className="col-sm-8"><p className="">Abierto para nuevas oportunidades</p></div>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Nivel de educaci&oacute;n:</p></div>
                                            <div className="col-sm-8"><p className="">Licenciatura en Ingenier&iacute;a en Computaci&oacute;n</p></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Tipos de trabajo:</p></div>
                                            <div className="col-sm-8"><p className="">Independiente (Freelancer)</p></div>
                                        </div>
                                        {/* <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Mobilidad:</p></div>
                                            <div className="col-sm-8"><p className="">Listo para reubicarme</p></div>
                                        </div> */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Lenguajes:</p></div>
                                            <div className="col-sm-8"><p className="">Espa&ntilde;ol e Ingles</p></div>
                                        </div>
                                        {/* <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Posici&oacute;n:</p></div>
                                            <div className="col-sm-8"><p className="">Analista / Desarrollador</p></div>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Area de interes:</p></div>
                                            <div className="col-sm-8"><p className="">Desarrollo web y m&oacute;vil</p></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Especialidad:</p></div>
                                            <div className="col-sm-8"><p className="">Desarrollo de aplicaciones, Dise&ntilde;o web, planificaci&oacute;n de proyectos, manejo de datos</p></div>
                                        </div>
                                        {/* <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Pasatiempos:</p></div>
                                            <div className="col-sm-8"><p className="">Futbol, correr, escuchar m&uacute;sica</p></div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>

        </div>
    )
}

export default Home;