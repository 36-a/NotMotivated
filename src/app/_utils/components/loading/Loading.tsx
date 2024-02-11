'use client';

import { motion } from 'framer-motion';

export const Loading = () => {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{
                loop: Infinity,
                ease: 'linear',
                duration: 1.1,
            }}
            className="size-[40px] rounded-[40px] border-4 border-solid
        border-x-darkened border-b-darkened border-t-main dark:border-x-white dark:border-b-white"
        ></motion.div>
    );
};
