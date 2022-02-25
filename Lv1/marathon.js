function solution(participant, completion) {
    var answer = '';
    let test = false;
    
    participant.sort();
    completion.sort();
    
    for(let i=0; i < completion.length; i++){
        if(participant[i] != completion[i]){
            answer = participant[i];
            test = true;
            break;
        }
    }
    if(!test){
        answer = participant[participant.length-1];
    }
   return answer;
}
