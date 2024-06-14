import { neon } from "@neondatabase/serverless";

let { CONNSTR } = process.env;

const handler = async (req, res) => {
  const sql = neon(CONNSTR);
  console.log(typeof req.body);
  if (
    Object.keys(req.body).filter((x) => x == "username").length > 0 &&
    Object.keys(req.body).filter((x) => x == "passhash").length > 0
  ) {
    const matching_usernames = await sql(
      `SELECT username FROM users WHERE username='${req.body.username}';`
    );

    if (matching_usernames.length == 0) {
      res.status(406).json({
        success: false,
        reason: "Username dosent exist.",
      });
    } else {
    }
    console.log("as");
  } else {
    res.status(406).json({
      success: false,
      reason: "Missing either username or passhash",
    });
  }
};

export default handler;
