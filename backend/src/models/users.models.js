import mongoose, {Schema} from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index : true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    avatar: {
        type: String,
        required: false,
    },
    coverimage: {
        type: String,
    },
    watchlist: [{
        type: Schema.Types.ObjectId,
        ref: 'video',
    }],
    password: {
        type: String,
        required: [true,'Password bhar lavde']
    },
    refreshToken: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    this.password = bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password, (err, result) => {})
}

userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {id: this._id,
        username: this.username,
        email: this.email,
        fullname: this.fullname,
        }, 
        process.env.ACCESS_TOKEN_SECRET,
        {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
);
}

userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {id: this._id,
        
        }, 
        process.env.REFRESH_TOKEN_SECRET,
        {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
);
}

export const User = mongoose.model('User', userSchema);