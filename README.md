# rushAPI
a simple cacheMiddleware with simple strategy make your API faster.
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>rushAPI</title>
  </head>
  <body>
    <header>
      <h1>rushAPI</h1>
      <nav>
        <ul>
          <li><a href="#installation">Installation</a></li>
          <li><a href="#usage">Usage</a></li>
          <li><a href="#license">License</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="installation">
        <h2>Installation</h2>
        <p>To install rushAPI, run:</p>
        <pre><code>npm install rushAPI</code></pre>
      </section>

      <section id="usage">
        <h2>Usage</h2>
        <p>
          To use rushAPI in your Express.js application, first require the module
          and call the exported <code>cacheMiddleware</code> function with a
          configuration object:
        </p>
        <pre><code>const cacheMiddleware = require('rushAPI').default;</code></pre>
        <pre><code>const options = {
  maxAge: 300 // Set the maximum cache age to 5 minutes (300 seconds)
};
app.use(cacheMiddleware(options));</code></pre>
        <p>
          The <code>cacheMiddleware</code> function returns a middleware function
          that sets the <code>Cache-Control</code> header on responses based on
          the provided options.
        </p>
        <!-- More usage instructions here... -->
      </section>

      <section id="license">
        <h2>License</h2>
        <p>This library is licensed under the MIT license.</p>
      </section>
    </main>

    <footer>
      <p>&copy; Your Company Name. All rights reserved.</p>
    </footer>
  </body>
</html>
