// uno.config.ts
import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				roboto: [
					{
						name: 'Roboto Condensed',
						weights: ['400', '600', '700']
					}
				]
			}
		})
	]
})
