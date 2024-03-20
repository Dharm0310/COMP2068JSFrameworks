const connect = require('connect');
const url = require('url');

const app = connect();

function calculate(method, x, y) {
    let result;
    switch (method) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        default:
            return 'Invalid method';
    }
    return `${x} ${method} ${y} = ${result}`;
}

app.use((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    const method = query.method;
    const x = parseInt(query.x);
    const y = parseInt(query.y);

    if (isNaN(x) || isNaN(y)) {
        res.end('Invalid parameters');
        return;
    }

    const output = calculate(method, x, y);
    res.end(output);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
