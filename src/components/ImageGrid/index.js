import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';

function ImageGrid({ setSelectedImg }) {
  const { docs } = useFirestore('images');

  return (
    <div className="gallery__grid">
      { docs && docs.map(doc => (
        <motion.div
          className="gallery__grid-wrapper"
          key={doc.id}
          onClick={() => setSelectedImg(doc.url)}
          whileHover={{ opacity: 1 }}
          layout
        >
          <motion.img
            className="gallery__grid-image"
            src={doc.url}
            alt={doc.desc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;
