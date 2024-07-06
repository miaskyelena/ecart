import React, { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const MyScrollbar = ({ children }) => {
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      const ps = new PerfectScrollbar(containerRef.current, { suppressScrollY: true });
      return () => ps.destroy();
    }
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', maxHeight: '500px', overflowX: 'scroll', overflowY: 'hidden' }}>
      {children}
    </div>
  );
};

export default MyScrollbar;