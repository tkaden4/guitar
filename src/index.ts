// @ts-check
import _ from "lodash";
import * as rl from "readline/promises";
import { readPractice } from "./practice";

(async () => {
  const degrees = 4;
  const scaleDegrees = [1, 2, 3, 4, 5, 6];
  const intervals = ["1", "2-", "2+", "3-", "3+", "4", "T", "5", "6-", "6+", "7-", "7+"];

  const practice = await readPractice(process.argv[2]);

  const screen = rl.createInterface(process.stdin, process.stdout);
  for (;;) {
    await screen.question("next degrees? ");
    console.log(_.repeat("\n", 100));
    console.log(_.shuffle(scaleDegrees).slice(0, practice.n).join(" "));
    console.log();
  }
})();
