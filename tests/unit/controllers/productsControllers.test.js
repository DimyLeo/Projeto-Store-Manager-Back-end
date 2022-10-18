const { expect } = require("chai");
const chai = require("chai");
const sinon = require("sinon");
const { productsService } = require("../../../src/services");
const { productsController } = require("../../../src/controllers");
const {
  success,
  // idInvalid,
  // idNotFound,
  successId,
} = require("./mocks/productsMock");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

describe("Test controller products", () => {
  beforeEach(sinon.restore);
  it("Testa se retorna todos os produtos", async () => {
    sinon.stub(productsService, "reciveAllProducts").resolves(success);
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productsController.getProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(success.message);
  });

    it("Testa se recupera produto especifico por ID", async () => {
    const req = { params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, "reciveProductsById").resolves(successId);
    await productsController.getProductsId(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(successId.message);
  });
});