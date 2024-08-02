# Stripe notes


## Paypal vs Stripe 

Feature	| PayPal |	Stripe
----- | ---- | -----
Focus	| C2B	| B2B
Checkout  customization | 	Limited	| High
API |	Basic	| Robust
Fees |	Generally higher	| More competitive
User base |	Larger |	Smaller

### Digital Wallets
Stripe supports digital wallet payments.    Stripe offers integration with various popular digital wallets, allowing customers to make purchases using their preferred payment method. This includes wallets like:   
- Apple Pay   
- Google Pay
- Samsung Pay

By accepting digital wallet payments, Stripe makes the checkout process smoother and more convenient for customers.   

**Stripe also has its own Issuing product** which allows businesses to create and manage their own virtual and physical cards. These cards can then be added to digital wallets, providing another level of integration.   


## Snippets

### Basic 

#### Init

Backend 
```ts
import Stripe from 'stripe'

@Injectable()
export class StripeService {
  private _stripe: Stripe
  
  constructor() {
    this._stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: '2022-11-15',
    })
  }
}
```

Frontend 

options
```ts
import { type Appearance, type StripeElementLocale, type StripeElementsOptions } from '@stripe/stripe-js'

const appearance: Appearance = {
    theme: 'night',
}
const options: StripeElementsOptions = {
    clientSecret,
    appearance,
    locale: locale as StripeElementLocale,
    loader: 'auto',
}

const paymentElementOptions: StripePaymentElementOptions = {
  layout: {
    type: 'accordion',
    defaultCollapsed: false,
    radios: false,
    spacedAccordionItems: true,
  },
}
```

```tsx
import {
  useStripe,
  useElements,
  PaymentElement,
  Elements,
  LinkAuthenticationElement
} from '@stripe/react-stripe-js'

import { PaymentIntentResult, StripePaymentElementOptions, loadStripe } from '@stripe/stripe-js'

const options = {
    defaultValues: {
        email: useCognito?.attributes?.email || '',
    },
}

<Elements options={options} stripe={loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string)}>
    <form id='payment-form' onSubmit={handleSubmit}>
        <PaymentElement
            id='payment-element'
            options={paymentElementOptions}
            onFocus={() => setError(null)}
            onLoaderStart={() => setIsLoader(false)}
        />
        {isEnableUI('payment.link') && useCognito?.attributes?.email && (
            <LinkAuthenticationElement
                id='link-authentication-element'
                // Optional prop for prefilling customer information
                options={options}
            />
        )}

        <Button
            id='submit-payment-btn'
            className='submit-payment-btn'
            disabled={!stripe || !elements || !checked}
            loading={isLoading}
            fullWidth
            type='submit'>{`${t('Pay')} ${formatFiatMoney(total)}`}</Button>
    </form>
</Elements>
```

#### Submit

```tsx

function () {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return
    }

    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: String(process.env.NEXT_PUBLIC_BASE_URL) + pathname,
      },
      redirect: 'if_required',
    })
    if (paymentIntent?.status === 'succeeded') {
      onSuccess()
    }
  }
}
```

### Stripe Connect 

#### [separate charges and transfers](https://docs.stripe.com/connect/separate-charges-and-transfers)

Backend `createPaymentIntent`
```ts
const _connectAccountId = this._connectAccountId
const orderId = order.id

const paymentIntent = await this._stripe.paymentIntents.create({
    amount,
    currency: this._currency,
    automatic_payment_methods: {
        enabled: true,
    },
    metadata: {
        address: account.walletAddress,
        orderId,
        destination: _connectAccountId,
    },
    transfer_group: _connectAccountId,
})
```

Backend `createTransfer`

```ts

const _connectAccountId = this._connectAccountId

const transfer = await this._stripe.transfers.create({
  amount: 2000,
  currency: this._currency,
  destination: _connectAccountId,
  transfer_group: _connectAccountId,
});
```

Backend webhook

```ts
@Post('webhook')
async handleWebhook(@Req() req: RequestWithRawBody) {
    const sig = req.headers['stripe-signature']
     const event = this._stripe.webhooks.constructEvent(body, sig, this._endpointSecret)

    if (!event) throw new BadRequestException('Invalid signature')
    const transferGroup = get(event, 'data.object.transfer_group')

    if (transferGroup !== process.env.STRIPE_CONNECT_ACCOUNT_ID) {
      throw new BadRequestException('incorrect transfer group')
    }

    switch (event.type) {
      case 'charge.succeeded':
        await this.stripeService.handleChargeSucceededEvent(event)
        break
    }
    return { message: 'success' }
}
```


### Add Cards / Payment methods 

#### Attach 

Frontend

```ts
const paymentMethodId = res?.paymentMethod?.id
const res = await stripe?.createPaymentMethod({
    type: 'card',
    card: input.card,
})

const paymentMethodId = res?.paymentMethod?.id
```

Backend 
```ts
let stripeCustomerId = account.stripeCustomerId
if (!stripeCustomerId) {
     const customer = await this._stripe.customers.create({
        name: name,
        email: email,
    })
    stripeCustomerId = customer.id
}

const attachPaymentToCustomer = await this._stripe.paymentMethods.attach(paymentMethodId, {
    customer: stripeCustomerId,
})
```

#### Detach 

Backend 
```ts
await this.stripeService.detachPaymentMethod(paymentMethodId)
```

#### Get

Backend
```ts
const paymentMethods = await this._stripe.customers.listPaymentMethods(stripeCustomerId, {
    limit: 5,
})
```

#### FE

```ts
const NEW_CARD_OPTION = 'card'
let paymentIntent, error

const isInputNewCard = paymentMethodSelected === NEW_CARD_OPTION

if (isInputNewCard) {
    await elements.submit()
    const result = await stripe.confirmPayment({
        elements,
        clientSecret: clientSecret,
        confirmParams: {
            return_url: String(process.env.NEXT_PUBLIC_BASE_URL) + pathname,
        },
        redirect: 'if_required',
    })
    ;({ paymentIntent, error } = result)
} else {
    const result = await stripe.confirmPayment({
        clientSecret: clientSecret,
        confirmParams: {
            payment_method: paymentMethodSelected,
            return_url: String(process.env.NEXT_PUBLIC_BASE_URL) + pathname,
        },
        redirect: 'if_required',
    })
    ;({ paymentIntent, error } = result)
}

```

## Stripe API Redesign

![Stripe API Redesign](https://i.pinimg.com/originals/c1/1e/57/c11e5748cadfaccab53c6406e721d243.jpg)

Stage 1  2011: The Stripe API, or what could be described as “7 lines of code”, revolved around the Charge concept. At this point, it exclusively handled card payments.

Stage 2  2011-2015: the Stripe API introduced the Token API. Its goal was to enable its customers to avoid the complex and tedious process of adhering to PCI compliance requirements.

Stage 3  2015: ACH and Bitcoin payments entered the scene. Because these types of transactions needed some time to “finalize”, Stripe integrated a feedback loop into the API. The change helped indicate the success of the charge.

Stage 4  2015-2017: This stage saw the addition of even more payment methods, including AliPay, WeChat Pay, and iDeal. As a result, the Source API was developed as an abstraction to support these varying payment methods.

Stage 5  2017-2018: As the number of supported payment methods grew, the team spent several months drafting a **Unified Payments API**, with the introduction of *PaymentIntents* and *PaymentMethod*.

Stage 6  2018-2020: Stripe invested two years to migrate their clients to the **Unified Payments API**.
