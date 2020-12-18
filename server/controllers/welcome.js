class Welcome {
  static async greeting(req, res) {
    return res
      .status(200)
      .json({ success: true, message: "Welcome to Shema Api" });
  }
}

export default Welcome;
