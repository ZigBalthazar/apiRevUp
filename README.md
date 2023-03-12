# rushAPI

a simple cacheMiddleware with simple strategy make your API faster.

<img alt="npm" src="https://img.shields.io/npm/v/rushAPI">

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install rushAPI.

```bash
npm i rushapi
```

## Usage

```typescript
import express, { Request, Response } from 'express';
import rushAPI from "rushapi";

const app = express();
const port = 3000;

// Add the rushAPI middleware to the app
app.use(rushAPI({
maxAge: 300000 // Set the max age of the cache to 5 minutes (300,000 ms)
}); 

app.get('/', (req: Request, res: Response) => {
  res.send('Hello rushAPI!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});)
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
