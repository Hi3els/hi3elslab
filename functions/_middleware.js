export async function onRequest(context) {
  const req = context.request;
  const accept = req.headers.get("accept") || "";

  // শুধু HTML response এ popup inject করবো
  if (!accept.includes("text/html")) {
    return await context.next();
  }

  let response = await context.next();
  let html = await response.text();

  const popup = `
    <div class="popup-anchor">
      <div class="popup">
        <h3>🚧 Maintenance Notice</h3>
        <p>We’re upgrading systems. Some features may be unavailable.</p>
        <button onclick="this.parentElement.style.display='none'">Close</button>
      </div>
    </div>
    <style>
      .popup-anchor {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
      }
      .popup {
        background: rgba(0,0,0,0.8);
        color: #fff;
        padding: 16px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        animation: fadeIn 0.6s ease;
      }
      .popup button {
        margin-top: 10px;
        padding: 6px 12px;
        border: none;
        border-radius: 6px;
        background: #00eaff;
        color: #000;
        cursor: pointer;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>
  `;

  html = html.replace(/<body[^>]*>/i, match => match + popup);

  return new Response(html, {
    headers: { "content-type": "text/html;charset=UTF-8" },
  });
}
