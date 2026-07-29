function BookingForm() {
  return (
    <div className="booking-form">
      <h2>Book Your Stay</h2>

      <input
        type="text"
        placeholder="Full Name"
      />

      <input
        type="email"
        placeholder="Email"
      />

      <input
        type="number"
        placeholder="Guests"
      />

      <select>
        <option>Standard Room</option>
        <option>Deluxe Room</option>
        <option>Suite</option>
      </select>

      <button>
        Confirm Booking
      </button>
    </div>
  );
}

export default BookingForm;
