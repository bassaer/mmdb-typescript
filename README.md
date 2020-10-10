# mmdb-typescript

### install MaxMind::DB::Writer
```
❯ cpanm MaxMind::DB::Writer
```

### create mmdb file
```
❯ yarn db
yarn run v1.22.10
$ perl writer.pl
Done in 0.19s.

```
### run
```
❯ yarn dev
yarn run v1.22.10
$ ts-node index.ts
{ color: 'blue', dogs: [ 'Fido', 'Ms. Pretty Paws' ], size: 42 }
Done in 0.95s.
```
