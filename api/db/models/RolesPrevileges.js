const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    role_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    permission: { type: Boolean, default: true },
    created_by: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

class RolesPrivileges extends mongoose.Model {

}

schema.loadClass(RolesPrivileges);
module.exports = mongoose.model('roles_privileges', schema);