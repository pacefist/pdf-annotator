import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import content from '../content-list/content.json'

import AuthorDetail from '../author-detail/authorDetail'
import Content from '../content/content'

export default class ContentDetail extends Component {
  componentWillMount() {
    const id = parseInt(this.props.match.params.id, 10)
    let filter = content.filter(c => c.id === id)[0]
    this.setState({
      content: filter
    })
  }

  render() {
    const {content} = this.state;
    const author = pick(content, "author", "author_url")

    return (
      <div className="ContentDetail">
        <div className="page-header">
          <h1>
            <a href={content.url}>{content.title}</a>
            &nbsp;
            <AuthorDetail {...author} />
          </h1>

          <Link to="/"><i className="fa fa-arrow-left" aria-hidden="true"></i></Link>
        </div>
        <p>{content.description}</p>
        <Content {...content}/>
      </div>
    );
  }
}

function pick(o, ...props) {
  return props.reduce((current, prop) => {
    if (o[prop]) current[prop] = o[prop];
    return current;
  }, {});
}