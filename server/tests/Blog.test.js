import path from "path";
import chai, { expect, should } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";
import Post from "../modal/blog";
import server from "../index";
import mockdata from "./mockdata";
import Comment from "../modal/comment";

const { it, describe, beforeEach, afterEach } = mocha;

chai.should();

chai.use(chaiHttp);

const testPost = {
  Author: "issa",
  Title: "this is awesome",
  Content: "bla bla bla bla",
};

describe("Api Endpoints", () => {
  beforeEach(async () => {
    await Post.deleteMany({});
  });

  afterEach(async () => {
    await Post.deleteMany({});
  });

  it("should create post", async () => {
    const res = await chai
      .request(server)
      .post("/api/v1/blog")
      .field("Author", testPost.Author)
      .field("Title", testPost.Title)
      .field("Content", testPost.Content)
      .attach("image", path.resolve(__dirname, "./uploads/test.jpg"));
    res.should.have.status(201);
    res.body.should.have.property("data");
  });

  it("should ask for Title of post", async () => {
    const res = await chai
      .request(server)
      .post("/api/v1/blog")
      .field("Author", testPost.Author)
      .field("Titlle", testPost.Title)
      .field("Content", testPost.Content)
      .attach("image", path.resolve(__dirname, "./uploads/test.jpg"));
    res.should.have.status(400);
  });

  it("Duplicate error", async () => {
    let res = await chai
      .request(server)
      .post("/api/v1/blog")
      .field("Author", testPost.Author)
      .field("Title", testPost.Title)
      .field("Content", testPost.Content)
      .attach("image", path.resolve(__dirname, "./uploads/test.jpg"));

    res = await chai
      .request(server)
      .post("/api/v1/blog")
      .field("Author", testPost.Author)
      .field("Title", testPost.Title)
      .field("Content", testPost.Content)
      .attach("image", path.resolve(__dirname, "./uploads/test.jpg"));
    res.should.have.status(400);
  });

  it("should get all Posts", async () => {
    const res = await chai.request(server).get("/api/v1/blog");

    res.should.have.status(201);
    res.body.should.have.property("data");
  });

  it("should get post by ID", async () => {
    const post = await Post.create(testPost);
    await post.save();

    const res = await chai.request(server).get(`/api/v1/blog/${post.id}`);
  });

  it("should not get any post", async () => {
    const res = await chai.request(server).get("/api/v1/blog/test");

    res.should.have.status(404);
  });

  it("should add comment", async () => {
    const mockComment = {
      name: "shema christian",
      message: "issa you did a great job",
    };
    const post = await Post.create(testPost);
    await post.save();

    const comment = await Comment.create(mockComment);
    await comment.save();

    const res = await chai
      .request(server)
      .post(`/api/v1/blog/${post._id}/comments`)
      .send(mockComment);
    res.should.have.status(201);
    res.body.should.have.property("msg");
  });

  it("should add query", async () => {
    const res = await chai
      .request(server)
      .post("/api/v1/query")
      .send(mockdata.query);
    res.should.have.status(200);
  });

  it("should delete a post", async () => {
    const post = await Post.create(testPost);
    await post.save();

    const signUp = await chai
      .request(server)
      .post("/api/v1/user/register")
      .send(mockdata.signUpUser);

    const login = await chai
      .request(server)
      .post("/shema/user/login")
      .send(mockdata.loginUser);

    const res = await chai
      .request(server)
      .delete(`/api/v1/blog/${post._id}`)
      .set("auth", `'Bearer' ${login.token}`);
  });

  it("should not delete a post", async () => {
    const post = await Post.create(testPost);
    await post.save();

    const res = await chai
      .request(server)
      .delete(`/api/v1/blog/${post._id}`)
      .set("authorization", "shema");
  });

  it("should not found this route", async () => {
    const res = await chai
      .request(server)
      .post("/api/v2/query")
      .send(mockdata.query);
    res.should.have.status(404);
    res.body.should.have.property("msg");
  });
});
