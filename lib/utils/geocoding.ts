// Simulated coordinates for Florida cities
const CITY_COORDINATES: Record<string, [number, number]> = {
  'Tampa': [27.9506, -82.4572],
  'Miami': [25.7617, -80.1918],
  'Orlando': [28.5383, -81.3792],
  'Jacksonville': [30.3322, -81.6557],
  'St. Petersburg': [27.7676, -82.6403],
  'Gainesville': [29.6516, -82.3248],
  'Pensacola': [30.4213, -87.2169],
  'Tallahassee': [30.4383, -84.2807],
  'Daytona Beach': [29.2108, -81.0228],
  'Fort Lauderdale': [26.1224, -80.1373],
  'Sarasota': [27.3364, -82.5307],
  'West Palm Beach': [26.7153, -80.0534],
};

export function getCoordinates(address: string): [number, number] {
  // Extract city name from address
  const city = Object.keys(CITY_COORDINATES).find(city => 
    address.toLowerCase().includes(city.toLowerCase())
  );
  
  return city ? CITY_COORDINATES[city] : [27.6648, -81.5158]; // Florida center as fallback
}