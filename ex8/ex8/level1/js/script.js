(function(){
    
    //vars
    var canvas = document.querySelector("canvas");
    var h_canva = canvas.height;
    var w_canva = canvas.width;
    var ctx = canvas.getContext("2d");
    var num = 2;
    var SIZE = 50;

    //btn vars
    var btn_pressed = [false]

    //keys (WASD, ULDR)
    var LEFT = [65, 37];
    var UP = [87, 38];
    var RIGHT = [68, 39];
    var DOWN = [83, 40];
    var RESTART = 82;

    var mvUp = false;
    var mvDown = false;
    var mvLeft = false;
    var mvRight = false;
    
    //Arrays
    var sprites = [];
    var walls = [];
    var boxes = [];
    var buttons = [];
    var nexts = [];

    //Objects

    // SIZE = 50px

    //PLAYER
    var character = new Sprite("player",0, h_canva/2 - SIZE/2, SIZE, SIZE, "#0f0");
    character.speed = 7;
    sprites.push(character);

    // BOXS
    var box = new Sprite("box1",200, h_canva/2 - (SIZE-10)/2, SIZE-10, SIZE-10, "#00f");
    sprites.push(box);
    boxes.push(box);

    
    //BUTTONS
    var btn = new Sprite("btn1",w_canva-100, h_canva/2 - (SIZE-20)/2, SIZE-20, SIZE-20, "#005");
    sprites.push(btn);
    buttons.push(btn);

    //NEXTS
    var next = new Sprite("next",0, h_canva/2 - (SIZE+30)/2, SIZE-20, SIZE+30, "#ff0");
    sprites.push(next);
    nexts.push(next);
    next.visible = false;

    // WALLS
    var wall = new Sprite("wall1",0, 0, w_canva, h_canva/2 - 100, "#000");
    sprites.push(wall);
    walls.push(wall);

    var wall = new Sprite("wall1",0, h_canva/2 + 100, w_canva, h_canva/2 - 100, "#000");
    sprites.push(wall);
    walls.push(wall);


    //key events
    window.addEventListener("keydown", function(e) {
        var key = e.keyCode;

        switch(key) {
            case LEFT[0] || LEFT[1]:
                mvLeft = true;
                break;
            case UP[0] || UP[1]:
                mvUp = true;
                break;
            case RIGHT[0] || RIGHT[1]:
                mvRight = true;
                break;
            case DOWN[0] || DOWN[1]:
                mvDown = true;
                break;
        }
            

    }, false);

    window.addEventListener("keyup", function(e) {
        var key = e.keyCode;
        
        switch(key) {
            case LEFT[0] || LEFT[1]:
                mvLeft = false;
                break;
            case UP[0] || UP[1]:
                mvUp = false;
                break;
            case RIGHT[0] || RIGHT[1]:
                mvRight = false;
                break;
            case DOWN[0] || DOWN[1]:
                mvDown = false;
                break;
            case RESTART:
                location.reload();
        }

    }, false);

    //Character move
    function movement() {
        if(mvLeft && !mvRight) {
            character.posX -= character.speed;
        }
        if(mvRight && !mvLeft) {
            character.posX += character.speed;
        }
        if(mvUp && !mvDown) {
            character.posY -= character.speed;
        }
        if(mvDown && !mvUp) {
            character.posY += character.speed;
        }
    }

    function collision() {
        //Wall collisions
        for(var wall of walls) {
            if(wall.visible) {
                Oncollision(box, wall);
                Oncollision(character, wall);
            }
        }

        //Box collisions
        for(var boxs of boxes) {
            if(boxs.visible) {
                Oncollision(boxs, character);
            }
        }

        //btn collisions
        for(var btns of buttons) {
            if(btns.visible) {
                if(Ontrigger(box, btns) > 0) {
                    btn_pressed[0] = true;
                } else {
                    btn_pressed[0] = false;
                }
            }
        }
        
        //next collisions
        for(var next of nexts) {
            if(next.visible) {
                if(Ontrigger(character, next) > 0) {
                    next.visible = false;
                    window.location.replace(`../level${num}/Level.html`)
                }
            }
        }
    }
    

    //functions
    function loop() {
        window.requestAnimationFrame(loop, canvas);
        update();
        render();
    }

    function update() {
        movement();
        
        //Limited Screen
        character.posX = Math.max(0, Math.min(character.posX, canvas.width - character.width));
        character.posY = Math.max(0, Math.min(character.posY, canvas.height - character.height));

        box.posX = Math.max(0, Math.min(box.posX, canvas.width - box.width));
        box.posY = Math.max(0, Math.min(box.posY, canvas.height - box.height));

        //btn
        btn_counters = buttons.length;

        //collision
        collision();

        if(btn_pressed.every((boll) => boll == true)) {
            next.visible = true;
        } else {
            next.visible = false;
        }
    }

    function render() {
        ctx.clearRect(0,0,canvas.width,canvas.height);

        for(var sprite of sprites) {
            console.log(sprite.posX)
            if(sprite.visible) {
                ctx.fillStyle = sprite.color;
                ctx.fillRect(sprite.posX, sprite.posY, sprite.width, sprite.height);
            }
        }
    }
    
    loop();

}());