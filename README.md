# Loadshedding Checker
This project is a Loadshedding Checker designed specifically for South Africa. It help me stay informed about power outages in my area. The system is built using React and Raspberry Pi.

# Background
Living in South Africa, dealing with power outages due to loadshedding or other issues with the electricity grid is a common occurrence. While loadshedding schedules are available online, oftentimes power outages can occur unexpectedly due to various reasons such as a distribution transformer tripping or malfunctioning, or even a local power line being damaged. These unexpected outages can sometimes last for days, leaving individuals unaware of when their power will be restored.

# Purpose
To address this issue, I developed this Loadshedding Checker. It connects to a Raspberry Pi, which is powered by my house's electricity. If the Raspberry Pi loses power for any reason, it reflects on the website, indicating that there might be a power outage at my residence. This allows me to check the status of my home's power remotely, providing peace of mind and enabling me to plan accordingly, especially if I'm away from home for an extended period.

# Features
- Real-time status of power at my residence.
- Indication of power outage on the website if the Raspberry Pi loses power.
- Accessibility from anywhere with an internet connection.
- Easy-to-use interface.

# How it Works
The Raspberry Pi continuously communicates its status to the website. If the Raspberry Pi loses power, it triggers an alert on the website, indicating a potential power outage at my residence. This alert serves as a notification for me to take necessary actions or make arrangements accordingly.

# Technologies Used
React: Frontend development framework.
Raspberry Pi: Used to monitor power status.
HTML/CSS: Frontend design and styling.

# Usage 
(There isnt much to use on these as the backend and rasberry pi have now been reused onto a different project.)
To use the Loadshedding Checker:

Clone the repository to your local machine.
Install dependencies by running npm install.
Start the development server by running npm start.
Access the website locally via your web browser.

# Contribution
No Contributions are welcomed as this was a once off project. If someone would like to Colaberate on a similair project Send me an email at dowiework@gmail.com to discuss.
