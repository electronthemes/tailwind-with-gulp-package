module.exports = {
	config: {
		tailwindjs: "./tailwind.config.js",
		port: 9050
	},
	paths: {
		root: "./",
		src: {
			base: "./src",
			css: "./src/assets/css",
			fonts: "./src/assets/css",
			js: "./src/assets/js",
			img: "./src/assets/img"
		},
		dist: {
			base: "./dist",
			css: "./dist/assets/css",
			fonts: "./dist/assets/fonts",
			js: "./dist/assets/js",
			img: "./dist/assets/img"
		},
		build: {
			base: "./build",
			css: "./build/assets/css",
			fonts: "./build/assets/fonts",
			js: "./build/assets/js",
			img: "./build/assets/img"
		}
	}
}