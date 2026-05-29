import { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Wait 300ms, then trigger fade out animation
          setTimeout(() => {
            setIsFadingOut(true);
            // Wait another 500ms for CSS transition to finish before unmounting
            setTimeout(() => {
              onComplete();
            }, 500);
          }, 300);
          return 100;
        }
        // Random increments to make it feel natural
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className={`preloader-overlay ${isFadingOut ? 'fade-out' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Cargando sitio web"
    >
      <div className="preloader-content">
        <div className="preloader-logo">
          <span>Alex</span><span className="dot">.</span><span>dev</span>
        </div>
        
        <div className="preloader-progress-container">
          <div 
            className="preloader-progress-bar" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        
        <div className="preloader-percentage">{progress}%</div>
        <div className="preloader-loading-text">Cargando Experiencia Premium...</div>
      </div>
    </div>
  );
}
