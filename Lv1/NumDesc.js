function solution(n) {
    var answer = 0;
    let tempArr = (n+'').split('');
    tempArr.sort((a,b)=>b-a);
    answer = parseInt(tempArr.join(''),10);
    return answer;
}
