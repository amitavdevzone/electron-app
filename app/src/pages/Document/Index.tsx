import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../../components/common/Heading';

const DocumentIndex: React.FC = () => {
  const nav = useNavigate();
  const [files, setFiles] = useState([]);
  const setup = async () => {
    const resp = await axios.get('http://localhost:8000/api/upload');
    setFiles(files.concat(resp.data));
  };
  useEffect(() => {
    setup();
  }, []);
  return (
    <div>
      <section className="flex justify-between align-bottom">
        <Heading type="h1" text="Manage documents" />
        <button
          className="border px-4 py"
          onClick={() => nav('/document/upload')}
        >
          Upload file
        </button>
      </section>
      <ul className="pt-2">
        {files &&
          files.length > 0 &&
          files.map((file) => {
            const styling = 'py-4 border-b last:border-b-0';
            return (
              <li key={file} className={styling}>
                {file}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default DocumentIndex;
