/* 
    All routes pertaining to the resource: Task
*/

const express = require('express');
const router = express.Router();

let users = [
    {
        email: 'abc@gmail.com',
        username: '1',
        password: '123'
    },
    {
        email: 'def@gmail.com',
        username: '2',
        password: '456'
    },
    {
        email: 'ghi@gmail.com',
        username: '3',
        password: '789'
    },
];

let posts = [
    {
        content : "Post Content",
        timeCreated : "Time created in Date format",
        timeUpdated : "Time updated in Date format",
        status : "Responsible for soft deletion",
        author : "user id of author"
    }
]

/* 
    CRUD functionalities
*/
// GET - http://localhost:<PORT>/api/v1/tasks
router.get( '/', ( request, response ) => {
    response.status( 200 ).send( { users: users } );
})

/* 
    Body
    {
        id:
        name:
        status:
    }
*/
// POST - http://localhost:<PORT>/api/v1/tasks
router.post( '/' , ( request, response ) => {
    users = [ ...users, request.body ];
    response.status( 201 ).send( { users: users } );
});

// PUT - http://localhost:<PORT>/api/v1/tasks/:<id>
router.put( `/:id`, ( request, response ) => {
    const userId =  request.params.email ;
    const userIndex = users.findIndex( user => user.id === taskId );
    users[ userIndex ].status = 'Done';

    response.status( 200 ).send( { users: users } );
});

// DELETE - http://localhost:<PORT>/api/v1/tasks/:<id>
router.delete( `/:id`, ( request, response ) => {
    tasks = tasks.filter( task => task.id !== Number( request.params.id ) );
    response.status( 200 ).send( { tasks: tasks } );
})


// Export
module.exports = router;