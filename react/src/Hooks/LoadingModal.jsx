import React from "react";

const LoadingModal = () => {
  return (
    <div style={{ position: "fixed", zIndex: 10, top: 0, right: 0, bottom: 0, left: 0, overflowY: "auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", paddingTop: "4rem", paddingLeft: "1rem", paddingRight: "1rem", paddingBottom: "20rem", textAlign: "center" }}>
        <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, transition: "opacity 0.2s", backgroundColor: "rgba(0, 0, 0, 0.75)" }}>
          <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, backgroundColor: "rgba(255, 255, 255, 0.75)" }}></div>
        </div>
        <span style={{ display: "none", verticalAlign: "middle", height: "100vh" }}>&#8203;</span>
        <div style={{ display: "inline-block", verticalAlign: "middle", backgroundColor: "#fff", borderRadius: "0.5rem", overflow: "hidden", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <div style={{ backgroundColor: "#fff", paddingLeft: "1rem", paddingRight: "1rem", paddingTop: "1.25rem", paddingBottom: "1rem", fontSize: "1rem", lineHeight: "1.5" }}>
            <div style={{ display: "flex", alignItems: "start" }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, height: "3rem", width: "3rem", borderRadius: "9999px", backgroundColor: "#ebf8ff", marginRight: "0.75rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm2-2a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div style={{ marginTop: "0.25rem", textAlign: "left" }}>
                <h3 style={{ fontSize: "1.125rem", fontWeight: "600", lineHeight: "1.2", color: "#374151" }}>Loading...</h3>
                <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>Processing verification.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
