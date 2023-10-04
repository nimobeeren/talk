'use client';

import { useState } from 'react';
import { Button, Input, Label, Section, Select } from './checkout-components';

export function PaymentForm(props) {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <form className="flex flex-col gap-8" {...props}>
      <Section>
        <Label>
          <Section.Heading>Payment method</Section.Heading>
          <Select
            name="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="" disabled>
              Select a payment method
            </option>
            <option value="card">Credit card</option>
            <option value="ideal">iDEAL</option>
            <option value="bank">Bank transfer</option>
          </Select>
        </Label>
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
            <Label>
              <Section.Heading>Bank</Section.Heading>
              <Select name="bank" defaultValue="">
                <option value="" disabled>
                  Select your bank
                </option>
                <option value="abn">ABN Amro</option>
                <option value="asn">ASN</option>
                <option value="ing">ING</option>
                <option value="rabo">Rabobank</option>
              </Select>
            </Label>
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
