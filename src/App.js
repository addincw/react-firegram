import React, { useState } from 'react';
import Title from './components/Title';
import FormUpload from './components/FormUpload';
import ImageGrid from './components/ImageGrid';
import ImageModal from './components/ImageModal';

function App() {
  const [selectedImage, setSelectedImage] = useState('');

  return (
    <div className="App">
      <Title />

      <FormUpload />

      <ImageGrid setSelectedImage={setSelectedImage} />

      {selectedImage && <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default App;
