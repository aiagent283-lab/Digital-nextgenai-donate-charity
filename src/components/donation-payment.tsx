import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import upiQrAsset from '@/assets/upi-qr.jpg.asset.json';

export const DONATION_AMOUNT = 199;

export function DonationPayment({ revealed, onReveal }: { revealed: boolean; onReveal: () => void }) {
  const [clicked, setClicked] = useState(false);
  const visible = revealed || clicked;
  return <>
    <Button variant="subscribe" className="pay-button" aria-expanded={visible} aria-controls="donation-qr" onClick={() => { setClicked(true); onReveal(); }}>Donate <ArrowRight /></Button>
    {visible && <div className="qr-payment" id="donation-qr">
      <span className="qr-frame"><img src={upiQrAsset.url} alt={`UPI QR code to donate ₹${DONATION_AMOUNT} to NextGen AI`} width={148} height={148} /></span>
      <p>Scan to pay with any UPI app</p>
    </div>}
  </>;
}