import { useEffect, useState } from "react";
import axios from "axios";
import UpdateData from "./UpdateData";
import AddData from "./AddData";
function GetData() {
    
    const [data, setData] = useState([])
    const [display, setDisplay] = useState(false)
    const [id, setId] = useState("")

    useEffect(() => {
        axios.get("http://localhost:5000/notes")
        .then((response) => {
            setData(response.data)
        })
        .catch((e) => {
            console.log("error", e);
        })
    },[])

    const handleDelete= (id) => {
        axios.delete(`http://localhost:5000/notes/${id}`)
        .then((response) => {
            console.log(response);
        })
        .catch((e) => {
            console.log(e);
        })
    }
    const handleUpdate = (id) => {
        setDisplay(true)
        setId(id)
    }


    return ( 
        <>
        {
            display  ? <UpdateData id={id}/> : <AddData/>
        }
        <h1>Get Data</h1>
        {
            data.map((data) => {
                return(
                    <div key={data._id}>
                    <h1>{data.title}</h1>
                    <p>{data.content}</p>
                        <button onClick={() => handleUpdate( data._id)}>Update</button>
                        <button style={{marginLeft:"20px"}} onClick={() => handleDelete(data._id)}>Delete</button>
                    </div>
                )
            })
        }
        </>
     );
}

export default GetData;