// src/components/TawkToWidget.jsx
import { useEffect } from "react";

export default function TawkToWidget() {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/69592b866200a1197c1e9e2d/1je2541ss";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);

    return () => {
      document.body.removeChild(s1);
    };
  }, []);

  return null;
}
