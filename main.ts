function Bad_Guy () {
    let Bad_guys: Sprite = null
    Bad_guys.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f d 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d d 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d d d d 1 1 1 d f . . . . . . 
. . . . . . f b d d d d b f d 1 d f . . . . . . 
. . . . . . f c b b b d c f d d b f . . . . . . 
. . . . . . . f c b b 1 1 1 1 1 f . . . . . . . 
. . . . . . . . f f f f f 1 b 1 f . . . . . . . 
. . . . . . . . f b 1 1 1 c f b f . . . . . . . 
. . . . . . . . f f b 1 b 1 f f . . . . . . . . 
. . . . . . f . f f f b f b f . . . . . . . . . 
. . . . . . f f f f f f f f . . . . . . . . . . 
. . . . . . . f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
}
let Princess: Sprite = null
let movement = 0
let list = [sprites.castle.princess2Front, sprites.castle.princess2WalkFront1, sprites.castle.princess2WalkFront2, sprites.castle.princess2WalkFront3, sprites.castle.princess2Left1, sprites.castle.princess2WalkBack2, sprites.castle.princess2WalkBack3, sprites.castle.princess2WalkBack1, sprites.castle.princess2Right1, sprites.castle.princess2Front]
while (movement <= 9) {
    movement += 1
    Princess = sprites.create(list[movement], SpriteKind.Player)
    pause(1000)
    Princess.destroy()
}
game.splash("Punchies")
