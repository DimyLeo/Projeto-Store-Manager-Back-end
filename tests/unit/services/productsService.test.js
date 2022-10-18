const { expect } = require("chai");
const sinon = require("sinon");
const { reqProducts } = require("../../../src/models");
const { productsService } = require("../../../src/services");
const { productsMock } = require("./mocks/productsMock");

describe("Test products services", () => {
  beforeEach(sinon.restore);
  it("Testa se recupera todos os produtos", async () => {
    sinon.stub(reqProducts, "reqProducts").resolves(productsMock);
    const result = await productsService.reciveAllProducts();
    expect(result).to.deep.equal({ type: null, message: productsMock });
  });
  it("Testa se recupera produto por ID", async () => {
    sinon.stub(reqProducts, "reqProductsById").resolves(productsMock[1]);
    const result = await productsService.reciveProductsById(1);
    expect(result).to.deep.equal({ type: null, message: productsMock[1] });
  });
  it("Testa se retorna o erro quase o ID não exista", async () => {
    sinon.stub(reqProducts, "reqProductsById").resolves(undefined);
    const result = await productsService.reciveProductsById(5);
    expect(result).to.deep.equal({
      type: "PRODUCT_NOT_FOUND",
      message: "Product not found",
    });
  });
  it("Testa o retorno caso o ID seja invalido", async () => {
    sinon.stub(reqProducts, "reqProductsById").resolves(undefined);
    const result = await productsService.reciveProductsById(-1);
    expect(result).to.deep.equal({
      type: "number.min",
      message: "please enter a valid id",
    });
  });
  it("Testa o cadastro de um novo produto", async () => {
    sinon.stub(reqProducts, "insert").resolves(1);
    sinon
      .stub(reqProducts, "reqProductsById")
      .resolves({ id: 1, name: "teste" });
    const result = await productsService.reciveProduct({ name: "teste" });
    expect(result).to.deep.equal({
      type: null,
      message: { id: 1, name: "teste" },
    });
  });
  it("Testa se retorna o erro caso o nome tenha menos de 5 caracteres", async () => {
    const result = await productsService.reciveProduct({ name: "tst" });
    expect(result).to.deep.equal({
      type: "string.min",
      message: '"name" length must be at least 5 characters long',
    });
  });
  it("Testa se retorna o erro caso o nome não seja passado", async () => {
    const result = await productsService.reciveProduct({});
    expect(result).to.deep.equal({
      type: "any.required",
      message: '"name" is required',
    });
  });
});