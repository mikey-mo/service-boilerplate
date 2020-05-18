const { app, RUN_ENVIRONMENT, PORT } = require('./service');

app.listen(PORT, () => console.log(
    'Service is running on port',
    PORT,
    'in the',
    RUN_ENVIRONMENT.toUpperCase(),
    'environment',
));
