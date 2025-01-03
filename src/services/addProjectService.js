const projet = require('../models/projectsModel')

async function addProjectService(request, response) {
    try{
        let newProject = projet(request.body)
        await newProject.save()
        response.json('✅✅')
    }catch(error){
        console.log('There are error: ' + error)
    }
}

module.exports = addProjectService