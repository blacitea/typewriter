const sentence = "Let's change it again. Is it still working?";
let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    if (sentence.indexOf(char) === sentence.length - 1) {
      process.stdout.write("\n");
    }
  }, time);
  time += 50;

}