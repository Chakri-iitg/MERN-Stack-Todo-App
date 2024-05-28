const express = require("express");
const {createTodo, updateTodo} = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
// body {
     // title: string
     //description: string

//}

app.post("/todo", async function(req, res) {
    
     const createPayload = req.body
     const parsePayload =  createTodo.safeParse(createPayload);

     if(!parsedPayload.sucess){
         res.status(411).json({
             msg: "you sent the wrong inputs",
         })
         return;
     }

     // put it in mondobd
     
     await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false

     })
     
     res.json({
        msg: "Todo created"
     })

})

app.get("/todos", async function(req, res){
    
    const todos = await todo.find({});

    res.json({
        todos
    })

})

app.put("/completed", async function(req, res){
    
      const updatePayload = req.body;
      const parsedPayload = updateTodo.safeParse(updatePayload);

      if(!parsedPayload.sucess){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;


      }

      await todo.update({
         _id: req.body.id
      },{
         completed: true
      })

      res.json({
        msg:"Todo marked as completed"
      })


})

app.listen(3000)