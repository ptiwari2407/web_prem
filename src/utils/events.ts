export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  registrationLink: string;
}

export const events: Event[] = [
  {
    title: "Consciousness Workshop",
    date: "March 15, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Virtual Event",
    description: "Join us for an immersive workshop exploring consciousness and self-discovery.",
    registrationLink: "#"
  },
  {
    title: "Matrix Understanding Session",
    date: "March 20, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Life Profoundness Center",
    description: "Deep dive into understanding the matrix and its implications on human consciousness.",
    registrationLink: "#"
  }
]; 