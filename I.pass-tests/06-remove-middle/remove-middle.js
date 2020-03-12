function removeMiddle(toRemove) {
    let a = Math.floor(toRemove.length/2);
  /* if(toRemove.length % 2){
        return toRemove[a];}
    else{
        return (toRemove[a-1] + toRemove[a]) / 2.0;}
*/
        toRemove.splice(a,1);
return toRemove;
  
    }

module.exports = removeMiddle;