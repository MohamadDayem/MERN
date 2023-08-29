import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
    const [ pros, setPros ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pro')
        .then(res => {
            setPros(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
    }, [ pros ]);

    return (
        <>
            <Link to={'/add'}>add a product</Link>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>products</th>
                        <th>price</th>
						<th>actions available</th>
					</tr>
				</thead>
				<tbody>
					{
						loaded && pros.map((pro, index) => (
							<tr key={ index }>
								<td><Link to={`/${pro._id}`}>{ pro.title }</Link></td>
                                <td>{pro.price}</td>
							</tr>
						))
					}
				</tbody>
			</table>
        </>
    );
};

export default List;