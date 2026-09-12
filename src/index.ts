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
import { addPartner, updateTeamPartnership, removePartner } from "./partnerships";
import type { Team } from "./types/Team";

console.log("\n########## Exercice 4 ##########");

const originalTeam = teams[0];

if (originalTeam) {
  const updatedTeam = addPartner(originalTeam, 2);

  console.log("Équipe d'origine :");
  console.log(originalTeam);

  console.log("\nÉquipe résultat (après addPartner avec l'id 2) :");
  console.log(updatedTeam);

  console.log("\nVérifications 4.2 :");
  console.log("- Les références sont différentes :", originalTeam !== updatedTeam);
  console.log("- L'équipe d'origine ne possède aucun partenaire :", originalTeam.partners.length === 0);
  console.log("- La nouvelle équipe contient l'identifiant 2 :", updatedTeam.partners.includes(2));
}

console.log("\n--- 4.3 Mettre à jour le tableau complet ---");
const withAurorePartnership: Array<Team> = updateTeamPartnership(teams, 1, 2);
const partnerTeams: Array<Team> = updateTeamPartnership(withAurorePartnership, 2, 1);

console.table(partnerTeams);

const auroreOriginal = teams.find((t) => t.id === 1);
const horizonOriginal = teams.find((t) => t.id === 2);
const auroreUpdated = partnerTeams.find((t) => t.id === 1);
const horizonUpdated = partnerTeams.find((t) => t.id === 2);

console.log("\nVérifications 4.3 :");
console.log(
  "- Le tableau initial reste inchangé (toutes les équipes d'origine ont 0 partenaire) :",
  teams.every((t) => t.partners.length === 0)
);
console.log("- Aurore possède le partenaire 2 :", auroreUpdated?.partners.includes(2));
console.log("- Horizon possède le partenaire 1 :", horizonUpdated?.partners.includes(1));

console.log("\n--- 4.4 Supprimer une collaboration ---");
if (auroreUpdated) {
  const auroreWithoutPartner = removePartner(auroreUpdated, 2);
  console.log("Équipe Aurore avant suppression du partenaire :");
  console.log(auroreUpdated);

  console.log("\nÉquipe résultat après removePartner (retrait du partenaire 2) :");
  console.log(auroreWithoutPartner);

  console.log("\nVérifications 4.4 :");
  console.log("- Les références sont différentes :", auroreUpdated !== auroreWithoutPartner);
  console.log("- Le partenaire 2 a bien été retiré :", !auroreWithoutPartner.partners.includes(2));
  console.log("- L'objet d'origine n'a pas été muté :", auroreUpdated.partners.includes(2));
}

// #endregion

// #region Part 5
import { describeMissionState } from "./mission";
import type { MissionState } from "./types/MissionState";

console.log("\n########## Exercice 5 ##########");
console.log("\n--- 5.2 Restreindre le type par une condition ---");

const loadingState: MissionState = { status: "loading" };
const successState: MissionState = { status: "success", data: crewCards };
const errorState: MissionState = {
  status: "error",
  message: "Communication avec la base interrompue",
};

console.log(describeMissionState(loadingState));
console.log(describeMissionState(successState));
console.log(describeMissionState(errorState));

// #endregion