import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Doug Jones - {year}</p>
    </footer>
  );
};

export default Footer;
