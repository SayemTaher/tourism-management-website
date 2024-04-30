const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000

// Middleware setup
app.use(cors())
app.use(express.json())


// MonoDB Database setup


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vybo3pc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const spotDataCollection = client.db('spotsDB').collection('spots')
        // get the data posted from the client 
        app.post('/addTourists', async (req, res) => {
            const newSpot = req.body
            console.log('new data will be displayed here')
            const result = await spotDataCollection.insertOne(newSpot)
            res.send(result)

        })
        //get the spot data 

        app.get('/addTourists', async (req, res) => {
            const data = spotDataCollection.find()
            const spotData = await data.toArray()
            res.send(spotData)
        })


        // Fetch and optionally sort tourist spots
        app.get('/touristSpots', async (req, res) => {
            const sortParam = req.query.sort; // 'asc' or 'desc'
            let sortOrder = sortParam === 'desc' ? -1 : 1;
            try {
                const cursor = spotDataCollection.find({});
                cursor.sort({ averageCost: sortOrder });
                const spotData = await cursor.toArray();
                res.send(spotData);
            } catch (error) {
                console.error('Error retrieving data:', error);
                res.status(500).send("Error retrieving data");
            }
        });
        // get the id for detailed view 
        app.get('/addTourists/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const findDetails = await spotDataCollection.findOne(query)
            res.send(findDetails)

        })

        // Get tourist spots added by a specific user based on email
        app.get('/myList/:email', async (req, res) => {
            console.log(req.params)
            const userData = req.params.email
            const result = await spotDataCollection.find({ email: userData }).toArray()
            res.send(result)
        })
        // update tourists spot
        app.get('/addTourists/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const update = await spotDataCollection.findOne(query)
            res.send(update)
        })
        app.put('/addTourists/:id', async (req, res) => {
            const id = req.params.id
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true }
            const updateSpot = req.body
            const updatedSpot = {
                $set: {

                    name:updateSpot.name,
                    email:updateSpot.email,
                    totalVisitors:updateSpot.totalVisitors,
                    population:updateSpot.population,
                    photUrl:updateSpot.photUrl,
                    spotName:updateSpot.spotName,
                    countryName:updateSpot.countryName,
                    description:updateSpot.description,
                    averageCost:updateSpot.averageCost,
                    seasonality:updateSpot.seasonality,
                    travelTime:updateSpot.travelTime

                }
            }
            const result = await spotDataCollection.updateOne(filter,updatedSpot,options)
            res.send(result)

        })
        // delete 

        app.delete('/addTourists/:id' , async(req,res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await spotDataCollection.deleteOne(query)
            res.send(result)
            console.log('Item successfully deleted with id :', id)
        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);






// Keep the server running 
app.get('/', (req, res) => {
    res.send('Server is running')
})
app.listen(port, () => {
    console.log('Server is running on port ', port)
})