import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './compoents/Sidebar';
import MainContent from './compoents/MainContent';
import 'react-calendar/dist/Calendar.css';


function App() {
  const [theme, setTheme] = useState('light');
  const [showSidebar, setShowSidebar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        // Mobile devices (less than 480px)
        setIsMobile(true);
        setShowSidebar(false);
      } else if (window.innerWidth >= 480 && window.innerWidth < 768) {
        // Tablets (between 480px and 768px)
        setIsMobile(false);
        setShowSidebar(true);
      } else {
        // Laptops and desktops (greater than or equal to 768px)
        setIsMobile(false);
        setShowSidebar(true);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Set showSidebar to false by default for mobile devices
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    }
  }, []);
  return (
    <div className={`App`}>
      <Sidebar isOpen={showSidebar && !isMobile} toggleSidebar={toggleSidebar} />
      <div className={`main-content`}>
        <MainContent theme={theme} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
}

export default App;