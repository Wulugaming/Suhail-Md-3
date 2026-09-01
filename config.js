const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Rawr!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "TRUE"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "FwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDc5LFxuICAgICAgMTE1LFxuICAgICAgMjQ0LFxuICAgICAgMTM5LFxuICAgICAgMzIsXG4gICAgICAxMzQsXG4gICAgICAyMzAsXG4gICAgICAxNDQsXG4gICAgICAxNjcsXG4gICAgICAyNDMsXG4gICAgICAxMjUsXG4gICAgICAxNzUsXG4gICAgICAxMzQsXG4gICAgICAyMDUsXG4gICAgICAxNSxcbiAgICAgIDE3MCxcbiAgICAgIDEwMSxcbiAgICAgIDEwNCxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tDOXlMSU9FTHV6MnRRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY2Y4QlZkNTZtWWpYcURWWEwxNWtZNlc1a0ZCdzdpcWpJTVZoUUhyQ25nND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzd3E2Tmk4aEZXL0s5RHRNSjZVVlFsa1lmNDJLNFg3RkhPRlkxVDc4UFg2SjNzTGhyUWxnYVM5NFYrdEhVMWRWZVI2VE1ndUxpWW5LQVB6L20wWXhCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJETGRRK04rR0xTN1l6bU1oVzVPUWF6UGZzRVNHdi9EWGJuWGFoRmJIeUcydEV2MHVjVmJiUVJNOGlLeUR6T3c0UEJMZTNmelV5MFlPVTg0d0laQWtpZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDI0MTkyNTU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY0MzEzMzE4ODM4MzEwOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiLlwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0MjQxOTI1NToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzg4MjU0NjU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkFRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKQVEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBV1FpVUU4UHNEVXJZcURjanRUTVRLNEw2TDVvWXJUNzhDV0pKTXJNRkZFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM4NjQxNDE0NzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTc4ODExMDY3NDUwOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "WULU",
  packname: process.env.PACK_NAME || "WULU",
  botname : process.env.BOT_NAME  || "WULU-MD",
  ownername:process.env.OWNER_NAME|| "WULU",


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
