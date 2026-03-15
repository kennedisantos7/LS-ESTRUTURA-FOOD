/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop from './components/common/ScrollToTop';
import { DiagnosticModalProvider } from './context/DiagnosticModalContext';
import DiagnosticModal from './components/common/DiagnosticModal';

export default function App() {
  return (
    <DiagnosticModalProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<About />} />
            <Route path="servicos" element={<Services />} />
            <Route path="projetos" element={<Projects />} />
            <Route path="contato" element={<Contact />} />
          </Route>
        </Routes>
        <DiagnosticModal />
      </Router>
    </DiagnosticModalProvider>
  );
}


