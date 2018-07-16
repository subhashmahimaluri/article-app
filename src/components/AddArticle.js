import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { addArticle } from '../actions';

class AddArticle extends Component {
    constructor() {
        super();

        this.state = {
            id: '',
            title: '',
            content: ''
        }
    }

    saveArticle() {
        if(this.state.title.length !==0 && this.state.title.content !== 0) {
            this.props.addArticle(this.state);
            this.setState({title: '', content: ''});
        }
    }

    render() {
        return(
            <div>
                <Link to="/" className="link-home">Home</Link>
                <h2>Add Article</h2>
                <Form className="article-form">
                    <FormGroup>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl value={this.state.title} onChange={event => {this.setState({ title: event.target.value })}} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Content</ControlLabel>
                        <FormControl value={this.state.content} onChange={event => this.setState({content: event.target.value })} componentClass="textarea" />
                    </FormGroup>
                    <Button onClick={() => this.saveArticle()}>Save Article</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, { addArticle })(AddArticle);