/*
==> Jenkins:
    ->  Jenkins is a open source automation server/tool.
    ->  With the help of Jenkins we can automate our tasks.
    ->  Jenkins automate build and deployment process.
    ->  Initially when we are making the software we were doing below thing manually.
        ->  Build
        ->  Test
        ->  Deployment  
*/
/*
==> CI/CD:
    ->  Continuous integration/ Continuous Delivery/Deployment.
    ->  Continuous Integration:
        ->  These are the stuff we do in CI:
            ->  Build
            ->  Test
            ->  Merge
    ->  Continuous Delivery:
        ->  Automatically release to repository
    ->  Continuous Deployment:
        ->  Automatically Deploy to production.
    ->  Pipeline is Writing script for build, test and deployment.
*/
/*
==> Environments:
    1) Dev environment
    2) Q.A environment
    3) Staging/UAT environment
    4) Pre-production/Pilot environment
    5) Production environment
*/
/*
==> Example:
    echo "Hello World, This is my first testing job.This is ${FNAME} ${LNAME}"
    echo "This is Ravi"> /tmp/first_job.txt
    bash /tmp/basic.sh // this file is there at /tmp location
*/

/*
==> Exercise:
    1)  Create a simple job to echo some text and build and test it.  
    2)  Run bas
*/

/*
==> Scheduling the jenkins jobs:
    ->  This is like cron-job, that we write some script/command to execute some job in 
        certain intervals.
*/

/*
==> Working with github:
    1) Create a git repo, push some code
    2) create a job in jenkins
    3) Add the github repo
    4) Add commands that you want to execute, 
    5) Make the build.

==> Auto github repo polling: Setup the "Triggers" on jenkins for auto build.
*/

/*
==> Email Notifications on Job Failure:
    1) To to system
    2) Add E-mail Notification (you can use your google account with credentials that needs to send mails)
    3) Enable use ssl
    4) Save the settings:
    5) Now integrate email notification with git job that you have created on jenkins
    6) Add post build action in configuration. 
*/

/*
==> Jenkins jobs for remote server:
    ->  Basically with the help of our server we can perform some actions on other 
        server and for do that jenkins helps us to do this job.

    ->  You have to install some plugin like Publish Over SSH.
    ->  There are some steps in which you have provide ssh key of one server into the 
        jenkins so that you can use server1 (jenkins's) server to other server.

    ->  Similarly you can upload multiple files from 1 server to other by making some 
        changes.

    ->  You can upload entire folder and also you can exclude some of them in advance 
        setting of jenkins job. 
*/
/*
==> Jenkins job with Ansible:
    -> Install a plugin on jenkins and create a job and configure them.
*/
/*
==> You can connect two server using jenkins and transfer files from one to another 
    server and can do more works.
*/
/*
==> You can deploy and make changes to a website to other servers using jenkins 
    and ansible.
*/
/*
==> User management in jenkins:
    ->  You can create as much user as you can and gives them access to your jenkins 
        so that he/she can perform some tasks into it.
    ->  Admin is super user.
    ->  You can create multiple roles and assign roles to users.
    ->  You might have to install some plugins.
*/

/*
==> Environment variables in jenkins:
    ->  Environment variables in Jenkins are key–value pairs used to:
        1) Store configuration values
        2) Pass data between pipeline stages
        3) Avoid hard-coding secrets or paths
        4) They are available during a job or pipeline execution.

==> Types of Environment Variables in Jenkins:  
    1) Built-in Jenkins Environment Variables:
        ->  Automatically provided by Jenkins.
            | Variable       | Meaning                |
            | -------------- | ---------------------- |
            | `BUILD_NUMBER` | Current build number   |
            | `BUILD_ID`     | Unique build ID        |
            | `JOB_NAME`     | Jenkins job name       |
            | `WORKSPACE`    | Job workspace path     |
            | `GIT_BRANCH`   | Git branch name        |
            | `GIT_COMMIT`   | Git commit hash        |
            | `JENKINS_HOME` | Jenkins home directory |
        ->  Example:
            echo $BUILD_NUMBER
            echo $WORKSPACE

    2) Global Environment Variables:
        ->  Available to all jobs.
        ->  How to set:
            Manage Jenkins → System → Global Properties → Environment Variables
        ->  Example:
                APP_ENV=production
                DEPLOY_PATH=/var/www/html

    3) Job-Level Environment Variables:
        ->  Available only to one job.
        ->  Freestyle Job:
            Configure Job → Build Environment → Inject environment variables
        ->  Example:
                NODE_ENV=staging

    4)  Pipeline Environment Variables (Most Important):
        ->  Defined inside a Jenkinsfile.
        ->  pipeline {
                environment {
                    APP_NAME = "my-app"
                    ENV = "prod"
                }
            }
        ->  Usage:  echo $APP_NAME

    5) Environment Variables from Credentials:
        ->  Used for secrets (recommended way).
        ->  environment {
                DB_PASSWORD = credentials('db-password-id')
            }
        -> Automatically masked in logs & Secure
*/

