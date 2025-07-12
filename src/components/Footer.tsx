import { Link } from 'react-router-dom'
import '/src/styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className='footer-copyright'>&copy; {new Date().getFullYear()} MovieFinder. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
