"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/constants/constants";

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-16 gap-16"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-3">
          Services I Offer
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Helping you build scalable, elegant, and high-performance digital
          solutions — from concept to deployment.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          >
            <Card
              className="flex flex-col h-full justify-between bg-gray-900/50 border border-gray-800 
              hover:border-blue-500 transition-all duration-300 
              shadow-md hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              <CardHeader className="flex flex-col items-center justify-center text-center space-y-3">
                <div className="text-blue-400 text-4xl">{service.icon}</div>
                <CardTitle className="text-lg font-semibold text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col items-center text-center px-4 pb-6">
                <CardDescription className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                <Button
                  variant="outline"
                  className="hover:bg-blue-600 hover:text-white transition-all"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
