const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//Examine routes folder
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

/* app.listen(process.env.PORT || 3001, () => {
  console.log(`API server now on port ${PORT}!`);
}); */

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
