// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [
      { x: 0, width: 100, height: 300, speedX: -2 },
      { x: 200, width: 150, height: 200, speedX: -3 },
      { x: 275, width: 100, height: 300, speedX: -2 },
      { x: 350, width: 150, height: 200, speedX: -3 },
      { x: 450, width: 100, height: 300, speedX: -2 },
      { x: 525, width: 150, height: 200, speedX: -3 },
      { x: 625, width: 100, height: 300, speedX: -2 },
      { x: 700, width: 150, height: 200, speedX: -3 },
      { x: 800, width: 100, height: 300, speedX: -2 },
      { x: 875, width: 150, height: 200, speedX: -3 },
      { x: 975, width: 100, height: 300, speedX: -2 },
      { x: 1050, width: 150, height: 200, speedX: -3 },
      { x: 1150, width: 100, height: 300, speedX: -2 },
      { x: 1225, width: 150, height: 200, speedX: -3 },
    ],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [
      { x: 350, width: 50, height: 150, speedX: -5 },
      { x: 700, width: 50, height: 150, speedX: -5 },
      { x: 1050, width: 50, height: 150, speedX: -5 },
      { x: 1400, width: 50, height: 150, speedX: -5 },
    ],
  },
};
