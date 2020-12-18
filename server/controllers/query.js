import Queries from "../modal/query";
import errorResponse from "../util/errorResponse";

class Query {
  static async create(req, res, next) {
    const query = await Queries.create(req.body);
    return res.status(200).json({ success: true, data: query });
  }

  static async getAll(req, res, next) {
    const query = await Queries.find();
    return res
      .status(200)
      .json({ success: true, count: query.length, data: query });
  }

  static async delete(req, res, next) {
    const query = await Queries.findByIdAndDelete(req.params.id);
    if (!query) {
      return next(new errorResponse(`invalid id ${req.params.id}`, 404));
    }
    return res.status(200).json({ success: true, msg: "Query Deleted" });
  }
}

export default Query;
