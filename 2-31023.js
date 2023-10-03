//Shuffle the Array
var shuffle=function(nums,n){
    var shuffledArray=[];
    for(let i=0;i<n;i++){
        shuffledArray.push(nums[i],nums[n+i])
    }
    return shuffledArray;
}
var arr=[2,3,5,4,1,7];
var shuffleTheArray=shuffle(arr,3)
console.log("Aarray after shuffling : ",shuffleTheArray);