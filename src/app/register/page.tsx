import type { Metadata } from "next";
import { RegisterClient } from "./register-client";

export const metadata: Metadata = {
  title: "Register Interest — Universe Portal",
  description:
    "Register your interest in Universe Portal. Entry unfolds in intentional windows.",
};

export default function RegisterPage() {
  return <RegisterClient />;
}
