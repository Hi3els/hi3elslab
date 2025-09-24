<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Premium Maintenance Popup</title>
<style>
  html, body {
    height: 100%;
    margin: 0;
    background: transparent;
    font-family: "Segoe UI", system-ui, sans-serif;
  }

  .popup-anchor {
    position: fixed;
    top: 18px;
    right: 18px;
    z-index: 9999;
  }

  .popup {
    width: 280px;
    color: #f0f7ff;
    padding: 16px 18px;
    border-radius: 16px;
    position: relative;

    /* Premium gradient glass background */
    backdrop-filter: blur(14px) saturate(140%);
    background: linear-gradient(135deg, rgba(10,25,47,0.8), rgba(0,128,128,0.7));
    border: 1px solid rgba(0, 200, 255, 0.35);

    /* Glow */
    box-shadow:
      0 12px 36px rgba(0,0,0,0.45),
      inset 0 0 0 1px rgba(255,255,255,0.08),
      0 0 12px rgba(0, 200, 255, 0.35);

    animation: popupCycle 11s ease-in-out infinite;
    transform-origin: top right;
  }

  .popup::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(0,200,255,0.6), rgba(0,255,180,0.6));
    mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
    -webkit-mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    padding: 1px;
    filter: blur(0.6px);
    opacity: 0.7;
    pointer-events: none;
  }

  .popup h3 {
    margin: 0 0 10px;
    font-size: 1.02rem;
    font-weight: 600;
    color: #dffaff;
  }

  .items {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .items li {
    position: relative;
    padding-left: 22px;
    margin: 8px 0;
    color: #cfe0ff;
    opacity: 0;
    transform: translateY(6px);
  }
  .items li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00eaff, #00ffb0);
    box-shadow: 0 0 8px rgba(0,255,200,0.6);
  }

  /* Popup loop animation */
  @keyframes popupCycle {
    0%   { opacity: 0; transform: translateY(-24px) scale(0.96); }
    12%  { opacity: 1; transform: translateY(0) scale(1); }
    70%  { opacity: 1; transform: translateY(0) scale(1); }
    100% { opacity: 0; transform: translateY(-120%) scale(0.96); }
  }

  /* Bullet reveal animations */
  @keyframes itemCycle1 {
    0%, 10%   { opacity: 0; transform: translateY(6px); }
    18%, 60%  { opacity: 1; transform: translateY(0); }
    90%, 100% { opacity: 0; transform: translateY(-6px); }
  }
  @keyframes itemCycle2 {
    0%, 18%   { opacity: 0; transform: translateY(6px); }
    26%, 60%  { opacity: 1; transform: translateY(0); }
    90%, 100% { opacity: 0; transform: translateY(-6px); }
  }
  @keyframes itemCycle3 {
    0%, 26%   { opacity: 0; transform: translateY(6px); }
    34%, 60%  { opacity: 1; transform: translateY(0); }
    90%, 100% { opacity: 0; transform: translateY(-6px); }
  }
  @keyframes itemCycle4 {
    0%, 34%   { opacity: 0; transform: translateY(6px); }
    42%, 60%  { opacity: 1; transform: translateY(0); }
    90%, 100% { opacity: 0; transform: translateY(-6px); }
  }

  .items li:nth-child(1) { animation: itemCycle1 11s ease-in-out infinite; }
  .items li:nth-child(2) { animation: itemCycle2 11s ease-in-out infinite; }
  .items li:nth-child(3) { animation: itemCycle3 11s ease-in-out infinite; }
  .items li:nth-child(4) { animation: itemCycle4 11s ease-in-out infinite; }

  @media (max-width: 420px) {
    .popup { width: 92vw; right: 12px; }
    .popup-anchor { top: 12px; right: 12px; }
  }
</style>
</head>
<body>

  <div class="popup-anchor">
    <div class="popup">
      <h3>Scheduled Maintenance</h3>
      <ul class="items">
        <li>System updates in progress</li>
        <li>Some services may be unavailable</li>
        <li>Estimated window: ~30 minutes</li>
        <li>Thanks for your patience</li>
      </ul>
      <!-- Status/Repeat row removed -->
    </div>
  </div>

</body>
</html>
