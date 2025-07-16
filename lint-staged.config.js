/** @type {import("lint-staged").Config} */
const config = {
  "*.{js,jsx,ts,tsx,md,mdx,json,yml}": ["eslint --fix", "prettier --write"],
};

export default config;
