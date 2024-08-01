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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,+92 311 6325862";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,+92 311 6325862";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "+92 311 6325862,+92 311 6325862";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_35_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk0LFxuICAgICAgICA5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgwLFxuICAgICAgICA1MixcbiAgICAgICAgNjksXG4gICAgICAgIDgxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDM0LFxuICAgICAgICA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU2LFxuICAgICAgICA1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDUxLFxuICAgICAgICAzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICA4NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDUxLFxuICAgICAgICA2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDMyLFxuICAgICAgICA3NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDExMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDE4LFxuICAgICAgICA2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDcwLFxuICAgICAgICA1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzLFxuICAgICAgICA2NixcbiAgICAgICAgNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaDRqY0FVd2lEYWxtbWxkVllsa0NjWWQrWVN4SkplY1lTMW9qOVZ2Z0dvND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRndMSFNCdGNSeXV2X1pLV1VoN1ZVUVwiLFxuICBcInBob25lSWRcIjogXCIyN2RjMDA4Ny1lNWY0LTRjY2UtOTAwMC01MmY2NzY0NjlmZWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgMzQsXG4gICAgICAxMjAsXG4gICAgICAxNTAsXG4gICAgICA0OCxcbiAgICAgIDkyLFxuICAgICAgMTMsXG4gICAgICAyMTgsXG4gICAgICA1NixcbiAgICAgIDk1LFxuICAgICAgMjA2LFxuICAgICAgNDgsXG4gICAgICA4OCxcbiAgICAgIDg2LFxuICAgICAgOTEsXG4gICAgICAxODAsXG4gICAgICA4MSxcbiAgICAgIDE4MyxcbiAgICAgIDIxMCxcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDIyMixcbiAgICAgIDE2LFxuICAgICAgMjAwLFxuICAgICAgMjM3LFxuICAgICAgNzksXG4gICAgICAyMjEsXG4gICAgICAyOSxcbiAgICAgIDI1MyxcbiAgICAgIDIyLFxuICAgICAgMzYsXG4gICAgICAxNTYsXG4gICAgICAxOTQsXG4gICAgICAxMzUsXG4gICAgICA0MyxcbiAgICAgIDE3NixcbiAgICAgIDgxLFxuICAgICAgMjA3LFxuICAgICAgNTcsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMWDVDUFdOR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTE2MzI1ODYyOjg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NDYyMTE5ODA0MTE4NDo4NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLM1NwY29IRU96bHJiVUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZFcC95b1NKZkl4SFJRc29WaS95NVBtT2gyT0pNRGl0TVoyU1hCQ2ZsaW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNzNNS2Z1aHVLdGI2VGxOcXZXN3ZRQXJyY1NQWGw2SER6cm9uNWR1UzNHZ0FBTXM3eWZ1Nm9BSHZRMlBpaW92ZE5lcmhWcE9xRnJKWjZiRnoxOXVDQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUndUaGo0OFZoMkpXVEJpeENPWmcvNk0waS9TMWtTOS9yTHk3dkVBNWxQUFJ0bUp4RHRNS0UydFB6R1pGZDkyaU4vQlZsTmRWNngwZDYvMFZsQlIyQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTE2MzI1ODYyOjg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTEyMTExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ3hZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDeFkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUdmhqbW0yN3FoNDVPL3JnN1FTQk84SzlMM1ZvTkkyMGpwbGZha095a1pZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMzQ4NTQxODgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "rana 862",
  packname: process.env.PACK_NAME || "rana 862",
  botname : process.env.BOT_NAME  || "rana 862",
  ownername:process.env.OWNER_NAME|| "rana 862",


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
