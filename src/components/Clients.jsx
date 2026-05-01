import React from 'react';
import './Clients.css';

const clients = [
  { name: 'Thumbay Hospital Ajman', logo: '/clients/thumbay.png' },
  { name: 'Bone Crepe Chocolate LLC (BCC)', logo: '/clients/bcc.png' },
  { name: 'Olmec Sweet LLC', logo: '/clients/olmec.png' },
  { name: 'Auto Zone', logo: '/clients/autozone.png' },
  { name: 'Master Trailer', logo: '/clients/master_trailer.png' },
  { name: 'Nesto', logo: '/clients/nesto.png' },
  { name: 'Adnoc', logo: '/clients/adnoc.png' }
];

const Clients = () => {
  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="clients-header">
          <p className="trusted-by">TRUSTED BY</p>
          <h2 className="clients-title">Our Clients</h2>
          <div className="title-underline"></div>
        </div>

        <div className="clients-ticker">
          <div className="ticker-track">
            {/* Double the array for seamless infinite scroll */}
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="client-logo-wrapper">
                <img src={client.logo} alt={client.name} className="client-logo" />
                <span className="client-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
