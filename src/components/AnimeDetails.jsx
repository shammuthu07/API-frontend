const AnimeDetails = ({ anime, onBack }) => (
  <div className="details">
    <button onClick={onBack}>⬅ Back</button>
    <h2>{anime?.title}</h2>
    <img src={anime?.images?.jpg?.image_url} alt={anime?.title} />
    <p>{anime?.synopsis}</p>
  </div>
);

export default AnimeDetails;
