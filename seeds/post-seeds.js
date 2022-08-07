const { Post } = require('../models');

const postdata = [
  {
    title: 'FIRST TEST',
    content: 'Google also did a great job with comfort on the Pixel Buds Pro. I was initially a little find that earbuds with those do a much better job of...staying in the ear.',
    user_id: 1
  },
  {
    title: 'MVC and More',
    content: 'I started this so that I can comment stuff',
    user_id: 3
  },
  {
    title: 'Javascript',
    content: 'I wish I had more to say about the charging case but it is almost exactly the same little, oval-shaped fella that  is otherwise self-explanatory.',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
