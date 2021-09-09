const mongoose = require("mongoose");

const products = mongoose.Schema({
    productName:{        
        type: String,  
        required: true,
    },
    subCategorie:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'SubCategories' 
    },
    categorie:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Categories' 
    }
},
{timestamps: true}
)

module.exports = mongoose.model("Products", products);