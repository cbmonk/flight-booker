import React, { useState } from 'react';
import './App.css';
import { formattedCountries } from './countries';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(formattedCountries);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [timeSelection, setTimeSelection] = useState("Now"); // New state for time selection

  const handleInputChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredCountries(formattedCountries.filter(country => 
      country.toLowerCase().includes(term)
    ));
  };

  const handleSuggestionClick = (country) => {
    setSearchTerm(country);
    setSelectedCountry(country);
    setShowSuggestions(false);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 100);
  };

  const handleFocus = () => {
    setShowSuggestions(true);
    setFilteredCountries(formattedCountries);
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    if (!selectedCountry) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 800);
    } else {
      console.log(`Booking for: ${selectedCountry} - Time Selection: ${timeSelection}`);
    }
  };

  const handleTimeSelection = (time) => {
    setTimeSelection(time);
  };

  return (
    <div className="App">
      <header>
        <h1>Let's Fly!</h1>
      </header>
      <main>
        <div className="booking-form-container">
          <div className="time-selector">
            <button 
              onClick={() => handleTimeSelection("Now")} 
              className={timeSelection === "Now" ? "selected" : ""}
            >
              Now
            </button>
            <button 
              onClick={() => handleTimeSelection("This Week")} 
              className={timeSelection === "This Week" ? "selected" : ""}
            >
              This Week
            </button>
            <button 
              onClick={() => handleTimeSelection("This Month")} 
              className={timeSelection === "This Month" ? "selected" : ""}
            >
              This Month
            </button>
            <button 
              onClick={() => handleTimeSelection("This Year")} 
              className={timeSelection === "This Year" ? "selected" : ""}
            >
              This Year
            </button>
          </div>
          <form className="booking-form" onBlur={handleBlur}>
            <div className="search-container">
              <input 
                type="text" 
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={handleFocus}
                placeholder="Enter your destination" 
                className={`destination-input ${isShaking ? 'shake' : ''}`}
              />
              <button onClick={handleBookNow} className="book-now-button">Book!</button>
            </div>
            {showSuggestions && filteredCountries.length > 0 && (
              <ul className={`suggestions-list ${showSuggestions ? 'show' : ''}`}>
                {filteredCountries.map((country, index) => (
                  <li 
                    key={index} 
                    onClick={() => handleSuggestionClick(country)}
                    className="suggestion-item"
                  >
                    {country}
                  </li>
                ))}
              </ul>
            )}
          </form>
        </div>
        {selectedCountry && (
          <div className="selected-country">
            <p>Selected Destination: <strong>{selectedCountry}</strong></p>
          </div>
        )}
      </main>
      <footer>
        <p>Powered by NOTHING</p>
      </footer>
    </div>
  );
}

export default App;