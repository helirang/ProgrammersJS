process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let answer='';
    let temp = '*'.repeat(a);
    for(let i=0; i < b;i++){ 
        answer += i!==0 ? '\n'+temp : temp;
    }
    console.log(answer);
});
