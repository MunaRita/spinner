const spinner = function(array) {
  let time = 100;
  for (const arr of array) {
    
    setTimeout(() => {
      process.stdout.write(arr);
    }, time);
    time += 300;
  }

  setTimeout(() => {
    process.stdout.write("\n");

  },time);

  
};


const spin = ['\r|     ', '\r/     ', '\r-     ', '\r\\    ', '\r/    ', '\r-   ', '\r|   ' ];
spinner(spin);