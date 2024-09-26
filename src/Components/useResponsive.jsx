import { useState, useEffect } from 'react';
const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });
  const checkScreenSize = () => {
    const width = window.innerWidth;
    if (width <= 600) {
      setScreenSize({ isMobile: true, isTablet: false, isDesktop: false });
    } else if (width > 600 && width <= 900) {
      setScreenSize({ isMobile: false, isTablet: true, isDesktop: false });
    } else {
      setScreenSize({ isMobile: false, isTablet: false, isDesktop: true });
    }
  };
  useEffect(() => {
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return screenSize;
};
export default useResponsive;
