"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { processSteps } from "@/constants/constants";

export default function DevelopmentProcess() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-5xl w-full text-center"
    >
      <h2 className="text-3xl font-bold mb-10 text-white">
        My Development Process
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 + index * 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <Card
              className="group h-full bg-gray-900/40 hover:bg-gray-900 border border-gray-800 
              hover:border-blue-500 transition-all duration-300 shadow-md 
              hover:shadow-blue-500/30 hover:-translate-y-2"
            >
              <CardHeader className="flex flex-col items-center gap-2 justify-center">
                <div className="flex items-center gap-2 text-blue-400">
                  <span className="text-lg font-semibold">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}.
                  </span>
                  {step.icon}
                </div>
              </CardHeader>
              <CardTitle className="text-lg font-semibold text-white">
                {step.title}
              </CardTitle>
              <CardContent className="mt-2">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
