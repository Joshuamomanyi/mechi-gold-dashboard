
// Sample data for the homepage components

// Featured matches
export const featuredMatches = [
  {
    id: 1,
    date: "24/06/2025",
    homeTeam: {
      name: "Kariobangi Sharks",
      logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhcmslMjBsb2dvfGVufDB8fDB8fHww",
      score: 0
    },
    awayTeam: {
      name: "Kariobangi Sharks",
      logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhcmslMjBsb2dvfGVufDB8fDB8fHww",
      score: 0
    },
    league: "KPL",
    status: "LIVE"
  },
  {
    id: 2,
    date: "21/03/2025",
    homeTeam: {
      name: "Leopards",
      logo: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVvcGFyZHxlbnwwfHwwfHx8MA%3D%3D",
      score: 3
    },
    awayTeam: {
      name: "Shabana FC",
      logo: "https://images.unsplash.com/photo-1568194157720-8bbe7114ebe8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmMlMjBsb2dvfGVufDB8fDB8fHww",
      score: 0
    },
    league: "KPL",
    status: "LIVE"
  },
  {
    id: 3,
    date: "21/03/2025",
    homeTeam: {
      name: "Moldova",
      logo: "https://images.unsplash.com/photo-1621690333089-a62b43dfe138?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsYWclMjBtb2xkb3ZhfGVufDB8fDB8fHww",
      score: null
    },
    awayTeam: {
      name: "Norway",
      logo: "https://images.unsplash.com/photo-1487552292919-eccbbd948cba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5vcndheSUyMGZsYWd8ZW58MHx8MHx8fDA%3D",
      score: null
    },
    league: "FIFA World Cup Qualifiers",
    status: "COUNTDOWN"
  }
];

// Popular leagues
export const popularLeagues = [
  { 
    id: 1, 
    name: "Kenya Premier League", 
    viewers: "45.2K", 
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb3RiYWxsJTIwc3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D" 
  },
  { 
    id: 2, 
    name: "Tanzania Premier League", 
    viewers: "32.7K", 
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyfGVufDB8fDB8fHww" 
  },
  { 
    id: 3, 
    name: "Uganda Premier League", 
    viewers: "28.3K", 
    image: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb3RiYWxsfGVufDB8fDB8fHww" 
  },
  { 
    id: 4, 
    name: "Rwanda Premier League", 
    viewers: "22.9K", 
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMGZvb3RiYWxsfGVufDB8fDB8fHww" 
  }
];

// Popular teams
export const popularTeams = [
  { id: 1, name: "Gor Mahia FC", followers: "482K", avatar: "https://i.pravatar.cc/100?img=1" },
  { id: 2, name: "AFC Leopards", followers: "356K", avatar: "https://i.pravatar.cc/100?img=2" },
  { id: 3, name: "Simba SC", followers: "287K", avatar: "https://i.pravatar.cc/100?img=3" },
  { id: 4, name: "Young Africans SC", followers: "245K", avatar: "https://i.pravatar.cc/100?img=4" },
  { id: 5, name: "KCCA FC", followers: "189K", avatar: "https://i.pravatar.cc/100?img=5" }
];

// Upcoming matches
export const upcomingMatches = [
  { 
    id: 1, 
    title: "Kenya vs Uganda", 
    date: "Jun 15", 
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyfGVufDB8fDB8fHww",
    competition: "AFCON Qualifiers"
  },
  { 
    id: 2, 
    title: "Tanzania vs Rwanda", 
    date: "Jun 22", 
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdGJhbGwlMjBtYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    competition: "World Cup Qualifiers"
  }
];

// Country flags for navigation
export const countries = [
  { id: 1, name: "Algeria", flag: "https://images.unsplash.com/photo-1609939332844-40b13f1e84a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxnZXJpYSUyMGZsYWd8ZW58MHx8MHx8fDA%3D" },
  { id: 2, name: "England", flag: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nbGFuZCUyMGZsYWd8ZW58MHx8MHx8fDA%3D" },
  { id: 3, name: "Kenya", flag: "https://images.unsplash.com/photo-1572260984525-4cb25221c655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2VueWElMjBmbGFnfGVufDB8fDB8fHww" },
  { id: 4, name: "Rwanda", flag: "https://images.unsplash.com/photo-1618951436968-c4e4a59b5237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cndhbmRhJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 5, name: "Tanzania", flag: "https://images.unsplash.com/photo-1612875189423-3fb9867b03ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFuemFuaWElMjBmbGFnfGVufDB8fDB8fHww" },
  { id: 6, name: "Uganda", flag: "https://images.unsplash.com/photo-1618951292647-38185aa8dc55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWdhbmRhJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D" }
];
