const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Username is required!"],
        minLength: [3, "Username minimum length is 3 characters"]
    },
    email:{
        type: String,
        required: [true, "Name is required!"]
    },
    password:{
        type: String,
        required: [true, "Password is required!"],
        minLength: [3, "Password minimum length is 3 characters"]
    }
},{timestamps:true})

UserSchema.virtual('confirmPassword')
.get(() => this._confirmPassword)
.set(value => this._confirmPassword = value)

UserSchema.pre('validate',function(next){
    if(this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confimrmation password')
    }
    next()
})

UserSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password,10)
        console.log('Hashed Password:', hashedPassword)
        this.password = hashedPassword
        next()
    }catch{
        console.log('Error in Save', error)
    }
})

module.exports = mongoose.model('user', UserSchema)