import { Button, Input, Label, Section, Select } from 'components/checkout/checkout-components';

export function ShippingForm(props) {
  return (
    <form className="flex flex-col gap-8" {...props}>
      <Section className="flex flex-col gap-2">
        <Section.Heading>Contact</Section.Heading>
        <Label>
          Email
          <Input type="text" name="email" placeholder="Enter your email" required />
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
            <Input type="text" name="lastName" placeholder="Enter your last name" required />
          </Label>
        </div>

        <Label>
          Address
          <Input
            type="text"
            name="address-1"
            placeholder="Enter your first address line"
            required
          />
        </Label>

        <Label>
          Apartment, suite, etc. (optional)
          <Input type="text" name="address-2" placeholder="Enter your second address line" />
        </Label>

        <div className="flex gap-4">
          <Label>
            City
            <Input type="text" name="city" placeholder="Enter your city" required />
          </Label>
          <Label>
            Postcode
            <Input type="text" name="postcode" placeholder="Enter your postcode" required />
          </Label>
        </div>

        <Label htmlFor="country">Country</Label>
        <Select id="country" name="country" defaultValue="">
          <option value="" disabled>
            Select your country
          </option>
          <option value="be">Belgium</option>
          <option value="de">Germany</option>
          <option value="nl">Netherlands</option>
          <option value="uk">United Kingdom</option>
          <option value="us">United States</option>
        </Select>
      </Section>

      <div className="flex justify-end">
        <Button type="submit">Proceed to payment</Button>
      </div>
    </form>
  );
}
