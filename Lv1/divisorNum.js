function solution(arr, divisor) {
    var answer = [];
    arr.forEach((element)=>{
        if(element%divisor ==0){
            answer.push(element);
        }
    })
    if(answer.length < 1){
        answer.push(-1);
    }else{
        answer.sort((a,b)=>a-b);
    }
    return answer;
}
