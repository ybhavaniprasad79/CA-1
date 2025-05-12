const express=require('express')

const app=express()

app.use(express.json())

app.get('/test',(req,res)=>{
    res.status(200).json({message:"ok"})
})

app.post('/create',(req,res)=>{
    const {username,email,password,dateOfBirth}=req.body
    try {
        if(!username){
            res.status(400).json({message:"username cannot be empty"})
        }
        if(!email){
            res.status(400).json({message:"email cannot be empty"})
        }
        if(!password){
            res.status(400).json({message:"password cannot be empty"})
        }
        if(password.length<8 || password.length>=16){
            res.status(400).json({message:"password length should be greater than 8 or less than or equal to 16"})
        }
        res.status(201).json({message:"user created successfully",username,email,password,dateOfBirth})
    } catch (error) {
        res.status(500).json({message:"internal sever error",error})
    }

})


const port=5050
app.listen(port,()=>{
    try {
        console.log(`app is running on http://localhost:${port}`)
    } catch (error) {
        console.log(error)
    }
})