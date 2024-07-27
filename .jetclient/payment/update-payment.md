```toml
name = 'update-payment'
method = 'PATCH'
url = 'http://localhost:3000/payment/3'
sortWeight = 4000000
id = '0cb6d446-646f-49d7-8f5f-22b694428601'

[[headers]]
key = 'Content-Type'
value = 'application/json'

[body]
type = 'JSON'
raw = '''
{
  "username" : "dada2"
}'''
```
