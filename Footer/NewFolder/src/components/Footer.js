import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  FooterLink2,
  FooterLink3,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
  
      <Container>
        <Row>
          <Column>
      
            <FooterLink href="#">Contact Us</FooterLink>
    
          </Column>
          <Column>
    
            <FooterLink2 href="#">Privacy</FooterLink2>
            <FooterLink2 href="#">Terms</FooterLink2>
        
          </Column>
 
          <Column>
     
            <FooterLink3 href="https://www.facebook.com/AmarilloBeerCompanion">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink3>
            <FooterLink3 href="https://www.instagram.com/amarillobeercompanion/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink3>
            <FooterLink3 href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px", width: "86px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink3>
       
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;