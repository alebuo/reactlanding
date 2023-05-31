import React from "react";
import imagen1 from "../images/aboutus.png";

const Main = () => {
    return (
        <div>
            <main>
                <div className="px-1 pt-2 my-5 text-center ">
                    <h1 className="display-4 fw-bold text-body-emphasis">THE METAVERSE</h1>
                    <div className="">
                        <div className="container px-2">
                            <img src={imagen1}
                                 className="img-fluid border rounded-3 shadow-lg mb-4 px-4 py-2" alt="Metaverse"
                                 loading="lazy" />
                        </div>
                    </div>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mx-4 my-4">Join a one-of-a-kind interactive panel discussion with the
                            founders of Virbela, Second Life, High Fidelity, and other thought leaders in XR.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                            <a className="btn btn-primary btn-lg px-4 me-sm-3" href="/#registerform" role="button"><i
                                className="bi bi-pencil-square"></i> Register Now</a>
                            <a className="btn btn-outline-primary btn-lg px-4 me-sm-3" href="/#maplocal" role="button"><i
                                className="bi bi-map"></i> Map</a>
                        </div>
                    </div>
                </div>
                <div className="b-1-divider"></div>
                <div className="container mt-5 mb-5 text-center">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>When</h2>
                            <p>Thursday May 13th, 12:00 pm PT (3:00 pm ET) in our Virbela Open Campus.</p>
                        </div>
                        <div className="col-md-4">
                            <h2>What to expect</h2>
                            <p>Join us for an active discussion about the Metaverse and its impact on the future of work
                                with an esteemed panel of experts.</p>
                        </div>
                        <div className="col-md-4">
                            <h2>Topics</h2>
                            <p>Metaverse, role it play in the future of work, virtual worlds, technology
                                advancements.</p>
                        </div>
                    </div>
                    <div className="col-md-12 mb-4">
                        <div id="cajaCentral">
                            <h1 className="py-4"><i className="bi bi-headset-vr"></i> <a href="/#registerform"
                                                                                         className="alert-link"><strong>Register</strong> to
                                the most incredible <strong>event</strong> of the year</a></h1>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 mb-5 text-center">
                    <div className="row">
                        <a id="registerform"> </a>
                        <div className="col-md-12 border rounded-1 shadow-lg mb-4 pb-4 pt-4">
                            <h2 className="fw-bold text-body-emphasis">REGISTER NOW</h2>
                            <p>Register and participate in the event. Do not miss it!</p>
                            <form className="row g-3 needs-validation" method="post" encType="text/plain"
                                  action="mailto:info@e-learning.com">
                                <div className="col-md-4">
                                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="validationCustom01" value=""
                                           required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="validationCustom02" value=""
                                           required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" className="form-control" id="validationCustomUsername"
                                               aria-describedby="inputGroupPrepend" required />
                                            <div className="invalid-feedback">
                                                Please choose a username.
                                            </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationCustom03" className="form-label">City</label>
                                    <input type="text" className="form-control" id="validationCustom03" required />
                                        <div className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationCustom04" className="form-label">State</label>
                                    <select className="form-select" id="validationCustom04" required>
                                        <option selected disabled value="">Country</option>
                                        <option>Argentina</option>
                                        <option>Chile</option>
                                        <option>Uruguay</option>
                                        <option>Bolivia</option>
                                        <option>Perú</option>
                                        <option>Paraguay</option>
                                        <option>México</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationCustom05" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="validationCustom05" required />
                                        <div className="invalid-feedback">
                                            Please provide a valid zip.
                                        </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck"
                                               required />
                                            <label className="form-check-label" htmlFor="invalidCheck">
                                                Agree to terms and conditions
                                            </label>
                                            <div className="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
export default Main;
