import React from "react";
import "./footerStyles.css"
import {
  MDBFooter,
  MDBIcon
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter className='bg-light text-center text-white'>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white'>
          Diagnose-me
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;
