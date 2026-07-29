import "./App.css";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Dashboard from "./components/Dashboard";
import HotelList from "./components/HotelList";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <SearchBar />

        <Dashboard />

        <HotelList />

        <BookingForm />
      </div>
    </div>
  );
}

export default App;
