import { Schema, model } from 'mongoose';

const categorySchema = Schema({
    name: {
        type: String,
        required: true,
    },
})


categorySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

categorySchema.set('toJSON', {
    virtuals: true,
});


export default model('Category', categorySchema);