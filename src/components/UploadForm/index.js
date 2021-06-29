import { useState } from 'react';
import ProgressBar from '../ProgressBar';

function UploadForm() {

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null)

  const types = ['image/png', 'image/jpeg'];

  const uploadHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file: png or jpeg!');
    }
  }

  return (
    <form className="form__upload">
      <label className="form__upload-label">
        <input className="form__upload-input" type="file" onChange={uploadHandler} />
        <span className="form__upload-add">+</span>
      </label>
      <div className="form__output">
        { error &&
          <div className="form__output-error">
            { error }
          </div>
        }
        { file &&
          <div className="form__output-name">
            { file.name }
          </div>
        }
        { file &&
          <ProgressBar file={file} setFile={setFile} />
        }
      </div>
    </form>
  )
}

export default UploadForm;
