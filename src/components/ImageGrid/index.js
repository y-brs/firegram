import useFirestore from '../../hooks/useFirestore';

function ImageGrid() {
  const { docs } = useFirestore('images');
  console.log(docs);

  return (
    <div className="img-grid">
      { docs && docs.map(doc => (
        <div className="img-wrap" key={doc.id}>
          <img src={doc.url} alt={doc.desc} />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid;
