import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full py-4 px-8 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-xs text-gray-500 mt-8"
    >
      <span>© {new Date().getFullYear()} Shubh Gupta. All rights reserved.</span>
      <Link href="https://github.com/shubh" target="_blank" className="hover:underline mt-2 sm:mt-0">GitHub</Link>
    </motion.footer>
  );
} 