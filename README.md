# lolesports

## Dependencies
* docker
* docker-compose

## Services

| Service name                   | Port |
|--------------------------------|------|
| lolesports (nest app)          | 3000 |
| lolbetpy (python app)          | 8000 |
| redis (cache)                  | 3000 |
| redis-commander (redis web ui) | 8081 |



## Startup

```bash
$ docker-compose up
```
