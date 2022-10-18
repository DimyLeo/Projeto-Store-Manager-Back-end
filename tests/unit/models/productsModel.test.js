const { expect } = require("chai");
const sinon = require("sinon");
const { reqProducts } = require("../../../src/models");
const connection = require("../../../src/models/connection");
const { productsMock } = require("./mocks/productsMock");

describe("Test products model", () => {
  beforeEach(sinon.restore);
  it("Testa se recupera todos os produtos", async () => {
    sinon.stub(connection, "execute").resolves([productsMock]);
    const response = await reqProducts.reqProducts();
    expect(response).to.deep.equal(productsMock);
  });
  it("Testa se recupera um produto especifico por ID", async () => {
    sinon.stub(connection, "execute").resolves([[productsMock[1]]]);
    const response = await reqProducts.reqProductsById(1);
    expect(response).to.deep.equal(productsMock[1]);
  });

  it("Testa o cadastro de um novo produto", async () => {
    sinon.stub(connection, "execute").resolves([{ insertId: 1 }]);
    const response = await reqProducts.newProduct("teste");
    expect(response).to.be.equal(1);
  });
});