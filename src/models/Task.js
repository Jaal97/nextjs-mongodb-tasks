import { Schema, model, models} from "mongoose";

const taskSchema = new Schema({
    tittle:{
        type: String,
        required: [true, 'El titulo es requerido'],
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'La descripción es requerido'],
        trim: true,
    },
    autor:{
        type: String,
        required: [true, 'La descripción es requerido'],
        trim: true,
    },
    // {timestamps:true}
   
});

export default models.Task || model('Task', taskSchema);