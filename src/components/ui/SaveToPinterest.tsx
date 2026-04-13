interface SaveToPinterestProps {
  imageSrc: string;      // relative path e.g. "/images/illustrations/hero.webp"
  pageUrl: string;       // absolute page URL for the pin's destination
  description: string;   // pin description (shown on Pinterest)
  label?: string;        // button label, defaults to "Save"
  position?: "top-left" | "top-right"; // corner to place the button
}

/**
 * "Save to Pinterest" overlay button.
 *
 * Shown on hover over a hero image. Opens the Pinterest pin-create
 * dialog with the image, page URL, and description pre-filled. This is
 * the native Pinterest share pattern readers recognize.
 *
 * Requires the parent image wrapper to have `relative group` classes so
 * the button positions correctly and responds to parent hover.
 *
 * Server component — no client-side state needed since Pinterest's
 * /pin/create/button endpoint takes all params via query string.
 */
export default function SaveToPinterest({
  imageSrc,
  pageUrl,
  description,
  label = "Save",
  position = "top-left",
}: SaveToPinterestProps) {
  // Build absolute image URL — Pinterest requires absolute media URLs
  const fullImageUrl = imageSrc.startsWith("http")
    ? imageSrc
    : `https://buysecurevpn.com${imageSrc}`;

  const href =
    `https://pinterest.com/pin/create/button/` +
    `?url=${encodeURIComponent(pageUrl)}` +
    `&media=${encodeURIComponent(fullImageUrl)}` +
    `&description=${encodeURIComponent(description)}`;

  const cornerClass =
    position === "top-right" ? "top-3 right-3" : "top-3 left-3";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Save "${description}" to Pinterest`}
      className={`absolute ${cornerClass} inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#e60023] hover:bg-[#ad001c] text-white text-[13px] font-bold rounded-full shadow-xl ring-1 ring-black/10 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-200 focus-visible:opacity-100 focus-visible:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-10`}
    >
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.853c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.029 11.985.029z" />
      </svg>
      {label}
    </a>
  );
}
