
    // [UP, DOWN, LEFT, RIGHT]
    var keyMoves = [87, 83, 65, 68];

    var speed = 5;
    var size = 50;
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    var posX = 70;
    var posY = 70;
    var objColor = "#0f0"

    var blockX = canvas.width / 2 - 25;
    var blockY = canvas.height / 2 - 25;
    var blockMove = false;


    var mvLeft = mvUp = mvRight = mvDown = false;

    function updateBlock() {
        if(mvLeft) {
            posX -= speed;
        }
        if(mvRight) {
            posX += speed;
        }
        if(mvUp) {
            posY -= speed;
        }
        if(mvDown) {
            posY += speed;
        }

        if(mvLeft && blockMove) {
            blockX -= speed;
        }
        if(mvRight && blockMove) {
            blockX += speed;
        }
        if(mvUp && blockMove) {
            blockY -= speed;
        }
        if(mvDown && blockMove) {
            blockY += speed;
        }
    }

    function colider() {
        if(posX + size > blockX && 
        posX < blockX + size && 
        posY + size > blockY && 
        posY < blockY + size) {
            objColor = "#f00";
            blockMove = true;
        } else {
            objColor = "#0f0";
            blockMove = false;
        }
    }

    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);

    function keydownHandler(e) {
        var key = e.keyCode;

        switch(key) {
            case keyMoves[0]:
                mvUp = true;
                break
            case keyMoves[1]:
                mvDown = true;
                break
            case keyMoves[2]:
                mvLeft = true;
                break
            case keyMoves[3]:
                mvRight = true;
                break
        }
    }

    function keyupHandler(e) {
        var key = e.keyCode;

        switch(key) {
            case keyMoves[0]:
                mvUp = false;
                break
            case keyMoves[1]:
                mvDown = false;
                break
            case keyMoves[2]:
                mvLeft = false;
                break
            case keyMoves[3]:
                mvRight = false;
                break
        }
    }

    function update() {
        updateBlock();
        colider();
    }

    function draw() {
        context.clearRect(0,0,canvas.width,canvas.height);

        context.fillStyle = "#000"
        context.fillRect(blockX, blockY, size, size);

        context.fillStyle = objColor;
        context.fillRect(posX, posY, size, size);
    }

    function loop() {
        window.requestAnimationFrame(loop, canvas);
        update();
        draw();
    }

    loop();
