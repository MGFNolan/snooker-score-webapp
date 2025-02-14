import { describe, it, expect } from "vitest";
import { getBallScore, getFoulScore } from "../potBall.tsx";

describe("Ball Scoring System", () => {
  it("returns the correct score for a red ball", () => {
    expect(getBallScore("red")).toBe(1);
  });

  it("returns the correct score for a black ball", () => {
    expect(getBallScore("black")).toBe(7);
  });

  it("throws an error for an invalid ball color", () => {
    expect(() => getBallScore("purple")).toThrow("Invalid ball color: purple");
  });
});

describe("Foul Scoring System", () => {
  it("returns the correct foul score for a red ball", () => {
    expect(getFoulScore("red")).toBe(1);
  });

  it("returns the correct foul score for a black ball", () => {
    expect(getFoulScore("black")).toBe(7);
  });

  it("throws an error for an invalid foul ball color", () => {
    expect(() => getFoulScore("purple")).toThrow("Invalid ball color: purple");
  });
});