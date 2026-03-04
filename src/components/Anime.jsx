

import React, { useState } from "react";

function Anime() {
  const [query, setQuery] = useState("");
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAnime = async () => {
    if (!query) return;

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${query}&limit=10`
      );

      const data = await res.json();
      setAnime(data.data || []);
    } catch (err) {
      setError("Failed to fetch anime");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="box">
      <h3>Search Anime</h3>

      <input
        placeholder="Search anime (e.g., naruto)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={fetchAnime}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}

      {!loading && anime.length > 0 && (
        <div className="anime-grid">
          {anime.map((a, index) => (
            <div className="anime-card" key={index}>
              <img
                src={
                  a.images?.jpg?.image_url ||
                  "https://via.placeholder.com/220x260?text=No+Image"
                }
                alt={a.title}
                width="200"
              />

              <h2>{a.title}</h2>
              <p><b>English:</b> {a.title_english || "N/A"}</p>
              <p><b>Japanese:</b> {a.title_japanese || "N/A"}</p>

              <p><b>Type:</b> {a.type}</p>
              <p><b>Episodes:</b> {a.episodes || "N/A"}</p>
              <p><b>Status:</b> {a.status}</p>
              <p><b>Score:</b> ⭐ {a.score || "N/A"}</p>
              <p><b>Rank:</b> {a.rank}</p>
              <p><b>Popularity:</b> {a.popularity}</p>
              <p><b>Members:</b> {a.members}</p>

              <p><b>Season:</b> {a.season} {a.year}</p>
              <p><b>Rating:</b> {a.rating}</p>
              <p><b>Duration:</b> {a.duration}</p>
              <p><b>Source:</b> {a.source}</p>

              <p><b>Aired:</b> {a.aired?.string}</p>

              <p>
                <b>Genres:</b>{" "}
                {a.genres?.map((g) => g.name).join(", ")}
              </p>

              <p>
                <b>Studios:</b>{" "}
                {a.studios?.map((s) => s.name).join(", ")}
              </p>

              {a.trailer?.url && (
                <p>
                  <a href={a.trailer.url} target="_blank" rel="noreferrer">
                    Watch Trailer
                  </a>
                </p>
              )}

              <p><b>Synopsis:</b></p>
              <p>{a.synopsis}</p>

              {a.background && (
                <>
                  <p><b>Background:</b></p>
                  <p>{a.background}</p>
                </>
              )}

              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Anime;
