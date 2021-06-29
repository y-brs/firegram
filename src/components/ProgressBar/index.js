import { useEffect } from 'react'
import useStorage from '../../hooks/useStorage';
import { motion } from 'framer-motion';

function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className="progress__bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '100%' }}
    >
    </motion.div>
  )
}

export default ProgressBar;
