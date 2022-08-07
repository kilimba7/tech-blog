const { Post } = require('../models');

const postdata = [
  {
    title: 'FIRST TEST',
    content: 'Donec posuere metus vitae ipsum.',
    user_id: 1
  },
  {
    title: 'MVC and More',
    content: 'I started this so that I can comment stuff',
    user_id: 3
  },
  {
    title: 'Javascript',
    content: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
