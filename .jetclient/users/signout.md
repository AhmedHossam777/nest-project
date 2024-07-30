```toml
name = 'signout'
method = 'POST'
url = 'http://localhost:3000/user/signout'
sortWeight = 8000000
id = 'f85d0b0a-f11e-4a3c-89e5-042d74dad058'

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
