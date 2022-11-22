
# Abandoned checkout

Finding abandoned checkouts in shopify platform  and notify users in a time interval


## Tools and Libraries
MongoDB, node-cron, nodemailer, antd

## Shopify
Go to shopify admin page, and create web hook for cart creation and cart payment.
Add callback url's there.

![App Screenshot](https://ibb.co/PCYGKSW)

## Working explained

- Once a customer done checkout, we get the response in checkout webhook and at that time we will be calling /checkout.json API from shopify which all we consider as abandoned checkouts
- We go through that array to check how many, we already scheduled email sending jobs(which managing by node-cron)
- Schedule job for checkouts.

- Customer completes an order, we get it in order payment webhook.
- We identify the checkout and cancel all its scheduled jobs.
- For email sending we using nodemailer
- Once mail sent we updating that data in mongoDB also, inorder to show total messages sent in UI
## Install and run backend project

To deploy this project run

```bash
  cd backend
  npm install
  npm run server
```

## Install and run frontend project

To deploy this project run

```bash
  cd frontend
  npm install
  npm run start
```


