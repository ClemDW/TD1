import { teams } from "./data/teams";

// #region Part 1

console.log("########## Exercice 1 ##########");
const firstTeam = teams[0];

if (firstTeam) {
  const { name, title } = firstTeam;
  console.log(`${name} : « ${title} »`);
}

console.log("\n");

// #endregion

// #region Part 2
import { getDisplayName, hasSkill, isAvailable } from "./crew";
import { crewMembers } from "./data/crewMembers.ts";

console.log("########## Exercice 2 ##########");

console.log("Recherche d'un membre de l'équipage par son nom");

console.log(crewMembers.find((crewMember) => crewMember.name === "Alonzo Church"));

console.log("\n Liste des membres de l'équipage disponibles");

console.log(crewMembers.filter((crewMember) => isAvailable(crewMember)));

console.log("\n Liste des membres de l'équipage ayant la compétence 'communication'");

console.log(crewMembers.filter((crewMember) => hasSkill(crewMember, "communication")));

console.log("\n Liste des membres de l'équipage avec leur nom et prénom");

console.log(crewMembers.map((crewMember) => getDisplayName(crewMember)));

// #endregion