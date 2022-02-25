function solution(n, lost, reserve) {
    var answer = 0;
    let arr = new Array(n);
    arr.fill(0);
    answer = n - lost.length;
    
    lost.forEach((element)=>{
        let minusElement = element-1;
        arr[minusElement] -= 1;
    });
    reserve.forEach((element)=>{
        let minusElement = element-1;
        if(arr[minusElement]<0) answer +=1;
        arr[minusElement] += 1;
    })
    reserve.sort();
    reserve.forEach((element)=>{
        let minusElement = element-1;
        if(arr[minusElement] > 0){
            if(minusElement-1 >= 0 && arr[minusElement-1]<0){
            arr[minusElement-1] += 1;
            answer+=1;
            }else if(minusElement+1 < n && arr[minusElement+1]<0){
            arr[minusElement+1] += 1;
            answer+=1;
            }
        }});
    return answer;
}
