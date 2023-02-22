import { useParams, Link } from "react-router-dom";

import data from "./component/fakeData.json";
console.log(data);
export default function DetailProfiles() {
    const params = useParams();
    const id = parseInt(params.id)
    console.log(id);

    return (
        <>
          <div className="container d-flex flex-column align-items-center mt-5">
            <div className="d-flex flex-column align-items-center bg-secondary w-100 rounded shadow pt-3">
              <div style={{ width:"10rem",height:"10rem"}}>
                <img src={data[id].image} alt={data[id].username} className="w-100 rounded-circle" style={{ border:"5px solid red",width:"10rem",height:"10rem",objectFit:"cover" }}/>
              </div>
              <h5 className="text-light mb-4">@{data[id].username}</h5>
              <div className="d-flex">
                <div className="me-3 d-flex flex-column align-items-center fw-bold">
                  <p>{data[id].follower}</p>
                  <p>Followers</p>
                </div>
                <div className="d-flex flex-column align-items-center fw-bold">
                  <p>{data[id].following}</p>
                  <p>Followings</p>
                </div>
              </div>
            </div>
            <Link to="/">Back</Link>
          </div>
        </>
      );
}