"use client";
import { User } from "lucide-react";
import { Button } from "../ui/button";

export default function ContactMe() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Button onClick={handleScrollToContact}>
      {" "}
      <User /> Contact Me
    </Button>
  );
}
