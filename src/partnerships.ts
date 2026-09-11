import type { Team } from "./types/Team";

const addPartner = (team: Team, partnerId: number): Team => {
    if (team.partners.includes(partnerId)) {
        return team;
    }
    return {
        ...team,
        partners: [...team.partners, partnerId],
    };
};

export { addPartner };
