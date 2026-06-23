# TRAINER LAB SETUP GUIDE (Pauline's Eyes Only)
## AfChix Workshop - June 26, 2026
## Do this on June 24-25

---

## PHASE 1: CHECK SERVICE QUOTAS (Do NOW, June 19-20)

1. Log into your AWS Console (your main account)
2. Go to: **Service Quotas** (search in the top bar)
3. Click: **AWS services** > **Amazon Elastic Compute Cloud (Amazon EC2)**
4. Search for: **"Running On-Demand Standard (A, C, D, H, I, M, R, T, Z) instances"**
5. Look at the **Applied quota value** for **us-east-1**
6. If it is less than 25 vCPUs, click **"Request increase at account level"**
   - Request: 32 vCPUs
   - Reason: "Running a cloud computing workshop for 20 participants, each launching one t2.micro instance (1 vCPU each)"
7. Submit. Takes 1-3 days to approve.

**Screenshot to take:** None needed for participants. This is just for you.

---

## PHASE 2: ENABLE IAM IDENTITY CENTER (June 24)

### Step 2.1: Enable Identity Center

1. Go to AWS Console > search **"IAM Identity Center"**
2. If not already enabled, click **"Enable"**
3. It will ask you to choose your identity source: select **"Identity Center directory"** (the built-in one)
4. Choose your Region. Pick **us-east-1** (same region as the lab)
5. Wait for it to provision (takes 1-2 minutes)

**Screenshot to take:** None needed.

---

### Step 2.2: Get Your Portal URL

1. In IAM Identity Center, click **"Settings"** in the left sidebar
2. Look for **"AWS access portal URL"**
3. It will look like: `https://d-xxxxxxxxxx.awsapps.com/start`
4. **Copy this URL and save it** — this is what you send to participants

You can also customize it:
- Click "Customize" next to the URL
- Set it to something like: `https://afchix-workshop.awsapps.com/start`
- (Only works if the name is available)

**Screenshot to take:**
- [ ] **SCREENSHOT A:** The Identity Center Settings page showing the portal URL
  → Use in: participant email (so they know what URL to go to)

---

### Step 2.3: Create the Permission Set

1. In IAM Identity Center, click **"Permission sets"** in the left sidebar
2. Click **"Create permission set"**
3. Choose: **"Custom permission set"**
4. Name: `AfChix-Workshop-Access`
5. Description: "Limited EC2 access for AfChix workshop participants"
6. Session duration: 4 hours (gives them enough time)
7. Under **"Inline policy"**, paste this JSON:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowEC2Workshop",
      "Effect": "Allow",
      "Action": [
        "ec2:RunInstances",
        "ec2:DescribeInstances",
        "ec2:DescribeInstanceStatus",
        "ec2:DescribeImages",
        "ec2:DescribeInstanceTypes",
        "ec2:DescribeKeyPairs",
        "ec2:DescribeSecurityGroups",
        "ec2:DescribeSecurityGroupRules",
        "ec2:DescribeSubnets",
        "ec2:DescribeVpcs",
        "ec2:DescribeVolumes",
        "ec2:DescribeAddresses",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DescribeAvailabilityZones",
        "ec2:CreateKeyPair",
        "ec2:CreateSecurityGroup",
        "ec2:AuthorizeSecurityGroupIngress",
        "ec2:RevokeSecurityGroupIngress",
        "ec2:CreateTags",
        "ec2:TerminateInstances",
        "ec2:StopInstances",
        "ec2:StartInstances",
        "ec2:GetPasswordData"
      ],
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "aws:RequestedRegion": "us-east-1"
        }
      }
    },
    {
      "Sid": "AllowConsoleDescribe",
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeRegions",
        "health:DescribeEvents",
        "health:DescribeEventAggregates",
        "compute-optimizer:GetEnrollmentStatus",
        "cloudwatch:GetMetricData",
        "cloudwatch:ListMetrics",
        "cloudwatch:GetMetricStatistics",
        "cloudwatch:DescribeAlarms"
      ],
      "Resource": "*"
    }
  ]
}
```

8. Click **"Create"**

**Screenshot to take:** None needed.

---

### Step 2.4: Create a Group

1. In IAM Identity Center, click **"Groups"** in the left sidebar
2. Click **"Create group"**
3. Group name: `AfChix-Participants`
4. Description: "Workshop participants - June 26, 2026"
5. Click **"Create group"**

---

### Step 2.5: Assign Permission Set to Group

1. In IAM Identity Center, click **"AWS accounts"** in the left sidebar
2. Select your AWS account (check the box)
3. Click **"Assign users or groups"**
4. Click the **"Groups"** tab
5. Select **"AfChix-Participants"**
6. Click Next
7. Select the **"AfChix-Workshop-Access"** permission set
8. Click Submit

---

## PHASE 3: CREATE PARTICIPANT USERS (June 25 evening, after receiving list from Barbara)

### Step 3.1: Create Users

For each participant on Barbara's list:

1. IAM Identity Center > **"Users"** > **"Add user"**
2. Fill in:
   - Username: `participant01` (or use first names: `pauline`, `grace`, etc.)
   - Email: their actual email (from Barbara's list)
   - First name: their first name
   - Last name: their last name
   - Display name: auto-fills
3. Click **"Next"**
4. Add to group: select **"AfChix-Participants"**
5. Click **"Add user"**

Repeat for each participant.

**Shortcut:** If you have 20+ participants, consider using the same password for all:
- When creating each user, choose: "Generate a one-time password"
- OR set a specific password for all: `AfChix2026!`

**TIP:** To set the same password for everyone:
- After creating a user, click on their username
- Click "Reset password"
- Choose "Generate a one-time password that you share with the user"
- Copy the temporary password
- OR: Tell participants to check their email for a setup link (Identity Center sends an activation email automatically)

**IMPORTANT:** If Identity Center sends automatic activation emails, participants will need to set their own password before the session. Mention this in your credential email.

---

### Step 3.2: Test One User

1. Open a **private/incognito** browser window
2. Go to your portal URL
3. Log in as one of the participant users
4. Confirm you can:
   - See the AWS account
   - Click into the Console
   - Search for EC2
   - Navigate to EC2 in us-east-1
5. Confirm you CANNOT:
   - Access S3 (should get "Access Denied")
   - Access IAM (should get "Access Denied")
   - Use any other region (actions should fail outside us-east-1)

**Screenshot to take:**
- [ ] **SCREENSHOT B:** The portal page after login (shows the account tile)
  → Use in: lab_page.html Step 1
- [ ] **SCREENSHOT C:** After clicking into Console, the AWS Console homepage
  → Use in: lab_page.html Step 1

---

## PHASE 4: FULL TEST RUN (June 25 evening)

Do the entire lab as a participant would. Time everything.

### Step 4.1: Login

1. Incognito browser > portal URL > login as test user
2. Click account > Management Console
3. Change region to **US East (N. Virginia)**

**Screenshot to take:**
- [ ] **SCREENSHOT D:** The region selector dropdown showing US East (N. Virginia) selected
  → Use in: lab_page.html Step 1 (the info box about checking region)

---

### Step 4.2: Navigate to EC2

1. Type "EC2" in the search bar
2. Click EC2

**Screenshot to take:**
- [ ] **SCREENSHOT E:** The search bar with "EC2" typed and the dropdown showing
  → Use in: lab_page.html Step 2

---

### Step 4.3: Launch Instance

1. Click "Launch instance"
2. Fill in:
   - Name: `AfChix-Test`
   - Windows tab > Windows Server 2022 Base (or 2025 if 2022 isn't available)
   - Instance type: t3.micro (or t2.micro)
   - Create key pair: `key-test` / RSA / .pem
   - Network: Allow RDP + Allow HTTPS + Allow HTTP
   - **Advanced details** > IAM instance profile: select **`AfChix-EC2-SSM-Role`**
3. Click Launch instance
4. Click View all instances
5. Wait for Running + 2/2 checks

**Screenshots to take:**
- [ ] **SCREENSHOT F:** The "Launch instance" page with Name field filled in
  → Use in: lab_page.html Step 3
- [ ] **SCREENSHOT G:** The OS selection showing Windows tab selected
  → Use in: lab_page.html Step 3
- [ ] **SCREENSHOT H:** Instance type showing t3.micro selected
  → Use in: lab_page.html Step 3
- [ ] **SCREENSHOT I:** Key pair creation dialog
  → Use in: lab_page.html Step 3
- [ ] **SCREENSHOT J:** Network settings with RDP, HTTPS, and HTTP checked
  → Use in: lab_page.html Step 3
- [ ] **SCREENSHOT J2:** Advanced details section showing IAM instance profile dropdown with AfChix-EC2-SSM-Role selected
  → Use in: lab_page.html Step 3
- [ ] **SCREENSHOT K:** Instance list showing "Running" and "2/2 checks passed"
  → Use in: lab_page.html Step 3 (the info box about waiting)

**Time it:** How long from "Launch" click to "2/2 checks passed"? ___ minutes

---

### Step 4.4: Get Password

1. Select instance > Actions > Security > Get Windows password
2. Upload .pem file
3. Decrypt password
4. Copy password

**Screenshots to take:**
- [ ] **SCREENSHOT L:** The "Get Windows password" dialog with "Upload private key file" button
  → Use in: lab_page.html Step 4
- [ ] **SCREENSHOT M:** After decrypting — showing the password field (blur the actual password!)
  → Use in: lab_page.html Step 4

**Time it:** How long after launch before password is available? ___ minutes

---

### Step 4.5: Connect via Fleet Manager (Browser RDP)

1. Select your instance (checkbox)
2. Click **"Connect"** at the top
3. Choose the **"RDP client"** tab
4. Click **"Connect using Fleet Manager"**
5. A new browser tab opens with a login prompt
6. Username: **Administrator**
7. Password: the password you decrypted in Step 4.4
8. Click Connect
9. You should see the Windows Server desktop in your browser

**If Fleet Manager doesn't work** (e.g., SSM Agent hasn't registered yet — can take 2-5 minutes after launch):
- Fallback: Use traditional RDP (mstsc on Windows, Microsoft Remote Desktop on Mac)
- Enter the instance's Public IP, username: Administrator, password: decrypted

**Screenshots to take:**
- [ ] **SCREENSHOT N:** The "Connect to instance" page showing RDP client tab with "Connect using Fleet Manager" button
  → Use in: lab_page.html Step 4
- [ ] **SCREENSHOT N2:** Fleet Manager login prompt in the browser
  → Use in: lab_page.html Step 4
- [ ] **SCREENSHOT O:** The Windows Server desktop showing in the browser (the moment!)
  → Use in: lab_page.html Step 5 (the important info box)

**Time it:** How long after launch before Fleet Manager connects? ___ minutes

---

### Step 4.6: Deploy Website

1. Open PowerShell (right-click Start > Windows PowerShell)
2. Run: `Install-WindowsFeature -name Web-Server -IncludeManagementTools`
3. Wait for success
4. Run: `Invoke-WebRequest -Uri "YOUR-GITHUB-RAW-URL" -OutFile "C:\inetpub\wwwroot\index.html"`
5. On your laptop browser: `http://INSTANCE-PUBLIC-IP`
6. See the AfChix Market website

**Screenshots to take:**
- [ ] **SCREENSHOT P:** PowerShell showing the Install-WindowsFeature command completed with "Success: True"
  → Use in: lab_page.html Step 6
- [ ] **SCREENSHOT Q:** PowerShell showing the Invoke-WebRequest command completed
  → Use in: lab_page.html Step 6
- [ ] **SCREENSHOT R:** The AfChix Market website loading in your browser with the IP in the address bar
  → Use in: lab_page.html Step 6 (this is the money shot — most important screenshot)

**Time it:** How long for IIS to install? ___ minutes

---

### Step 4.7: Test Cleanup

1. EC2 > Select instance > Instance state > Terminate
2. Confirm

**Screenshot to take:**
- [ ] **SCREENSHOT S:** The terminate confirmation dialog
  → Use in: lab_page.html Step 7

---

## PHASE 5: ADD SCREENSHOTS TO LAB PAGE (June 25 evening / June 26 morning)

1. Create a folder called `images/` in the same directory as `lab_page.html`
2. Save all screenshots there with these names:

```
images/
  step1-portal-login.png        (Screenshot B)
  step1-console-home.png        (Screenshot C)
  step1-region-selector.png     (Screenshot D)
  step2-ec2-search.png          (Screenshot E)
  step3-launch-name.png         (Screenshot F)
  step3-windows-os.png          (Screenshot G)
  step3-instance-type.png       (Screenshot H)
  step3-key-pair.png            (Screenshot I)
  step3-network-settings.png    (Screenshot J)
  step3-running-status.png      (Screenshot K)
  step4-get-password.png        (Screenshot L)
  step4-decrypted.png           (Screenshot M)
  step5-rdp-dialog.png          (Screenshot N)
  step5-windows-desktop.png     (Screenshot O)
  step6-iis-installed.png       (Screenshot P)
  step6-download-complete.png   (Screenshot Q)
  step6-website-live.png        (Screenshot R)
  step7-terminate.png           (Screenshot S)
```

3. In `lab_page.html`, replace each placeholder like:
```html
<p>[Screenshot: AWS Console search bar with EC2]</p>
```
With:
```html
<img src="images/step2-ec2-search.png" alt="Searching for EC2 in AWS Console">
```

4. Upload the whole folder (lab_page.html + images/) to your subdomain

---

## PHASE 6: SEND CREDENTIALS (June 26, morning)

Send email to all participants using the template in `GitHub_Setup_Instructions.md`.

Include:
- Portal URL
- Their username
- Password or instructions to set password (depending on how Identity Center was configured)
- Reminder: bring laptop, Chrome/Firefox, internet connection
- Lab instructions URL: `workshop.sentibay.com` (or whatever your subdomain is)

---

## QUICK REFERENCE: TOTAL SCREENSHOTS NEEDED

| # | Name | Where it goes in lab_page.html |
|---|------|-------------------------------|
| B | Portal after login | Step 1 |
| C | Console homepage | Step 1 |
| D | Region selector | Step 1 info box |
| E | EC2 search | Step 2 |
| F | Launch instance - name | Step 3 |
| G | Windows OS selection | Step 3 |
| H | Instance type | Step 3 |
| I | Key pair dialog | Step 3 |
| J | Network settings | Step 3 |
| K | Instance running | Step 3 info box |
| L | Get password dialog | Step 4 |
| M | Decrypted password | Step 4 |
| N | RDP connection dialog | Step 5 |
| O | Windows desktop | Step 5 |
| P | IIS install success | Step 6 |
| Q | Download command done | Step 6 |
| R | Website live in browser | Step 6 |
| S | Terminate dialog | Step 7 |

**Total: 18 screenshots.** Take them during your test run and you are done.

---

## TIMING SUMMARY (fill in during test)

| Phase | What | Time |
|-------|------|------|
| Login to Console | Portal > Account > Console | ___ min |
| Search EC2 | Type and click | ___ sec |
| Fill launch form | All fields | ___ min |
| Instance to Running | Pending > Running | ___ min |
| Password available | After launch | ___ min |
| RDP connected | Enter IP > see desktop | ___ min |
| IIS installed | Command > Success | ___ min |
| Website downloaded | Command > done | ___ sec |
| **TOTAL** | Login to website live | ___ min |
