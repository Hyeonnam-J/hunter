import 'phaser';

export default class PlayingScene extends Phaser.Scene {
    private img_ground!: Phaser.Physics.Matter.Image;
    private img_ball!: Phaser.Physics.Matter.Image;
    private img_thinWoodenColumn1!: Phaser.Physics.Matter.Image;
    private img_thinWoodenColumn2!: Phaser.Physics.Matter.Image;

    constructor() {
        super({ key: 'PlayingScene' });
    }

    preload(){
        
    }

    create(){
        this.img_ground = this.matter.add.image(400, 550, 'img_ground');
        this.img_ground.setStatic(true);
        
        this.img_ball = this.matter.add.image(50, 400, 'img_ball');
        this.img_ball.setVelocityX(50);

        this.img_thinWoodenColumn1 = this.matter.add.image(500, 100, 'img_thinWoodenColumn');
        this.img_thinWoodenColumn2 = this.matter.add.image(500, 400, 'img_thinWoodenColumn');
    }

    update(){}
}