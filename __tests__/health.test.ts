import { describe, expect, it } from "bun:test";
import { GET } from "../app/api/health/route";

describe("GET /api/health", () => {
  it("returns a JSON health response with a valid timestamp", async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("application/json");
    expect(data.status).toBe("ok");
    expect(data.message).toBe("Server is healthy");
    expect(Number.isNaN(Date.parse(data.timestamp))).toBe(false);
  });
});
