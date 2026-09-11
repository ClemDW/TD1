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

// #region Part 3
import { createCrewCards } from "./crew";
import type { CrewCard } from "./types/CrewCard";

console.log("\n########## Exercice 3 ##########");

const crewCards: Array<CrewCard> = createCrewCards(crewMembers);

console.table(crewCards);

// #endregion

// #region Part 4
import { addPartner } from "./partnerships";

console.log("\n########## Exercice 4 ##########");

const originalTeam = teams[0];

if (originalTeam) {
  const updatedTeam = addPartner(originalTeam, 2);

  console.log("Équipe d'origine :");
  console.log(originalTeam);

  console.log("\nÉquipe résultat (après addPartner avec l'id 2) :");
  console.log(updatedTeam);

  console.log("\nVérifications :");
  console.log("- Les références sont différentes :", originalTeam !== updatedTeam);
  console.log("- L'équipe d'origine ne possède aucun partenaire :", originalTeam.partners.length === 0);
  console.log("- La nouvelle équipe contient l'identifiant 2 :", updatedTeam.partners.includes(2));
}

// #endregion