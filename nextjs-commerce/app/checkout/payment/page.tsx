'use client';

import { Button, Input, Label, Section, Select } from 'components/checkout/checkout-components';
import Link from 'next/link';
import { useState } from 'react';

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <>
      <Section>
        <Section.Heading>Payment method</Section.Heading>
        <Select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
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
          <Section.Heading>Payment details</Section.Heading>
          {paymentMethod === 'card' && (
            <>
              <Label>
                Card holder
                <Input type="text" name="card" placeholder="Enter your full name" />
              </Label>

              <div className="flex gap-2">
                <Label>
                  Card number
                  <Input type="text" name="card" placeholder="Enter your card number" />
                </Label>
                <Label>
                  CVC
                  <Input type="text" name="cvc" placeholder="CVC" />
                </Label>
              </div>
            </>
          )}

          {paymentMethod === 'ideal' && (
            <Select defaultValue="">
              <option value="" disabled>
                Select your bank
              </option>
              <option value="abn">ABN Amro</option>
              <option value="asn">ASN</option>
              <option value="ing">ING</option>
              <option value="rabo">Rabobank</option>
            </Select>
          )}

          {paymentMethod === 'bank' && (
            <div className="text-sm">
              Please transfer the amount to IBAN: <b>NL02 ABNA 0123 4567 89</b>
            </div>
          )}
        </Section>
      )}
      <div className="flex justify-end">
        <Link href="/checkout/thank-you">
          <Button>Place order</Button>
        </Link>
      </div>
    </>
  );
}
