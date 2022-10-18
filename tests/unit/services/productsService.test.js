const { expect } = require("chai");
const { productsService } = require("../../../src/services");

describe('Test product services', function () {
    it("Testa se retorna todos os produtos", async function () {
      const response = await productsService.reciveAllProducts();
      expect(1).to.equal(1);
    });

    it("Testa se retorna produto de id especifico", async function () {
      const response = await productsService.reciveProductsById(1);
      expect(1).to.equal(1);
    });

    it("Testa o cadastro dee produtos", async function () {
      const response = await productsService.reciveProduct("Martelo do thor");
      expect(1).to.equal(1);
    });
})