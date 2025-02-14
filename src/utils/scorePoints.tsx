export const ballValues: Record<string, number> = {
    red: 1,
    yellow: 2,
    green: 3,
    brown: 4,
    blue: 5,
    pink: 6,
    black: 7,
    foul: 4
  };
  
  /**
   * Returns the score of a potted ball based on its color.
   * @param ballColour - The color of the ball potted.
   * @returns The point value of the ball.
   */
  export function getBallScore(ballColour: string): number {
    if (!(ballColour in ballValues)) {
      throw new Error(`Invalid ball color: ${ballColour}`);
    }
    return ballValues[ballColour];
  }
  
    /**
     * Returns the score of a potted ball based on its color.
     * @param foulColour - The color of the ball potted.
     * @returns The point value of the ball.
     */
    export function getFoulScore(ballColour: string): number {
      if (!(ballColour in ballValues)) {
        throw new Error(`Invalid ball color: ${ballColour}`);
      }
      return ballValues[ballColour];
    }