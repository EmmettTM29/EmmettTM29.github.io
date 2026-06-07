$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();
    // TODO 2 - Create Platforms
    createPlatform(200,0,50,640);
    createPlatform(1150,640,100,20,"green");
    createPlatform(1300,560,100,20,"green");
    createPlatform(250,450,950,50);
    createPlatform(300,450,150,25,"indigo",250,250,0,200,450,3);
    createPlatform(400,200,1000,75);
    // TODO 3 - Create Collectables
    createCollectable("diamond",400,550,0.01,1);
    createCollectable("max",650,550,0.01,1);
    createCollectable("grace",900,550,0.01,1);
    createCollectable("steve",400,325,0,0);
    createCollectable("kennedi",900,325,0,0);
    createCollectable("diamond",700,50,0,0);
    createCollectable("database",1250,50,0,0);
    // TODO 4 - Create Cannons
    createCannon("right",770,760,60,30,650,775,2);
    createCannon("left",370,1200,10,30)
    createCannon("right",150,800,50,10)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
