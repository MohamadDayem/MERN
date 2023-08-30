import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [ auther, setauther ] = useState({});
	const [ loaded, setLoaded ] = useState(false);
    const [ errors, setErrors ] = useState([]);

	
	useEffect(() => {
		axios.get(`http://localhost:8000/api/auther/${id}`)
			.then(res => {
				setauther(res.data);
				setLoaded(true);
			})
            .catch(err => {})
	}, [id]);
	
	const submitHandler = e => {
		e.preventDefault();
		axios.patch(`http://localhost:8000/api/auther/${id}`, auther)
			.then(res => {
				console.log(res);
				navigate("/");
			})
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
	}
	
	return (
		<>
			<h1>Edit pro</h1>
			{loaded && (
				<form onSubmit={submitHandler}>
                    { errors.map((err, index) => <p key={ index }>{ err }</p>) }
					<div className="form-group">
						<label>Name:</label>
						<input type="text" name="name" id="name" className="form-control" value={auther.name} onChange={e => setauther({ ...auther, name: e.target.value })} />
					</div>
					<div className="form-group">
						<button className={"btn btn-primary"} onClick={() => navigate('/')}>cancel</button>
						<button type="submit" className="btn btn-primary">Update</button>
					</div>
				</form>
			)}
		</>
	);
}

export default Edit;