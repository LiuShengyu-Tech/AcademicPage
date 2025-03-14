import React from "react";
import ShinyText from '../blocks/ShinyText';

const LogoLink = ({ logo, text, url, alt = "logo" }) => {
  const styles = {
    container: {
      display: "flex",
      gap: "8px",
      textDecoration: "none",
      color: "black",
      fontSize: "16px",
      fontWeight: "500",
      transition: "color 0.3s",
    },
    logo: {
      width: "24px",
      height: "24px",
    },
    text: {
      cursor: "pointer",
    },
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={styles.container}>
      <img src={logo} alt={alt} style={styles.logo} />
      <ShinyText text={text} disabled={true} speed={3} className='custom-class' />
    </a>
  );
};

export default LogoLink;
