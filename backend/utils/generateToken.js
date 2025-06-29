import jwt from "jsonwebtoken";

//takes userid and res object as parameter
export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expires in 7 days
    httpOnly: true,
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
  });

  return token
};
