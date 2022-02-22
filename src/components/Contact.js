import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import github from './../img/github.png';
import linkedin from './../img/link.png';
import CV from './../img/Resume Mariana Rascón Montaño.pdf';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Fade bottom cascade>Contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                    <a className="cv"><p>Mándanos un correo si quieres ser de los primeros en probar nuestra versión beta!!</p></a>
                    <span id="fooBar">&nbsp;</span>
        </div>
        </Fade>

        </div>);
    }
}
 
export default Contact;