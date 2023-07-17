
import imge from "../../../public/assets/404.jpg";
function NotFoundPage() {
  return (
    <div className="d-flex flex-column align-items-center">
        <h1 className="text-secondary mt-5">
          404 Página não encontrada!
        </h1>
      <img src={imge} alt="" width={400} />
      
    </div>
  );
}

export default NotFoundPage;
