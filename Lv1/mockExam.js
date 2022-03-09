function solution(answers) {
    var answer = [];
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];
    let temp = [0,0,0];
    let length = answers.length;
    
    for(let i =0; i<length;i++){
        let o,t,th;
        let tempIndex;
        o = i< one.length ? i : i%one.length;
        t = i< one.length ? i : i%two.length;
        th = i< one.length ? i : i%three.length;
        temp[0] += answers[i] == one[o] ? 1 : 0;
        temp[1] += answers[i] == two[t] ? 1 : 0;
        temp[2] += answers[i] == three[th] ? 1 : 0;
    }
    
    let max = Math.max(...temp);
    for(let j=0; j<temp.length;j++){
        if(temp[j]==max)answer.push(j+1);
    }
    return answer;
}
