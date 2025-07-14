import React, { useCallback, useState } from 'react';
import {
  Page,
  Card,
  DropZone,
  Button,
  Text,
} from '@shopify/polaris';

function FileUploader() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleDrop = useCallback((_dropFiles, acceptedFiles, _rejectedFiles) => {
    const uploadedFile = acceptedFiles[0];
    setFile(uploadedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(uploadedFile);
  }, []);

  const handleUpload = () => {
    if (file) {
      alert(`Uploaded: ${file.name}`);
    } else {
      alert('No file selected');
    }
  };

  return (
    <Page title="React File Uploader">
      <Card sectioned>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {previewUrl && (
            <img
              src={previewUrl}
              alt={file.name}
              style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '6px' }}
            />
          )}
          <DropZone onDrop={handleDrop} allowMultiple={false}>
  {file ? (
    <Text variant="bodyMd">{file.name}</Text>
  ) : (
    <div style={{ textAlign: 'center' }}>
      <img
        src="https://img.icons8.com/ios/50/upload--v1.png"
        alt="Upload Icon"
        width="40"
        style={{ marginBottom: '8px' }}
      />
      <Text variant="bodyMd" tone="subdued">
        Click or drag file to upload
      </Text>
    </div>
  )}
</DropZone>

          <Button onClick={handleUpload} primary>Upload</Button>
        </div>
      </Card>
    </Page>
  );
}

export default function App() {
  return <FileUploader />;
}
