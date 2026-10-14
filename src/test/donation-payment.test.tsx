import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { DonationPayment, DONATION_AMOUNT } from '@/components/donation-payment';

afterEach(cleanup);

describe('Donation payment', () => {
  it('uses the requested one-time amount of 199 rupees', () => {
    expect(DONATION_AMOUNT).toBe(199);
  });
  it('keeps the QR hidden until the donation button is clicked', () => {
    render(<DonationPayment revealed={false} onReveal={() => {}} />);
    expect(screen.queryByRole('img')).toBeNull();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('img')).toBeTruthy();
  });
  it('reveals the QR when a donation button elsewhere on the page is clicked', () => {
    const { rerender } = render(<DonationPayment revealed={false} onReveal={() => {}} />);
    expect(screen.queryByRole('img')).toBeNull();
    rerender(<DonationPayment revealed onReveal={() => {}} />);
    expect(screen.getByRole('img')).toBeTruthy();
  });
});