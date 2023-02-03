import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer dk5uBFW6fXfmkVeEzlAZy3IDf9evzBQPfFyL0RBnWXcYOHMwD0XHQTfzoG2ACW9QaDXxC9wOzGk6SBs7eOspdLiSMMur3157RlxI3vDOGvfWFlLT7LkrmU3-1V7aY3Yx',
  },
});
