```toml
name = 'update-user'
method = 'PATCH'
url = 'http://localhost:3000/user/3'
sortWeight = 4000000
id = 'bc919856-a64a-4440-baf3-863cceba3ee3'

[[headers]]
key = 'Content-Type'
value = 'application/json'

[body]
type = 'JSON'
raw = '''
{
  "usernam": "ahmed"
}'''
```
