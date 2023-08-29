import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Create = () => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const navigate = useNavigate();
    const [ errors, setErrors ] = useState([]);

    const handleSubmit = event => {
		event.preventDefault();
        axios.post('http://localhost:8000/api/pro', {
            title: title,
            price: price,
            description: description
        })
        .then(() => navigate('/'))
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr);
        });

    };

    return (
		<>
			<Link to={'/'}>home</Link>
			<h2>add a product</h2>
			<form onSubmit={ handleSubmit }>
				{ errors.map((err, index) => <p key={ index }>{ err }</p>) }
				<label>title</label>
					<input
						type="text"
						className="form-control"
						onChange={ event => setTitle(event.target.value) }
					/>
                <label>price</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={ event => setPrice(event.target.value) }
                />
                <label>description</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={ event => setDescription(event.target.value) }
                />
				<button className={"btn btn-primary"} onClick={() => navigate('/')}>cancel</button>
				<button type="submit" className="btn btn-primary">add</button>
			</form>
		</>
	);
};

export default Create;