import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import TopBrands from "./components/top-brands";
import OldTopBrands from "./components/old-top-brands";

// Fix default Leaflet marker icon URLs
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

const App = () => {
  // Amenities data
  const amenities = [
    {
      id: 1,
      name: "Gas Station",
      position: [25.1737019, 75.8574194],
      type: "Gas",
    },
    {
      id: 2,
      name: "Food Court",
      position: [25.1837019, 75.8574194],
      type: "Food",
    },
    {
      id: 3,
      name: "Restroom",
      position: [25.1937019, 75.8574194],
      type: "Restroom",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-50 flex flex-col"
    >
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg max-md:px-4 max-md:py-8 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold tracking-tight">
            Route Refresh
          </h1>
          <p className="mt-4 text-xl font-light">
            Your trusted highway companion for a seamless journey.
          </p>
          {/* <button className="mt-6 px-8 py-3 bg-white text-purple-600 rounded-full font-medium shadow-lg hover:bg-purple-100">
            Explore Amenities
          </button> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12 space-y-12">
        {/* About Section */}
        <section className="flex items-center justify-center">
          <div className="text-center max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Route Refresh brings you India's top network of wayside amenities,
              enhancing highway travel with food plazas, fuel stations, retail
              shops, childcare facilities, hygienic toilets, vehicle repair
              services, and more, ensuring a recharging and comfortable journey
              for all travelers.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Why Choose Route Refresh?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Discover clean, safe, and convenient stops along your route. Whether
            you need fuel, food, or restrooms, we've got you covered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">
                Reliable Locations
              </h3>
              <p className="text-gray-600">
                Every location is verified to ensure quality services and
                facilities.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Interactive Map
              </h3>
              <p className="text-gray-600">
                Easily locate amenities on our user-friendly and responsive map.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                Hygienic Facilities
              </h3>
              <p className="text-gray-600">
                Find restrooms and food courts that meet the highest hygiene
                standards.
              </p>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <OldTopBrands />

        {/* Top Brands Section */}
        <TopBrands />

        {/* Map Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-white shadow-xl rounded-lg p-8">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">
            Explore the Map
          </h2>
          <div className="h-[500px] rounded-lg overflow-hidden shadow-md">
            <MapContainer
              center={[25.1837019, 75.8574194]} // Kota
              zoom={14}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {amenities.map((amenity) => (
                <Marker key={amenity.id} position={amenity.position}>
                  <Popup>
                    <strong>{amenity.name}</strong>
                    <br />
                    {amenity.type} Available
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 <span className="font-bold">Route Refresh</span>. Built
            with ❤️ for a better journey.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default App;
