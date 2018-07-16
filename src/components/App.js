import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class App extends Component {
    constructor() {
        super();

        this.state = {
            liked: false
        }
    }

    liked(index) {
        this.setState({liked: true});
    }

    render() {
        return(
            <div>
                <h1>Articles App</h1>
                <Link to="add-article"><h4>Add New Article</h4></Link>
                {
                    this.props.articles.map((article, index) => {
                        return(
                            <div className='card' key={article.id}>
                                <h4>{article.title}</h4>
                                <p>{article.content}</p>
                                <Button onClick={() => this.liked(index)} className="btn btn-default btn-sm">
                                    <span className="glyphicon glyphicon-thumbs-up">{this.state.liked ? 'Liked' : 'Like'}</span>
                                </Button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {articles: state.article}
}

export default connect(mapStateToProps, null)(App);