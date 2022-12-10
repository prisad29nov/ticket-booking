const app = require('./app');

app.listen(process.env.PORT, () => {
  console.log(`Your app is runnig on port ${process.env.PORT}`);
});
