class Food{
constructor(foodStock,lastFed){
milkImage=loadImage(images)
milk.addImage(milkImage)



function getFoodStock(data){
foodS=data.val();
}
function updateFoodStock(x){
    if (x<=0){
        x=0
        }
        else{
        x=x-1
        }
        database.ref("/").update({
        Food:x
        })
}

bedroom(){
background(bedroomImage,550,550)
}
washroom(){
background(washroomImage,550,550)
}
garden(){
background(gardenImage,550,550)
}

}
display(){
    if(x>0){
    milk.display()
    }


}
}