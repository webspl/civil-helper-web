/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
	output: 'export',
	distDir: '.dist',
	trailingSlash: true,
	assetPrefix: isProd ? '/brick-morter-est' : undefined,
	productionBrowserSourceMaps: true,
}

module.exports = nextConfig
