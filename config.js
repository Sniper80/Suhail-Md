const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_23_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDcwLFxuICAgICAgICA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MixcbiAgICAgICAgMjQxLFxuICAgICAgICA5NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODksXG4gICAgICAgIDcxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NixcbiAgICAgICAgMTExLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDg1LFxuICAgICAgICAzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg2LFxuICAgICAgICA3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaXF1RndiMFZ0aG4wR0JoVSt5cmwzM1V0anNXM2grM2M5NUJEZzNSRzBzYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMDEyMjI2NDE0ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ1MjU5NTAwMTNBQzIyQjJDNDQwNDcwODdCMTk1MThCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDgzNzM4NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIwMTIyMjY0MTQ4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzE3RkUxOEUzMUQ1REFFRkRFQURERTQ4RDgyRUNCRTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODM3Mzg0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjAxMjIyNjQxNDg3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2OTI2QjkzMTJDQkRFNDA4REY0MzUyQkZFM0QxMjNGNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4MzczODVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMDEyMjI2NDE0ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjIzMDUwOEI4MkY1Q0Y5RUYzOEJDODY5QzgwNEJERTk3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDgzNzM4NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQUm9xVFYtRVFoNks3YXFtcTJFQ3JnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJlYjVmNWEzLWQzZjUtNGUzYy1iOWZmLTBkNjQ1MzNlZDBmMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAyMDQsXG4gICAgICAxNjgsXG4gICAgICAxMixcbiAgICAgIDI0MixcbiAgICAgIDI3LFxuICAgICAgMjUzLFxuICAgICAgMTcwLFxuICAgICAgMjI4LFxuICAgICAgMjI2LFxuICAgICAgMzYsXG4gICAgICAyNyxcbiAgICAgIDIzMCxcbiAgICAgIDUwLFxuICAgICAgMjM5LFxuICAgICAgMTM5LFxuICAgICAgNjcsXG4gICAgICAxMTUsXG4gICAgICA3LFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDIzMCxcbiAgICAgIDE5MCxcbiAgICAgIDY4LFxuICAgICAgMTk2LFxuICAgICAgMTk1LFxuICAgICAgMjA5LFxuICAgICAgMTUzLFxuICAgICAgMCxcbiAgICAgIDIxMixcbiAgICAgIDE2OSxcbiAgICAgIDE4MixcbiAgICAgIDIzOCxcbiAgICAgIDEsXG4gICAgICA3MCxcbiAgICAgIDIzNyxcbiAgICAgIDE1MyxcbiAgICAgIDE4OCxcbiAgICAgIDIxMyxcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhLTFk0UzlZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMDEyMjI2NDE0ODc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA5MTA5ODg2MTAzNTY4OjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2agvCdmb3wnZm48J2Zv/CdmbTwnZqBIPCdmbHwnZm+8J2ag1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXN3FZWUVFSUxLeDdRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicnhZWVRLMnVyY21EREdDOXI1MzF1N2hPYUdhTG51MFloc1QxT0xTYnBGaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIdjRYVmpPamdValdmeHNZeE9DWEtZWTdHUnVCRzdkbTR6aEU4Wjh6UENyNURYNzhCZ2xDaHUvL3hDVkJFVGpWZ0Z3SC9yNHh1dTVEY3hUWnlSaVFDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJubTFiYUIxOVdweWQ1UWR5REs1QUxRcDN6aFFlR1czNXRydnFqY1lWbU9MaFJ2NjYxUGtiNnRSRHIzVzRjTklsUGdEN3pHMkFFY1RQRUYyZFRIN1RBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMDEyMjI2NDE0ODc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDgzNzM4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZUY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlRjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiejJNeVpMZG1uU08xVXNVRUU4STE1aUNqMlZSbXFlMjhxMlIwSXdMd0dDdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDg3MDA0MDY5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4MzMzMTc5NDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "SNIPER",
  packname: process.env.PACK_NAME || "SNIPER",
  botname : process.env.BOT_NAME  || "𝚂𝙽𝙸𝙿𝙴𝚁 𝙱𝙾𝚃",
  ownername:process.env.OWNER_NAME|| " 𝚂𝙽𝙸𝙿𝙴𝚁 𝔖",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
