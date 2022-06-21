import React from 'react'
import {Link} from 'react-router-dom';
import './table.css'
function Student() {
  return (
    <>
    <h1>Students Details</h1>
    <Link to="/NewStudents">
    <button style={{backgroundColor:"aqua"}}>Add students</button></Link>
    <table className="table table-bordered border-primary" style={{backgroundColor:"white", marginTop:"120px"}}>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Hitesh</td>
      <td>23</td>
      <td>Mern</td>
      <td>March</td>
      <td><Link to = "/studentEdit">Edit</Link></td>
    </tr>
    <tr>
    <td>Akash</td>
      <td>23</td>
      <td>Mean</td>
      <td>April</td>
      <td><Link to = "/StudentEdit">Edit</Link></td>
     
    </tr>
    <tr>
     
    <td>Ishu</td>
      <td>22</td>
      <td>frontend</td>
      <td>May</td>
      <td><Link to = "/StudentEdit">Edit</Link></td>
    </tr>

   
  </tbody>
</table>
</>
  )
}

export default Student
