import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';


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
                    <a className="cv" href={CV} download><p>Download CV</p></a>

        </div>
        </Fade>

        </div>);
    }
}
 
export default Contact;