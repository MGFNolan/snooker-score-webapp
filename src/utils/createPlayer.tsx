type Player = {
    id: number;
    name: string;
    score: number;
    break: number;
    
};

export function createPlayer(id: number, name: string): Player {

    if (typeof name !== 'string') {
        throw new Error(`Invalid player name: ${name}`);
}

    return {
    id,
    name,
    score: 0,
    break: 0,
    };
}