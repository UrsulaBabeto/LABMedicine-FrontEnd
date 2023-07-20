
import imge from "../../../public/404.jpg";

import './NotFoundPage.css'
function NotFoundPage() {
  return (
    <div className="notFoundContainer">
        <h1 className="text404">
          404 Página não encontrada!
        </h1>
      <img src={imge} alt="" width={400} />
      
    </div>
  );
}

export default NotFoundPage;
