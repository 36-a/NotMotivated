'use client';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
    return <motion.main className="mx-auto mt-[15px] max-w-[80%]">{children}</motion.main>;
}
