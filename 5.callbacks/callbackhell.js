const fs = require('fs');

fs.readFile('hello.txt' , 'utf8' , function(err , data) {
    if(err){
        console.log( "error"+ err  )
    }
    console.log(data);

    fs.writeFile('hello.txt' , 'ansh padhoo' , function(err){
        if(err){
            console.log(err);
        }

        fs.rename('hello.txt', 'final.txt', function(err) {
      if (err) throw err;
      console.log('File renamed!');
      
        })
        

    })
})