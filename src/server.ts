import App from './app';
import { PORT } from './services/config.service';

const app = new App();

app.server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.server.get('/', (_request, response) => response.json({
  message: 'Welcome to Express, Typescript & ESLint!',
}));
