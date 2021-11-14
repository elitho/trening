import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { MainPage, TestPage } from 'pages';

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/test'} element={<TestPage />} />
      </Routes>
    </AppContainer>
  );
};
