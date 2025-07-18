import React from 'react';
import InlineAppointment from '../components/InlineAppointment';
import PopupButton from '../components/PopupButton';

// --- Styling direkt in der Komponente für einfache Integration ---
const styles = {
  page: {
    fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: '#333',
    maxWidth: '900px',
    margin: '40px auto',
    padding: '20px',
    '--sentrix-primary-color': '#007bff', // Ihre Haupt-Markenfarbe hier anpassen!
    '--sentrix-light-gray': '#f4f7f9',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  h1: {
    fontSize: '2.5rem',
    color: '#1a1a1a',
    marginBottom: '10px',
  },
  p: {
    fontSize: '1.1rem',
    color: '#666',
  },
  section: {
    backgroundColor: 'var(--sentrix-light-gray)',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '30px',
    marginBottom: '40px',
    textAlign: 'center',
  },
  h2: {
    fontSize: '1.8rem',
    marginBottom: '10px',
  },
  inlineWrapper: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    marginTop: '20px',
  },
  buttonWrapper: {
    marginTop: '20px',
    transform: 'scale(1.1)', // Macht den Button etwas prominenter
  }
};

/**
 * Eine komplette Seite zur Anzeige der Google Appointment Booking Optionen,
 * gestyled für das "Sentrix" Projekt.
 */
const SentrixAppointmentPage = () => {
  // WICHTIG: Ersetzen Sie diese URL mit Ihrer eigenen Google Calendar URL
  const appointmentUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ22Jutl-pQtPoa65XNup3JXllJl8ZhLgjiSgmat-aN_-lN043e0hQ1vuUBvMlvBPRVAtcO3MUWX?gv=true";

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.h1}>Gesprächstermin vereinbaren 🗓️</h1>
        <p style={styles.p}>
          Buchen Sie schnell und unkompliziert einen passenden Termin für Ihr Anliegen.
        </p>
      </header>

      {/* --- Sektion 1: Popup Button --- */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Option 1: Schnelles Popup</h2>
        <p style={styles.p}>Klicken Sie auf den Button, um den Kalender in einem Pop-up zu öffnen.</p>
        <div style={styles.buttonWrapper}>
          <PopupButton
            scheduleUrl={appointmentUrl}
            label="Termin auswählen"
            color="var(--sentrix-primary-color)" // Verwendet Ihre Markenfarbe
          />
        </div>
      </section>

      {/* --- Sektion 2: Inline Kalender --- */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Option 2: Direkte Ansicht</h2>
        <p style={styles.p}>Oder wählen Sie Ihren Termin direkt hier auf der Seite aus.</p>
        <div style={styles.inlineWrapper}>
          <InlineAppointment scheduleUrl={appointmentUrl} />
        </div>
      </section>
    </div>
  );
};

export default SentrixAppointmentPage;