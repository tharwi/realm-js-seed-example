const UserSchema = {
  name: 'User',
  properties: {
    id: 'int',
    name: 'string',
    posts: 'Post[]',
  },
  primaryKey: 'id',
};

export default UserSchema;
