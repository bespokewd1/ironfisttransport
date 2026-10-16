export default function ogStudio() {
	return {
		name: "ironfist-og-studio",
		hooks: {
			"astro:config:setup": ({ command, injectRoute, updateConfig }) => {
				if (command !== "dev") return;

				updateConfig({ devToolbar: { enabled: false } });
				injectRoute({
					pattern: "/__og-studio/",
					prerender: false,
					entrypoint: new URL("./Studio.astro", import.meta.url),
				});
			},
		},
	};
}
