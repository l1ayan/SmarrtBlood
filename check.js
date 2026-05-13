const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(match => match[1]);

for (const script of scripts) {
  new Function(script);
}

const testCaseCount = [...html.matchAll(/id:\s*"TC-/g)].length;

console.log("syntax=ok");
console.log(`testCases=${testCaseCount}`);
console.log(`hasDashboard=${html.includes("Good morning")}`);
console.log(`hasRequest=${html.includes("Create Blood")}`);
console.log(`hasMatches=${html.includes('Donor <span class="red">Matches')}`);
console.log(`hasHistory=${html.includes('Donation <span class="red">History')}`);
