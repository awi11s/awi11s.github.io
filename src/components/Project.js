import React, { Component } from 'react';
import { Button } from './Button'
import PropTypes from 'prop-types';

export default class Project extends Component {
    

  render() {
    return (
      <div style={{padding: '2rem'}}>
          <h2>{this.props.title}</h2>
          <p>{this.props.children}</p>
          <Button href={this.props.link}>github</Button>
      </div>
    );
  }
}

Project.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
}

Project.defaultProps = {
    title: 'title here',
    link: 'github link'
}