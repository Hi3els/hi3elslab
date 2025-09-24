
export default {
  async fetch(request, env, ctx) {
    let response = await fetch("https://hi3elslab.pages.dev");
    let html = await response.text();

    const popup = `
      <div class="popup-anchor">
        <div class="popup">
          <h3>Scheduled Maintenance</h3>
          <ul class="items">
            <li>System updates in progress</li>
            <li>Some services may be unavailable</li>
            <li>Estimated window: ~30 minutes</li>
            <li>Thanks for your patience</li>
          </ul>
        </div>
      </div>
      <style>
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
          backdrop-filter: blur(14px) saturate(140%);
          background: linear-gradient(135deg, rgba(10,25,47,0.8), rgba(0,128,128,0.7));
          border: 1px solid rgba(0, 200, 255, 0.35);
          box-shadow: 0 12px 36px rgba(0,0,0,0.45),
                      inset 0 0 0 1px rgba(255,255,255,0.08),
                      0 0 12px rgba(0, 200, 255, 0.35);
          animation: popupCycle 11s ease-in-out infinite;
          transform-origin: top right;
        }
        .popup h3 { margin: 0 0 10px; font-size: 1.02rem; font-weight: 600; color: #dffaff; }
        .items { list-style: none; margin: 0; padding: 0; }
        .items li { position: relative; padding-left: 22px; margin: 8px 0; color: #cfe0ff; }
        .items li::before {
          content: ""; position: absolute; left: 0; top: 6px;
          width: 8px; height: 8px; border-radius: 50%;
          background: linear-gradient(135deg, #00eaff, #00ffb0);
          box-shadow: 0 0 8px rgba(0,255,200,0.6);
        }
        @keyframes popupCycle {
          0% { opacity: 0; transform: translateY(-24px) scale(0.96); }
          12% { opacity: 1; transform: translateY(0) scale(1); }
          70% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-120%) scale(0.96); }
        }
      </style>
    `;

    // Regex দিয়ে body ট্যাগ খুঁজে popup inject
    html = html.replace(/<body[^>]*>/i, match => match + popup);

    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};
