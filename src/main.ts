import 'phaser'
import LoadingScene from './scenes/LoadingScene'
import PlayingScene from './scenes/PlayingScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	pixelArt: true,
	physics: {
		default: 'matter',
	},
	scene: [LoadingScene, PlayingScene]
}

export default new Phaser.Game(config)
