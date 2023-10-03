import { Button, Input, Label, Section, Select } from 'components/checkout/checkout-components';
import Link from 'next/link';

export default async function CheckoutPage() {
  return (
    <>
      <Section className="flex flex-col gap-2">
        <Section.Heading>Contact</Section.Heading>
        <Label>
          Email
          <Input type="text" name="email" placeholder="Enter your email" />
        </Label>
      </Section>

      <Section>
        <Section.Heading>Shipping address</Section.Heading>
        <div className="flex gap-4">
          <Label>
            First name (optional)
            <Input type="text" name="firstName" placeholder="Enter your first name" />
          </Label>
          <Label>
            Last name
            <Input type="text" name="lastName" placeholder="Enter your last name" />
          </Label>
        </div>

        <Label>
          Address
          <Input type="text" name="address-1" placeholder="Enter your first address line" />
        </Label>

        <Label>
          Apartment, suite, etc. (optional)
          <Input type="text" name="address-2" placeholder="Enter your second address line" />
        </Label>

        <div className="flex gap-4">
          <Label>
            City
            <Input type="text" name="city" placeholder="Enter your city" />
          </Label>
          <Label>
            Postcode
            <Input type="text" name="postcode" placeholder="Enter your postcode" />
          </Label>
        </div>

        <Label>
          Country
          <Select defaultValue="">
            <option value="" disabled>
              Select your country
            </option>
            <option value="be">Belgium</option>
            <option value="de">Germany</option>
            <option value="nl">The Netherlands</option>
            <option value="uk">United Kingdom</option>
            <option value="us">United States</option>
          </Select>
        </Label>
      </Section>

      <div className="flex justify-end">
        <Link href="/checkout/payment">
          <Button>Proceed to payment</Button>
        </Link>
      </div>
    </>
  );
}
