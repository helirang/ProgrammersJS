function solution(s) {
    var answer = true;
    answer = 4 == s.length || s.length == 6 ? true : false;
    if(answer){
         for(let i =0; i < s.length; i++){
             if(isNaN(s.charAt(i))){
                 answer = false;
                 break;
             }
         }
    }
    return answer;
}
