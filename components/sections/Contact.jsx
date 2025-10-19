"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission",
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="text-gray-100 py-20 px-5 md:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Get in Touch</h2>

      <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg border-gray-700 hover:shadow-xl transition-shadow">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Contact Me</CardTitle>
            <CardDescription>
              Fill out the form below and I will get back to you promptly.
            </CardDescription>
            <p className="text-gray-400 mt-2">📍 Based in Hyderabad, India</p>
          </CardHeader>

          <CardContent>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="focus:border-gray-400 focus:ring-gray-400 px-4 py-2"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="focus:border-gray-400 focus:ring-gray-400 px-4 py-2"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="focus:border-gray-400 focus:ring-gray-400 px-4 py-2"
                />
              </div>

              <Button
                type="submit"
                className="w-full font-medium"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {success && <p className="text-green-400 text-center mt-2">{success}</p>}
              {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            </form>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
