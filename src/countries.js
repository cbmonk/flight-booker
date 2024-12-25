// countries.js
const countries = [
    { country: "Afghanistan", cities: ["Kabul"] },
    { country: "Albania", cities: ["Tirana"] },
    { country: "Algeria", cities: ["Algiers"] },
    { country: "Argentina", cities: ["Buenos Aires", "Córdoba", "Rosario"] },
    { country: "Australia", cities: ["Sydney", "Melbourne", "Brisbane"] },
    { country: "Austria", cities: ["Vienna"] },
    { country: "Bangladesh", cities: ["Dhaka"] },
    { country: "Belgium", cities: ["Brussels", "Antwerp", "Ghent"] },
    { country: "Brazil", cities: ["São Paulo", "Rio de Janeiro", "Brasília"] },
    { country: "Canada", cities: ["Toronto", "Montreal", "Vancouver"] },
    { country: "China", cities: ["Beijing", "Shanghai", "Guangzhou"] },
    { country: "Egypt", cities: ["Cairo", "Alexandria", "Giza"] },
    { country: "France", cities: ["Paris", "Marseille", "Lyon"] },
    { country: "Germany", cities: ["Berlin", "Munich", "Hamburg"] },
    { country: "India", cities: ["Mumbai", "Delhi", "Bangalore"] },
    { country: "Indonesia", cities: ["Jakarta", "Surabaya", "Bandung"] },
    { country: "Italy", cities: ["Rome", "Milan", "Naples"] },
    { country: "Japan", cities: ["Tokyo", "Yokohama", "Osaka"] },
    { country: "Mexico", cities: ["Mexico City", "Guadalajara", "Monterrey"] },
    { country: "Nigeria", cities: ["Lagos", "Abuja", "Kano"] },
    { country: "Philippines", cities: ["Manila", "Quezon City", "Davao City"] },
    { country: "Russia", cities: ["Moscow", "Saint Petersburg", "Novosibirsk"] },
    { country: "South Africa", cities: ["Johannesburg", "Cape Town", "Durban"] },
    { country: "Spain", cities: ["Madrid", "Barcelona", "Valencia"] },
    { country: "Thailand", cities: ["Bangkok", "Chiang Mai", "Phuket"] },
    { country: "United Kingdom", cities: ["London", "Birmingham", "Manchester"] },
    { country: "United States", cities: ["New York", "Los Angeles", "Chicago"] },
    // Add more countries here as needed
  ];
  
// Create a function to format countries with cities for display
export const formattedCountries = countries.flatMap(({ country, cities }) => {
    return cities.map(city => `${country} - ${city}`);
  });