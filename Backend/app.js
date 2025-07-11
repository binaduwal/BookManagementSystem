const express=require('express');
const app=express();
const ConnectToDatabase=require('./Database/db');   
const Book = require('./model/bookModel');
const {multer,storage}= require("./middleware/multerConfig");
const upload=multer({storage:storage})
const cors=require('cors')
app.use(express.json())

app.use(cors({
    origin:'*'
}))

app.use('/storage', express.static('storage'));

ConnectToDatabase()


app.get("/", (req,res) => {
    res.status(200).json({
        "name":"Bina Duwal",
        "age": 22
    })
})

app.post("/book", upload.single('bookimage'),async(req,res)=>{
    console.log(req.file)
    const {bookName,
        bookPrice,
        isbnNumber,
        authorName
        }=req.body

    await Book.create({
        bookName,bookPrice,isbnNumber,authorName,bookimage:req.file.filename
    })
    res.json({
        "message":"Successfull"
    })
})

//all read
app.get("/book",async(req,res)=>{
    const books=await Book.find()
    res.json({
        "message":"Fetched successfully",
        data:books
    })
})

//single read
app.get("/book/:id",async (req,res)=>
{
    try {
        const id=req.params.id
        const books=await Book.findById(id)
        if(!books)
            {
        res.json({
            "message":"No Book Found"
        })
        }
        else
        {
            res.json({
                "message":"Fetched single data",
                data:books
            })       
        }
    }
     
    catch (error) {
        res.status(500).json({
            "message":"Something went wrong"
        })
    }
})

//delete operation
app.delete("/book/:id",async(req,res)=>{
    const id= req.params.id
    const book=await Book.findByIdAndDelete(id)
    res.json({
        "message":"Deleted Successfully",
        "data":book
    })
})


app.patch("/book/:id",async (req,res)=>{
    const id=req.params.id
    const {bookName,bookPrice,isbnNumber,authorName}=req.body
    const book=await Book.findByIdAndUpdate(id,{
        bookName,bookPrice,isbnNumber,authorName}
        )

        res.json({
            "message":"Book Updated Successfully",
           "data":book
        })
    })


//start server
app.listen(3000, ()=>{
    console.log("Listening to port",3000); //to check if port 3001 is listening or not
});


