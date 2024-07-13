# Stripe code examples

## Init 

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

## Submit

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

## Stripe Connect 

### [separate charges and transfers](https://docs.stripe.com/connect/separate-charges-and-transfers)

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


## Add Cards / Payment methods 


### Attach 

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

### Detach 

Backend 
```ts
await this.stripeService.detachPaymentMethod(paymentMethodId)
```

### Get

Backend
```ts
const paymentMethods = await this._stripe.customers.listPaymentMethods(stripeCustomerId, {
    limit: 5,
})
```

### FE

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