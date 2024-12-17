"use client";

import { FC, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegCopy,
} from "react-icons/fa";

const FooterContact: FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <footer id="contact" className="footer">
        {copied && (
          <div className="popup">
            {copied} copied to clipboard!
          </div>
        )}

        <div className="main-content">
          <div>
            <span className="contact-badge">
              Get in touch
            </span>
          </div>
          <p className="contact-text">
            What&apos;s next? Feel free to reach out to me if you&apos;re looking for a
            developer, have a query, or simply want to connect.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span className="contact-detail">nomanghouri.dev@gmail.com</span>
              <FaRegCopy
                className="copy-icon"
                onClick={() => copyToClipboard("nomanghouri.dev@gmail.com")}
              />
            </div>

            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span className="contact-detail">+92 308 2452547</span>
              <FaRegCopy
                className="copy-icon"
                onClick={() => copyToClipboard("+92 308 2452547")}
              />
            </div>
          </div>

          <p className="social-text">You may also find me on these platforms!</p>
          <div className="social-links">
            <a
              href="https://github.com/NomanKhaliq1"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nomanghouri-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/nomanghouri2/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        <div className="footer-note">
          <p>
            © 2024 | Designed and coded with ❤️ by Noman Khaliq
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterContact;
