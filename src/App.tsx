import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { MainPage } from './MainPage';
import { Resume } from './Resume';
import { Projects } from './Projects';
import { Contact } from './Contact';
import './sass/main.scss';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
