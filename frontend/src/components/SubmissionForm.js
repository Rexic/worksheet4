import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(axios
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
);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("title")} placeholder="Title" />
      <p><input {...register("authors")} placeholder="Authors" /></p>
      <p><input {...register("source")} placeholder="Source" /></p> 
      <p><input {...register("pubyear")} placeholder="Publication Year" /></p>
      <p><input {...register("doi")} placeholder="DOI" /></p>
     
      <select {...register("sepractice")}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programmin</option>
      </select>
      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
export default SubmissionForm;