/** @type {import("next").NextConfig} */
const nextConfig = {
	compress: true,
	crossOrigin: "anonymous",
	devIndicators: {
		buildActivity: true,
		buildActivityPosition: "top-left"
	},
	generateEtags: true,
	httpAgentOptions: { keepAlive: true },
	images: {
		contentDispositionType: "attachment",
		contentSecurityPolicy: "",
		dangerouslyAllowSVG: false,
		deviceSizes: [],
		disableStaticImages: false,
		formats: ["image/webp"],
		imageSizes: [],
		loader: "default",
		loaderFile: "",
		minimumCacheTTL: 21600,
		path: "/images",
		remotePatterns: [],
		unoptimized: false
	},
	optimizeFonts: true,
	output: "standalone",
	reactProductionProfiling: true,
	reactStrictMode: true,
	poweredByHeader: false,
	productionBrowserSourceMaps: true,
	skipMiddlewareUrlNormalize: true,
	skipTrailingSlashRedirect: false,
	trailingSlash: true,
	typescript: {
		ignoreBuildErrors: false,
		tsconfigPath: "./tsconfig.build.json"
	}
};

module.exports = nextConfig;
