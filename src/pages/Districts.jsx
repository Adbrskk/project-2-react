import { Link } from "react-router-dom";
import { districtsData } from "../data";

function Districts() {
  return (
    <div>
      <h2>Районы</h2>

      <div className="places-grid">
        {districtsData.map((district) => (
          <Link
            to={`/districts/${district.id}`}
            key={district.id}
            className="place-card"
          >
            <div className="place-info">
              <h3>{district.name}</h3>
              <p>{district.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Districts;