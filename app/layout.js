import "../styles/globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </body>
  </html>
);

export default RootLayout;
