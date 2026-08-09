/*
STEP 1: Prerequisites
--------------------
- Jenkins installed and running on local machine
- Ansible installed on local machine
- Git installed on local machine
- Remote server (Linux) with:
  - SSH access
  - Python installed
  - Web server (Nginx / Apache)
- SSH key-based login from local → remote server


STEP 2: Setup SSH Access to Remote Server
----------------------------------------
1. Generate SSH key (if not exists):
   ssh-keygen

2. Copy public key to remote server:
   ssh-copy-id user@REMOTE_SERVER_IP

3. Verify SSH:
   ssh user@REMOTE_SERVER_IP


STEP 3: Create Ansible Inventory
--------------------------------
Create inventory.ini on local machine:

[web]
REMOTE_SERVER_IP ansible_user=REMOTE_USER

Test connection:
ansible -i inventory.ini web -m ping


STEP 4: Create Ansible Playbook (deploy.yml)
--------------------------------------------
This playbook will:
- Pull latest code
- Copy files
- Restart web server

Example steps in playbook:
- Ensure web directory exists
- Copy website files
- Restart Nginx/Apache


STEP 5: Prepare Website Repository
----------------------------------
- Website code stored in GitHub / GitLab
- Jenkins will clone this repository
- Website files will be deployed to:
  /var/www/html (or your chosen path)


STEP 6: Configure Jenkins
-------------------------
1. Open Jenkins UI:
   http://localhost:8080

2. Install required plugins:
   - Git
   - SSH Agent
   - Ansible

3. Add SSH private key in Jenkins:
   Manage Jenkins → Credentials
   - Type: SSH Username with private key
   - Username: REMOTE_USER
   - Private Key: ~/.ssh/id_rsa


STEP 7: Create Jenkins Job
-------------------------
1. New Item → Pipeline (or Freestyle)
2. Connect Git repository
3. Add credentials (Git + SSH key)


STEP 8: Jenkins Pipeline Steps
------------------------------
Pipeline stages:
1. Clone repository
2. Run Ansible playbook

Example shell steps Jenkins will run:
- git clone repo
- ansible-playbook -i inventory.ini deploy.yml


STEP 9: Jenkins Executes Ansible
-------------------------------
- Jenkins triggers Ansible
- Ansible connects to remote server via SSH
- Ansible deploys website files
- Ansible restarts web server


STEP 10: Verify Deployment
--------------------------
1. Open browser:
   http://REMOTE_SERVER_IP
2. Website should show updated content


STEP 11: Optional Automation
----------------------------
- Configure Git webhook
- On every code push:
  → Jenkins auto triggers
  → Website auto updates


FINAL FLOW (IMPORTANT)
---------------------
Developer → Git Push
Git → Jenkins
Jenkins → Ansible
Ansible → Remote Server
Remote Server → Website Updated

*/