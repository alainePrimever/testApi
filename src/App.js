import React from "react";
import { App as SendbirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import "./styles.css";

const APP_ID = "AFE9530D-5DB7-4858-839B-8146060C1C05";
const USER_ID = "test";

export default function App() {
  return (
    <div className="App">
      <SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
  );
}
