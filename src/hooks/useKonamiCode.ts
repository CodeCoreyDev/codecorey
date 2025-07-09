import { useEffect } from 'react';
import { unlockTheme } from '../utils/progress';

const konamiCode = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

export const useKonamiCode = (onUnlock?: () => void) => {
  useEffect(() => {
    let input: string[] = [];

    const handleKey = (e: KeyboardEvent) => {
      input.push(e.key);
      if (input.length > konamiCode.length) {
        input.shift();
      }

      if (input.join('') === konamiCode.join('')) {
        unlockTheme('glitch');
        onUnlock?.();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onUnlock]);
};
