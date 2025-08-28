import { motion } from "motion/react";

export default function App() {
  return (
     <motion.section
      className="h-screen flex items-center justify-center bg-blue-600 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold">Welcome to Our Portfolio</h1>
    </motion.section>
  )
}
