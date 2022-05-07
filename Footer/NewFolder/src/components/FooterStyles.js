import styled from 'styled-components';
   
export const Box = styled.div`
font-family: 'Arial', 'Helvetica', 'sans-serif';
  border-top: 2px solid #F4C70C;
  padding: 40px 0;
  background: black;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  float: right;
  margin-left: 60px;
  height: 30px;
`;
   
export const Row = styled.div`
  display: flex;
  justify-content: space-around;

   width: 100%;
`
   
export const FooterLink = styled.a`
 display: grid;
 flex-direction: row;
  color: #F4C70C  ;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  max-width:none;
  &:hover {
      color: red;
      transition: 200ms ease-in;
  }
`

export const FooterLink2 = styled.a `
display: flex;

 color: #F4C70C;
 padding-left: 15 px;
 margin-right: 15px;
 margin-bottom: 20px;
 font-size: 18px;
 text-decoration: none;
 max-width:none;
 &:hover {
     color: red;
     transition: 200ms ease-in;
 }

`

export const FooterLink3 = styled.a `
display: flex;
justify-content: space-between;
 color: #F4C70C;
 margin-bottom: 20px;
 font-size: 18px;
 text-decoration: none;
 max-width:none;
 &:hover {
     color: red;
     transition: 200ms ease-in;
 }

`