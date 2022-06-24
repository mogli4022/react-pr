import { useEffect, useState } from "react"
import axios from 'axios'

function UpdateData(props) {

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

    const updateNotes = async () => {
        await axios.put(`http://localhost:5000/notes/${props.id}`, notesData)
        .then((response) => {
            console.log(response.data);
        })
        .catch((e)=> {
            console.log(e);
        })
        window.location.reload();
    }

    return ( 
        <>
        <h1>Update Data</h1>
        <div>
        <h3>title:</h3>
        <input type="text" name="title" value={notesData.title} onChange={handleChange} required/>
        <h3>content:</h3>
        <input type="text" name="content" value={notesData.content} onChange={handleChange} required/>
        <div style={{marginTop:"15px"}}><button onClick={updateNotes}>Update</button></div>
        </div>
        </>
     );
}

export default UpdateData;