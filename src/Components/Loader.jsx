import { useEffect, useState } from "react";
 
export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
 
  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 40);
 
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);
 
  if (loading) {
    return (
      <div className="ez-loader">
        <div className="ez-loader__inner">
          <div className="ez-loader__brand">
            Arun<span className="ez-loader__reg">®</span>
          </div>
          <div className="ez-loader__bar-wrap">
            <div className="ez-loader__bar" style={{ width: `${progress}%` }} />
          </div>
          <p className="ez-loader__label">Loading portfolio...</p>
        </div>
      </div>
    );
  }
 
  return <>{children}</>;
}