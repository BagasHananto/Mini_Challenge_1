import userData from "./component/fakeData.json"
import {Container} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
        <Container className="mt-5 w-50">
            {
                userData.map((item,index) => (
                <Link to={`/detailProfile/${index}`}>
                <div key={item.id} className="w-100 d-flex align-items-center mb-3 bg-light p-2 rounded shadow border border-dark">
                    <div className="me-3" style={{ width:"5rem",height:"5rem" }}>
                        <img src={item.image} alt={item.username} className="w-100 rounded-circle" style={{ width:"5rem",height:"5rem",objectFit:"cover" }}/>
                    </div>
                    <div>
                        <div className="fw-bold text-dark text-decoration-none">@{item.username}</div>
                        <div className="fw-bold text-dark text-decoration-none">Followers: {item.follower}</div>
                    </div>
                </div>
                </Link>
                ))
            }
        </Container>
        </>

    );

}