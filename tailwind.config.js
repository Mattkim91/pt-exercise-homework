/* Rebuild with Tailwind CSS 3.4.17 if utility classes change:
   printf '%s\n' '@tailwind base;' '@tailwind components;' '@tailwind utilities;' | npx tailwindcss@3.4.17 -c tailwind.config.js -i /dev/stdin -o app.css --minify
   Deploy does not run this. GitHub Pages serves app.css as-is. */
module.exports = {
  content: ["./index.html", "./exercises.js"],
  theme: { extend: {} },
  safelist: [
    { pattern: /^(bg|text|border|ring)-(slate|gray|red|amber|yellow|green|emerald|blue|sky|indigo|purple|rose)-(50|100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^(border-l|border-b|border-t|border)-(2|4)$/ },
    "grid-cols-[auto_1fr]",
    "grid-cols-1",
    "grid-cols-2",
    "sm:grid-cols-2",
    "lg:grid-cols-2"
  ]
};
