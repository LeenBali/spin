const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
};

module.exports = nextConfig;
export default config;
