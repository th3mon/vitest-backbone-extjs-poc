import { describe, it, expect } from "vitest";
import MyModel from "./MyModel";

describe("MyModel", () => {
  it("should have default values", () => {
    const model = new MyModel();
    // Test default values
    expect(model.get("attributeName")).toBe("defaultValue");
  });
});