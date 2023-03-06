sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One))) {
        Ball.setVelocity(100, randint(-200, 200))
    } else {
        Ball.setVelocity(-100, randint(-200, 200))
    }
})
let Ball: Sprite = null
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    1 1 1 1 1 
    `, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 0
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 160
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 100)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 100)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
Ball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Ball.vx = 100
game.onUpdate(function () {
    if (Ball.top < 0) {
        Ball.top = 0
        Ball.vy = 0 - Ball.vy
    }
    if (Ball.bottom > 120) {
        Ball.bottom = 120
        Ball.vy = 0 - Ball.vy
    }
    if (Ball.right < 0) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
    }
    if (Ball.left > 160) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
    }
})
