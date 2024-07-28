```toml
name = 'signin'
method = 'POST'
url = 'http://localhost:3000/user/signin'
sortWeight = 2500000
id = '0b408dbb-46a4-4d02-a4dc-8ead3ba15e7f'

[[queryParams]]
key = 'user'
value = 'ahmed'
disabled = true

[[headers]]
key = 'Content-Type'
value = 'application/json'

[body]
type = 'JSON'
raw = '''
{
  "email": "ahmed7@email.com",
  "password": "123456"
}'''
```
