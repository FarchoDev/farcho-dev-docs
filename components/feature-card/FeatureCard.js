"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FeatureCard = ({ title, description, images, index, link }) => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme;

  // Obtener imagen de acuerdo al tema
  const selectedImage = images?.[currentTheme === "dark" ? "dark" : "light"];

  // Validar y aplicar fallback
  const imageSrc =
    selectedImage && selectedImage.trim() !== ""
      ? selectedImage
      : "/images/fallback.jpg";

  return (
    <motion.div
      className="flex flex-col items-center text-center bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md h-full border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="mb-5 sm:mb-6 w-full aspect-[4/5] relative rounded-xl overflow-hidden">
        {imageSrc && (
          <Link href={link}>
             <Image
               src={imageSrc}
               alt={title}
               fill
               className="object-cover rounded-xl cursor-pointer transition duration-300 hover:brightness-90"
               sizes="(max-width: 768px) 100vw, 50vw"
             />
           </Link>
        )}
      </div>
      <span className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </span>
      <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px] text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
