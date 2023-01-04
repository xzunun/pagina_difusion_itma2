
import { Link } from 'react-router-dom';

import MascaraCarga from "../../components/MascaraCarga/MascaraCarga";
import Encabezado from "../../components/Encabezado/Encabezado";
import RedesSociales from "../../components/RedesSociales/RedesSociales";
import PiePagina from "../../components/PiePagina/PiePagina";
import BotonSubir from "../../components/BotonSubir/BotonSubir";

import './Industrial.css';

const ContenidoIndustrial = () => {
    return (
        <>
            <div className="card text-white rounded-0 overflow-hidden border-0" style={{ height: '100%' }}>
                <video className="card-img rounded-0 efecto-blur-industrial" autoPlay loop>
                    <source src="assets/video/ind.mp4" type="video/mp4" />
                </video>
                <div className="card-img-overlay d-flex align-items-center fondo-blur-industrial">
                    <div className="px-5">
                        <h5 className="card-title text-start mb-5 titulo-encabezado-industrial">Ingeniería en Gestión Empresarial</h5>
                        <p className="card-text text-end pt-5 subtitulo-encabezado-industrial">
                            Especializate con nosotros en Diseño de Manufactura Sustentable Asistida por Computadora
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
const Industrial = () => {
    return (
        <>
            <MascaraCarga />
            <Encabezado contenido={<ContenidoIndustrial />} />
            <div className="container-xxl mt-5" id="mas">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="section-title text-secondary">Acerca de la carrera<span></span></p>
                            <h1 className="mb-5 text-ind"><i className="bi bi-chat-left-text-fill me-2"></i>Descripción</h1>
                            <p className="mb-4">
                                La Ingeniería Industrial integra prácticas y funciones de recursos humanos, materiales, sistemas financieros y de información, entre otras, para aumentar la productividad de una empresa.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid rounded shadow-lg wow zoomIn" data-wow-delay="0.5s" src="assets/img/industrial/descripcion.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl">
                <div className="container py-5 px-lg-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded shadow-lg wow zoomIn" data-wow-delay="0.5s" src="assets/img/industrial/objetivo.jpg" />
                        </div>
                        <div className="col-lg-6 text-end wow fadeInUp" data-wow-delay="0.1s">
                            <p className="section-title text-secondary">Acerca de la carrera<span></span></p>
                            <h1 className="mb-5 text-ind"><i className="bi bi-bullseye me-2"></i>Objetivo general</h1>
                            <p className="mb-4">
                                Formar profesionales que contribuyan a la gestión de empresas e innovación de procesos; así como al diseño, implementación y desarrollo de sistemas estratégicos de negocios, optimizando recursos en un entorno global, con ética y responsabilidad social.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl shadow-lg fact wow fadeInUp" data-wow-delay="0.1s">
                <div className="container-fluid px-0">
                    <div className="row">
                        <div className="col-md-12 p-5">
                            <div className="wow fadeInUp" data-wow-delay="0.1s">
                                <p className="section-title text-secondary justify-content-start"><span></span>Documentación<span></span>
                                </p>
                                <h1 className="text-start mb-5 text-ind"><i className="bi bi-table me-2"></i>Retícula</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="iframe-container">
                                        <iframe className="responsive-iframe" title="reticula gestion" src="assets/pdf/reticula_industrial.pdf" width="100%" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container py-5 px-lg-5">
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary justify-content-center"><span></span>Carreras<span></span>
                        </p>
                        <h1 className="text-center mb-5 text-ind">Podría interesarte...</h1>
                    </div>
                    <div className="row g-4 justify-content-around">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item-industrial d-flex flex-column text-center rounded shadow">
                                <div className="mb-3">
                                    <img src="assets/img/carteles/cartel_IGE.jpg" className="w-100 rounded" alt="" />
                                </div>
                                <h5>Ingeniería en Gestión Empresarial</h5>
                                <Link to="/ges" className="btn btn-square"><i className="bi bi-caret-right-fill"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item-industrial d-flex flex-column text-center rounded shadow">
                                <div className="mb-3">
                                    <img src="assets/img/carteles/cartel_ISIC.jpg" className="w-100 rounded" alt="" />
                                </div>
                                <h5>Ingeniería en Sistemas Computacionales</h5>
                                <Link to="/sis" className="btn btn-square"><i className="bi bi-caret-right-fill"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RedesSociales estilo="redes-sociales-industrial" />
            <div className="container-xxl py-5">
                <div className="container py-5 px-lg-5">
                    <div className="wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary justify-content-center"><span></span>Areas de oportunidad<span></span>
                        </p>
                        <h1 className="text-center mb-5 text-secondary">Titulate y desenvuelvete en areas como:</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                            <div id="carouselExampleCaptions" className="carousel slide shadow-lg" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="assets/img/sistemas/oportunidad_01.jpg" className="d-block w-100 rounded" alt="..." />
                                        <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-ind">
                                            <h5 className="fs-4 fw-light">Empresas públicas o privadas.</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/img/sistemas/oportunidad_02.jpg" className="d-block w-100 rounded" alt="..." />
                                        <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-ind">
                                            <h5 className="fs-4 fw-light">Empresas nacionales e internacionales.</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/img/sistemas/oportunidad_03.jpg" className="d-block w-100 rounded" alt="..." />
                                        <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-ind">
                                            <h5 className="fs-4 fw-light">Micro, pequeñas, medianas y grandes empresas.</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/img/sistemas/oportunidad_04.jpg" className="d-block w-100 rounded" alt="..." />
                                        <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-ind">
                                            <h5 className="fs-4 fw-light">Entidades gubernamentales en sus tres niveles.</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/img/sistemas/oportunidad_05.jpg" className="d-block w-100 rounded" alt="..." />
                                        <div className="carousel-caption d-none d-sm-block rounded shadow-lg carousel-label-ind">
                                            <h5 className="fs-4 fw-light">Desarrollo de su propia empresa.</h5>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PiePagina estilo="pie-pagina-industrial" />
            <BotonSubir />
        </>
    );
}

export default Industrial;