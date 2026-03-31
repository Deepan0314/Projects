import  Button  from "../Components/Button"
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid md:grid-cols-2 items-center gap-6 mb-16"
    >
      <div>
        <h2 className="text-4xl font-bold mb-4 text-red-700">
          Delicious Food, <br /> Delivered Fast
        </h2>
        <p className="text-gray-600 mb-6">
          Get your favorite meals delivered hot and fresh.
        </p>
        <Button className="bg-yellow-500 text-black px-6 py-3">
          Order Now
        </Button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        alt="food"
        className="rounded-2xl shadow-lg"
      />
    </motion.div>
  );
}