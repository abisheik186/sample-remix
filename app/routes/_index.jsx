import { Link } from '@remix-run/react';

import homeStyles from '../styles/home.css?url';

export default function Index() {
  return (
    <main id="content">
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our early beta and never loose track of your notes again!</p>
      <p id="cta">
        <Link to="/tasks">Try Now!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: homeStyles }];
}

// import { Link } from "@remix-run/react";
// import homeStyles from '../styles/home.css';
// export default function Index() {
//   return (
//   <>
//   <h1>hello world</h1>
//   <Link to ="/demo">demo</Link>
//   </>
//   )
// }

// export function links() {
//   return [{ rel: 'stylesheet', href: homeStyles }];
// }
