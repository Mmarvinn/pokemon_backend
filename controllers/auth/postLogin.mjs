import { verifyMessage } from 'ethers';
import jwt from 'jsonwebtoken';
import User from '../../model/userModel.mjs';

export const postLoginHandler = async (req, res) => {
  try {
    const { address, signature, nonce } = req.body;

    const message = `Authorize access to your account: Sign this message to log in. Nonce: ${nonce}`;
    let signerAddress;

    try {
      signerAddress = verifyMessage(message, signature);
    } catch (error) {
      return res.status(400).json({ error: 'Invalid signature' });
    }

    if (signerAddress.toLowerCase() !== address.toLowerCase()) {
      return res
        .status(400)
        .json({ error: 'Signature does not match address' });
    }

    let currentUser = await User.findOne({ address });

    if (!currentUser) {
      currentUser = new User({ address });
      await currentUser.save();
    }

    const token = jwt.sign(
      { userId: currentUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '6h' }
    );

    res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
