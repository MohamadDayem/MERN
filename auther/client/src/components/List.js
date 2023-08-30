import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const List = () => {
    const [ auther, setAuther ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
	const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/auther')
        .then(res => {
            setAuther(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
    }, [ auther ]);

	const deleteauther = id => {
		axios.delete(`http://localhost:8000/api/auther/${id}`)
			.then(() => navigate('/'))
			.catch(err => console.log(err));
	};

    return (
        <>
            <Link to={'/add'}>add a auther</Link>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>name</th>
                        
					</tr>
				</thead>
				<tbody>
					{
						loaded && auther.map((auther, index) => (
							<tr key={ index }>
								<td><Link to={`/${auther._id}`}>{ auther.name }</Link></td>
								<button className="btn"><Link to={`/${auther._id}/edit`}>edit</Link></button>
					<button className="btn btn-danger" onClick={ () => deleteauther(auther._id) }>delete</button>
							</tr>
						))
					}
				</tbody>
			</table>
        </>
    );
};

export default List;