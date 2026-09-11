import { teams } from "./data/teams";
import type { CrewCard } from "./types/CrewCard";
import type { CrewMember } from "./types/CrewMember";
import type { Team } from "./types/Team";

const getDisplayName = (crewMember: CrewMember): string => {
    return `${crewMember.name} : ${crewMember.role ?? "Sans rôle"}`;
}

const hasSkill = (crewMember: CrewMember, skill: string): boolean => {
    return crewMember.skills.includes(skill);
}

const isAvailable = (crewMember: CrewMember): boolean => {
    return crewMember.status === "disponible";
}

const findTeamById = (teamId: number): Team | undefined => {
    return teams.find((team) => team.id === teamId);
}

const getTeamName = (crewMember: CrewMember): string => {
    const team = findTeamById(crewMember.teamId);
    return team ? team.name : "Equipe inconnue";
}

const createCrewCards = (members: Array<CrewMember>): Array<CrewCard> => {
    return members.map((member) => ({
        id: member.id,
        label: getDisplayName(member),
        teamName: getTeamName(member),
        isAvailable: isAvailable(member),
    }));
}

export { getDisplayName, hasSkill, isAvailable, findTeamById, getTeamName, createCrewCards };