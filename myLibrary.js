function bouncing(rect1, rect2)
{
  if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
      && rect2.x - rect1.x < rect2.width/2 + rect1.width/2
      && rect1.y - rect2.y < rect2.height/2 + rect1.height/2
      && rect2.y - rect1.y < rect2.height/2 + rect1.height/2) {
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
    rect1.velocityX *= -1;
    rect2.velocityY *= -1;
  }
  else {
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
}
}
function isTouching(rect1, rect2)
{
    if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
      && rect2.x - rect1.x < rect2.width/2 + rect1.width/2
      && rect1.y - rect2.y < rect2.height/2 + rect1.height/2
      && rect2.y - rect1.y < rect2.height/2 + rect1.height/2) {
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  else {
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
}
}