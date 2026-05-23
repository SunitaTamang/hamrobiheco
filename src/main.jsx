import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WeddingPlanningWebsiteStarter from "../wedding_planning_website_starter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeddingPlanningWebsiteStarter />
  </StrictMode>
);
