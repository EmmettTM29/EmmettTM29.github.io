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
    createPlatform(200,0,50,640)
    createPlatform(1150,640,100,20,"green")
    createPlatform(1300,560,100,20,"green")
    createPlatform(250,450,950,50)
    createPlatform(225,350,26,25,"indigo")
    createPlatform(225,250,26,25,"indigo")
    createPlatform(400,200,1000,50)
    // TODO 3 - Create Collectables
    createCollectable("diamond",400,550,0.09,1)
    createCollectable("max",650,550,0.06,1)
    createCollectable("grace",900,550,0.03,1)
    //add 2 on second level and 2 (in the middle and very edge) on the 3rd level
    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
