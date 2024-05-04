import { Schema, model } from 'mongoose';

const productSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    customerPrice : {
        type: Number,
        default:0
    },
    wholesalePrice : {
        type: Number,
        default:0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})



productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});


export default  model('Product', productSchema);