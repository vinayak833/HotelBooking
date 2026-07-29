function HotelCard({
  name,
  location,
  price,
  rating,
}) {
  return (
    <div className="hotel-card">
      <img
        src="https://via.placeholder.com/300x200"
        alt={name}
      />

      <h3>{name}</h3>

      <p>{location}</p>

      <p>${price}/night</p>

      <p>⭐ {rating}</p>

      <button>Book Now</button>
    </div>
  );
}

export default HotelCard;
