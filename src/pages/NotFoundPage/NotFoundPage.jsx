import "./NotFoundPage.css"

function NotFoundPage() {
  return (
    <>
      <div className="notFoundContainer">
        <h1 className="text404">404 Página não encontrada!</h1>
        <img src="/404.jpg" alt="" width={600} />
      </div>
    </>
  );
}

export default NotFoundPage;
