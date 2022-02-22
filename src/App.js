import * as React from "react";
import { Admin, Resource } from 'react-admin';
// import libraryDataProvider from './dataProvider/LibraryDataProvider';
import jsonServerProvider from 'ra-data-json-server';

import { LibraryList } from './libraries';

const dataProvider = jsonServerProvider('http://mylibrary.dev.it:12300/api');
const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="libraries" list={LibraryList} />
  </Admin>
);

export default App;