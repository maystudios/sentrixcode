import React from 'react';
import PropTypes from 'prop-types';

/**
 * Eine Komponente zur Einbettung des Google Calendar Appointment Schedulers.
 * @param {object} props - Die Props der Komponente.
 * @param {string} props.scheduleUrl - Die URL zum Google Calendar Terminplan.
 * @param {string} [props.className] - Optionale CSS-Klassen für das Styling des Containers.
 * @param {object} [props.style] - Optionales Inline-Styling für den Container.
 */
const InlineAppointment = ({ scheduleUrl, className, style }) => {
  if (!scheduleUrl) {
    console.error("InlineAppointment Error: Die 'scheduleUrl' prop wird benötigt.");
    return <div style={{ color: 'red' }}>Fehler: Terminplan-URL fehlt.</div>;
  }

  return (
    <div className={className} style={style}>
      <iframe
        src={scheduleUrl}
        style={{
          border: '0',
          width: '100%',
          height: '650px', // Standardhöhe, kann über CSS überschrieben werden
        }}
        title="Google Calendar Terminbuchung"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

InlineAppointment.propTypes = {
  scheduleUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default InlineAppointment;