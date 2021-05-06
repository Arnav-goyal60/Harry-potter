var images = [ "harry potter.png ", "ron.png", "her.png" , "Deathy_Hallows_New_Cover (1).jpg"];
var names = ["Harry Potter", "Ron Weasley", "Hermine Granger", "Book Cover"]
var i=0;
function changepic(){
    document.getElementById("charac").src=images[i];
document.getElementById("name").innerHTML=names[i];
i++;
if(i==4){
    i=0
}
}
