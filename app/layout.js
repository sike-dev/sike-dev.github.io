// RootLayout.js

"use client";
import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { Suspense } from "react";
import Loading from "./loading"; // Assuming Loading component is in a file named Loading.js
// eate a separate CSS file for RootLayout component styles

const RootLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else {
        setScreenSize("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Simulate a 3-second loading time
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => {
      // Clear the timeout if the component unmounts before the timeout completes
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
        {/* Include Tailwind CSS via CDN or import it based on your project setup */}
      </head>
      <body>
        <Suspense fallback={<Loading />}>
          {loading ? (
            <div className="loading-container">
              <Loading screenSize={screenSize} />
            </div>
          ) : (
            children
          )}
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
