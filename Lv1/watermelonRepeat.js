function solution(n) {
    var answer = '';
    let repeatNum = n/2;
    let addOne = n%2;
    answer = '수박'.repeat(repeatNum);
    answer += '수'.repeat(addOne);
    return answer;
}
