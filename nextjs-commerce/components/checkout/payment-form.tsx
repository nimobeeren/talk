'use client'

import { useState } from "react";
import { Button, Input, Label, Section, Select } from "./checkout-components";

export function PaymentForm(props) {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <form className="flex flex-col gap-3" {...props}>
      <Section>
        <Label>
          <Section.Heading>Payment method</Section.Heading>
          <Select name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
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
          <Section.Heading>Payment details</Section.Heading>
          {paymentMethod === 'card' && (
            <>
              <Label>
                Card holder
                <Input type="text" name="name" placeholder="Enter your full name" required />
              </Label>

              <div className="flex gap-2">
                <Label>
                  Card number
                  <Input type="text" name="card" placeholder="Enter your card number" required />
                </Label>
                <Label>
                  CVC
                  <Input type="text" name="cvc" placeholder="CVC" required />
                </Label>
              </div>
            </>
          )}

          {paymentMethod === 'ideal' && (
            <Select name="bank" defaultValue="">
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
        <Button type="submit">
          Place order
        </Button>
      </div>
    </form>
  );
}