import React, { Component } from "react";
import SubmissionForm from "../components/SubmissionForm.js";
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
 
const SubmitArticle = () =>  {
    class CreateBook extends Component {
        constructor() {
          super();
          this.state = {
            title: '',
            isbn:'',
            author:'',
            description:'',
            published_date:'',
            publisher:''
          };
        }
      
        onChange = e => {
          this.setState({ [e.target.name]: e.target.value });
        };
      
        onSubmit = e => {
          e.preventDefault();
      
          const data = {
            title: this.state.title,
            isbn: this.state.isbn,
            author: this.state.author,
            description: this.state.description,
            published_date: this.state.published_date,
            publisher: this.state.publisher
          };
      
          axios
            .post('http://localhost:8082/api/books', data)
            .then(res => {
              this.setState({
                title: '',
                isbn:'',
                author:'',
                description:'',
                published_date:'',
                publisher:''
              })
              this.props.history.push('/');
            })
            .catch(err => {
              console.log("Error in CreateBook!");
            })
        };
        render() {
     return (
      <div>
        <h2>Submit Article</h2>
            <p>This will be a form to allow submitters to submit an article for possible 
inclusion in our SEED repo.</p>
            <p>Also the display table of evidence levels for different claims will show here 
for the SE practice selected</p>
            <p>Also the display table of evidence levels for different claims will show here 
for the SE practice selected</p>
            <SubmissionForm/>

        </div>
    );
     }}
}
 
export default SubmitArticle;