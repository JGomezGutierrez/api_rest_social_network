import { Schema, model } from "mongoose";
import mongoosePagination from "mongoose-paginate-v2";

const UserSchema = Schema ({
  name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  bio: String,
  nick: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "role_user"
  },
  image: {
    type: String,
    default: "default.png"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

//Añadir plugin de pagination
UserSchema.plugin(mongoosePagination);

export default model("User", UserSchema, "users");
