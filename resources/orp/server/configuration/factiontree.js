import * as alt from 'alt';
import fs from 'fs';

const standardGang = {
    radio: {
        description: 'A faction designated chat.',
        requirement: 250
    },
    vehicle0: {
        description: 'Unlock a faction vehicle.',
        requirement: 500
    },
    vehicle1: {
        description: 'Unlock a faction vehicle.',
        requirement: 1000
    },
    vehicle2: {
        description: 'Unlock a faction vehicle.',
        requirement: 2000
    },
    recon: {
        description: 'Able to see all faction members online.',
        requirement: 3500
    },
    vehicle3: {
        description: 'Unlock a faction vehicle.',
        requirement: 4000
    },
    vehicle4: {
        description: 'Unlock a faction vehicle.',
        requirement: 8000
    },
    vehicle5: {
        description: 'Unlock a faction vehicle.',
        requirement: 16000
    },
    aircraft: {
        description: 'Unlock a faction aircraft.',
        requirement: 32000
    },
    warehouse: {
        description: 'Gain access to a faction warehouse for storing items.',
        requirement: 38000
    }
};

const standardBusiness = {
    endpoint: {
        description: 'A special textable line for users talk to your business members.',
        requirement: 100
    },
    radio: {
        description: 'A faction designated chat.',
        requirement: 250
    },
    warehouse: {
        description: 'Gain access to a faction warehouse for storing items.',
        requirement: 500
    },
    vehicle0: {
        description: 'Unlock a faction vehicle.',
        requirement: 500
    },
    vehicle1: {
        description: 'Unlock a faction vehicle.',
        requirement: 1000
    },
    vehicle2: {
        description: 'Unlock a faction vehicle.',
        requirement: 2000
    },
    recon: {
        description: 'Able to see all faction members online.',
        requirement: 3500
    },
    vehicle3: {
        description: 'Unlock a faction vehicle.',
        requirement: 4000
    },
    vehicle4: {
        description: 'Unlock a faction vehicle.',
        requirement: 8000
    },
    vehicle5: {
        description: 'Unlock a faction vehicle.',
        requirement: 16000
    },
    aircraft: {
        description: 'Unlock a faction aircraft.',
        requirement: 32000
    }
};

const standardFaction = {
    recon: {
        description: 'Able to see all faction members online.',
        requirement: 200
    },
    radio: {
        description: 'A faction designated chat.',
        requirement: 250
    },
    fvehicle0: {
        description: 'Unlock a faction vehicle.',
        requirement: 500
    },
    fvehicle1: {
        description: 'Unlock a faction vehicle.',
        requirement: 1000
    },
    fvehicle2: {
        description: 'Unlock a faction vehicle.',
        requirement: 2000
    },
    fvehicle3: {
        description: 'Unlock a faction vehicle.',
        requirement: 4000
    },
    fvehicle4: {
        description: 'Unlock a faction vehicle.',
        requirement: 8000
    },
    fvehicle5: {
        description: 'Unlock a faction vehicle.',
        requirement: 16000
    },
    faircraft: {
        description: 'Unlock a faction aircraft.',
        requirement: 32000
    },
    paybonus0: {
        description: 'All members recieve a $5 paycheck bonus.',
        requirement: 250000
    },
    paybonus1: {
        description: 'All members recieve a $5 paycheck bonus.',
        requirement: 500000
    }
};

// Main Faction Branch by Type ie. Gang, Police, etc.
// Sub-Faction Type by Activity
// Requirements are based on rewardpoints.
// Rewardpoints are earned every 5 minutes in-game.
// There are 12 reward points in 1 hour.
// There are 288 reward points in a 24 hour period.
// Members combine reward points to unlock faction skills.
export const SkillTree = {
    // Gang
    0: {
        // Access to Gun Runnning Jobs
        gun: {
            desc: 'Gain access to gun running jobs with primary focus on the gun trade.',
            ...standardGang,
            main: {
                description: 'Access to gun running jobs.',
                requirement: 1
            }
        },
        // Access to Drug Running Jobs
        drug: {
            desc:
                'Gain access to drug running jobs with primary focus on the drug trade.',
            ...standardGang,
            main: {
                description: 'Access to drug running jobs.',
                requirement: 1
            }
        }
    },
    // Police
    1: {
        fbi: {
            desc:
                'Your team will investigate murders and assist police with finding a killer.',
            ...standardFaction,
            main: {
                description: 'Investigate corpses information on a killer.',
                requirement: 1
            }
        },
        police: {
            desc:
                'Your responsibility is to capture wanted criminals and maintain order.',
            ...standardFaction,
            main: {
                description:
                    'Standard police faction. Arrest other players. Access to MDC.',
                requirement: 1
            }
        },
        swat: {
            desc:
                'Your factions responsibility is to help police neutralize heavily occupied turfs from gang activity.',
            ...standardFaction,
            main: {
                description: 'Access to heavy weaponry.',
                requirement: 1
            }
        }
    },
    // EMS
    2: {
        firefighter: {
            desc: 'Put out fires and restore functionality to stores, jobs, etc.',
            ...standardFaction,
            main: {
                description: 'Retrieve locations of on-going fires.',
                requirement: 1
            }
        },
        ems: {
            desc: 'Retrieve downed civilians.',
            ...standardFaction,
            main: {
                description: 'Retrieve and revive players. Recieve EMS calls.',
                requirement: 1
            }
        }
    },
    // Business
    3: {
        business: {
            desc: 'Start a business based on the item trading or any other service.',
            ...standardBusiness
        }
    }
};

alt.on('faction:SetSkillTree', player => {
    player.emitMeta('faction:SkillTree', JSON.stringify(SkillTree));
});