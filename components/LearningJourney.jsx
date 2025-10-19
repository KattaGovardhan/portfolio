import { motion } from "framer-motion";
export default function LearningJourney() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl w-full"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Learning Journey
      </h2>

      <div className="relative border-l border-gray-700 ml-6 space-y-8">
        <div className="absolute top-0 left-[-6px] w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="pl-6">
          <h3 className="text-lg font-semibold text-white">
            2020 – 2024: B.Tech in Computer Science
          </h3>
          <p className="text-gray-400 text-sm">
            Built a strong foundation in algorithms, data structures, and full
            stack development.
          </p>
        </div>

        <div className="absolute top-[100px] left-[-6px] w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="pl-6">
          <h3 className="text-lg font-semibold text-white">
            2023 – Present: Exploring Advanced Development
          </h3>
          <p className="text-gray-400 text-sm">
            Focused on scalable web apps, REST APIs, and mobile development
            using React Native & Node.js.
          </p>
        </div>

        <div className="absolute top-[200px] left-[-6px] w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="pl-6">
          <h3 className="text-lg font-semibold text-white">
            2024 – Present: Real-World Projects & Open Source
          </h3>
          <p className="text-gray-400 text-sm">
            Collaborating on open-source contributions, improving UI/UX and
            backend performance.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
