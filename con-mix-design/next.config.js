/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
	output: 'export',
	distDir: '.dist',
	trailingSlash: true,
	assetPrefix: isProd ? '/con-mix-design' : undefined,
	productionBrowserSourceMaps: true,
}

module.exports = nextConfig
