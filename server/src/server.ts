import { app } from './app';
import { CONFIG, validateEnv } from './config';

validateEnv();

app.listen(CONFIG.PORT, () => {
	console.log(`Server is running on http://localhost:${CONFIG.PORT}`);
});