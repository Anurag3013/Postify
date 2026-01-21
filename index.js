const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

const {v4: uuidv4} = require('uuid');


app.listen(port , ()=>{
    console.log("listening to port:8080");
})

let posts = [
    {
        id:uuidv4(),
        username:"apna",
        content: "i love coding",
    },

    {
        id:uuidv4(),
        username:"apna",
        content: "i love coding",
    },

    {
        id:uuidv4(),
        username:"apna",
        content: "i love coding",
    },

];

app.get("/" , (req , res) =>{
    res.render("root.ejs");

});

// app.get("/posts" , (req , res) =>{
//     res.send("you contacted index route");
// });

app.get("/posts/root" , (req , res) =>{
    res.redirect("/posts");
});

app.get("/posts" , (req , res) =>{
    res.render("index.ejs" , {posts});
});

app.get("/posts/new" , (req , res) =>{
    res.render("new.ejs");
});
app.post("/posts",(req, res)=>{
    // console.log(req.body);
    // res.send("post request working");
    let id = uuidv4();

    let{username, content} = req.body;
    posts.push({id , username,content});

    res.redirect("/posts");
});

app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    console.log(id);
   // res.send("request is working");
   let post = posts.find((p)=> id === p.id);
   res.render("show.ejs" , {post});
   //console.log(post);

});

app.patch("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let newCont=req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content=newCont;
    console.log(id);
    console.log(newCont);
  // res.send("patch request working");
  res.redirect("/posts");
    
});

app.get("/posts/:id/edit", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs", {post});

});

app.delete("/posts/:id" , (req,res)=>{
    let {id} = req.params;
     posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");

});