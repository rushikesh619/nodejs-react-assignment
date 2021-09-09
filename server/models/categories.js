const mongoose = require("mongoose");

const categories = mongoose.Schema({
    categorieName:{        
        type: String,  
        required: true,
    },

},
{timestamps: true}
)

module.exports = mongoose.model("Categories", categories);