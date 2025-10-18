"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {services} from "@/constants/constants";



export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-16 gap-16"
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-white">Services I Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-gray-800 border-gray-700 hover:scale-105 transition-transform"
          >
            <CardHeader className="flex flex-col items-center justify-center text-center space-y-2">
              {service.icon}
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className={"text-justify"}>{service.description}</CardDescription>
              
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
