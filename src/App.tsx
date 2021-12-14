import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import React from "react";
import WarningModal from "./components/WarningModal";
const electron = require("electron");

export function App() {
  const [isWarningModalOpen, setOpen] = React.useState(false);
  const handleWarningModalOpen = () => setOpen(true);
  const handleWarningModalClose = () => setOpen(false);

  const [isServiceRunning, setServiceRunning] = React.useState(false);
  const handleServiceRunning = () => setServiceRunning(true);
  const handleServiceStopping = () => setServiceRunning(false);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard
        isServiceRunning={isServiceRunning}
        handleServiceRunning={handleServiceRunning}
        handleServiceStopping={handleServiceStopping}
        handleWarningModalOpen={handleWarningModalOpen}
      />
      <WarningModal
        handleServiceRunning={handleServiceRunning}
        handleServiceStopping={handleServiceStopping}
        isWarningModalOpen={isWarningModalOpen}
        handleWarningModalClose={handleWarningModalClose}
      />
    </>
  );
}
