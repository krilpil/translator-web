import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
}

const FadeIn = ({ children }: FadeInProps) => (
    // <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
    //     {children}
    // </motion.div>

    <motion.div>
        {children}
    </motion.div>
);

export default FadeIn;
