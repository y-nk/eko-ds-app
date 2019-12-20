import { useState, useEffect } from 'react';

export default (setXY, autoRelease = true) => {
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const mousemove = (e) => setXY({
      x: e.clientX - window.innerWidth * 0.5,
      y: e.clientY - window.innerHeight * 0.5,
    });

    const mouseup = () => {
      if (autoRelease) setDragging(false);
    };

    if (dragging) {
      window.addEventListener('mousemove', mousemove);
      window.addEventListener('mouseup', mouseup);
    } else {
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mouseup', mouseup);
    }

    return () => {
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mouseup', mouseup);
    };
  }, [autoRelease, dragging, setXY]);

  return { dragging, setDragging };
};
