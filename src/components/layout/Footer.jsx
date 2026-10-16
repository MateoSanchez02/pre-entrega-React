import './Footer.css';

export default function Footer() {
  const team = [
    {
      name: 'Mateo Sanchez',
      role: 'Fundador & CEO',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Rocio Peralta',
      role: 'Encargada de marketing y atencion al cliente',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Brian Medina',
      role: 'Logistica',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        

        <div className="footer-section">
          <h3 className="footer-title" style={{color:"white"}}>Nuestro Equipo</h3>
          <div className="team-cards">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <img src={member.image} alt={member.name} className="team-img" />
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-section footer-contact">
          <h3 className="footer-title" style={{color:"white"}}>Contacto</h3>
          <p>📍 Av. Corrientes 1234, CABA</p>
          <p>📞 +54 11 4567-8900</p>
          <p>✉️ contacto@santapilcha.com</p>
          <div className="social-links">
            <a href="#instagram" aria-label="Instagram" style={{color:"whitesmoke"}}>Instagram</a>
            <a href="#facebook" aria-label="Facebook" style={{color:"whitesmoke"}}>Facebook</a>
            <a href="#whatsapp" aria-label="WhatsApp" style={{color:"whitesmoke"}}>WhatsApp</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p> 2026 Santa Pilcha. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}