import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Tenta o scroll imediato
    window.scrollTo(0, 0);

    // Força o scroll no próximo frame de animação (garante que a página carregou)
    const canScroll = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      // Caso haja algum overflow no body/html, resetamos aqui também
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
    });

    return () => cancelAnimationFrame(canScroll);
  }, [pathname]);

  return null;
};

export default ScrollToTop;