let express = require('express');
let app = express();
app.get('/', (req, res) => {
        res.send('Hello world');
});
app.listen(80, () => {
        console.log('Connect 80 port');
});