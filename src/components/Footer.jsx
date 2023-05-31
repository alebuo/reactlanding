import React, {useState} from "react";
import imagen2 from "../images/METAVERSO-2.png";
import imagen3 from "../images/METAVERSO-3A.png";

const Footer = () => {
    const [tickets] = useState([
        {id: 1, name: 'Tickets A', price: 500.00},
        {id: 2, name: 'Tickets B', price: 400.00},
        {id: 3, name: 'Tickets C', price: 300.00},
        {id: 4, name: 'Tickets D', price: 200.00},
        {id: 5, name: 'Tickets E', price: 100.00}
    ]);
    return (
        <div>
            <footer
                className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-12 text-center mb-3">
                    <h3>TICKET PRICES</h3> |&nbsp;
                    {
                        tickets.map((ticket) => (
                            <span className="fw-normal"><strong>{ticket.name}</strong>: $ {ticket.price} <strong>|</strong> </span>
                        ))
                    }
                </div>
                <div className="col-md-6 imagesMetaversPeople">
                    <img src={imagen2} className="img-fluid border rounded-3 shadow-lg mb-4 px-4 py-2"
                         alt="Metaverse" loading="lazy" />
                </div>
                <div className="col-md-6 imagesMetaversPeople">
                    <img src={imagen3} className="img-fluid border rounded-3 shadow-lg mb-4 px-4 py-2"
                         alt="Metaverse" loading="lazy" />
                </div>
                <a id="maplocal"> </a>
                <iframe className="border rounded-3 shadow-lg mb-4 px-4 py-2"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6570.750846593825!2d-58.64320608123976!3d-34.56936605407338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbbfef9f48aa9%3A0xc4dd49be0d6b62d0!2sComplejo%20Deportivo%20Club%20Atl%C3%A9tico%20River%20Plate!5e0!3m2!1ses!2sar!4v1683841944023!5m2!1ses!2sar"
                        width="100%" height="300" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="col-md-9 mt-1 text-center">
                    <span className="mb-3 mb-md-0 text-body-secondary"> <i className="bi bi-headset-vr"></i> &copy; 2023 E-Learning, Inc | </span>
                    <span className="mb-3 mb-md-0 text-body-secondary"> Address: 5555 Libertador Ave - C.A.B.A | </span>
                    <span className="text-body-secondary">E-Mail: <a
                        href="mailto:info@e-learning.com">info@e-learning.com</a></span>
                </div>
                <div className="col-md-3 mt-1">
                    <ul className="nav  list-unstyled d-flex mt-0">
                        <li className="fs-4 ms-3"><a className="text-body-secondary" href="https://twitter.com"
                                                     target="_blank" rel="noreferrer"> <i className="bi bi-twitter"></i></a></li>
                        <li className="fs-4 ms-3"><a className="text-body-secondary" href="https://instagram.com"
                                                     target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a></li>
                        <li className="fs-4 ms-3"><a className="text-body-secondary" href="https://facebook.com"
                                                     target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a></li>
                    </ul>
                </div>
                <div className="col-md-12 my-5 text-center">
                    <a href="/index.html" className="btn btn-primary btn-lg px-4 me-sm-3">
                        <i className="bi bi-house-door-fill"></i> Home
                    </a></div>
            </footer>
        </div>
    );
}
export default Footer;