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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_29_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjksXG4gICAgICAgIDczLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDcyLFxuICAgICAgICA5LFxuICAgICAgICA3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQzLFxuICAgICAgICA4NyxcbiAgICAgICAgNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgODAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNzA4NUxqRE9XZi9ubHBFd3RDaHJ4QmhPOVYwa3JKbDVFMTBRamIzRk4yVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSmZRQ0ZYRE5UdGU2RE9wWGhEN0cyZ1wiLFxuICBcInBob25lSWRcIjogXCI0NTVmYWM4NS1kMjhmLTRiZTgtOWIyNC04NTA1NzQ5ODgzMmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMTE0LFxuICAgICAgMTA3LFxuICAgICAgMTksXG4gICAgICAxNjEsXG4gICAgICAxMzYsXG4gICAgICA2LFxuICAgICAgMTg0LFxuICAgICAgMjI5LFxuICAgICAgNjQsXG4gICAgICAyNDMsXG4gICAgICAxMjYsXG4gICAgICAxNjMsXG4gICAgICA3OCxcbiAgICAgIDEwMixcbiAgICAgIDYzLFxuICAgICAgMjMxLFxuICAgICAgMjUsXG4gICAgICAxNzYsXG4gICAgICAxODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE5LFxuICAgICAgOSxcbiAgICAgIDkxLFxuICAgICAgMjQ0LFxuICAgICAgMTE3LFxuICAgICAgNjksXG4gICAgICAxMjAsXG4gICAgICAxMTQsXG4gICAgICAxNjMsXG4gICAgICAxMTgsXG4gICAgICAxMTksXG4gICAgICAzMSxcbiAgICAgIDE4OSxcbiAgICAgIDE3MSxcbiAgICAgIDk3LFxuICAgICAgMTk0LFxuICAgICAgMTkyLFxuICAgICAgMTkxLFxuICAgICAgMTMxLFxuICAgICAgMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUZXV1RSTFBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzExNjMyNTg2Mjo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzQ2MjExOTgwNDExODQ6ODNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiWmlkaSBcXFwiwrBSYW5hIDMwMlxcXCJfXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzNTcGNvSEVPQ3FyYlVHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGRXAveW9TSmZJeEhSUXNvVmkveTVQbU9oMk9KTURpdE1aMlNYQkNmbGlvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImo3WDNVNTJhSDhiN3ZwQVprNnFUeFRHa1d3V3MxM0kyc0s0bWtEWnlBTFR3STVxRkEyUDF5Zm5nMWxMQmNkeDRLS2VnOFVYOHM0THAwWFZ3SmxuVUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImI0anh0UklIRCtVeGVwcG0yanVWSExSaUdLbjN3RStiQUJqUXE5R05Zb2xZWElDdExqcEtueHhmbm1Md1pQQWhBSkMvTExPVld1RmxzTXR2S3J1cmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzExNjMyNTg2Mjo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUwNDU0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUN4WVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3hZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVHZoam1tMjdxaDQ1Ty9yZzdRU0JPOEs5TDNWb05JMjBqcGxmYWtPeWtaWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDM0ODU0MTg4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
