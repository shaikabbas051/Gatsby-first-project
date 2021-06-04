import { Link } from "gatsby";
import * as React from "react";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div>
        <h1>About</h1>
        <h1>Blogs</h1>
        <h1>
          <Link to="/contact/">Contacts</Link>
        </h1>
      </div>
    </main>
  );
};

export default IndexPage;
