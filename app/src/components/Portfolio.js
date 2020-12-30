import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            websites: 0,
            websystems: 0,
            ecommerces: 0
        }

        this.handleCounters = this.handleCounters.bind(this);
    }

    handleCounters(websites, websystems, ecommerces) {
        this.setState({
            websites,
            websystems,
            ecommerces
        });
    }

    render() {
        return (
            <div className="content-wrap">
                <div id="portfolio" className="inner-content">
                    <Fade left>
                        <section id="page-title" className="inner-section ui-menu-color03">
                            <div className="container-fluid nopadding">
                                <h2 className="font-accident-two-bold color01">Portafolio</h2>
                                <h4 className="font-accident-two-light color01 uppercase subtitle">Soy un emprendedor con muchos a&ntilde;os de experiencia en el desarrollo de sistemas web y m&oacute;vil</h4>
                                <p className="small color01">
                                    Mi objetivo es crecer poco a poco con trabajos profesionales hechos con mucho empe&ntilde;o y dedicaci&oacute;n, se que el trabajo habla por m&iacute;, siempre la calidad por encima de la cantidad.
                                </p>
                            </div>
                        </section>
                    </Fade>
                    <Fade right onReveal={() => this.handleCounters(3, 1, 1)}>
                        <section id="counts" className="light inner-section bg-color02">
                            <div className="container-fluid nopadding">
                                <div className="count-container row">
                                    <div className="col-sm-4 col-xs-12 count">
                                        <div>
                                            <div className="count-icon">
                                                <i className="flaticon-photo246"></i>
                                            </div>
                                            <CountUp className="integers digit font-accident-two-normal" end={this.state.websites} duration={5} />
                                            <div className="count-text font-accident-two-bold">Sitios Web</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-12 count">
                                        <div>
                                            <div className="count-icon">
                                                <i className="flaticon-stats48"></i>
                                            </div>
                                            <CountUp className="integers digit font-accident-two-normal" end={this.state.websystems} duration={5} />
                                            <div className="count-text font-accident-two-bold">Sistemas Web</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-12 count">
                                        <div>
                                            <div className="count-icon">
                                                <i className="flaticon-shopping-carts6"></i>
                                            </div>
                                            <CountUp className="integers digit font-accident-two-normal" end={this.state.ecommerces} duration={5} />
                                            <div className="count-text font-accident-two-bold">Sitios de Comercio Electr&oacute;nico</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dividewhite2"></div>
                            </div>
                        </section>
                    </Fade>
                    <section id="portfolio-block" className="inner-section" data-section="portfolio">
                        <div className="dividewhite6"></div>

                        <div id="isotope-filters" className="port-filter port-filter-light text-center">
                            <ul>
                                <li><a href="#cat1" data-filter="*">Todo</a></li>
                                <li><a href="#cat2" data-filter=".gps">Rastreo de Unidaes</a></li>
                                <li><a href="#cat3" data-filter=".personal">Control de Personal</a></li>
                            </ul>
                        </div>

                        <div className="dividewhite6"></div>

                        <div className="row masonry-row">

                            <div className="grid container-fluid text-center">

                                <div id="posts" className="row popup-container">

                                    <div className="grid-item grid-sizer gps col-md-6 col-sm-12">
                                        <div className="item-wrap">
                                            <figure className="effect-goliath ui-menu-color02">
                                                <div className="popup-call">
                                                    <a href="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/01.jpg" className="gallery-item"><i className="flaticon-tool"></i></a>
                                                </div>
                                                <img src="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/01.jpg" className="img-responsive" alt="Sitio web de rastreo de unidades" />
                                                <figcaption>
                                                    <div className="fig-description">
                                                        <h3>Sitio web para conocer plataforma GPSHarmony</h3>
                                                        <p>Rastreo de unidades vehiculares</p>
                                                    </div>
                                                    <Link to="gpsharmony.net" target="_blank" onClick={(event) => { event.preventDefault(); window.open("http://www.gpsharmony.net"); }} />
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="grid-item gps col-md-6 col-sm-12">
                                        <div className="item-wrap">
                                            <figure className="effect-goliath ui-menu-color02">
                                                <div className="popup-call">
                                                    <a href="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/02.jpg" className="gallery-item"><i className="flaticon-tool"></i></a>
                                                </div>
                                                <img src="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/02.jpg" className="img-responsive" alt="mapa de google" />
                                                <figcaption>
                                                    <div className="fig-description">
                                                        <h3>Sistema web con acceso controlado a GPSHarmony</h3>
                                                        <p>En el mapa el usuario puede seguir en tiempo real a los vehiculos que tiene un dispositivo GPS instalado</p>
                                                    </div>
                                                    {/* <a href="portfolio-item-01.html"></a> */}
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="grid-item personal col-md-6 col-sm-12">
                                        <div className="item-wrap">
                                            <figure className="effect-goliath ui-menu-color02">
                                                <div className="popup-call">
                                                    <a href="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/03.jpg" className="gallery-item"><i className="flaticon-tool"></i></a>
                                                </div>
                                                <img src="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/03.jpg" className="img-responsive" alt="Cami&oacute;n de Paqueter&iacute;a" />
                                                <figcaption>
                                                    <div className="fig-description">
                                                        <h3>Empresa que asiste a FedEx para entregar paqueter&iacute;a</h3>
                                                        <p>Sistema de control de personal con administraci&oacute;n de documentos digitalizados</p>
                                                    </div>
                                                    <Link to="lermatransportinc.com" target="_blank" onClick={(event) => { event.preventDefault(); window.open("http://www.lermatransportinc.com"); }} />
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="grid-item personal col-md-6 col-sm-12">
                                        <div className="item-wrap">
                                            <figure className="effect-goliath ui-menu-color02">
                                                <div className="popup-call">
                                                    <a href="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/04.jpg" className="gallery-item"><i className="flaticon-tool"></i></a>
                                                </div>
                                                <img src="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/04.jpg" className="img-responsive" alt="Dashboard del sistema de control de personal" />
                                                <figcaption>
                                                    <div className="fig-description">
                                                        <h3>Sistema web dedicado al control del personal interno de la empresa Lerma Transport Inc </h3>
                                                        <p>El sistema cuenta un Dashboard mostrando informaci&oacute;n &uacute;til que ayuda al usuario a tomar decisiones</p>
                                                    </div>
                                                    {/* <a href="portfolio-item-01.html"></a> */}
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    {/* <div className="grid-item marketing col-md-6 col-sm-12">
                                        <div className="item-wrap">
                                            <figure className="effect-goliath ui-menu-color02">
                                                <div className="popup-call">
                                                    <a href="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/07.jpg" className="gallery-item"><i className="flaticon-tool"></i></a>
                                                </div>
                                                <img src="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/07.jpg" className="img-responsive" alt="img11" />
                                                <figcaption>
                                                    <div className="fig-description">
                                                        <h3>Fast <span>Loading Speed</span></h3>
                                                        <p>#marketing</p>
                                                    </div>
                                                    <a href="portfolio-item-01.html"></a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="grid-item seo col-md-6 col-sm-12">
                                        <div className="item-wrap">
                                            <figure className="effect-goliath ui-menu-color02">
                                                <div className="popup-call">
                                                    <a href="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/08.jpg" className="gallery-item"><i className="flaticon-tool"></i></a>
                                                </div>
                                                <img src="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/08.jpg" className="img-responsive" alt="img11" />
                                                <figcaption>
                                                    <div className="fig-description">
                                                        <h3>Slick <span>Graphics</span></h3>
                                                        <p>#marketing</p>
                                                    </div>
                                                    <a href="portfolio-item-01.html"></a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="grid-item web seo col-md-6 col-sm-12">
                                        <div className="item-wrap">
                                            <figure className="effect-goliath ui-menu-color02">
                                                <div className="popup-call">
                                                    <a href="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/10.jpg" className="gallery-item"><i className="flaticon-tool"></i></a>
                                                </div>
                                                <img src="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/10.jpg" className="img-responsive" alt="img03" />
                                                <figcaption>
                                                    <div className="fig-description">
                                                        <h3>Awesome <span>Feedback</span></h3>
                                                        <p>#web #seo</p>
                                                    </div>
                                                    <a href="portfolio-item-01.html"></a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="grid-item seo col-md-6 col-sm-12">
                                        <div className="item-wrap">
                                            <figure className="effect-goliath ui-menu-color02">
                                                <div className="popup-call">
                                                    <a href="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/11.jpg" className="gallery-item"><i className="flaticon-tool"></i></a>
                                                </div>
                                                <img src="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/11.jpg" className="img-responsive" alt="img03" />
                                                <figcaption>
                                                    <div className="fig-description">
                                                        <h3>Great <span>Responsiveness</span></h3>
                                                        <p>#web #seo</p>
                                                    </div>
                                                    <a href="portfolio-item-01.html"></a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="grid-item web col-md-6 col-sm-12">
                                        <div className="item-wrap">
                                            <figure className="effect-goliath ui-menu-color02">
                                                <div className="popup-call">
                                                    <a href="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/12.jpg" className="gallery-item"><i className="flaticon-tool"></i></a>
                                                </div>
                                                <img src="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/12.jpg" className="img-responsive" alt="img03" />
                                                <figcaption>
                                                    <div className="fig-description">
                                                        <h3>Awesome <span>Possibilities</span></h3>
                                                        <p>#web #seo</p>
                                                    </div>
                                                    <a href="portfolio-item-01.html"></a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="grid-item seo col-md-6 col-sm-12">
                                        <div className="item-wrap">
                                            <figure className="effect-goliath ui-menu-color02">
                                                <div className="popup-call">
                                                    <a href="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/13.jpg" className="gallery-item"><i className="flaticon-tool"></i></a>
                                                </div>
                                                <img src="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/13.jpg" className="img-responsive" alt="img03" />
                                                <figcaption>
                                                    <div className="fig-description">
                                                        <h3>Magic <span>SEO</span></h3>
                                                        <p>#web #seo</p>
                                                    </div>
                                                    <a href="portfolio-item-01.html"></a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="grid-item web col-md-6 col-sm-12">
                                        <div className="item-wrap">
                                            <figure className="effect-goliath ui-menu-color02">
                                                <div className="popup-call">
                                                    <a href="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/14.jpg" className="gallery-item"><i className="flaticon-tool"></i></a>
                                                </div>
                                                <img src="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/14.jpg" className="img-responsive" alt="img03" />
                                                <figcaption>
                                                    <div className="fig-description">
                                                        <h3>Good <span>Code Optimization</span></h3>
                                                        <p>#web #seo</p>
                                                    </div>
                                                    <a href="portfolio-item-01.html"></a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                    <div className="grid-item seo col-md-6 col-sm-12">
                                        <div className="item-wrap">
                                            <figure className="effect-goliath ui-menu-color02">
                                                <div className="popup-call">
                                                    <a href="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/16.jpg" className="gallery-item"><i className="flaticon-tool"></i></a>
                                                </div>
                                                <img src="assets/custom/2.2.0/images/layouts/samuel/portfolio/2-columns/16.jpg" className="img-responsive" alt="img03" />
                                                <figcaption>
                                                    <div className="fig-description">
                                                        <h3>Super <span>Speed</span></h3>
                                                        <p>#web #seo</p>
                                                    </div>
                                                    <a href="portfolio-item-01.html"></a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div> */}

                                </div>
                            </div>

                        </div>

                        <div className="dividewhite8"></div>
                    </section>

                </div>
            </div>
        )
    };
}

export default Portfolio;