let btn = document.querySelector("#btn");
let rtime = document.querySelector("#r-time")
let best = document.querySelector("#best");
let t =0;
let k=0;
let minn = Number.MAX_SAFE_INTEGER;

let min = (a, b) => {
    let s = a<b?a:b;
    return s;
}

btn.addEventListener("click", () => {
    t = performance.now()/1000-k;
    if(minn>t) {
        minn = t;
        best.innerText = "Your Best responce time :  " + t + "  seconds";
    }
    console.log(performance.now());
    rtime.innerText = "Your resonce time :  " + t + "seconds" ;
    k = performance.now()/1000;
});



// after <hr> things

let btn1 = document.querySelector("#btn1");
let rtime1 = document.querySelector("#r-time1");
let best1 = document.querySelector("#best1");
let b = document.querySelector("#b");
let t1 = performance.now();
let lt = 0;
let lr = 3000;
let k1 = Number.MAX_SAFE_INTEGER;
let minn1 = Number.MAX_SAFE_INTEGER;

let timee = () =>{
    return Math.floor(Math.random()*4000 + 1000); // RETURNS TIME BETWEEN 1 TO 5 SECONDS.
}


setTimeout(() => {
    b.style.backgroundColor = "red";
}, 3000);


btn1.addEventListener("click", () => {
    t1 = performance.now()/1000 - lt;
    k1 = t1 - lr/1000;
    if(k1>=0){
        b.style.backgroundColor = "blue";
        rtime1.innerText =  "Your responce time :  " + k1 + "  seconds";
        if(minn1>k1) {
            minn1 = k1;
            best1.innerText = "Your Best responce time :  " + minn1 + "  seconds";
        }
        let r = timee();
        setTimeout(() => {
            b.style.backgroundColor = "red";
        }, r);
        lr = r;
        lt = performance.now()/1000;
    }
});
