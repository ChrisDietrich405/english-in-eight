import React, { useState, useEffect, useRef } from 'react';


export default function Home() {
  const [sidebarPosition, setSidebarPosition] = useState('fixed');
  const sidebarRef = useRef();
  const footerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = sidebarRef.current;
      const footer = footerRef.current;

      if (!sidebar || !footer) return;

      const stopPosition = footer.offsetTop - sidebar.offsetHeight;
      const scrollPosition = window.scrollY || window.pageYOffset;

      if (scrollPosition >= stopPosition) {
        setSidebarPosition('absolute');
        sidebar.style.top = `${stopPosition}px`;
      } else {
        setSidebarPosition('fixed');
        sidebar.style.top = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
  

      <main className={styles.main}>
        <div className={styles.sidebar} style={{ position: sidebarPosition }} ref={sidebarRef}>
          {/* Sidebar content goes here */}
        </div>
        <div className={styles.content}>
          {/* Main content goes here */}
        </div>
      </main>

      <footer className={styles.footer} ref={footerRef}>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}
