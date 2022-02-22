import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
        <a href={this.props.url} target="_blank">
            <img src={this.props.imageSrc} alt={this.props.title}></img>
            </a>
          <div className="projectInfo">
            <h1>{this.props.title}</h1>
            <span>{this.props.service}</span>
            <a href={this.props.github} target="_blank">
            <p className="gitLink">Github Repository</p>
            </a>
          </div>
        </div> 
            </Fade>);
    }
}
 
export default Project;