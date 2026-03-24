import type { Metadata } from "next";
import BookingClient from "./booking-client";

export const metadata: Metadata = {
  title: "Book a Universe Connection Session | Aelia Kos",
  description:
    "Schedule a Universe Connection session with Aelia Kos. A space to explore alignment, direction, and your next move.",
  openGraph: {
    title: "Book a Universe Connection Session | Aelia Kos",
    description:
      "Schedule a Universe Connection session with Aelia Kos.",
  },
};

export default function BookingPage() {
  return <BookingClient />;
}
