import "../styles/main.scss";
import { Home } from "./home";

import { init } from "commandbar";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: any) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (!isMounted) {
      init("50bcd546");
      setIsMounted(true);

      const loggedInUserId = "12345"; // Example
      window.CommandBar.boot("mart+testing@commandbar.com", {}, {});
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
