# AfChix Market - Cloud-Hosted Website

A demo e-commerce website built for the **AfChix Women in Tech Workshop** (June 26, 2026, Nairobi).

Participants deploy this website on a Windows EC2 instance during the hands-on lab to experience hosting a real website in the cloud.

## What This Is

A single-page responsive shopping website showcasing African women-led products. It's designed to be visually impressive when participants see it live on their EC2 instance — the "wow moment" of the workshop.

## Repo Structure

```
├── index.html          # The website (single file, self-contained CSS)
├── images/             # Product images
│   ├── kiondo-bag.jpg
│   ├── maasai-bracelet.jpg
│   ├── ankara-dress.jpg
│   ├── shea-butter.jpg
│   ├── coffee-beans.jpg
│   └── solar-charger.jpg
└── README.md
```

## How Participants Use This

During the workshop, participants run these PowerShell commands on their Windows EC2 instance:

```powershell
# Install IIS web server
Install-WindowsFeature -name Web-Server -IncludeManagementTools

# Download the website
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/YOUR-USERNAME/afchix-market/main/index.html" -OutFile "C:\inetpub\wwwroot\index.html"

# Create images folder
New-Item -ItemType Directory -Path "C:\inetpub\wwwroot\images" -Force

# Download images
$images = @("kiondo-bag.jpg", "maasai-bracelet.jpg", "ankara-dress.jpg", "shea-butter.jpg", "coffee-beans.jpg", "solar-charger.jpg")
foreach ($img in $images) {
    Invoke-WebRequest -Uri "https://raw.githubusercontent.com/YOUR-USERNAME/afchix-market/main/images/$img" -OutFile "C:\inetpub\wwwroot\images\$img"
}
```

Then they access `http://INSTANCE-PUBLIC-IP` in their browser and see the live website.

## Workshop Details

- **Event:** AfChix Women in Tech Workshop
- **Date:** June 26, 2026
- **Location:** Nairobi, Kenya
- **Trainer:** Pauline Namwakira
- **Lab Goal:** Launch a Windows EC2 instance and host this website on it

## Image Requirements

Product images should be:
- JPEG format
- Approximately 400x300px (or similar aspect ratio)
- File size under 200KB each for fast download on the EC2 instance

## License

This project is for educational/workshop use. Product images should be royalty-free or your own.
