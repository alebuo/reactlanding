import React from "react";

const Header = () => {
    function cambioTema(){
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-bs-theme', newTheme);
    }

  return (
    <div>
        <header className="sticky-top">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Navigation bar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/index.html">E-Learning.AR</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbars1" aria-controls="navbars1" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbars1">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#registerform"><i
                                    className="bi bi-pencil-square"></i> Register Now</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                   aria-expanded="false">Social Networks</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="https://twitter.com/" target="_blank" rel="noreferrer"><i
                                        className="fs-4 bi bi-twitter"></i> Twitter</a></li>
                                    <li><a className="dropdown-item" href="https://instagram.com/" target="_blank" rel="noreferrer"><i
                                        className="fs-4 bi bi-instagram"></i> Instagram </a></li>
                                    <li><a className="dropdown-item" href="https://facebook.com/" target="_blank" rel="noreferrer"><i
                                        className="fs-4 bi bi-facebook"></i> Facebook</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <button onClick={cambioTema}
                                        className="btn btn-dark bg-secondary btn-sm px-1 me-sm-3">Dark/Light
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    </div>
  );
}
export default Header;