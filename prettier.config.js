/** @type {import('prettier').Config} */
const config = {
  semi: true,
  trailingCommas: "es5",
  singleQuote: false,
  tabWidth: 2,
  printWidth: 100,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
