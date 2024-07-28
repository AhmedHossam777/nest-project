```toml
name = 'create-user'
method = 'POST'
url = 'http://localhost:3000/user'
sortWeight = 2000000
id = '86d50699-6f52-45d7-9d03-18003fb2f79f'

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
  "username": "ahmed hossam",
  "email": "ahmed@email.com",
  "password": "123456"
}'''
```
