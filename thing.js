var arr = [1,2,3,4,5,6,7,8,9,10];

function search(num){
  for(var i = 0; i< arr.length; i++){
    if(arr[i]===num){
      console.log(num);
    }else if (arr[i]> arr.length){
      console.log("it aint in there");
    }
  }
}

search(9);
search(42);