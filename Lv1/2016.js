function solution(a, b) {
    var answer = '';
    const weekday = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let date = new Date(Date.UTC(2016,a-1,b));
    answer = weekday[date.getDay()];
    return answer;
}
