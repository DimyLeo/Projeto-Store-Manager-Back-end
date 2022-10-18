const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { reqProducts } = require('../../../src/models');
const {
  allProducts,
  productId,
  newProductDB,
} = require("./mocks/productsMock");

describe("Test products model", function () {
  it('Testa se retorna todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);
    const response = await reqProducts.reqProducts();
    expect(response[0].id).to.equal(1);
    expect(response[1].name).to.equal("Traje de encolhimento");
    expect(response[2].id).to.equal(3);
    expect(response[2].name).to.equal("Escudo do Capitão América");
  });

  it("Testa se retorna um produto por id especifico", async function () {
    sinon.stub(connection, "execute").resolves([productId]);
    const response = await reqProducts.reqProductsById(1);
    expect(response.id).to.equal(1);
    expect(response.name).to.equal('Martelo de Thor');
  });

    it("Testa o cadastro de um novo produto", async function () {
      sinon.stub(connection, "execute").resolves([{ insertId: 4 }]);
      const response = await reqProducts.newProduct(newProductDB);
      expect(response.insertId).to.equal(4);
    });
  afterEach(sinon.restore);
});