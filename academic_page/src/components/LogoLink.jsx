import React from "react";

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
      alignSelf: "center",
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
      <span style={styles.text}>{text}</span>
    </a>
  );
};

export default LogoLink;
