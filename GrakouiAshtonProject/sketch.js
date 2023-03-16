// this is for your game/web toy

// Function to setup context (need tutorial)
window.onload=function() {

    canv=document.getElementById("gc");
//function to DRAW the actual game
    ctx=canv.getContext("2d");

    document.addEventListener("keydown",keyPush);

    setInterval(game,1000/15);

}
// where everything is, and how big it is at the begenning of the program.

// where the player apears first on the canvas (always in the same place)
px=py=10;
// how big the apple and player appear
gs=tc=20;
// where the apple apears first on the canvas (always in the same place)
ax=ay=15;
// makes it so only one player you can control
xv=yv=0;

trail=[];
// how many pixels follow the player at the start
tail = 5;

// function to run game

function game() {

    px+=xv;

    py+=yv;

    if(px<0) {

        px= tc-1;

    }

    if(px>tc-1) {

        px= 0;

    }

    if(py<0) {

        py= tc-1;

    }

    if(py>tc-1) {

        py= 0;

    }
// color for background
    ctx.fillStyle="black";
// making the apple image
    ctx.fillRect(0,0,canv.width,canv.height);


// color for snake
    ctx.fillStyle="lime";
// for loop that adds to the snakes tail
    for(var i=0;i<trail.length;i++) {

        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);

        if(trail[i].x==px && trail[i].y==py) {

            tail = 5;

        }

    }

    trail.push({x:px,y:py});

    while(trail.length>tail) {

    trail.shift();

    }



    if(ax==px && ay==py) {

        tail++;
        // ovelap with apple
        ax=Math.floor(Math.random()*tc);

        ay=Math.floor(Math.random()*tc);

    }
// color for apple
    ctx.fillStyle="red";

    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);

}


function keyPush(evt) {

    switch(evt.keyCode) {
        // move left
        case 37:

        xv=-1;yv=0;

            break;
        // moving up
        case 38:

        xv=0;yv=-1;

            break;

        case 39:
        // move right
        xv=1;yv=0;

            break;
        // move down
        case 40:

            xv=0;yv=1;

            break;

    }

}
