//내가 푼거
function solutionOrigin(arr) {
    var answer = [];
    let tempArr = arr.slice();
    let smallNum, smallIndex;

    tempArr.sort((a, b)=>{ return a-b; });
    smallNum = tempArr[0];
    while(1){
        smallIndex = arr.indexOf(smallNum);
        if(smallIndex==-1) break;
        arr.splice(smallIndex,1);
    }
    if(arr.length < 1) answer.push(-1)
    else answer = arr;

    return answer;
}

// 깔끔한 답안
function solution(arr)
{
    var answer = [];
    
    answer.push(arr[0]);
    for(let i =1; i < arr.length; i++){
        if(arr[i] != arr[i-1]){
            answer.push(arr[i]);
        }
    }
    
    return answer;
}
