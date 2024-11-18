import { useEffect, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    // Detect if the device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Set the URL based on the device type
    if (isMobile) {
      setUrl("https://m.eaglercraft.com/mc/1.8.8/index.html"); // Replace with the mobile URL
    } else {
      setUrl("https://eaglercraft.com/mc/1.8.8/index.html"); // Replace with the desktop URL
    }
  }, []);

  // Wait until the URL is determined
  if (!url) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: "100vh", width: "100vw", margin: 0 }}>
      <iframe
        src={url}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
}
