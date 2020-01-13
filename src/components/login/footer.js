import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">A propos</h5>
                        <p>
                            Un site client pour commander un fichier avec la voix
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Liens</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#!">Home</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">contactez nous</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">se connecter</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">s'enregister</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="#"> MOBY </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;