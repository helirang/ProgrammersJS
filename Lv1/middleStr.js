function solution(s) {
    var answer = '';
    let mid = parseInt(s.length/2);
    answer = s.length%2==0 ?
        s.slice(mid-1,mid+1) : s.slice(mid,mid+1);
    return answer;
}
