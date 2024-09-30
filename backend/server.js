import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import { connectDB } from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'


app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/test',(req,res)=>{
    res.json([
        { "name": "Vikram", "age": 22 },
        { "name": "Nitin", "age": 24 }
      ]     
)
})


app.use('/api/products', productRoutes)


app.listen(process.env.PORT, async ()=>{
    await connectDB()
    console.log("server connected and running at", process.env.PORT);
})

