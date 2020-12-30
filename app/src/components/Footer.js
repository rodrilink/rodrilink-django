import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <Fade up>
            <footer className="padding-50 dark ui-bg-color01">
                <div className="container-fluid nopadding">
                    <div className="row">
                        <div className="col-sm-3">
                            <h5 className="font-accident-two-bold uppercase">Gracias por visitarme</h5>
                            <p className="inline-block">
                                Te agradezco que hayas tomado un poco de tu tiempo de visitarme, espero ya me conozmas un poco m&aacute;s y no dudes en contactame, escr&iacute;beme
                                al correo <a style={{ color: 'white' }} href="mailto:rodrilink@gmail.com?Subject=Hola%20estoy%20interesado%20en%20contratarte">rodrilink@gmail.com</a>
                            </p>
                            <div className="divider-dynamic"></div>
                        </div>
                        <div className="col-sm-3 cv-link">
                            <h5 className="font-accident-two-bold uppercase">Descarga mi CV</h5>
                            <div className="dividewhite1"></div>
                            <a href="/assets/custom/2.2.0/downloads/Curriculum Vitae Spanish.pdf" download><i className="fa fa-long-arrow-down" aria-hidden="true"></i>Espa&ntilde;ol</a>
                            <a href="/assets/custom/2.2.0/downloads/Curriculum Vitae.pdf" download><i className="fa fa-long-arrow-down" aria-hidden="true"></i>Ingles</a>
                            <p className="inline-block">
                                El CV esta en formato .pdf Utiliza Adobe Reader para abrirlo.
                        </p>
                            <div className="divider-dynamic"></div>
                        </div>
                        {/* <div className="col-sm-3">
                            <h5 className="font-accident-two-bold uppercase">Newsletter</h5>
                            <div className="dividewhite1"></div>
                            <input className="newsletter-email" type="email" required="" name="ne" placeholder="Your Email" />
                            <a href="#!" className="btn btn-wh-trans btn-xs">OK</a>
                            <div className="divider-dynamic"></div>
                        </div> */}
                        <div className="col-sm-3">
                            <h5 className="font-accident-two-bold uppercase">Sigueme</h5>
                            <div className="follow">
                                <ul className="list-inline social">
                                    {/* <li><a target="_blank" href="https://www.facebook.com/rodrilink" className="rst-icon-facebook"><i className="fa fa-facebook"></i></a></li> */}
                                    <li><a target="_blank" href="https://twitter.com/rodrilink7" className="rst-icon-twitter"><i className="fa fa-twitter"></i></a></li>
                                    {/* <li><a target="_blank" href="https://www.instagram.com/rodrilink7/" className="rst-icon-instagram"><i className="fa fa-instagram"></i></a></li> */}
                                    <li><a target="_blank" href="https://www.linkedin.com/in/rodrilink/" className="rst-icon-linkedin"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                            <div className="divider-dynamic"></div>
                        </div>
                    </div>
                    <div className="dividewhite1"></div>
                    <div className="row">
                        <div className="col-md-12 copyrights">
                            <p>© 2019 Rodrigo Curiel.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fade>
    )
}

export default Footer;