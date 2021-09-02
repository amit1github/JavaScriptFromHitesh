const names = ["YouTube", "facebook", "Instagram", "Netflix", "Amazon"]

//  FOR OF LOOP: used in arrays.
for (const n of names) {
    console.log(n);
};

const symbols = {
    yt: "YouTube",
    fb: "Facebook",
    ig: "Instagram",
    nf: "Netflix",
}

// FOR IN LOOPS: used in objects - they return you the keys.
for (const m in symbols) {
    console.log(m);
    // can write in two ways upto you how you want to value to show up
    console.log(`Key is: ${m} and value is${symbols[m]}`);
}