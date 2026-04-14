import type { Metadata } from "next";
import { WhatsInsideClient } from "./whats-inside-client";

export const metadata: Metadata = {
  title: "What's Inside — Universe Portal",
  description:
    "Everything included in your Universe Portal membership — the Synchronicity Engine, Live Transmissions, community, and more.",
};

export default function WhatsInsidePage() {
  return <WhatsInsideClient />;
}
