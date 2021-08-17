// SC NYA JANGAN DI JUAL NGENTOD
//MAKASIH DAH PAKE 
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { recognize } = require('./lib/ocr')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')


banChats = false
offline = false
targetpc = '6283803728334'
owner = '6285852203076'
fake = 'AR BotZ'
numbernye = '0'
waktu = '-'
alasan = '-'
blocked = []

const ownerNumber = ["6285852203076@s.whatsapp.net"]   
//=================================================//
module.exports = lolikiller = async (lolikiller, kill) => {
	try {
        if (!kill.hasNewMessage) return
        kill = kill.messages.all()[0]
		if (!kill.message) return
		if (kill.key && kill.key.remoteJid == 'status@broadcast') return
		global.blocked
        	kill.message = (Object.keys(kill.message)[0] === 'ephemeralMessage') ? kill.message.ephemeralMessage.message : kill.message
        	const content = JSON.stringify(kill.message)
		const from = kill.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const type = Object.keys(kill.message)[0]        
                const cmd = (type === 'conversation' && kill.message.conversation) ? kill.message.conversation : (type == 'imageMessage') && kill.message.imageMessage.caption ? kill.message.imageMessage.caption : (type == 'videoMessage') && kill.message.videoMessage.caption ? kill.message.videoMessage.caption : (type == 'extendedTextMessage') && kill.message.extendedTextMessage.text ? kill.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && kill.message.conversation.startsWith(prefix)) ? kill.message.conversation : (type == 'imageMessage') && kill.message.imageMessage.caption.startsWith(prefix) ? kill.message.imageMessage.caption : (type == 'videoMessage') && kill.message.videoMessage.caption.startsWith(prefix) ? kill.message.videoMessage.caption : (type == 'extendedTextMessage') && kill.message.extendedTextMessage.text.startsWith(prefix) ? kill.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? kill.message.conversation : (type === 'extendedTextMessage') ? kill.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = lolikiller.user.jid
		const botNumberss = lolikiller.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? kill.participant : kill.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await lolikiller.chats.all()
		const groupMetadata = isGroup ? await lolikiller.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const isOwner = ownerNumber.includes(sender)
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const conts = kill.key.fromMe ? lolikiller.user.jid : lolikiller.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = kill.key.fromMe ? lolikiller.user.name : conts.notify || conts.vname || conts.name || '-'

        const mentionByTag = type == "extendedTextMessage" && kill.message.extendedTextMessage.contextInfo != null ? kill.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && kill.message.extendedTextMessage.contextInfo != null ? kill.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []

        //MESS
		mess = {
			wait: 'Loading!',
			success: 'Success!',
			wrongFormat: 'Format salah!!',
			error: {
				stick: 'stickernya mana?',
				Iv: 'Linkn error',
			},
			only: {
				group: 'Only group',
                                group_admin: 'Only group admin',
                                bot_admin: 'Bot harus jadi admin',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            lolikiller.sendMessage(from, teks, text, {quoted:kill})
        }

        const sendMess = (hehe, teks) => {
            lolikiller.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? lolikiller.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : lolikiller.sendMessage(from, teks.trim(), extendedText, { quoted: kill, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            lolikiller.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            lolikiller.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:kill,caption:yes})
        }
        const fakegroup = (teks) => {
            lolikiller.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6285785445365-1628481934@g.us"} : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        lolikiller.sendMessage(to, media, MessageType.sticker,{quoted:kill})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    lolikiller.sendMessage(to, media, type, { quoted: kill, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!kill.key.remoteJid.endsWith('@g.us') && offline){
            if (!kill.key.fromMe){
            if (isAfk(kill.key.remoteJid)) return
            addafk(kill.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            lolikiller.sendMessage(kill.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (kill.key.remoteJid.endsWith('@g.us') && offline) {
        if (!kill.key.fromMe){
        if (kill.message.extendedTextMessage != undefined){
        if (kill.message.extendedTextMessage.contextInfo != undefined){
        if (kill.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of kill.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(kill.key.remoteJid)) return
        addafk(kill.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        lolikiller.sendMessage(kill.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285852203076@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
        if (!kill.key.fromMe && !isOwner && banChats === true) return
switch (command) {
case 'tes':
fakegroup(`OKE ✓`)
break
    case 'jadibot':
    if(kill.key.fromMe) return reply('Error!')
    jadibot(reply,lolikiller,from)
    break
    case 'stopjadibot':
    if(kill.key.fromMe)return reply('Error!')
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '[ *LIST JADIBOT* ]\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
    case 'menu':
    case 'help':
    	var menu = `AR BotZ </>

➠ *OWNER MENU* 
- ${prefix}off
- ${prefix}on
- ${prefix}status
- ${prefix}self
- ${prefix}public
- ${prefix}upswteks 
- ${prefix}upswvideo 
- ${prefix}upswimage
- ${prefix}setthumb
- ${prefix}settarget 
- ${prefix}setfakeimage
- ${prefix}setfakereply
- ${prefix}term 
- ${prefix}bcgc 
- ${prefix}bc  
- ${prefix}block 
- ${prefix}unblock
- ${prefix}setppbot

➠ *MAKER MENU*
- ${prefix}sticker
- ${prefix}swm 
- ${prefix}take
- ${prefix}fdeface
- ${prefix}emoji

➠ *CONVERT MENU*
- ${prefix}toimg
- ${prefix}tomp3
- ${prefix}tomp4
- ${prefix}slow 
- ${prefix}fast 
- ${prefix}reverse 
- ${prefix}tourl 
- ${prefix}tts 
- ${prefix}bass 
- ${prefix}tupai 
- ${prefix}gemok 
- ${prefix}slowmo

➠ *FUN MENU*
- ${prefix}fitnah 
- ${prefix}fitnahpc 
- ${prefix}kontak 
- ${prefix}caklontong
- ${prefix}hilih
- ${prefix}apakah
- ${prefix}kapankah
- ${prefix}bisakah

➠ *GROUP MENU*
- ${prefix}hidetag
- ${prefix}kontag
- ${prefix}sticktag
- ${prefix}totag
- ${prefix}promote
- ${prefix}demote
- ${prefix}listonline
- ${prefix}setname
- ${prefix}setdesc
- ${prefix}tagall
- ${prefix}closetime
- ${prefix}opentime
- ${prefix}group <close/open>
- ${prefix}leavetime
- ${prefix}leave
- ${prefix}linkgc
- ${prefix}listadmin
- ${prefix}kick
- ${prefix}infoall
- ${prefix}notif
- ${prefix}disapering <on/off>

➠ *DOWNLOAD MENU*
- ${prefix}ytsearch
- ${prefix}igstalk
- ${prefix}play
- ${prefix}video
- ${prefix}ytmp3
- ${prefix}ytmp4
- ${prefix}ig
- ${prefix}igstory
- ${prefix}twitter
- ${prefix}tiktok
- ${prefix}tiktokaudio
- ${prefix}fb
- ${prefix}brainly
- ${prefix}image
- ${prefix}anime
- ${prefix}pinterest
- ${prefix}komiku
- ${prefix}lirik
- ${prefix}chara
- ${prefix}playstore
- ${prefix}otaku

➠ *OTHER MENU*
- ${prefix}ping
- ${prefix}inspect
- ${prefix}join
- ${prefix}caripesan
- ${prefix}get
- ${prefix}jadibot
- ${prefix}stopjadibot
- ${prefix}listbot
- ${prefix}info
- ${prefix}delete
- ${prefix}blocklist
- ${prefix}cekchat

➠ *ARNZ API MENU*
- ${prefix}infocuaca

➠ *THANKS TO*
- ALLAH SWT
- LOLI KILLERS
- NYZ
- RYNZ
- HEXAGON
- ARNZ™
- ALL CREATOR BOT

<[ AR BotZ ]>
`
        	fakestatus(menu)
           	break
                case 'infocuaca':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jawa timur`)
                    provinsi = args.join(" ")
                    get_result = await fetchJson(`https://arnz-api-production.up.railway.app/api/infocuaca?provinsi=${provinsi}`)
                    get_result = get_result.result
                    ini_txt = " Info Cuaca Provinsi ${provinsi} \n"
                    for (var x of get_result) {
                        ini_txt += `Kota : ${x.Kota}\n`
                        ini_txt += `Pagi : ${x.Pagi}\n`
                        ini_txt += `Sing : ${x.Sing}\n`
                        ini_txt += `Malam : ${x.Malam}\n`
                        ini_txt += `Dini Hari: ${x.Dini_Hari}\n`
                        ini_txt += `Suhu: ${x.Suhu}\n`
                        ini_txt += `Kelembaban: ${x.kelembaban}`
                    }
                    fakegroup(ini_txt)
                    break
case 'tovn':
		 	  if ((isMedia && !kill.message.videoMessage || isQuotedImage) && args.length == 0) {
			  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kill
		 	  const media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			  lolikiller.sendMessage(from, '*Wait!*', text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "contactMessage": { "caption": `*lolikiller.herokuapp.com*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })
			  await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
			  .then(teks => {								 
		  	  fs.unlinkSync(media)							                           
              lolikiller.updatePresence(from, Presence.recording) 
              const gtts = require('./lib/gtts')("id")
              const ndakbisa = `${teks}`             
              ranm = getRandom('.mp3')
              ndakbisa.length > 600
              ? reply('*Textnya kebanyakan*')
              : gtts.save(ranm, ndakbisa, function() {
              lolikiller.sendMessage(from, fs.readFileSync(ranm), audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "contactMessage": { "caption": `*Nih!!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })
              fs.unlinkSync(ranm)
              })
              })}
              break        
case 'disapering':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			if (!kill.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.only.group_admin)
			if (args[0] === 'on' ) {
				await lolikiller.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
				fakegroup(`Success Mengaktifkan Pesan Sementara Di Group\n*${groupMetadata.subject}*`)
			} else if (args[0] === 'off' ) {
				await lolikiller.toggleDisappearingMessages(from, 0)
				fakegroup(`Success Menonaktifkan Pesan Sementara Di Group\n*${groupMetadata.subject}*`)
			}
			break
			case 'notif':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			if (!kill.key.fromMe && !isOwner & !isGroupAdmins) return reply(mess.only.group_admin)
			ini_txt = `${body.slice(7)}`
			group = await lolikiller.groupMetadata(from);
			member = group['participants']
			jids = [];
			member.map(async adm => {
				jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
			})
			options = {
				text: ini_txt,
				contextInfo: {
					mentionedJid: jids
				},
				quoted: fakegroup
			}
			await lolikiller.sendMessage(from, options, text)
			break
case 'infoall':
			if (!isGroup) return reply(mess.only.group)
			if (!kill.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.only.group_admin)
			var nim = kill.participant
			members_id = []
			ini_txt = '\n'
			for (let mem of groupMembers) {
				ini_txt += `- @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
			}
			mentions(`*From :* ${pushname}\n*Info :*  ${body.slice(9)}\n\n*<[ INFORMATION ]>*`+ini_txt+'*<[ AR BOTZ ]>*', members_id, true)
			break
case 'linkgc':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			if (!kill.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.only.group_admin)
			linkgc = await lolikiller.groupInviteCode (from)
			ini_link = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
			lolikiller.sendMessage(from, ini_link, text,{quoted: kill})
			break
case 'kick':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			if (!kill.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.only.group_admin)
			if (!isGroup) {
				if (kill.message.extendedTextMessage === undefined || kill.message.extendedTextMessage === null) return
				mentioned = kill.message.extendedTextMessage.contextInfo.mentionedJid
				mentions(mentioned, true)
				lolikiller.groupRemove(from, mentioned)
			} else {
				await lolikiller.groupRemove(from, mentionUser)
				fakegroup(`Success kick ${pushname}`)
			}
			break
case 'adminlist':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			if (!kill.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.only.group_admin)
			ini_txt = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
			no = 0
			for (let admon of groupAdmins) {
				no += 1
				ini_txt += `- ${no.toString()} @${admon.split('@')[0]}\n`
			}
			mentions(ini_txt, groupAdmins, true)
			break
case 'cekchat':
			lolikiller.updatePresence(from, Presence.composing)
			lolikiller.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : kill})
			break
			case 'linkgc':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			if (!kill.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.only.group_admin)
			linkgc = await lolikiller.groupInviteCode (from)
			ini_link = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
			lolikiller.sendMessage(from, ini_link, text,{quoted: kill})
			break
case 'blocklist':
			ini_txt = '<[ Blocklist AR BotZ ]>\n'
			for (let block of lolikiller.blocklist) {
				ini_txt += `- wa.me/${block.split('@')[0]}\n`
			}
			ini_txt += `<[ Total : ${lolikiller.blocklist.length} ]>`
			lolikiller.sendMessage(from, ini_txt.trim(), extendedText, {quoted: kill, contextInfo: {"mentionedJid": blocked}})
			break
case 'setppbot':
			if (!kill.key.fromMe && !isOwner) return
			lolikiller.updatePresence(from, Presence.composing)
			if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setpp atau tag gambar yang sudah dikirim`)
			enmedia = JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(enmedia)
			await lolikiller.updateProfilePicture(botNumber, media)
			fakegroup('*Success mengganti photo profile*')
			break
case 'leave':
			if (!isGroup) return reply(mess.only.group)
			if (!kill.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.only.group_admin)
			setTimeout( () => {
				lolikiller.groupLeave(from, groupId)
			}, 5000)
			fakegroup(`Bye Bye Member *${groupMetadata.subject}*`)
			break
case 'leavetime':
			if (!isGroup) return reply(mess.only.group)
			if (!kill.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.only.group_admin)
			lolikiller.updatePresence(from, Presence.composing)
			if (args[1]=="detik") {var timer = args[0]+"000"
			} else if (args[1]=="menit") {var timer = args[0]+"0000"
			} else if (args[1]=="jam") {var timer = args[0]+"00000"
			} else {return reply(`Cose :\ndetik\menit\jamExample: ${prefix + command} 20 detik`)}
			fakegroup(`${args[0]} ${args[1]} lagi, Bot keluar dari *${groupMetadata.subject}*`)
			setTimeout( () => {
				fakegroup('*Bye Bye ')
				lolikiller.groupLeave(from, groupId)
			}, timer)
			break
case 'group':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			if (!kill.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.only.group_admin)
			if (args[0] === 'open' ) {
				lolikiller.groupSettingChange(from, GroupSettingChange.messageSend, false)
				fakegroup(`Success Open Group\n*${groupMetadata.subject}*`)
			} else if (args[0] === 'close' ) {
				await lolikiller.groupSettingChange(from, GroupSettingChange.messageSend, true)
				fakegroup(`Success Close Group\n*${groupMetadata.subject}*`)
			}
			break
case 'closetime':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			if (!kill.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.only.group_admin)
			lolikiller.updatePresence(from, Presence.composing)
			if (args[1]=="detik") {var timer = args[0]+"000"
			} else if (args[1]=="menit") {var timer = args[0]+"0000"
			} else if (args[1]=="jam") {var timer = args[0]+"00000"
			} else {return reply(`Cose :\ndetik\menit\jamExample: ${prefix + command} 20 detik`)}
			fakegroup(`${args[0]} ${args[1]} lagi, Group *${groupMetadata.subject}* Di Tutup!!`)
			setTimeout( () => {
				lolikiller.groupSettingChange(from, GroupSettingChange.messageSend, true);
				lolikiller.sendMessage(from, `Success Close Group\n*${groupMetadata.subject}*`, text,{contextInfo: {forwardingScore: 508, isForwarded: true}, quoted : kill})
			}, timer)
			break
case 'opentime':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			if (!kill.key.fromMe && !isOwner && !isGroupAdmins) return reply(mess.only.group_admin)
			lolikiller.updatePresence(from, Presence.composing)
			if (args[1]=="detik") {var timer = args[0]+"000"
			} else if (args[1]=="menit") {var timer = args[0]+"0000"
			} else if (args[1]=="jam") {var timer = args[0]+"00000"
			} else {return reply(`Cose :\ndetik\menit\jamExample: ${prefix + command} 20 detik`)}
			fakegroup(`${args[0]} ${args[1]} lagi, Group *${groupMetadata.subject}* Di Buka!!`)
			setTimeout( () => {
				lolikiller.groupSettingChange(from, GroupSettingChange.messageSend, false);
				lolikiller.sendMessage(from, `Success Open Group\n*${groupMetadata.subject}*`, text,{contextInfo: {forwardingScore: 508, isForwarded: true}, quoted : kill})
			}, timer)
			break
case 'tagall':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			if (!kill.key.fromMe & !isGroupAdmins && !isOwner) return reply(mess.only.group_admin)
			members_id = []
			ini_txt = (args.length > 1) ? body.slice(8).trim() : ''
			ini_txt += '\n'
			for (let mem of groupMembers) {
				ini_txt += `*-*  @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
			}
			mentions(`*<[ By ${pushname} ] >*`+ ini_txt +'<[ AR BOTZ ] >*', members_id, true)
			break
case 'delete':
			case 'd':
			lolikiller.deleteMessage(from, { id: kill.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
case 'block':
			if (!kill.key.fromMe && !isOwner) return
			lolikiller.updatePresence(from, Presence.composing) 
            if (args.length < 1 ) return reply('Tag member')
            mente = `${args[0].replace('@','')}@c.us`
            lolikiller.blockUser(mente, "add")
            lolikiller.sendMessage(from, `*Perintah Diterima,* memblokir wa.me/${mente}`, text,{quoted: kill})
            break
            case 'unblock':
            if (!kill.key.fromMe && !isOwner) return
            lolikiller.updatePresence(from, Presence.composing) 
            if (args.length < 1 ) return reply('Tag member')
            mente = `${args[0].replace('@','')}@c.us`
            lolikiller.blockUser(mente, "remove")
            lolikiller.sendMessage(from, `*Perintah Diterima,* membuka blokir wa.me/${mente}`, text,{quoted: kill})
            break 
case 'bc': 
			if (!kill.key.fromMe && !isOwner) return
			if (args.length < 1) return reply('.......')
			anu = await lolikiller.chats.all()
			if (isMedia && !kill.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kill
				buff = await lolikiller.downloadMediaMessage(encmedia)
				for (let _ of anu) {
					lolikiller.sendMessage(_.jid, buff, image, {caption: `*<[ AR BOTZ BROADCAST ]>*\n\n${body.slice(4)}`})
				}
				reply('*Success Broadcast*')
			} else {
				for (let _ of anu) {
					sendMess(_.jid, `*<[ AR BOTZ BROADCAST ]>*\n\n${body.slice(4)}`)
				}
				reply('*Success Broadcast*')
			}
			break
case 'apakah':
			if (args.length < 1) return reply(`Example : ${prefix + command} lolikiller cantik`)
			apakah = body.slice(1)
			const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
			const kah = apa[Math.floor(Math.random() * apa.length)]
			lolikiller.sendMessage(from, '*Pertanyaan* : '+apakah+'\n\nJawaban : '+ kah, text, { quoted: kill})
			break
			case 'kapankah':
			if (args.length < 1) return reply(`Example : ${prefix + command} lolikiller cantik`)
			kapankah = body.slice(1)
			const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
			const koh = kapan[Math.floor(Math.random() * kapan.length)]
			lolikiller.sendMessage(from, '*Pertanyaan* : '+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: kill })
			break
			case 'bisakah':
			if (args.length < 1) return reply(`Example : ${prefix + command} lolikiller cantik`)
			bisakah = body.slice(1)
			const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
			const keh = bisa[Math.floor(Math.random() * bisa.length)]
			lolikiller.sendMessage(from, '*Pertanyaan* : '+bisakah+'\n\nJawaban : '+ keh, text, { quoted: kill })
			break
case 'setname':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins && !isOwner && !loli.key.fromMe) return reply(mess.only.group_admin)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			lolikiller.groupUpdateSubject(from, `${body.slice(9)}`)
			lolikiller.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: kill})
			break
case 'setdesc':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins && !isOwner && !loli.key.fromMe) return reply(mess.only.group_admin)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			lolikiller.groupUpdateDescription(from, `${body.slice(9)}`)
			lolikiller.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: kill})
			break
			case 'setname':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins && !isOwner && !loli.key.fromMe) return reply(mess.only.group_admin)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			lolikiller.groupUpdateSubject(from, `${body.slice(9)}`)
			lolikiller.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: kill})
			break
case 'bcgc':
            if (!isGroup) return reply(mess.only.group)
            if (!kill.key.fromMe && !isOwner) return
            if (args.length < 1) return reply('.......')
            anu = await groupMembers
            if (isMedia && !kill.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kill
				buff = await lolikiller.downloadMediaMessage(encmedia)
				for (let _ of anu) {
					lolikiller.sendMessage(_.jid, buff, image, {caption: `<[ BROADCAST GROUP ]>*\n\nFrom Group : ${groupName}\nFrom : wa.me/${(sender.split('@')[0])}\nMessage : ${body.slice(6)}`})
				}
				reply('')
			} else {
				for (let _ of anu) {
					sendMess(_.jid, `*<[ BROADCAST GROUP ]>*\n\nFrom Group : ${groupName}\nFrom : wa.me/${(sender.split('@')[0])}\nMessage : ${body.slice(6)}`)
				}
				reply('Sukses broadcast group')
			}
			break
       		case 'listonline': 
            if (!isGroup) return reply(mess.only.group)
            if (!isGroupAdmins && !loli.key.fromMe && !isOwner) return reply(mess.only.group_admin)
            let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
            let online = [...Object.keys(lolikiller.chats.get(ido).presences), lolikiller.user.jid]
            lolikiller.sendMessage(from, '*<[ List Online ]>*\n' + online.map(v => '*-* @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: kill  })
			break 
case 'bass':               
			encmedia = JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				lolikiller.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: kill})
				fs.unlinkSync(ran)
			})
			break
			case 'gemok':
			encmedia = JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				lolikiller.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: kill})
				fs.unlinkSync(ran)
			})
			break
			case 'tupai':
			encmedia = JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				lolikiller.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: kill})
				fs.unlinkSync(ran)
			})
			break
			case 'slowmo':
			encmedia = JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				lolikiller.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: kill})
				fs.unlinkSync(ran)
			})
			break
case 'promote':
			case 'pm':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			if (!kill.key.fromMe && !isGroupAdmins && !isOwner) return reply(mess.only.group_admin)
			if (!isGroup) {
				if (lolikiller.message.extendedTextMessage === undefined || kill.message.extendedTextMessage === null) return reply('Tag yang ingin di promote!')
				mentioned = kill.message.extendedTextMessage.contextInfo.mentionedJid
				mentions(teks, mentioned, true)
				lolikiller.groupMakeAdmin(from, mentioned)
			} else {
				await lolikiller.groupMakeAdmin(from, mentionUser)
				fakegroup('Success Promote')
			}
			break
			case 'demote':
			case 'dm':
			if (!isGroup) return reply(mess.only.group)
			if (!isBotGroupAdmins) return reply(mess.only.bot_admin)
			if (!kill.key.fromMe && !isGroupAdmins && !isOwner) return reply(mess.only.group_admin)
			if (!isGroup) {
				if (kill.message.extendedTextMessage === undefined || kill.message.extendedTextMessage === null) return reply('Tag admin yang mau di demote!')
				mentioned = kill.message.extendedTextMessage.contextInfo.mentionedJid
				entions(teks, mentioned, true)
				lolikiller.groupDemoteAdmin(from, mentioned)
				
			} else {
				await lolikiller.groupDemoteAdmin(from, mentionUser)
				fakegroup('Success Demote')
			}
			break
case 'tts':
			if (args.length < 1) return lolikiller.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: kill})
			const gtts = require('./lib/gtts')(args[0])
			if (args.length < 2) return lolikiller.sendMessage(from, 'Textnya mana om', text, {quoted: kill})
			dtt = body.slice(8)
			ranm = getRandom('.mp3')
			rano = getRandom('.ogg')
			dtt.length > 600
			? reply('Textnya kebanyakan om')
			: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
					fs.unlinkSync(ranm)
					buffer = fs.readFileSync(rano)
					if (err) return reply('Gagal om:(')
					lolikiller.sendMessage(from, buffer, audio, {quoted: kill, ptt:true})
					fs.unlinkSync(rano)
				})
			})
			break
case 'info':
			me = lolikiller.user
			uptime = process.uptime()
			const timestampp = speed();
			const latensii = speed() - timestampp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
				const childd = stdout.toString('utf-8')
				const teks = childd.replace(/Memory:/, "Ram:")
				const pingnyaa = `${teks}${latensii.toFixed(4)} Second`
			    ini_txt = `
*<[ AR BotZ INFO ]>*

*Bot Name :* ${me.name}
*Bot Number :* ${me.jid}
*Prefix :* [ ${prefix} ]
*Total Block Contact :* ${lolikiller.blocklist.length}
*Speed :* ${pingnyaa}
*WA version* : ${lolikiller.user.phone.wa_version}
*Mcc :* ${lolikiller.user.phone.mcc}
*Mnc :* ${lolikiller.user.phone.mnc}
*Os Version :* ${lolikiller.user.phone.os_version}
*Manufacturer :* ${lolikiller.user.phone.device_manufacturer}
*Model :* ${lolikiller.user.phone.device_model}
*Version :* ${lolikiller.version}
*Build Number :* ${lolikiller.user.phone.os_build_number}
*Browser :* ${lolikiller.browserDescription[1]}
*Version :* ${lolikiller.browserDescription[2]}
*Request :* ${lolikiller.pendingRequestTimeoutMs}
*State :* ${lolikiller.state}
*Auto Reconnect :* ${lolikiller.autoReconnect}
*Phone Connected :* ${lolikiller.phoneConnected}
*Message Log :* ${lolikiller.msgCount}
*Contact Cheklist :* ${lolikiller.phoneCheckListeners}
*Logger Level :* ${lolikiller.logger.level}
*Logger Debug :* ${lolikiller.logger.debug}
*The bot is active on :* ${kyun(uptime)}
`
			    fakestatus(ini_txt)
			})
break
case 'trap':
			get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/random2/trap`)
			reply('Wait!')
			ini_buffer = await getBuffer(get_result.result.url)
			reply(ini_buffer, 'Nih!')
			break
case 'hilih':
            query = args.join(" ")
            get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/hilih?kata=${query}`)
            ini_txt = get_result.result.result
            fakegroup(ini_txt)
            break
case 'caklontong':
					get_result = await fetchJson(`https://lolikiller.herokuapp.com/api/kuis/caklontong`, {method: 'get'})
					ini_result = get_result.result.data
					caklontong = `*${ini_result.soal}*`
					setTimeout( () => {
						lolikiller.sendMessage(from, '*Jawaban :* '+ini_result.jawaban+ '\n\n*Penjelasan* '+ ini_result.desc+'*', text, {quoted: kill })
					}, 30000)
					setTimeout( () => {
						lolikiller.sendMessage(from, '_10 Detik lagi_', text)
					}, 20000)
					setTimeout( () => {
						lolikiller.sendMessage(from, '_20 Detik lagi_', text)
					}, 10000)
					setTimeout( () => {
						lolikiller.sendMessage(from, '_30 Detik lagi_', text)
					}, 2500)
					setTimeout( () => {
						fakegroup(caklontong)
					}, 0)
					break 
    case 'delvote':
            if(!kill.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !kill.key.fromMe && !isOwner) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (kill.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || kill.message.extendedTextMessage.contextInfo == null) {
            let id = kill.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'linkwa':
            if(!q) return reply('Group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*<[ LINK GROUP WA ]>*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    lolikiller.sendMessage(from,link,video,{quoted: kill,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    lolikiller.sendMessage(from,link,image,{quoted: kill,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'caripesan':
            if(!q)return reply('pesannya apa?')
            let v = await lolikiller.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await lolikiller.sendMessage(from,'Nih!!',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            lolikiller.sendMessage(from,ram,image,{quoted:kill,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku one piece`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await lolikiller.sendMessage(from,li,image,{quoted: kill})
            break
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await lolikiller.sendMessage(from,di,image,{quoted: kill})
            break
    case 'playstore':
            if(!q) return reply('Apknya apa??')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
    case 'on':
            if (!kill.key.fromMe && !isOwner) return 
            offline = false
            fakestatus(' ONLINE MODE ✓')
            break       
    case 'status':
            fakestatus(`<[ *STATUS* ]>\n${offline ? '[ OFFLINE ]' : '[ ONLINE ]'}\n${banChats ? '[ SELF-MODE ]' : '[ PUBLIC-MODE ]'}`)
            break
    case 'off':
            if (!kill.key.fromMe && !isOwner) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' OFFLINE MODE ✓')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
            if (!kill.key.fromMe && !isOwner) return  reply('AR BotZ')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            lolikiller.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
                if (!kill.key.fromMe && !isOwner) return 
            if ((isMedia && !kill.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kill
            file = await lolikiller.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await lolikiller.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: kill
            }
            ini_buffer = fs.readFileSync(file)
            lolikiller.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
                if (!kill.key.fromMe && !isOwner) return 
            if ((isMedia && !kill.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kill
            file = await lolikiller.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await lolikiller.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: kill
            }
            ini_buffer = fs.readFileSync(file)
            lolikiller.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !kill.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kill
            file = await lolikiller.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await lolikiller.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: kill
            }
            ini_buffer = fs.readFileSync(file)
            lolikiller.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !kill.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kill
            file = await lolikiller.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await lolikiller.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: kill
            }
            ini_buffer = fs.readFileSync(file)
            lolikiller.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !kill.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kill
            file = await lolikiller.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await lolikiller.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: kill
            }
            ini_buffer = fs.readFileSync(file)
            lolikiller.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = kill.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            lolikiller.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = kill.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await lolikiller.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await lolikiller.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            lolikiller.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: kill })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            lolikiller.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: kill })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            lolikiller.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: kill })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            lolikiller.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: kill })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            lolikiller.sendMessage(from,media,image,{quoted:kill,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            lolikiller.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja')
            encmedia = JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, lolikiller, kill, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !kill.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kill
             media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            lolikiller.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: kill })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            lolikiller.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: kill })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && kill.message.videoMessage.seconds < 11 || isQuotedVideo && kill.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kill
            const media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            lolikiller.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: kill })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            lolikiller.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: kill })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
                if (!kill.key.fromMe && !isOwner) return 
            if (!q) return fakestatus('Isi teksnya!')
            lolikiller.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
                if (!kill.key.fromMe && !isOwner) return 
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kill
            cihcih = await lolikiller.downloadMediaMessage(swsw)
            lolikiller.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            lolikiller.sendMessage(from, bur, text, { quoted: kill })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
                if (!kill.key.fromMe && !isOwner) return 
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kill
            cihcih = await lolikiller.downloadMediaMessage(swsw)
            lolikiller.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            lolikiller.sendMessage(from, bur, text, { quoted: kill })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kill
            const tipes = await lolikiller.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await lolikiller.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		lolikiller.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
             if (!kill.key.fromMe && !isOwner) return  fakestatus('SELF MODE')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
            if (!kill.key.fromMe && !isOwner) return  fakestatus('SELF MODE')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			            if (!kill.key.fromMe && !isOwner) return  fakestatus('SELF MODE')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await lolikiller.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: kill
			}
			lolikiller.sendMessage(from, optionshidetag, text)
			break
	case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam killtuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam killtuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !kill.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kill
            const media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                lolikiller.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: kill})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && kill.message.videoMessage.seconds < 11 || isQuotedVideo && kill.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kill
                const media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            lolikiller.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: kill})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await lolikiller.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await lolikiller.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '<[ *YOUTUBE SEARCH* ]>'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
	            if (!kill.key.fromMe && !isOwner) return 
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
	            if (!kill.key.fromMe && !isOwner) return 
        	if ((isMedia && !kill.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kill
			delb = await lolikiller.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	            if (!kill.key.fromMe && !isOwner) return 
	        if ((isMedia && !kill.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kill
			delb = await lolikiller.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam killtuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam killtuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            lolikiller.sendMessage(from,{url:images},image,{quoted:kill})
            });
            break
 	case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		lolikiller.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:kill,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
    case 'tiktokaudio':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			lolikiller.sendMessage(from, teks, text,{quoted:kill,detectLinks: false})                        
            })              
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    lolikiller.sendMessage(from,link,video,{quoted: kill,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    lolikiller.sendMessage(from,link,image,{quoted: kill,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	case 'term':
	            if (!kill.key.fromMe && !isOwner) return 
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`AR BotZ:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await lolikiller.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
                if (!kill.key.fromMe && !isOwner) return 
            if ((isMedia && !kill.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kill
            file = await lolikiller.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await lolikiller.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: kill
            }
            ini_buffer = fs.readFileSync(file)
            lolikiller.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !kill.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kill
            file = await lolikiller.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await lolikiller.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: kill
            }
            ini_buffer = fs.readFileSync(file)
            lolikiller.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !kill.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kill
            file = await lolikiller.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await lolikiller.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: kill
            }
            ini_buffer = fs.readFileSync(file)
            lolikiller.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !kill.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kill
            file = await lolikiller.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await lolikiller.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: kill
            }
            ini_buffer = fs.readFileSync(file)
            lolikiller.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !kill.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(kill).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kill
            owgi = await lolikiller.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
            if ((isMedia && !kill.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(kill).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kill
            owgi = await lolikiller.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await lolikiller.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             lolikiller.sendMessage(from,par,text,{quoted:kill,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
default:
if (budy.startsWith('x')){
if (!kill.key.fromMe && !isOwner) return 
try {
return lolikiller.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: kill})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
