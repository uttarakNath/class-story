function bounceOff(a,b){
    if(b.x-a.x<a.width/2+b.width/2 && a.x-b.x<a.width/2+b.width/2){
        a.velocityX=a.velocityX*(-5);
        b.velocityX=b.velocityX*(-5);
    }
    if( b.y-a.y<a.height/2+b.height/2 && a.y-b.y<a.height/2+b.height/2){
a.velocityY=a.velocityY*(-5);
b.velocityY=b.velocityY*(-5);
    }
}