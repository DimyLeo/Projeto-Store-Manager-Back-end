const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiHttp);
const app = require("../../../src/app");
const connection = require("../../../src/models/connection");

describe("Test product controller", function () {
  it("Testa o retorno de todos os produtos", async function () {
    sinon.stub(connection, "execute").resolves([]);
    const response = await chai.request(app).get("/products");

    expect(response.status).to.be.equal(200);
  });
  afterEach(sinon.restore);
});