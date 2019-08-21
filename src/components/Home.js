import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Script from 'react-load-script';

const Home = () => {

    useEffect(() => {

        setTimeout(() => {
            const script = document.createElement("script");

            // script.id = "rodrilink-progressbar";
            // script.src = "assets/custom/2.2.0/js/progressbar.js";
            // script.async = true;

            // const removeScript = document.getElementById(script.id);


            // if (removeScript) {
            //     console.log(removeScript);
            //     // document.body.removeChild(removeScript);
            //     // removeScript[0].parentElement.removeChild(cremoveScript[0]);
            //     removeScript.setAttribute("src", "assets/custom/2.2.0/js/progressbar.js");
            // } else {
            //     document.body.appendChild(script);
            // }



            // const scriptTwo = document.createElement("script");

            // scriptTwo.src = "assets/custom/2.2.0/js/custom.js";
            // scriptTwo.async = true;

            // document.body.appendChild(scriptTwo);

        }, 0);

    }, []);

    return (
        <div className="content-wrap">
            <section className="container-fluid" data-section="home">
                <div className="row flex-row">
                    <Fade left>
                        <div id="details" className="col-md-8 flex-column bg-color01 light nopadding">
                            <div className="padding-50 flex-panel">
                                <div className="row row-no-padding">
                                    <div className="col-md-12 nopadding">
                                        <h3 className="font-accident-two-normal uppercase title">Gridus Resume HTML Template</h3>
                                        <div className="quote">
                                            <h4 className="font-accident-two-normal uppercase subtitle">Perfect for CV / Resume or Portfolio
                              Website</h4>
                                            <div className="dividewhite3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider-dynamic"></div>
                                <div className="row nopadding">
                                    <div className="col-md-4 infoblock nopadding">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-1 col-md-3"><i className="flaticon-clocks18 color-blue"></i>
                                                <div className="dividewhite1"></div>
                                            </div>
                                            <div className="col-xs-12 col-sm-11 col-md-9">
                                                <h4 className="font-accident-two-medium uppercase">Modern</h4>
                                                <p className="">
                                                    The Gridus Resume Template has an unique modern flat intuitive design. You can choose
                                                    one of 8 Color schemes.
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
                                                <h4 className="font-accident-two-medium uppercase">Simple CV</h4>
                                                <p className="">
                                                    Gridus Personal Template is the simple, clean and stylish fully-responsive resume theme
                                                    with modern creative design.
                              </p>
                                            </div>
                                        </div>
                                        <div className="divider-dynamic"></div>
                                    </div>
                                    <div className="col-md-4 infoblock nopadding">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-1 col-md-3"><i className="flaticon-tool-1 color-blue"></i>
                                                <div className="dividewhite1"></div>
                                            </div>
                                            <div className="col-xs-12 col-sm-11 col-md-9">
                                                <h4 className="font-accident-two-medium uppercase">Responsive</h4>
                                                <p className="">
                                                    Works fast and looks fine on any device with the wide range of the screen resolution.
                                                    Supports all the Google SEO rules.
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
                                <h3 className="font-accident-two-normal uppercase title">Personal Info</h3>
                                <div className="dividewhite4"></div>
                                <div>
                                    <div className="fullwidth box">
                                        <div className="one">
                                            <p className="uppercase">Name:</p>
                                        </div>
                                        <div className="two">
                                            <p className="">Rodrigo Curiel Gomez</p>
                                        </div>
                                    </div>
                                    <div className="fullwidth box">
                                        <div className="one">
                                            <p className="uppercase text-nowrap">Birth Date:</p>
                                        </div>
                                        <div className="two">
                                            <p className="">03/12/1980</p>
                                        </div>
                                    </div>
                                    <div className="fullwidth box">
                                        <div className="one">
                                            <p className="uppercase">Address:</p>
                                        </div>
                                        <div className="two">
                                            <p className="">1234, Direct drive, Daytona Beach, Fl, USA</p>
                                        </div>
                                    </div>
                                    <div className="fullwidth box">
                                        <div className="one">
                                            <p className="uppercase">Phone:</p>
                                        </div>
                                        <div className="two">
                                            <p className="">1 234 567 89 10</p>
                                        </div>
                                    </div>
                                    <div className="fullwidth box">
                                        <div className="one">
                                            <p className="uppercase">Email:</p>
                                        </div>
                                        <div className="two">
                                            <p className="">james@anderson.com</p>
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
                                <h3 className="font-accident-two-normal uppercase title">Employment</h3>
                                <div className="dividewhite4"></div>
                                <div className="experience">
                                    <ul className="">
                                        <li className="date">02/2008 - 04/2010</li>
                                        <li className="company uppercase">
                                            <a>
                                                ABC Brodcast Inc. New York.
                           </a>
                                        </li>
                                        <li className="position">Junior Designer</li>
                                    </ul>
                                    <ul className="">
                                        <li className="date">04/2010 - 06/2012</li>
                                        <li className="company uppercase">
                                            <a>
                                                Leo Burnett London Office
                           </a>
                                        </li>
                                        <li className="position">Senior Designer</li>
                                    </ul>
                                    <ul className="">
                                        <li className="date">06/2012 - present</li>
                                        <li className="company uppercase">
                                            <a>
                                                Google Inc. Dublin.
                           </a>
                                        </li>
                                        <li className="position">UI/UX Designer</li>
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
                                <h3 className="font-accident-two-normal uppercase title">Facts About Me</h3>
                                <p className="small">
                                    With the Gridus personal theme it’s possible to make an impressive website
                                    in just 15 minutes.
                                </p>
                                {/* <div className="dividewhite4"></div> */}
                                <div className="dividewhite1"></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Status:</p></div>
                                            <div className="col-sm-8"><p className="">Open to Offers</p></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Desired Salary:</p></div>
                                            <div className="col-sm-8"><p className="">To be Discussed</p></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Education Level:</p></div>
                                            <div className="col-sm-8"><p className="">Advanced Degree, Architecture</p></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Job Type:</p></div>
                                            <div className="col-sm-8"><p className="">Contract, Freelance</p></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Mobility:</p></div>
                                            <div className="col-sm-8"><p className="">Ready to Relocate</p></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Languages:</p></div>
                                            <div className="col-sm-8"><p className="">English, French, Spanish</p></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Position:</p></div>
                                            <div className="col-sm-8"><p className="">Head of Ui/Ux Department</p></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Industry:</p></div>
                                            <div className="col-sm-8"><p className="">Web Development</p></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Speciality:</p></div>
                                            <div className="col-sm-8"><p className="">Web Design, Prototyping, Ux Testing, Ui Design</p></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4"><p className="font-accident-two-bold uppercase">Hobbies:</p></div>
                                            <div className="col-sm-8"><p className="">Books, Piano, Chess</p></div>
                                        </div>
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