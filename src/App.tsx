import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import IntroPage from './components/IntroPage';
import ProfileLayout from './components/ProfileLayout';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import InternshipPresentation from './pages/InternshipPresentation';

const App: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IntroPage />} />

          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Navigate to="about" replace />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
          </Route>

          <Route path="projects" element={<Projects />} />
          <Route path="internship-presentation" element={<InternshipPresentation />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
