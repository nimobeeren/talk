'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button, Input, Label, Section, Select } from './checkout-components';

export function PaymentForm(props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paymentMethod = searchParams.get('paymentMethod');

  function setPaymentMethod(e: React.ChangeEvent) {
    const input = e.target as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (input.value) {
      newParams.set('paymentMethod', input.value);
    } else {
      newParams.delete('paymentMethod');
    }

    router.replace(`/checkout/payment?${newParams.toString()}`);
  }

  return (
    <form className="flex flex-col gap-8" {...props}>
      <Section>
        <Label htmlFor="paymentMethod">
          <Section.Heading>Payment method</Section.Heading>
        </Label>
        <Select
          id="paymentMethod"
          name="paymentMethod"
          defaultValue={paymentMethod ?? ''}
          onChange={setPaymentMethod}
        >
          <option value="" disabled>
            Select a payment method
          </option>
          <option value="card">Credit card</option>
          <option value="ideal">iDEAL</option>
          <option value="bank">Bank transfer</option>
        </Select>
      </Section>

      {!!paymentMethod && (
        <Section>
          {paymentMethod === 'card' && (
            <>
              <Section.Heading>Card details</Section.Heading>
              <div className="flex gap-4">
                <Label>
                  Card holder
                  <Input type="text" name="name" placeholder="Enter your full name" required />
                </Label>
                <Label>
                  Card number
                  <Input type="text" name="card" placeholder="Enter your card number" required />
                </Label>
              </div>

              <div className="flex gap-4">
                <Label>
                  Expiration date
                  <Input type="text" name="expiration" placeholder="YYYY/MM" required />
                </Label>
                <Label>
                  CVC
                  <Input type="text" name="cvc" placeholder="CVC" required />
                </Label>
              </div>
            </>
          )}

          {paymentMethod === 'ideal' && (
            <>
              <Label htmlFor="bank">
                <Section.Heading>Bank</Section.Heading>
              </Label>
              <Select id="bank" name="bank" defaultValue="">
                <option value="" disabled>
                  Select your bank
                </option>
                <option value="abn">ABN Amro</option>
                <option value="asn">ASN</option>
                <option value="ing">ING</option>
                <option value="rabo">Rabobank</option>
              </Select>
            </>
          )}

          {paymentMethod === 'bank' && (
            <div className="text-sm">
              Please transfer the amount to IBAN: <b>NL02 ABNA 0123 4567 89</b>
            </div>
          )}
        </Section>
      )}
      <div className="flex justify-end">
        <Button type="submit">Place order</Button>
      </div>
    </form>
  );
}
