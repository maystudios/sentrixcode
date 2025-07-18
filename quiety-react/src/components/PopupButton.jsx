import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Eine Komponente, die einen Button rendert, um den Google Calendar
 * Terminplan in einem Popup zu öffnen.
 * @param {object} props - Die Props der Komponente.
 * @param {string} props.scheduleUrl - Die URL zum Google Calendar Terminplan.
 * @param {string} [props.label='Termin buchen'] - Der Text, der auf dem Button angezeigt wird.
 * @param {string} [props.color='#039BE5'] - Die primäre Farbe des Buttons.
 * @param {string} [props.className] - Optionale CSS-Klassen für das Styling des Containers.
 */
const PopupButton = ({ scheduleUrl, label, color, className }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Verhindert mehrfaches Ausführen im React Strict Mode
    if (buttonRef.current?.hasChildNodes()) {
      return;
    }

    if (!scheduleUrl) {
        console.error("PopupButton Error: Die 'scheduleUrl' prop wird benötigt.");
        return;
    }

    // Google CSS-Datei laden
    const cssLink = document.createElement('link');
    cssLink.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    cssLink.rel = 'stylesheet';
    document.head.appendChild(cssLink);

    // Google Script laden
    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;

    script.onload = () => {
      if (window.calendar && buttonRef.current) {
        window.calendar.schedulingButton.load({
          url: scheduleUrl,
          color: color,
          label: label,
          target: buttonRef.current,
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup-Funktion: Entfernt Skript und CSS, wenn die Komponente unmounted wird
    return () => {
      if (document.head.contains(cssLink)) {
        document.head.removeChild(cssLink);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [scheduleUrl, label, color]); // Führt den Effekt nur aus, wenn sich diese Props ändern

  if (!scheduleUrl) {
    return <div style={{ color: 'red' }}>Fehler: Terminplan-URL fehlt.</div>;
  }

  return <div ref={buttonRef} className={className}></div>;
};

PopupButton.propTypes = {
  scheduleUrl: PropTypes.string.isRequired,
  label: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

PopupButton.defaultProps = {
  label: 'Termin buchen',
  color: '#039BE5',
};

export default PopupButton;