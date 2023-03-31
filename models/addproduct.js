import mongoose from "mongoose";


const addproduct = new mongoose.Schema({
    title:{
        type: String,
    },
    brand:{
        type: String,
    },
    modelName:{
        type: String,
    },
    NetworkServiceProvider:{
        type: String,
    },
    OS:{
        type: String,
    },
    CellularTechnology:{
        type: String,
    },
    price:{
        type: String,
    },
    reviews:{
        type: String,
    }
    
})

export default mongoose.model('product',addproduct);



