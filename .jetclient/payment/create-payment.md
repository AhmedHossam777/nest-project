```toml
name = 'create-payment'
method = 'POST'
url = 'http://localhost:3000/payment'
sortWeight = 1000000
id = 'd01d7a32-0347-4d43-87f0-4a79c804e94e'

[[headers]]
key = 'Content-Type'
value = 'application/json'

[body]
type = 'JSON'
raw = '''
{
  "username": "hoss",
  "currency": "dollar",
  "amount": 500
}'''
```
