import "reflect-metadata";
import { createExpressServer } from 'routing-controllers';

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
    classTransformer: true,
    validation: true,
    controllers: [__dirname + '/controllers/*.ts'],
});

// run express application on port 3000
app.listen(3000, () => console.log('app started on port 3000'));
