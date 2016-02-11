function sortNumbers(){
var unsortedArray=[];
var unsortedIntArray=[];
var sortedArray=[];
var i;

if(document.getElementById("option").value=="Ascending"){

unsortedArray= (document.getElementById("input").value).split("; ");
for(i=0;i<unsortedArray.length;i++){

unsortedIntArray[i]=parseInt(unsortedArray[i]);

}
sortedArray=unsortedIntArray.sort();

document.getElementById("result").value=sortedArray;
}

else if(document.getElementById("option").value=="Descending"){

unsortedArray= (document.getElementById("input").value).split("; ");
for(i=0;i<unsortedArray.length;i++){

unsortedIntArray[i]=parseInt(unsortedArray[i]);

}
sortedArray=unsortedIntArray.sort(function(a, b){return b-a});

document.getElementById("result").value=sortedArray;
}


}





