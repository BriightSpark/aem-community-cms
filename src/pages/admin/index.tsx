import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import config from '../../../cms/config';

const AdminPage: React.FC = () => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        useEffect( () => {
          const CMS = require('netlify-cms-app');
          const uploadcare = require('netlify-cms-media-library-uploadcare');
          // const cloudinary = require('netlify-cms-media-library-cloudinary');

          CMS.registerMediaLibrary(uploadcare)
          // CMS.registerMediaLibrary(cloudinary)
        
          CMS.init( { config } );
        }, [])

        return <></>;
      }}
    </BrowserOnly>
  );
};

export default AdminPage;