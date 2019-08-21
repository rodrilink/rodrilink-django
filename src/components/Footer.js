import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <Fade up>
            <footer className="padding-50 dark ui-bg-color01">
                <div className="container-fluid nopadding">
                    <div className="row">
                        <div className="col-sm-3">
                            <h5 className="font-accident-two-bold uppercase">Gridus HTML Template</h5>
                            <p className="inline-block">
                                The Gridus Resume Template has an unique modern flat intuitive design. You can choose one of 8
                                pre-defined Color schemes.
                        </p>
                            <div className="divider-dynamic"></div>
                        </div>
                        <div className="col-sm-3 cv-link">
                            <h5 className="font-accident-two-bold uppercase">Download cv</h5>
                            <div className="dividewhite1"></div>
                            <a href="#!"><i className="fa fa-long-arrow-down" aria-hidden="true"></i>English</a>
                            <a href="#!"><i className="fa fa-long-arrow-down" aria-hidden="true"></i>Spanish</a>
                            <p className="inline-block">
                                The CV is in .pdf format. Use the Adobe Reader to open it.
                        </p>
                            <div className="divider-dynamic"></div>
                        </div>
                        <div className="col-sm-3">
                            <h5 className="font-accident-two-bold uppercase">Newsletter</h5>
                            <div className="dividewhite1"></div>
                            <input className="newsletter-email" type="email" required="" name="ne" placeholder="Your Email" />
                            <a href="#!" className="btn btn-wh-trans btn-xs">OK</a>
                            <div className="divider-dynamic"></div>
                        </div>
                        <div className="col-sm-3">
                            <h5 className="font-accident-two-bold uppercase">Follow me</h5>
                            <div className="follow">
                                <ul className="list-inline social">
                                    <li><a target="_blank" href="#" className="rst-icon-facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a target="_blank" href="#" className="rst-icon-twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li><a target="_blank" href="#" className="rst-icon-pinterest"><i className="fa fa-pinterest"></i></a></li>
                                    <li><a target="_blank" href="#" className="rst-icon-instagram"><i className="fa fa-instagram"></i></a></li>
                                    <li><a target="_blank" href="#" className="rst-icon-youtube"><i className="fa fa-youtube"></i></a></li>
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