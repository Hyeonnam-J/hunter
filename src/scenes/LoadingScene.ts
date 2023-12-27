import 'phaser';

export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoadingScene' });
    }

    preload(){
        this.load.image("img_ground", "assets/images/ground.png");
        this.load.image("img_ball", "assets/images/ball.png");
        this.load.image("img_direction_low", "assets/images/direction_low.png");
        this.load.image("img_direction_middle", "assets/images/direction_middle.png");
        this.load.image("img_direction_high", "assets/images/direction_high.png");
        this.load.image("img_thinWoodenColumn", "assets/images/thinWoodenColumn.png");
    }

    create(){
        this.scene.start('PlayingScene');
    }
}