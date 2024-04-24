
// star pattern 
//left  triangle 
let n = 5
for (let i = 0; i <= n; i++) {
    str = ""
    for (let j = 0; j <= i; j++) {
        str += "* "

    }
    // console.log(str);
}


//reverse left  triangles
let m = 5;

for (let k = m; k >= m; k--) {
    let star = "";

    for (let l = 0; l <= k; l++) {
        star += "* ";
    }

    // console.log(star);

}

//right triangles 
let o = 10;
for (let x = 1; x <= o; x++) {
    let st = "";
    for (let y = 0; y < o - x; y++) {
        st += " ";
    }
    for (let z = 0; z < x; z++) {
        st += "*";
    }
    console.log(st);
}


//right reverse triangles 
