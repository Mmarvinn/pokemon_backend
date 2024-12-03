import User from '../../model/userModel.mjs';

export const postBattleLogsHandler = async (req, res) => {
  try {
    const user = await User.findOne({ address: req.user.address });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.fightLogs.push(req.body);
    await user.save();

    res.json({ message: 'Logs saved successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
