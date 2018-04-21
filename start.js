const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const app = require('./app');

// Environment variable
dotenv.config({ path: path.resolve(__dirname , '.env') });

/**
 * Connect to our Database and handle any bad connections
 */
if(process.env.DATABASE) // Database variable exists
{
    mongoose.connect(process.env.DATABASE);
    mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
    const db = mongoose.connection;
    
    db.once('open', function() {
        console.log(`😀  😁  😂  🤣  😃  😄  😅  Connected to mongodb successfully`);
    });
    db.on('error', (err) => {
      console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
    });
}

// Start server
const port = process.env.PORT || 3000;
const server = app.listen(port , () => {
    console.log(`Application running at http://127.0.0.1:${server.address().port}`);
});
