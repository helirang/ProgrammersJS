function solution(arr) {
    var answer = 0;
    let total_number = 0;
    arr.forEach((element)=>{
        total_number += element;
    });
    answer = total_number/arr.length;
    return answer;
}
