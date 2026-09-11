import type { Team } from "./types/Team";

export const addPartner = (team: Team, partnerId: number): Team => {
    if (team.partners.includes(partnerId)) {
        return team;
    }
    return {
        ...team,
        partners: [...team.partners, partnerId],
    };
};

export const updateTeamPartnership = (
    allTeams: Array<Team>,
    teamId: number,
    partnerId: number
): Array<Team> => {
    return allTeams.map((team) =>
        team.id === teamId ? addPartner(team, partnerId) : team
    );
};

