// import db from '../db/db.mjs';

export const testMongo = async (req, res) => {
  try {
    console.log('testMongo controller');
    // const userId = req.params.userId;
    // const sqlQuery = `SELECT favorites FROM users WHERE id=${userId}`;
    // const response = await db.query(sqlQuery);
    // const data = response.rows[0].favorites;
    res.json('testMongo controller');
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
