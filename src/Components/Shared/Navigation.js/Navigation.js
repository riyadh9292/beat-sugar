import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import { faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navigation.css";

const Navigation = () => {
  const { user, signOutFromAccount } = useAuth();
  const medicalLogo = <FontAwesomeIcon icon={faHandHoldingMedical} />;

  return (
    <Navbar sticky="top" collapseOnSelect expand="md">
      <Container fluid className="">
        <Navbar.Brand className="fs-1 text-light" as={Link} to="/home">
          {medicalLogo}
        </Navbar.Brand>
        <h3 className="slogan">Don’t sugar coat it </h3>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-5 me-auto">
            <Nav.Link as={NavLink} to="/health-tips">
              Tips
            </Nav.Link>
            <Nav.Link as={NavLink} to="/pricing">
              Pricing
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            {/* if user has email show logout outwise show login */}
            {user.email ? (
              <Nav.Link onClick={signOutFromAccount} as={NavLink} to="/home">
                Logout {user.displayName || user.email}
              </Nav.Link>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
