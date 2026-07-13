'use client';

import { useEffect, useState } from 'react';

// Tikkende stoppeklokke i produkt-mocken — gir følelsen av at appen er i bruk.
export default function LiveTimer() {
  const [seconds, setSeconds] = useState(4 * 3600 + 32 * 60 + 12);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');

  return (
    <span className="timer-chip" aria-hidden="true">
      <span className="rec"></span>
      {h}:{m}:{s}
    </span>
  );
}
