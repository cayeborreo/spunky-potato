import React, {
 useState, useEffect, useRef, useCallback 
} from 'react';
import styles from './ProgressIndicator.module.scss';

function useEventListener(eventName, handler, element = window) {
  // Create a ref that stores handler
  const savedHandler = useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);

      // Add event listener
      element.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
}

const ProgressIndicator = () => {
  const [scrollPercent, setScrollPercent] = useState('0%');

  const handler = useCallback(() => {
    const scrollPercent = parseInt(
      (scrollY / (document.body.clientHeight - innerHeight)) * 100
    );

    // Update coordinates
    setScrollPercent(`${scrollPercent}%`);
  }, [setScrollPercent]);

  // Add event listener using our hook
  useEventListener('scroll', handler);

  return (
    <div
      className={styles['progress-indicator']}
      style={{
        background: `linear-gradient(to right,rgb(110, 110, 110) ${scrollPercent},transparent 0)`
      }}
    />
  );
};

export default ProgressIndicator;
