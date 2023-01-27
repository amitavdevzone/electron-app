import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import Heading from '../../components/common/Heading';

interface IValues {
  file: any;
}

const DocumentUploadPage = () => {
  const nav = useNavigate();
  const ipcRenderer = (window as any).ipcRenderer;
  const initialValues: IValues = { file: null };

  const handleSubmit = (values: IValues) =>
    ipcRenderer.send('file:upload', { file: values.file[0].path });

  useEffect(() => {
    ipcRenderer.on('upload:complete', () => nav('/document/index'));
  }, []);

  return (
    <div>
      <Heading type="h1" text="Upload document" />
      <div className="flex justify-center">
        <div className="p-8 mt-8 border shadow rounded w-1/2">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ setFieldValue }) => (
              <Form>
                <div>
                  <label htmlFor="file">Upload a file</label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={(event) =>
                      setFieldValue('file', event.target.files)
                    }
                  />
                </div>
                <div className="mt-4">
                  <Button text="Save" />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadPage;
