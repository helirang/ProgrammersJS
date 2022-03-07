const EvenFunc = (n)=>{
    return n/2;
}
const OddFunc = (n)=>{
    return n*3+1
}
const CheckFunc = (n)=>{
    return n%2===0 ? true : false;
}

function solution(num) {
    var answer = 0;
    let checkNum = 0;
    if(num==1) return 0;
    while(1){
        if(CheckFunc(num)){
            num = parseInt(EvenFunc(num));
        }else{
            num = OddFunc(num);
        }
        checkNum++;
        if(checkNum >= 499){
            answer =-1;
            break;
        }
        if(num==1){
            answer = checkNum;
            break;
        }
    }
    return answer;
};
