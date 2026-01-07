import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API_URL ="https://jsonplaceholder.typicode.com/comments";
function Comments() {
    const[comments,setComments]=useState([]);

    useEffect(() =>{
        axios.get(API_URL)
        .then(res =>{
            setComments(res.data);

        })},[]);
  return (
    <div>
        <h3>Comments List</h3>
        <table className='="table table-bordered'>
        <thead>
        <tr>
            <td>Id</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>COMMENTS</td>
            <td></td>
        </tr>
        </thead>
        <tbody>
            {comments.map(comment =>(
                <tr key={comment.id}>
                    <td>{comment.id}</td>
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td>{comment.body}</td>
                </tr>
            ))}
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td>
                    <input type="text" className="form-control" placeholder="enter the name" value={name} onChange={(e) =>SVGAnimateTransformElement(e.target.value)}/>
                </td>
                <td>
                    <input type="email" className="form-control" placeholder="enter the name" value={name} onChange={(e) =>SVGAnimateTransformElement(e.target.value)}/>
                </td>
                <td>
                    <input type="text" className="form-control" placeholder="enter the name" value={name} onChange={(e) =>SVGAnimateTransformElement(e.target.value)}/>
                </td>

            </tr>
        </tfoot>
        </table>
    </div>
  )                                                                                                                                                                         
}

export default Comments