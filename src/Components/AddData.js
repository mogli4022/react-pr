import { useState } from "react"
import axios from 'axios'
function AddData() {

    const [notesData, setnotesData] = useState({
        title:'',
        content:''
    })

    const handleChange = (e) => {
        setnotesData({
            ...notesData,
            [e.target.name]:e.target.value
        })
    }

    const addNotes = () => {
        axios.post("http://localhost:5000/notes", notesData)
        .then((response) => {
           
                alert("Data Is added")
            console.log(response.data);
        })
        .catch((e) => {
            console.log("add  error", e);
        })
        window.location.reload();
    }

    return ( 
        <>
        <h1>Add Data</h1>
        <div>
        <h3>title:</h3>
        <input type="text" name="title" value={notesData.title} onChange={handleChange} required/>
        <h3>content:</h3>
        <input type="text" name="content" value={notesData.content} onChange={handleChange} required/>
        <div style={{marginTop:"15px"}}><button onClick={addNotes}>Add</button></div>
        </div>
        </>
     );
}

export default AddData;