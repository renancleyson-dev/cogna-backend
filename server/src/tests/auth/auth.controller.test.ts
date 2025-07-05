import { describe, it } from "node:test";
import assert from "node:assert";
import httpMocks from "node-mocks-http";
import { faker } from "@faker-js/faker";
import { signIn } from "../../controllers/auth.controller";
import { isAuthenticated } from "../../services/auth.service";

describe("Auth Controller", () => {
  it("should sign-in anon users with valid e-mails", async () => {
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/auth/anonymous",
      body: {
        email: faker.internet.email(),
      },
    });
    const res = httpMocks.createResponse();

    await signIn(req, res);
    const responseData = res._getJSONData();
    assert.ok(isAuthenticated(responseData.token), "Token should be valid");
  });
});
