import 'phaser';

export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoadingScene' });
    }

    preload(){
        this.load.image("img_ground", "assets/images/ground.png");
        this.load.image("img_ball", "assets/images/ball.png");
        this.load.image("img_thinWoodenColumn", "assets/images/thinWoodenColumn.png");
    }

    create(){
        this.scene.start('PlayingScene');
    }
}