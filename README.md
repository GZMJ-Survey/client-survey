
# About

This survey team project front end interacts with it's back end (link to back end repo here). The app lets a user have authorization, and have/take surveys.


## Team Members:

-  Maxime Dore
-  Gabrielle Williams
-  Zhu Chen
-  Jana Ryndin


## Tasks

Make an app that can be used to create custom surveys and collect the responses
on a dashboard for that particular survey.


## User Stories


####As a user I want to:
-   create an account.
-   log in and log out.
-   change password.
-   create new survey.
-   delete survey.
-   Add questions to my surveys.
-   Anwer anyone's survey questions.
-   view survey stat(s) on dashboard.

####Extras:
-   edit responses.
-   share surveys.

## Wireframe

![Wireframe](put raw path here "Wireframe")

## Development

1. Consulted with consultants regarding requirements and technical details of
development.
2. Each member of the team made sure we the same page regarding what we wanted to
create and how to go about the development.
3. Started with back end. developed CRUD actions for surveys and tested them.
4. Had the owners have ownership of surveys and tested them.
5. Create basic forms on the front end to test CRUD actions with back end.
6. Create and read actions worked but the update action for a new question was
problematic because it was replacing the already existing question and was not
adding a new question to the array. The solution being pushing the new
question to the survey array of question in the update controller.
7. We tested the update action on the backend and front end.
8. Used handlebars to diplay all surveys, questions, and answers.
9. Began working on getting the "submit answer" to work which is also a PATCH on
the survey. This was quite challenging.
