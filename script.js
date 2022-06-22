let str1 = "";
let str2 = "";
let output;
document.getElementById("input1").addEventListener("change", function (e) {
  str1 = e.target.value;
  output = levenshteinDistance(str1, str2);
});
document.getElementById("input2").addEventListener("change", function (e) {
  str2 = e.target.value;
  output = levenshteinDistance(str1, str2);
});
document.querySelector(".output1").addEventListener("click", function (e) {
  document.querySelector(".output").textContent = `The distance is ${output}`;
});
const levenshteinDistance = (str1 = "", str2 = "") => {
  const track = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1.length + 1).fill(null));
  for (let i = 0; i <= str1.length; i += 1) {
    track[0][i] = i;
  }
  for (let j = 0; j <= str2.length; j += 1) {
    track[j][0] = j;
  }
  for (let j = 1; j <= str2.length; j += 1) {
    for (let i = 1; i <= str1.length; i += 1) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1, // deletion
        track[j - 1][i] + 1, // insertion
        track[j - 1][i - 1] + indicator // substitution
      );
    }
  }
  return track[str2.length][str1.length];
};
