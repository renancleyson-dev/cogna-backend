import type { Request } from "express";
import { describe, after, beforeEach, it } from "node:test";
import assert from "node:assert";
import httpMocks from "node-mocks-http";
import isEqual from "lodash/isEqual";
import "../setup";
import {
  listProducts,
  showProduct,
} from "../../controllers/product.controller";
import { createProductFixtures } from "./product.fixtures";
import { toProductDTO } from "../../data/product.data";
import { db } from "../../db/connection";

describe("Product Controller", () => {
  beforeEach(async () => {
    await db.deleteFrom("product").execute();
  });

  after(async () => {
    await db.deleteFrom("product").execute();
  });

  describe("listProducts", () => {
    it("should list products", async () => {
      const products = await createProductFixtures();
      const req = httpMocks.createRequest({
        method: "GET",
        url: "/produtos",
      });
      const res = httpMocks.createResponse();

      await listProducts(req, res);
      const responseData = res._getJSONData();

      assert.ok(
        Array.isArray(responseData.result),
        "Response should be an array",
      );
      assert.strictEqual(
        responseData.result.length,
        products.length,
        "Should return all products",
      );
    });
    it("should paginate products", async () => {
      const products = await createProductFixtures();
      const query = {
        page: 2,
        perPage: 1,
      };
      const req = httpMocks.createRequest({
        method: "GET",
        url: "/produtos",
        query,
      });
      const res = httpMocks.createResponse();

      await listProducts(req, res);
      const responseData = res._getJSONData();

      assert.strictEqual(
        responseData.page,
        query.page,
        "page should be same as query",
      );
      assert.strictEqual(
        responseData.perPage,
        query.perPage,
        "perPage should be same as query",
      );
      assert.strictEqual(
        responseData.result.length,
        query.perPage,
        "result length should be same as perPage",
      );
      assert.strictEqual(
        responseData.total,
        products.length,
        "total should be the could of all products",
      );
    });
  });
  describe("showProduct", () => {
    it("should show a product", async () => {
      const products = await createProductFixtures();
      const firstProduct = products[0];
      const req = httpMocks.createRequest<Request<{ id: string }>>({
        method: "GET",
        params: { id: firstProduct.id },
        url: `/produtos/${firstProduct.id}`,
      });
      const res = httpMocks.createResponse();

      await showProduct(req, res);
      const responseData = res._getJSONData();
      assert.ok(
        isEqual(responseData, toProductDTO(firstProduct)),
        "Should return the product DTO",
      );
    });
  });
});
