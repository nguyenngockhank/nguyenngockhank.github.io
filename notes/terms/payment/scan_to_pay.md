# Scan to pay

To understand the process involved, we need to divide the “scan to pay” process into two sub-processes:
1. Merchant generates a QR code and displays it on the screen (1 - 7)
2. Consumer scans the QR code and pays (8 - 12)

![Scan to pay](https://i.pinimg.com/736x/a5/97/38/a59738c7cc8c37041fff0d82d801b13c.jpg)

## Generating the QR code:

1. When you want to pay for your shopping, the cashier tallies up all the goods and calculates the total amount due, for example, `$123.45`. The checkout has an order ID of `SN129803`. The cashier clicks the **“checkout”** button.
2. The cashier’s computer sends the order ID and the amount to PSP.
3. The PSP saves this information to the database and generates a QR code URL.
4. PSP’s Payment Gateway service reads the QR code URL.
5. The payment gateway returns the QR code URL to the merchant’s computer.
6. The merchant’s computer sends the QR code URL (or image) to the checkout counter.
7. The checkout counter displays the QR code.

### Consumer scans the QR code

8. The consumer opens their digital wallet app to scan the QR code.
9. After confirming the amount is correct, the client clicks the “pay” button.
10. The digital wallet App notifies the PSP that the consumer has paid the given QR code.
11. The PSP payment gateway marks this QR code as paid and returns a success message to the consumer’s digital wallet App.
12. The PSP payment gateway notifies the merchant that the consumer has paid the given QR code.

