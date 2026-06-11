import express from 'express';

const app = express();

app.get('/jokes', (req,res) => {
    const jokes = [
        {
            id: '1',
            title: 'a joke',
            content: 'this is a joke'
        },
        {
            id: '2',
            title: '2nd joke',
            content: 'this is another joke'
        },
        {
            id: '3',
            title: '3rd joke',
            content: 'this is third joke'
        },
        {
            id: '4',
            title: '4th joke',
            content: 'this is fourth joke'
        }
    ]
    res.send(jokes)
})

app.get('/', (req, res) =>{
    res.send('server is ready');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
}
);