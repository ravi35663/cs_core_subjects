/*
==> Jenkins Pipeline:
    ->  A Jenkins Pipeline is a set of automated steps written as code that defines 
        how your application is built, tested, and deployed.

    ->  It is usually written in a file called 'Jenkinsfile' and stored in your source 
        code repository.
    ->  Code → Build → Test → Deploy
*/

/*
==> Why do we use Jenkins Pipelines:
    ->  We use Jenkins pipelines to automate the entire CI/CD process in a reliable, 
        repeatable, and version-controlled way.

    ->  Without pipelines:
            1) Manual steps
            2) Human errors
            3) Inconsistent deployments
    ->  With pipelines:
            1) Fully automated flow
            2) Same process every time
            3) Faster releases
*/

/*
==> Types of Jenkins Pipelines:
    1) Declarative Pipeline (Most used)
        ->  Simple
        ->  Structured
        ->  Recommended
        ->  Example:
                pipeline {
                    stages {
                        stage('Build') {
                        steps {
                            echo 'Building...'
                            }
                        }
                    }
                }
    2) Scripted Pipeline:
        ->  More flexible
        ->  Uses Groovy scripting
        ->  More complex
*/

/*
==> Benefits of Using Jenkins Pipeline:
    1)  Pipeline as Code
        ->  CI/CD logic is stored in Git
        ->  Easy to review and track changes

    2) Automation
        ->  Automatic build, test, and deployment
        ->  Triggered on every code push

    3) Consistency
        ->  Same pipeline runs every time
        ->  No environment-specific manual steps

    4) Faster Delivery
        ->  Reduces release time
        ->  Enables continuous delivery

    5) Easy Rollback & Debugging
        ->  Build history maintained
        ->  Easy to re-run failed stages

    6) Scalability
        ->  Supports parallel stages
        ->  Works with agents and distributed builds

    7) Integration Friendly
        ->  Works with Git, Docker, Ansible, Kubernetes, AWS, etc.
*/

/*
==> Real-World Example Use Case:
    Developer pushes code 
                    → Jenkins Pipeline runs 
                        → Tests pass 
                            → Build succeeds 
                                → App deployed automatically
*/

/*
==> How to write pipelines:
    pipeline {
        agent any
        
        environment{
            NAME="Ravi"
            AGE=28
            EMAIL="ravikr845430@gmail.com"
            PASS=credentials('PASS')
        }

        stages {
            // stage('Build') {
            //     steps {
            //         // sh means executing shell commands
            //       sh ''' 
            //             npm install uuid
            //             echo hello World
            //             echo $NAME
            //             echo $AGE;
            //           '''
            //           retry(3){// 3 time it will retry
            //                 sh 'ech ;=hello' ;
            //           }
            //           timeout(time:15,unit:'SECOND'){ // close this in 15 second
            //               sh 'sleep 30'
            //           }
            //     }
            // }
            stage('Test') {
                steps {
                    // echo 'This is test phase'
                    sh '''
                        echo $AGE
                        echo 'Password is ' + $PASS
                    '''
                }
            }
            stage('Deploy') {
                steps {
                    echo 'This is deploy phase'
                }
            }
        }
}
*/