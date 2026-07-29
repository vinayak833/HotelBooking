import HotelCard from "./HotelCard";

function HotelList() {
  const hotels = [
    {
      id: 1,
      name: "Grand Palace",
      location: "Bengaluru",
      price: 120,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Ocean View",
      location: "Goa",
      price: 180,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Mountain Resort",
      location: "Manali",
      price: 150,
      rating: 4.6,
    },
  ];

  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          name={hotel.name}
          location={hotel.location}
          price={hotel.price}
          rating={hotel.rating}
        />
      ))}
    </div>
  );
}

export default HotelList;
