import 'phaser';
import { Stage } from '../stages/Stage'

export default class PlayingScene extends Phaser.Scene {
    private img_ground!: Phaser.Physics.Matter.Image;
    private img_ball!: Phaser.Physics.Matter.Image;
    private img_direction!: Phaser.Physics.Matter.Image;

    private isDragging: boolean = false;
    private dragStartPoint: Phaser.Math.Vector2 = new Phaser.Math.Vector2();

    constructor() {
        super({ key: 'PlayingScene' });
    }

    preload(){
        this.setControlWay();
    }

    create(){
        this.setGround();
        this.setBall();
        this.setStage();
    }

    update(){}

    setControlWay(){
        this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
            this.isDragging = true;
            this.dragStartPoint.set(pointer.downX, pointer.downY);

            this.img_direction = this.matter.add.image(this.img_ball.x, this.img_ball.y, 'img_direction_low');
            this.img_direction.setStatic(true);
        });

        this.input.on('pointerup', () => {
            if(this.isDragging){
                this.isDragging = false;
                this.img_direction.destroy();

                this.img_ball.setStatic(false);
                
                const multiplier = 5;
                const maxPower = 20;
                
                let powerX = (this.dragStartPoint.x - this.input.x) / multiplier;
                let powerY = (this.dragStartPoint.y - this.input.y) / multiplier;
                powerX = Math.min(powerX, maxPower);
                powerY = Math.max(powerY, -maxPower);

                this.img_ball.setVelocityX(powerX);
                this.img_ball.setVelocityY(powerY);
            }
        });

        this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
            if(this.isDragging){
                let distance = Phaser.Math.Distance.Between(this.dragStartPoint.x, this.dragStartPoint.y, this.input.x, this.input.y);
                
                if(distance >= 50 && distance < 100){
                    this.img_direction.setTexture('img_direction_middle');
                }else if(distance >= 100){
                    this.img_direction.setTexture('img_direction_high');
                }else{
                    this.img_direction.setTexture('img_direction_low');
                }

                let angle = Phaser.Math.Angle.BetweenPoints(this.dragStartPoint, pointer);
                angle = Phaser.Math.Angle.Reverse(angle);
                this.img_direction.rotation = angle;
            }
        });
    }

    setGround(){
        this.img_ground = this.matter.add.image(400, 550, 'img_ground');
        this.img_ground.setStatic(true);
    }

    setBall(){
        this.img_ball = this.matter.add.image(50, 400, 'img_ball');
        this.img_ball.setCircle(15);
        this.img_ball.setStatic(true);
    }

    setStage(){
        Stage.stage_1.thinWoodenColumns.forEach(col => {
            const { x, y, key } = col;
            this.matter.add.image(x, y, key);
        });
    }
}