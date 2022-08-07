const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: '1st comment',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'wow great job',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'another one',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'In hac habitasse platea dictumst.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Vivamus vestibulum sagittis sapien.',
    user_id: 1,
    post_id: 20
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;