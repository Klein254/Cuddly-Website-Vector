import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Clients from './pages/Clients';

export type PageView = 'home' | 'about' | 'services' | 'clients' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services navigateTo={setCurrentPage} />;
      case 'clients':
        return <Clients navigateTo={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home navigateTo={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-black bg-white overflow-x-hidden">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow flex flex-col relative w-full pt-20">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
