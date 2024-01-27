import "./article.css";

const Article = ({ article01, article02 }) => {
  return (
    <div className="outer-container-article">
      <div className="heading-article">
        <h3 style={{ textAlign: "center", color: "white" }}>Articles</h3>
      </div>
      <div className="inner-container-article">
        <div className="inside-container-1">
          <img
            className="img-container-article"
            src="https://findingtom.com/images/uploads/what-is-medium-com/article-image-00.jpeg"
          />
        </div>

        <div className="inside-container-2">
          <p className="para-container">{article01}</p>
          <a href="">
            <button>Visit the Article</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
