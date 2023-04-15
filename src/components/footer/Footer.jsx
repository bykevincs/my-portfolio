import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Smith</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portafolio" className="footer__link">Portafolio</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
                <li>
                    <a href="#" className="footer__link"></a>
                </li>
            </ul>
            <div className='footer__social'>
            <a href="#" className="footer__social-link" target="_blank">
                <i class="bx bxl-linkedin"></i>
            </a>

            <a href="#" className="footer__social-link" target="_blank">
                <i class="uil uil-github-alt"></i>
            </a>

            <a href="#" className="footer__social-link" target="_blank">
                <i class="uil uil-facebook-messenger"></i>
            </a>
            </div>
            <span className="footer__copy">&#169; Corpory. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer