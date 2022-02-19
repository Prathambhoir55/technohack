import razorpay

import environ
env = environ.Env()
environ.Env.read_env()

client = razorpay.Client(auth=(env("YOUR_ID"), env("YOUR_SECRET")))

data = { "amount": 500, "currency": "INR", "receipt": "order_rcptid_11" }
payment = client.order.create(data=data)