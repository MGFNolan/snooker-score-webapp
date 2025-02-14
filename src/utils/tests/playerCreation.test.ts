import { describe, it, expect } from "vitest";
import { createPlayer } from "../createPlayer";

describe('createPlayer function', () => {
    it('should throw an error if name is not a string', () => {
        const id = 1;
        const invalidName = 123;  // Not a string
        

    expect(() => createPlayer(id, invalidName as any)).toThrowError(`Invalid player name: ${invalidName}`);
    });

    it('should create a player object when name is a valid string', () => {
    const id = 1;
    const validName = 'John Doe';
    

    const player = createPlayer(id, validName);

    expect(player).toEqual({
        id,
        name: validName,
        score: 0,
        break: 0,
    });
    });
});