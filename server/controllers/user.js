import Users from "../modal/user";
import sendTokenResponse from "../util/auth";
import errorResponse from "../util/errorResponse";

class User {
  static async register(req, res, next) {
    const { name, email, password } = req.body;

    // Create user
    const user = await Users.create({
      name,
      email,
      password,
    });

    return sendTokenResponse(user, 200, res);
  }

  static async login(req, res, next) {
    const { email, password } = req.body;

    // Validate emil & password
    if (!email || !password) {
      return next(
        new errorResponse("Please provide an email and password", 400)
      );
    }

    // Check for user
    const user = await Users.findOne({ email }).select("+password");

    if (!user) {
      return next(new errorResponse("Invalid credentials", 401));
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new errorResponse("Invalid credentials", 401));
    }

    return sendTokenResponse(user, 200, res);
  }
}

export default User;
