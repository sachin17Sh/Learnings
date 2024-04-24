
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
    let star = ""

    for (let l = 0; l <= k; l++) {
        star += "* ";
    }

    // console.log(star);

}

//left triangles with number 
let rows = 8;

for (let b = 1; b <= rows; b++) {
    let pattern = "";
    for (let c = 1; c <= b; c++) {
        pattern += c + " ";
    }
    console.log(pattern);
}

//reverse left triangle 
