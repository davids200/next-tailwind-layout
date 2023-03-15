/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

module.exports = nextConfig
