const express =  require('express');

const app = express();
app.use(express.json());

let books = [{
    id : "1",
    title : "book 1"
}
,{
    id : "2",
    title : "book2"
}
]

app.get('/' ,(req , res)=> {
  res.json({
    message : "welcome to our bookstore api",
  });
})

// get all books
app.get('/get' , (req , res)=>{
    res.json(books)
})

// get  a single book
app.get('/get/:id', (req , res)=>{
    const book = books.find(item => item.id === req.params.id);
    if(book){
        res.status(200).json(book);
    }else{
        res.status(404).json({
            message : " book not found please try with differnt id"
        });
    }
})
// add  a new book
app.post("/add", (req, res) => {
    const newbook = {
        id: (books.length + 1).toString(),
        title: `book ${books.length + 1}`
    };

    books.push(newbook);

    res.status(200).json({
        data: newbook,
        message: "new book is added"
    });
});


// update a book
app.put('/update/:id' , (req , res) =>{
    const findcurrentbook = books.find(bookIteam => bookIteam.id === req.params.id);
    if(findcurrentbook){
        findcurrentbook.title = req.body.title || findcurrentbook.title
        res.status(200).json({
            message : `books with ${req.params.id} updated successfully`,
            data :  findcurrentbook
        })
    }else{
        res.status(404).json({
            message : "book is not find"
        })
    }
})

// delete a book
app.delete('/delete/:id', (req, res) => {
    const bookIndex = books.findIndex(book => book.id === req.params.id);

    if (bookIndex !== -1) {
        const deletedBook = books.splice(bookIndex, 1);

        res.status(200).json({
            message: `book with id ${req.params.id} deleted successfully`,
            data: deletedBook[0]
        });
    } else {
        res.status(404).json({
            message: "book not found"
        });
    }
});

const port = 3000;
app.listen(port,()=>{
   console.log(`server is now running at ${port}`); 
})