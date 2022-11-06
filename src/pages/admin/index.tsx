import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const AdminPage: React.FC = () => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        useEffect( () => {
          const CMS = require('netlify-cms-app');
          const uploadcare = require('netlify-cms-media-library-uploadcare');

          CMS.registerMediaLibrary(uploadcare)
          CMS.init();
        }, [])

        return <div id='netlify-modal' />;
      }}
    </BrowserOnly>
  );
};

export default AdminPage;