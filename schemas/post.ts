const PostSchema = {
  name: 'Post',
  properties: {
    id: 'int',
    title: 'string',
    content: 'string',
    userId: 'int',
  },
  primaryKey: 'id',
};

export default PostSchema;
