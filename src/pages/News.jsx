import { useState, useEffect } from "react";
import "./news.css";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "4590098cb6d6ab429bc237c46e15679d";
  const category = "general";
  const language = "en";
  const country = "us";
  const CACHE_KEY = "cachedNewsData";
  const CACHE_DURATION = 16 * 60 * 1000;

  const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${language}&country=${country}&max=10&apikey=${apiKey}`;

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch news");

      const data = await response.json();
      console.log("Fresh data fetched from API:", data);

      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          data: data.articles || [],
          timestamp: Date.now(),
        })
      );

      setArticles(data.articles || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);

    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const isExpired = Date.now() - timestamp > CACHE_DURATION;

      if (!isExpired) {
        console.log("Using cached data from localStorage");
        setArticles(data);
        setLoading(false);
        return;
      } else {
        console.log("Cache expired, fetching fresh data");
      }
    } else {
      console.log("No cache found, fetching fresh data");
    }

    fetchNews();
  }, []);

  if (loading) return <p className="loading-para">Loading news...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="news-container">
      <h1 className="heading">Global News Hub</h1>
      <p className="sub-para">
        Stay updated with extraordinary news coverage from around the world and
        engage with interactive content.
      </p>

      <button
        onClick={() => {
          console.log(" Manual refresh, bypassing cache");
          localStorage.removeItem(CACHE_KEY);
          window.location.reload();
        }}
        className="amw-btn"
        disabled
      >
        Refresh News
      </button>

      <div className="flex-box">
        {articles.map((article, index) => (
          <div className="flex" key={index}>
            <div className="flex-img-wrapper">
              {article.image && (
                <img
                  className="flex-img"
                  src={article.image}
                  alt={article.title}
                />
              )}
              <p className={`transform-text${index % 2 === 0 ? "" : "-2"}`}>
                {article.title}
              </p>
            </div>

            <div className="flex-absolute">
              <p className="heading-card">{article.source.name}</p>
              <span className="card-para">
                {article.description || "No description available"}
              </span>
              <br />
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More...
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
