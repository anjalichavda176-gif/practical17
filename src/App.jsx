import { useEffect, useState } from "react";

function App() {
const [students, setStudents] = useState([]);

useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => setStudents(data))
.catch((error) => console.log("Error:", error));
}, []);

return (
<div style={{ textAlign: "center", margin: "30px" }}> <h1>Student List</h1>


  {students.map((student) => (
    <div
      key={student.id}
      style={{
        border: "1px solid gray",
        margin: "10px auto",
        padding: "10px",
        maxWidth: "400px",
      }}
    >
      <h3>{student.name}</h3>
      <p>Email: {student.email}</p>
      <p>City: {student.address.city}</p>
    </div>
  ))}
</div>


);
}

export default App;
