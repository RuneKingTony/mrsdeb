// Contact channels and shared links used across the site.
export const WHATSAPP_NUMBER = "+234 703 490 7189";
export const PHONE_NUMBER = "+234 806 127 8922";
export const PHONE_HREF = "tel:+2348061278922";
export const EMAILS = ["amare.kharis@gmail.com", "contact@amarekharis.com"];
export const INSTAGRAM_URL =
  "https://www.instagram.com/p/CuuDi_cN_P-/?igsh=bTIzeHJsaGdzMWO1";

export const whatsappHref = (text) =>
  `https://wa.me/2347034907189${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/businesses", label: "Businesses" },
  { to: "/contacts", label: "Contact" },
];

// Splits a service description into paragraphs and bullet lists.
// "* Title: body" lines become list items with a bold lead.
export function parseDescription(text) {
  const blocks = [];
  const lines = text.split("\n").map((l) => l.trim());
  let list = null;
  let para = [];

  const flushPara = () => {
    if (para.length) blocks.push({ type: "p", text: para.join(" ") });
    para = [];
  };
  const flushList = () => {
    if (list) blocks.push({ type: "ul", items: list });
    list = null;
  };

  for (const line of lines) {
    if (!line) {
      flushPara();
      continue;
    }
    if (line.startsWith("* ")) {
      flushPara();
      const body = line.slice(2);
      const idx = body.indexOf(":");
      const item =
        idx > 0 && idx < 60
          ? { lead: body.slice(0, idx), text: body.slice(idx + 1).trim() }
          : { lead: null, text: body };
      list = list || [];
      list.push(item);
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();
  return blocks;
}
