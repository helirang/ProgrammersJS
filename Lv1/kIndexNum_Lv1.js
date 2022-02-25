function solution(array, commands) {
    var answer = [];
    let tempArr = [];
    
    commands.forEach((element)=>{
        tempArr = array.slice(element[0]-1,element[1]);
        tempArr.sort((a,b)=>a-b);
        answer.push(tempArr[element[2]-1]);
    })
    return answer;
}
