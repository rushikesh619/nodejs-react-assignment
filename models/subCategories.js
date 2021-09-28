const mongoose = require("mongoose");

const subCategories = mongoose.Schema({
    subCategoriesName:{        
        type: String,  
        required: true,
    },
    categorie:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Categories' 
    }

},
{timestamps: true}
)

module.exports = mongoose.model("SubCategories", subCategories);