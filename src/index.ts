import { teams } from "./data/teams";

const firstTeam = teams[0];

if (firstTeam) {
  const { name, title } = firstTeam;
  console.log(`${name} : « ${title} »`);
}
