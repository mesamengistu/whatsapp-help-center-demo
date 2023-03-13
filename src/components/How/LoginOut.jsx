import Header from "./Header";
const LoinOut = () => {
  return (
    <div className="mt-5">
      <Header />
      <div className="row mt-3">
        <div className="col-12">
          <h4 className="ms-4">Log in</h4>
          <p>
            To log in to WhatsApp on WhatsApp Web, WhatsApp Desktop, or Portal,
            you need to use your phone to scan the QR code.
          </p>
          <ol>
            <li>
              Open WhatsApp on your phone.
              <ul>
                <li>Android: Tap More options.</li>
                <li>iPhone: Go to WhatsApp Settings.</li>
              </ul>
            </li>
            <li>
              Tap Linked Devices.
              <ul>
                <li>
                  Android: Tap LINK A DEVICE. Follow the on-screen instructions
                  if your device has biometric authentication. If you don’t have
                </li>
                <li>
                  iPhone: Tap Link a Device. On iOS 14 and above, use Touch ID
                  or Face ID to unlock. If you don’t have biometric
                </li>
              </ul>
            </li>
            <li>
              Use your phone to scan the QR code on your computer or Portal..
            </li>
            <li>If prompted, tap or select Done</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default LoinOut;
