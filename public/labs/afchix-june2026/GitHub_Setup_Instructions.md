# GitHub Setup & Pre-Session Testing Guide
## AfChix Workshop - Pauline Namwakira

---

## PART 1: UPLOAD WEBSITE CODE TO GITHUB

### Step 1: Create a new public repository

1. Go to https://github.com/new
2. Repository name: `afchix-cloud-workshop`
3. Description: "AfChix Women in Tech - Virtualization & Cloud Computing Workshop Materials"
4. Visibility: **Public** (must be public so participants can download from EC2)
5. Check "Add a README file"
6. Click "Create repository"

### Step 2: Upload the website file

1. In your new repo, click **"Add file"** > **"Upload files"**
2. Drag in the `website_code.html` file from your local folder:
   `c:\Users\kira\TRAINING\SPEAKING ENGAGEMENTS\AfChix_June2026\website_code.html`
3. Rename it to `index.html` before uploading (or rename in GitHub after)
4. Commit message: "Add AfChix Market website for workshop"
5. Click **"Commit changes"**

### Step 3: Get the raw file URL

1. In your repo, click on `index.html`
2. Click the **"Raw"** button (top right of the file content)
3. Copy the URL from your browser. It will look like:
   ```
   https://raw.githubusercontent.com/YOUR-USERNAME/afchix-cloud-workshop/main/index.html
   ```
4. **Save this URL** - this is what participants will use to download the file to their EC2 instance

### Step 4: Test the raw URL

1. Open a new browser tab
2. Paste the raw URL
3. You should see the raw HTML code (not the rendered page)
4. If you see the code, it's working correctly

---

## PART 2: THE POWERSHELL COMMAND FOR PARTICIPANTS

Once you have the raw GitHub URL, the command participants will run on their EC2 instance is:

```powershell
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/kira-PJ/afchix-cloud-workshop/refs/heads/main/index.html" -OutFile "C:\inetpub\wwwroot\index.html"
```

**Replace YOUR-USERNAME with your actual GitHub username.**

Write this command on the presentation slide or whiteboard during the session so participants can copy it.

---

## PART 3: PRE-SESSION TEST (Do this June 24-25)

Run through the ENTIRE lab yourself, exactly as a participant would. This catches any issues before 20 people are staring at you.

### Test Checklist:

#### A. Test IAM Identity Center Setup

- [ ] Enable IAM Identity Center in your account (if not already)
- [ ] Create one test user (e.g., `test-participant`)
- [ ] Create the Permission Set with the EC2-only policy (from Lab_Instructions.md)
- [ ] Assign the permission set to the test user
- [ ] Open a **private/incognito browser window**
- [ ] Go to your Identity Center portal URL
- [ ] Log in as `test-participant`
- [ ] Confirm you land on the portal and can click into the Console
- [ ] Confirm you can ONLY see EC2 (try going to S3 or IAM — should get "Access Denied")

#### B. Test EC2 Launch (as the test participant)

- [ ] In the Console, switch to region **us-east-1**
- [ ] Go to EC2 > Launch instance
- [ ] Name: `test-afchix`
- [ ] OS: Windows Server 2022 Base
- [ ] Instance type: t2.micro (or t3.micro)
- [ ] Create key pair (download .pem file)
- [ ] Network: Allow RDP (port 3389) from Anywhere
- [ ] Also add rule: Allow HTTP (port 80) from Anywhere (do this at launch to save time in session)
- [ ] Launch instance
- [ ] Wait for 2/2 status checks (4-5 minutes)
- [ ] Note: time how long this takes — tell participants during the session

#### C. Test RDP Connection

- [ ] Select instance > Actions > Security > Get Windows Password
- [ ] Upload .pem key > Decrypt password
- [ ] Note: how long after launch before password is available? (usually 4 min)
- [ ] Connect via RDP using the public IP + Administrator + decrypted password
- [ ] Confirm you see a Windows desktop
- [ ] Open PowerShell inside the instance

#### D. Test Website Deployment

- [ ] In PowerShell on the instance, run:
```powershell
Install-WindowsFeature -name Web-Server -IncludeManagementTools
```
- [ ] Wait for completion. Note: how long does this take? (usually 1-2 min)
- [ ] Run:
```powershell
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/YOUR-USERNAME/afchix-cloud-workshop/main/index.html" -OutFile "C:\inetpub\wwwroot\index.html"
```
- [ ] On YOUR laptop browser, go to: `http://INSTANCE-PUBLIC-IP`
- [ ] Confirm you see the AfChix Market shopping website
- [ ] If you get a timeout: check Security Group has port 80 (HTTP) open
- [ ] Take a screenshot — this is your proof it works

#### E. Test Cleanup

- [ ] Terminate the test instance
- [ ] Delete the key pair
- [ ] Delete any security groups you created (keep the default)
- [ ] Delete the test-participant user from Identity Center (or keep for reference)

---

## PART 4: TIMING NOTES (Fill in during your test)

| Step | Expected Time | Actual Time (fill in) |
|------|--------------|----------------------|
| Log into Identity Center portal | 1 min | _____ |
| Navigate to EC2 | 30 sec | _____ |
| Launch instance (fill in form) | 3 min | _____ |
| Wait for instance to be "Running" | 2-3 min | _____ |
| Wait for password to be available | 4-5 min | _____ |
| Decrypt password + connect RDP | 2 min | _____ |
| Install IIS | 1-2 min | _____ |
| Download website from GitHub | 10 sec | _____ |
| Total hands-on time | ~15-20 min | _____ |

**Buffer:** You have 50 min for the hands-on section. With 20 min of actual steps, you have 30 min of buffer for helping participants who get stuck, troubleshooting, and the "wow" moment of seeing the website.

---

## PART 5: WHAT COULD GO WRONG (and fixes)

| Issue | Cause | Fix |
|-------|-------|-----|
| Cannot launch instance | vCPU quota too low | Request increase NOW (Service Quotas > EC2) |
| Instance launches but no password | Less than 4 min since launch | Wait. Tell participants to be patient. |
| RDP connection refused | Security group doesn't allow 3389 | Check inbound rules |
| Website not loading from laptop | Port 80 not open | Add HTTP inbound rule to security group |
| Invoke-WebRequest fails | GitHub URL wrong or instance has no internet | Check URL is raw GitHub link. Check instance has public IP and route to internet (default VPC should be fine) |
| Identity Center login fails | Wrong portal URL or user not assigned | Double-check user is in the group and group has permission set assigned |
| "Access Denied" on EC2 | Permission set not assigned to the account | Go to Identity Center > AWS Accounts > Assign |
| Instance type not available | Capacity in selected AZ | Try a different AZ or use t2.micro instead of t3.micro |

---

## PART 6: DAY-OF CHECKLIST (June 26, morning)

- [ ] Send login credentials email to all participants (portal URL + username + password)
- [ ] Confirm your GitHub raw URL still works
- [ ] Confirm your AWS vCPU quota is sufficient
- [ ] Have the PowerShell commands ready on a slide or printed sheet
- [ ] Bring a printed troubleshooting guide (this doc, page 5)
- [ ] Have your phone ready to hotspot if venue Wi-Fi fails
- [ ] Arrive 30 min early to test venue Wi-Fi and projector
- [ ] Open the AWS Console yourself so you can demo on screen
- [ ] Have the Identity Center admin portal open in another tab (to fix any login issues live)

---

## PART 7: PARTICIPANT EMAIL TEMPLATE (Send morning of June 26)

**Subject:** AfChix Workshop - Your Cloud Lab Access (June 26)

---

Hi [Name],

Welcome to the Virtualization & Cloud Computing Workshop!

Here are your login credentials for today's hands-on lab:

**Portal URL:** [YOUR IDENTITY CENTER PORTAL URL]
**Username:** [participantXX]
**Password:** AfChix2026!

Please do NOT log in until instructed during the session. We will go through it together step by step.

**What to bring:**
- Your laptop with Chrome or Firefox browser
- A working internet connection

See you there!

Pauline Namwakira
AWS Authorized Instructor
SentiBay Consulting

---

## PART 8: POST-SESSION CLEANUP CHECKLIST (Do immediately after)

- [ ] Go to EC2 > Instances > Select All > Terminate (in us-east-1)
- [ ] Go to EC2 > Key Pairs > Delete all workshop key pairs
- [ ] Go to EC2 > Security Groups > Delete all non-default groups created during workshop
- [ ] Go to IAM Identity Center > Users > Delete all participant users
- [ ] Go to IAM Identity Center > Groups > Delete the AfChix-Participants group
- [ ] Go to IAM Identity Center > Permission Sets > Delete AfChix-Workshop-Access
- [ ] Check AWS Cost Explorer next day to confirm nothing is still running
- [ ] Pat yourself on the back. You delivered a cloud workshop.
