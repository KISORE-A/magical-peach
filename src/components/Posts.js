import axios from 'axios';
import React, { useEffect, useState } from 'react'
//Mock API URL
const API_URL = "https://jsonplaceholder.typicode.com/posts";


function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                setPosts(res.data)
            })}, []);

            const addPost=()=>{
                if(!title||!body){
                    alert("Fields should not be empty!!!");
                    return;
                }
                axios.post(API_URL,
                    {
                        title,
                        body,
                        userId:1
                    })
                    .then(res =>{
                        setPosts([...posts,res.data]);
                        setTitle("");
                        setBody("");
                        alert("Post Added Successfully!!");
                    })
            }
    return (
        <div> 
            <h3>Post List</h3>
            <table className='table table-bordered'>
                <thead>
                    <td>ID</td>
                    <td>TITLE</td>
                    <td>BODY</td>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                    <td></td>
                        <td>
                        <input className=''></input>

                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Posts