export const getUserHandler = async (req, res) => {
  try {
    const user = req.user;

    res.json({
      user: {
        id: user._id,
        address: user.address,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
