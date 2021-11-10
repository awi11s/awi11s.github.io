import React, { Component } from 'react';
import { Button } from '../styles/components'
import PropTypes from 'prop-types';

export default class SubPost extends Component {
    

  render() {
    return (
      <div style={{padding: '2rem'}}>
          <h2>{this.props.title}</h2>
          <p>{this.props.children}</p>
          <Button href={this.props.link}>read here</Button>
      </div>
    );
  }
}

SubPost.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
}

SubPost.defaultProps = {
    title: 'title here',
    link: 'substack link'
}