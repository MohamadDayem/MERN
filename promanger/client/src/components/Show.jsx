import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Retrieve = () => {
	const [ pro, setPro ] = useState({});
	const [ loaded, setLoaded ] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();
	
	useEffect(() => {
		axios.get(`http://localhost:8000/api/pro/${id}`)
			.then(res => {
				setPro(res.data);
				setLoaded(true);
			})
			.catch(err => console.log(err));
	}, [ id ]);
	
	const deletepro = id => {
		axios.delete(`http://localhost:8000/api/pro/${id}`)
			.then(() => navigate('/'))
			.catch(err => console.log(err));
	};
	
	return (
		<>
			<h2>pro info:</h2>
			{
				loaded &&
				<div>
					<p>name: { pro.description }</p>
					<button className="btn"><Link to={`/${pro._id}/edit`}>edit</Link></button>
					<button className="btn btn-danger" onClick={ () => deletepro(pro._id) }>delete</button>
				</div>
			}
		</>
	);
}

export default Retrieve;