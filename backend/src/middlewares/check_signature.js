import { recoverPersonalSignature } from 'eth-sig-util';
import { bufferToHex } from 'ethereumjs-util';
import { respondWithWarning } from '../helpers/index'

// Function to compare the digital signature sent from the client and that on the server
export const checkDigitalSignature = async (req, res, next) => {
  try {
    const { address, signature } = req.body
    const message = `I am signing my one-time nonce: ${req.user.nonce}`;
		// We now are in possession of msg, publicAddress and signature. We
		// will use a helper from eth-sig-util to extract the address from the signature
		const messageBufferHex = bufferToHex(Buffer.from(message, 'utf8'));
		const publicAddress = recoverPersonalSignature({
			data: messageBufferHex,
			sig: signature,
		});
    return publicAddress.toLowerCase() === address.toLowerCase()
      ? next()
      : respondWithWarning(res, 401, 'Signature authentication failed');
  } catch(error) {
    return respondWithWarning(res, 500, 'Oops! something bad happened');
  }
}