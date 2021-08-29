// import { withRouter } from 'next/router';

// function Halaman({ router }) {
//   return <p>{router.pathname}</p>;
// }

// export default withRouter(Halaman);

import router, { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Halaman() {
  useEffect(() => {
    console.log(router.back);
  });
  return (
    <button type='button' onClick={() => router.replace('/')}>
      Click me
    </button>
  );
}
