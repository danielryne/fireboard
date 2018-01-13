# fireboard

Converting a shiftboard (an actual whiteboard with magnets!) to a web-app which integrates with AFD’s existing databases.
More Information
Every day our Fire Battalion Chiefs take about an hour and half each to manage their battalion locations by strategizing staff schedules (leaves - sick, vacations, etc.). If they are unable to fill their battalion, they coordinate with other Battalion Chiefs. 
Currently, the shiftboard is on a physical whiteboard with magnets. Different people have different ideas of what an electronic version should look like, but we need a prototype to test! 
We have the raw data available for this prototype. If the prototype works for the mind of a Battalion Chief, then we do have in-house staff to integrate the different datasets into the application.


Pages (Components) 
Home Page > Login Page > Staff Page > Firestation Page 
Login Page
User authentication  
Staff Page 
List all staff (staff component 1) 
Add staff button 
Search function 
Upload CVS for additional staff 
Schedule Page 
Display all “Active” staff (staff component 2) 
Display fire stations (fire station component) 
Sort button 
Save or export staff list 



Page Components 
Staff Component 1
Display name of staff and current station 
Display and change status of staff (“Active” or “Inactive”)
Change other details of staff (notes, email) 
Staff Component 2 
Display name of staff
Dropdown station assignment 
Fire Station Component
Display station name / number 
Display number of “Active” staff vs Required Staff 
On click popup: 
Displays “Active” staff at station 

Database (MongoDB) 
Station
Number
Name
Min staff 
Staff
Name 
Station 
Email 
Status
Notes 
---------------------------
Tech:
Mongo
Express
React
Node
Firebase
Bootstrap
Model 
