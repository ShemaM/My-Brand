import path from "path";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";
import User from "../modal/user";
import server from "../index";
import mockdata from "./mockdata";
const { it, describe, beforeEach, afterEach } = mocha;

chai.should();

chai.use(chaiHttp);

describe("Testing user", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  it("should register user", async () => {
    const res = await chai
      .request(server)
      .post("/api/v1/user/register")
      .send(mockdata.signUpUser);
    res.should.have.status(200);
    res.body.should.have.property("token");
  });

  it("should login user", async () => {
    const signUp = await chai
      .request(server)
      .post("/api/v1/user/register")
      .send(mockdata.signUpUser);

    const login = await chai
      .request(server)
      .post("/api/v1/user/login")
      .send(mockdata.loginUser);
    login.should.have.status(200);
  });

  it("should not loginUser", async () => {
    const login = await chai
      .request(server)
      .post("/api/v1/user/login")
      .send(mockdata.loginUser);
  });
});
