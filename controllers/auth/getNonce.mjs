import { hexlify, randomBytes } from 'ethers';

export const getNonceHandler = async (req, res) => {
  try {
    const nonce = hexlify(randomBytes(16));
    res.json({ nonce });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
