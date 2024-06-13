import React, { useEffect, useRef } from "react";

const ScrollingBanner = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const move = () => {
      marquee.scrollLeft += 1;
      if (marquee.scrollLeft >= marquee.scrollWidth - marquee.clientWidth) {
        marquee.scrollLeft = 0;
      }
    };
    const interval = setInterval(move, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div ref={marqueeRef} style={styles.marquee}>
        <div style={styles.marqueeContent}>
          <span style={styles.text}>
            10% OFF - GET YOUR DISCOUNT NOW! 10% OFF - GET YOUR DISCOUNT NOW!
            10% OFF - GET YOUR DISCOUNT NOW! 10% OFF - GET YOUR DISCOUNT NOW!
            10% OFF - GET YOUR DISCOUNT NOW! 10% OFF - GET YOUR DISCOUNT NOW!
            10% OFF - GET YOUR DISCOUNT NOW! 10% OFF - GET YOUR DISCOUNT NOW!
            10% OFF - GET YOUR DISCOUNT NOW! 10% OFF - GET YOUR DISCOUNT NOW!
            10% OFF - GET YOUR DISCOUNT NOW! 10% OFF - GET YOUR DISCOUNT NOW!
            10% OFF - GET YOUR DISCOUNT NOW! 10% OFF - GET YOUR DISCOUNT NOW!
            10% OFF - GET YOUR DISCOUNT NOW! 10% OFF - GET YOUR DISCOUNT NOW!
            10% OFF - GET YOUR DISCOUNT NOW! 10% OFF - GET YOUR DISCOUNT NOW!
            10% OFF - GET YOUR DISCOUNT NOW! 10% OFF - GET YOUR DISCOUNT NOW!
            10% OFF - GET YOUR DISCOUNT NOW! 10% OFF - GET YOUR DISCOUNT NOW! 
          </span>
        </div>
      </div>
      <div style={styles.fadeLeft}></div>
      <div style={styles.fadeRight}></div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "40px",
    backgroundColor: "black",
    color: "white",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  marquee: {
    display: "flex",
    whiteSpace: "nowrap",
    overflow: "hidden",
    height: "100%",
    alignItems: "center",
  },
  marqueeContent: {
    display: "inline-block",
    paddingRight: "100%",
  },
  text: {
    fontWeight: "bold",
    fontSize: "12px",
    padding: "0 1rem",
  },
  fadeLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: "100px",
    background: "linear-gradient(to right, black, transparent)",
    zIndex: 1,
  },
  fadeRight: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    width: "100px",
    background: "linear-gradient(to left, black, transparent)",
    zIndex: 1,
  },
};

export default ScrollingBanner;
