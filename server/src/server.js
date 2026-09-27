require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') }); const app = require('./app'); const { connectDatabase } = require('./config/db');
const port = process.env.PORT || 5000; if (!process.env.MONGODB_URI || !process.env.JWT_SECRET) { console.error('MONGODB_URI and JWT_SECRET are required'); process.exit(1) }
connectDatabase(process.env.MONGODB_URI).then(() => app.listen(port, () => console.log(`API running on http://localhost:${port}`))).catch(error => { console.error('Database connection failed:', error.message); process.exit(1) });
