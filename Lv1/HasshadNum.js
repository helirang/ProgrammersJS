function solution(x) {
    var answer = true;
    let tempArr = (x+'').split('');
    let tempNum=0;
    tempArr.forEach((element)=>{
        tempNum+=parseInt(element);
    })
    answer = x%tempNum === 0 ? true : false;
    return answer;
}
