import { Link } from "react-router-dom";
import { districtsData } from "../data";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, запрашиваемая страница не существует.</p>

      <Link to="/" className="back-button">
        Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFound;
