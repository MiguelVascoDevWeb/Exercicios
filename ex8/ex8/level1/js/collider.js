function Oncollision(r1, r2) {
    //r1 -> blocked
    //r2 -> wall
    
    //catetos
    var catX = r1.centerX() - r2.centerX();
    var catY = r1.centerY() - r2.centerY();

    //Sum halfs
    var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
    var sumHalfHeight = r1.halfHeight() + r2.halfHeight();

    if(Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight) {
        var overlapX = sumHalfWidth - Math.abs(catX);
        var overlapY = sumHalfHeight - Math.abs(catY);

        if(overlapX >= overlapY) { //coll Up or Down
            if(catY > 0) { // coll Up
                r1.posY += overlapY;
            } else { // coll Down
                r1.posY -= overlapY;
            }
        } else { //coll Left or Right
            if(catX > 0) { //coll Left
                r1.posX += overlapX;
            } else { //coll Right
                r1.posX -= overlapX;
            }
        }
    }
}

function Ontrigger(r1, r2) {
    //r1 -> blocked
    //r2 -> wall
    
    //catetos
    var catX = r1.centerX() - r2.centerX();
    var catY = r1.centerY() - r2.centerY();

    //Sum halfs
    var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
    var sumHalfHeight = r1.halfHeight() + r2.halfHeight();

    if(Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight) {
        var overlapX = sumHalfWidth - Math.abs(catX);
        var overlapY = sumHalfHeight - Math.abs(catY);

        return overlapX + overlapY;
    }
}