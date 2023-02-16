export type Practice = {
  type: "degrees";
  n: number;
};

export function readPractice(name: string): Promise<Practice> {
  return require("../practice/" + name + ".js").practice;
}
