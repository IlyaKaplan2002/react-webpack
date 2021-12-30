import React from 'react';

const App = () => {
  return (
    <>
      Для того, чтобы подготовить сборку нужно запустить:
      <ul>
        <li>npm i</li>
        <li>npm run prepare</li>
      </ul>
      и поменять в файле package.json, пункте &ldquo;homepage&ldquo; ilyakaplan2002 на свой
      username, a react-webpack на свое название репозитория
    </>
  );
};

export default App;
