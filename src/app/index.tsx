import React, { useState, useEffect } from "react";
import { AppRoutes } from "./router.tsx";

const App = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log("beforeinstallprompt fired");
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    console.log("beforeinstallprompt added");

    return () => {
      console.log("beforeinstallprompt removed");
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstallClick = () => {
    console.log("install clicked");
    if (deferredPrompt) {
      (deferredPrompt as any).prompt();
      (deferredPrompt as any).userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div>
      {deferredPrompt && (
        <button className="btn btn-primary" onClick={handleInstallClick}>
          Install App
        </button>
      )}
      <AppRoutes />
    </div>
  );
};

export default App;
