function solution(nums) {
    var answer = 0;
    let maxMon = nums.length/2;
    nums.sort();

    for(let i = 0; i < nums.length;i++){
        if(i===0) answer++;
        else if(nums[i-1] != nums[i]){
            answer++;
        }
        if(answer == maxMon) break;
    }
    return answer;
}
