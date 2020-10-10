import maxmind, { AnonymousIPResponse } from 'maxmind';

const main = async () => {
  maxmind.open<AnonymousIPResponse>('./network.mmdb')
    .then((lookup) => {
      console.log(lookup.get('8.8.8.8'));
    });
}

main();
