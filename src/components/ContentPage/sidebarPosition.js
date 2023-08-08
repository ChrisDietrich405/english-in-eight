// import React, { useState, useEffect, useRef } from 'react';
// import Head from 'next/head';
// import styles from '../styles/Home.module.css';

// export default function Home() {
//   const [sidebarPosition, setSidebarPosition] = useState('fixed');
//   const sidebarRef = useRef();
//   const footerRef = useRef();

//   useEffect(() => {
//     const handleScroll = () => {
//       const sidebar = sidebarRef.current;

//       const stopPosition =  sidebar.offsetHeight - 500;

//       if (scrollPosition >= stopPosition) {
//         setSidebarPosition('absolute');
//         sidebar.style.top = `${stopPosition}px`;
//       } else {
//         setSidebarPosition('fixed');
//         sidebar.style.top = '0';
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={styles.container}>

//       <main className={styles.main}>
//         <div className={styles.sidebar} style={{ position: sidebarPosition }} ref={sidebarRef}>
//           {/* Sidebar content goes here */}
//         </div>
//         <div className={styles.content}>
//           {/* Main content goes here */}
//         </div>
//       </main>

//       <footer className={styles.footer} ref={footerRef}>
//         {/* Footer content goes here */}
//       </footer>
//     </div>
//   );
// }
