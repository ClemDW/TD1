import type { CrewMember } from "./types/CrewMember";

const getDisplayName = (crewMember: CrewMember): string => {
    return `${crewMember.name} : (${crewMember.role ?? "Sans rôle"})`;
}

const hasSkill = (crewMember: CrewMember, skill: string): boolean => {
    return crewMember.skills.includes(skill);
}

const isAvailable = (crewMember: CrewMember): boolean => {
    return crewMember.status === "disponible";
}

export { getDisplayName, hasSkill, isAvailable };