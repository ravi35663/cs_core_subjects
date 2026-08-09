/*
# ---------- UPDATE SYSTEM ----------
sudo yum update -y || sudo apt update -y

# ---------- INSTALL JAVA (Jenkins Requirement) ----------
# Amazon Linux / RHEL / CentOS
sudo yum install -y java-17-amazon-corretto

# Ubuntu
# sudo apt install -y openjdk-17-jdk

# ---------- ADD JENKINS REPO ----------
# Amazon Linux / RHEL / CentOS
sudo wget -O /etc/yum.repos.d/jenkins.repo \
https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key

# Ubuntu
# curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
# /usr/share/keyrings/jenkins-keyring.asc > /dev/null
# echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
# https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
# /etc/apt/sources.list.d/jenkins.list > /dev/null
# sudo apt update

# ---------- INSTALL JENKINS ----------
sudo yum install -y jenkins || sudo apt install -y jenkins

# ---------- START JENKINS ----------
sudo systemctl start jenkins

# ---------- ENABLE JENKINS (AUTO-START ON BOOT) ----------
sudo systemctl enable jenkins

# ---------- CHECK JENKINS STATUS ----------
sudo systemctl status jenkins

# ---------- OPEN JENKINS PORT (8080) ----------
# Amazon Linux / RHEL / CentOS
sudo firewall-cmd --permanent --add-port=8080/tcp
sudo firewall-cmd --reload

# Ubuntu
# sudo ufw allow 8080
# sudo ufw reload

# ---------- GET INITIAL ADMIN PASSWORD ----------
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

# ---------- STOP JENKINS ----------
sudo systemctl stop jenkins

# ---------- RESTART JENKINS ----------
sudo systemctl restart jenkins
*/


// For Mac:
/*
# STEP 1: Install Homebrew (skip if already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Verify Homebrew
brew --version


# STEP 2: Install Java 17 (Required for Jenkins)
brew install openjdk@17

# Link Java properly
sudo ln -sfn /opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk \
/Library/Java/JavaVirtualMachines/openjdk-17.jdk

# Verify Java
java -version


# STEP 3: Install Jenkins (LTS version)
brew install jenkins-lts


# STEP 4: Start Jenkins as a background service
brew services start jenkins-lts

# OR start Jenkins manually
jenkins-lts


# STEP 5: Open Jenkins in browser
http://localhost:8080


# STEP 6: Get Jenkins initial admin password
cat ~/.jenkins/secrets/initialAdminPassword


# STEP 7: Jenkins UI setup
- Paste password
- Click "Install Suggested Plugins"
- Create Admin User
- Finish setup


# STEP 8: Verify Jenkins is running
brew services list
ps aux | grep jenkins
*/