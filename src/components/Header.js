import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <section id="top-navigation" className="container-fluid nopadding">
                <div className="row nopadding ident ui-bg-color01">
                    <Link to="/">
                        <div className="col-md-4 vc-photo photo-01">&nbsp;</div>
                    </Link>
                    <div className="col-md-8 vc-name nopadding">
                        <div className="row nopadding name">
                            <div className="col-md-10 name-title">
                                <h1 className="font-accident-two-extralight">Rodrigo Curiel</h1>
                            </div>
                            <div className="col-md-2 nopadding name-pdf">
                                <a href="/assets/custom/2.2.0/downloads/Curriculum Vitae Spanish.pdf" download className="hvr-sweep-to-right"><i className="flaticon-download149"
                                    title="Descarga CV.pdf"></i></a>
                            </div>
                        </div>
                        <div className="row nopadding position">
                            <div className="col-md-10 position-title">

                                <section className="cd-intro">
                                    <h2 className="cd-headline clip is-full-width font-accident-two-light">
                                        <span>Experiencia en&nbsp;</span>
                                        <span className="cd-words-wrapper">
                                            <b className="is-visible">desarrollo de sistemas.</b>
                                            <b >dise&ntilde;o de p&aacute;ginas web.</b>
                                            <b>creaci&oacute;n de aplicaciones moviles.</b>
                                            <b>planificacio&acute;n de proyectos.</b>
                                        </span>
                                    </h2>
                                </section>

                            </div>
                            <div className="col-md-2 nopadding pdf">
                                <a href="https://www.linkedin.com/in/rodrilink" target="_blank" className="hvr-sweep-to-right"><i className="flaticon-linkedin22"
                                    title="Perfil de LinkedIn"></i></a>
                            </div>
                        </div>

                        <ul id="nav" className="row nopadding cd-side-navigation">
                            <li className="col-xs-6 col-sm-6 nopadding menuitem ui-menu-color01" data-animation-duration="1000"
                                data-animation-delay="100">
                                <Link to="/" className="hvr-sweep-to-bottom">
                                    <i className="flaticon-insignia"></i><span>Inicio</span>
                                </Link>
                            </li>
                            {/* <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color02" data-animation-duration="1000"
                                data-animation-delay="300">
                                <Link to="/resume" className="hvr-sweep-to-bottom">
                                    <i className="flaticon-graduation61"></i><span>resume</span>
                                </Link>
                            </li>
                            <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color03" data-animation-duration="1000"
                                data-animation-delay="500">
                                <a href="portfolio-4-col.html" className="hvr-sweep-to-bottom"><i
                                    className="flaticon-book-bag2"></i><span>portfolio</span></a>
                            </li> */}
                            <li className="col-xs-6 col-sm-6 nopadding menuitem ui-menu-color04" data-animation-duration="1000"
                                data-animation-delay="700">
                                <Link to="/contacts" className="hvr-sweep-to-bottom">
                                    <i className="flaticon-placeholders4"></i><span>Contacto</span>
                                </Link>
                            </li>
                            {/* <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color05" data-animation-duration="1000"
                                data-animation-delay="900">
                                <a href="feedback.html" className="hvr-sweep-to-bottom"><i
                                    className="flaticon-earphones18"></i><span>feedback</span></a>
                            </li>
                            <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color06" data-animation-duration="1000"
                                data-animation-delay="1100">
                                <a href="blog-3-col.html" className="hvr-sweep-to-bottom"><i
                                    className="flaticon-pens15"></i><span>blog</span></a>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header;