import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card, Text } from '@shopify/polaris';
import FileUploader from './FileUploader';  // ✅ correct


const FileUploader = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log('Uploaded files:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Card sectioned>
      <div {...getRootProps()} style={{ border: '2px dashed #aaa', padding: '20px', textAlign: 'center' }}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <Text variant="headingMd">Drop the files here...</Text>
        ) : (
          <Text variant="headingMd">Drag & drop files here, or click to select</Text>
        )}
      </div>
    </Card>
  );
};

export default FileUploader;
