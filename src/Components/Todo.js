import axios from "axios";
import { useEffect, useState } from "react";

function TOdo() {

    // State Declaration
    const [data, setData] = useState([])
    const [title, setTitle] = useState('')
    const [button, setbutton] = useState(false)
    const [id, setId] = useState('')
    // Hooks
    useEffect(() => {
        axios.get("http://localhost:5000/notes")
            .then((response) => {
                console.log(response.data);
                setData(response.data)
            })
            .catch((e) => {
                console.log("error", e);
            })
    }, [])

    // functions

    const handleChange = e => {
        setTitle(e.target.value)
    }

    const handleAddtitle = e => {
        axios.post("http://localhost:5000/notes", { title: title })
            .then((response) => {
                alert("Data Is added")
                console.log(response.data);
            })
            .catch((e) => {
                console.log("add  error", e);
            })
    }

    const handleUpdateTitle = (e) => {
        console.log("Update Id = ", id);
        axios.put(`http://localhost:5000/notes/${id}`, { title: title })
            .then((response) => {
                alert("Data Is Updated")
                console.log(response.data);
            })
            .catch((e) => {
                console.log("add  error", e);
            })
    }

    const handleUpdate = (e, id) => {
        setbutton(true)
        setId(id)
        console.log("id=",id);
        axios.get(`http://localhost:5000/notes/${id}`)
            .then((response) => {
                setTitle(response.data.title)
            })
            .catch((e) => {
                console.log("error", e);
            })
    }

    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:5000/notes/${id}`)
            .then((response) => {
                console.log(response);
                alert("data is deleted")
            })
            .catch((e) => {
                console.log(e);
            })
        window.location.reload();
    }

    return (
        <>
            <div className="container">

                {/* <!--  FORM  --> */}
                <form className="add form-add text-center my-4">
                    <label htmlFor="add" className="add text-light">{
                        button === false ? "Add a new todo:" :"Update Todo detail:"
                    }</label>
                    <input type="text" className="form-control m-auto" name="add" id="add" value={title} onChange={handleChange} />
                    {
                        button === false ? <button className="submit" onClick={handleAddtitle}>Add</button>
                        : <button className="submit" onClick={handleUpdateTitle}>Update</button>
                    }
                </form>

                {/* <!--  LIST  --> */}
                <ul className="list-group todos mx-auto text-light">
                    {
                        data.map((value, index) => {
                            return (
                                <div key={index}>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <div className="todo-list-division">
                                            <div>
                                                <span>{value.title}</span>
                                            </div>
                                            <div>
                                                <i className="fas fa-edit" onClick={(e) => handleUpdate(e, value._id)}></i>
                                                <i className="far fa-trash-alt delete" onClick={() => handleDelete(value._id)}></i>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            )
                        })
                    }

                </ul>
            </div>
        </>
    );
}

export default TOdo;