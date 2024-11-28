import { Diamond, Crown, Gem } from "lucide-react";

export const categoryIcons = {
  jewelry: {
    icon: Diamond,
    color: "bg-rose-100",
    iconColor: "text-rose-500",
  },
  luxury: {
    icon: Crown,
    color: "bg-violet-100",
    iconColor: "text-violet-500",
  },
  premium: {
    icon: Gem,
    color: "bg-blue-100",
    iconColor: "text-blue-500",
  },
} as const;

export const shops = [
  {
    id: 1,
    name: "Tampa Gold & Diamond Exchange",
    address: "2223 N Westshore Blvd, Tampa, FL 33607",
    phone: "(813) 555-0123",
  },
  {
    id: 2,
    name: "Miami Luxury Pawn",
    address: "1442 Brickell Ave, Miami, FL 33131",
    phone: "(305) 555-0456",
  },
  {
    id: 3,
    name: "Orlando Premium Pawnbrokers",
    address: "7649 International Dr, Orlando, FL 32819",
    phone: "(407) 555-0789",
  },
  {
    id: 4,
    name: "Jacksonville Gold Buyers",
    address: "4375 Southside Blvd, Jacksonville, FL 32216",
    phone: "(904) 555-0321",
  },
  {
    id: 5,
    name: "St. Petersburg Luxury Exchange",
    address: "2150 34th St N, St. Petersburg, FL 33713",
    phone: "(727) 555-0654",
  },
  {
    id: 6,
    name: "Gainesville Premium Pawn",
    address: "3501 SW Archer Rd, Gainesville, FL 32608",
    phone: "(352) 555-0987",
  },
  {
    id: 7,
    name: "Pensacola Gold & Jewelry",
    address: "6235 N Davis Hwy, Pensacola, FL 32504",
    phone: "(850) 555-1234",
  },
  {
    id: 8,
    name: "Tallahassee Luxury Pawns",
    address: "2020 W Pensacola St, Tallahassee, FL 32304",
    phone: "(850) 555-5678",
  },
  {
    id: 9,
    name: "Daytona Premium Exchange",
    address: "1200 W International Speedway Blvd, Daytona Beach, FL 32114",
    phone: "(386) 555-9012",
  },
  {
    id: 10,
    name: "Fort Lauderdale Gold Center",
    address: "801 E Commercial Blvd, Fort Lauderdale, FL 33334",
    phone: "(954) 555-3456",
  },
  {
    id: 11,
    name: "Sarasota Luxury Pawnbrokers",
    address: "3501 S Tamiami Trail, Sarasota, FL 34239",
    phone: "(941) 555-7890",
  },
  {
    id: 12,
    name: "West Palm Premium Pawn",
    address: "2451 Okeechobee Blvd, West Palm Beach, FL 33409",
    phone: "(561) 555-4321",
  },
];