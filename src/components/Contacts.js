import React from 'react';
import { Fade, Zoom } from 'react-reveal';

const Contacts = () => {
    return (
        <div className="content-wrap">
            <div id="contacts" className="inner-content">
                <Zoom right>
                    <section id="page-title" className="inner-section ui-menu-color04">
                        <div className="container-fluid nopadding">
                            <h2 className="font-accident-two-bold color01"
                                data-animation-origin="right"
                                data-animation-duration="400"
                                data-animation-delay="100"
                                data-animation-distance="50px">Contacts</h2>
                            <h4 className="font-accident-two-light color01 uppercase subtitle"
                                data-animation-origin="right"
                                data-animation-duration="400"
                                data-animation-delay="200"
                                data-animation-distance="50px">Made for Creative Professionals</h4>
                            <p className="small color01"
                                data-animation-origin="right"
                                data-animation-duration="400"
                                data-animation-delay="300"
                                data-animation-distance="50px">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id metus purus. Ut vulputate, est vel tincidunt mattis, orci neque iaculis lectus, et interdum quam felis vel tortor. Fusce ultrices dui quis nunc dignissim faucibus. Ut ac odio quis nibh viverra fringilla ac id nisi. Suspendisse tincidunt augue quis ligula cursus, non efficitur ligula faucibus. Mauris id neque maximus, tincidunt metus et, sodales nulla.
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
                                        <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Address:</span></div>
                                        <div className="col-sm-10"><p className="small">12234 Direct Drive, Daytona Beach, Fl USA</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Phone:</span></div>
                                        <div className="col-sm-10"><p className="small">1 234 567-64-35</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Skype:</span></div>
                                        <div className="col-sm-10"><p className="small">@samanderson</p></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Twitter:</span></div>
                                        <div className="col-sm-10"><p className="small"><a href="#!">https://twitter.com/samanderson</a></p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Facbook:</span></div>
                                        <div className="col-sm-10"><p className="small"><a href="#!">https://www.facebook.com/samanderson</a></p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2"><span className="font-accident-two-bold uppercase">Linkedin:</span></div>
                                        <div className="col-sm-10"><p className="small"><a href="#!">https://www.linkedin.com/samanderson</a></p></div>
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