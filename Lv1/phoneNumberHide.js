function solution(phone_number) {
    var answer = '';
    let length = phone_number.length;
    answer = '*'.repeat(length-4) + phone_number.slice(length-4, length);
    return answer;
}
