const app = require('./app');

const dotenv = require('dotenv');
const path = require('path');

// Con environment variable
dotenv.config({ path: path.resolve(__dirname , '.env') });





const port = process.env.PORT || 3000;
const server = app.listen(port , () => {
    console.log(`Application running at http://127.0.0.1:${server.address().port}`);
});
