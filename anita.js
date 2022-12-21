// BASE PARA CREADORES DE BOTS 

// CREDITOS : CLOVERS MODS
// CREDITOS : JULS MODDERS

// CONSTANTES DE NODULES 

const { 
default: WAConnection,
downloadContentFromMessage, 
emitGroupParticipantsUpdate, 
emitGroupUpdate,
generateWAMessageContent, 
generateWAMessage, 
makeInMemoryStore, 
prepareWAMessageMedia, 
MediaType, 
areJidsSameUser, 
WAMessageStatus, 
AuthenticationState, 
GroupMetadata, 
initInMemoryKeyStore,
getContentType, 
MiscMessageGenerationOptions, 
useSingleFileAuthState, 
BufferJSON, 
WAMessageProto, 
MessageOptions, 
WAFlag, WANode,	
WAMetric,	
ChatModification, 
MessageTypeProto, 
WALocationMessage, 
ReconnectMode, 
WAContextInfo, 
proto,	
WAGroupMetadata, 
ProxyAgent,	
waChatKey, 
MimetypeMap, 
MediaPathMap, 
WAContactMessage, 
WAContactsArrayMessage, 
WAGroupInviteMessage, 
WATextMessage, 
WAMessageContent, 
WAMessage, 
BaileysError, 
WA_MESSAGE_STATUS_TYPE, 
MediaConnInfo, 
URL_REGEX, 
WAUrlInfo, 
WA_DEFAULT_EPHEMERAL, 
WAMediaUpload, 
mentionedJid, 
processTime, 
Browser, 
MessageType, 
Presence, 
WA_MESSAGE_STUB_TYPES, 
Mimetype, 
relayWAMessage,	
Browsers, 
GroupSettingChange, 
delay, 
DisconnectReason, 
WASocket, 
getStream, 
WAProto, 
isBaileys, 
AnyMessageContent, 
fetchLatestBaileysVersion 
} = require('@adiwajshing/baileys');

const fs = require('fs');
const P = require('pino');
const yts = require("yt-search");
const cfonts = require("cfonts");
const chalk = require('chalk')
const axios = require('axios');
const speed = require("performance-now");
const { getBuffer, getRandom, getExtension } = require('./archivos/lib/functions.js');
const { fetchJson } = require("./archivos/lib/fetcher")
// CONSTANTES SETTING //

var prefix = '.' //prefijo
var NombreBot = 'Joseph Bot' // nombre del bot 
var Creador = "🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛᭄" // No cambiar

// BANNER //

const color = (text, color) => {
return !color ? chalk.white(text) : chalk.keyword(color)(text)
}
const banner = cfonts.render(('Anita|Bot'), {
font : "block",
align: "center",
colors: ["blue","white"]
})

// CONEXION DEL BOT

const store = makeInMemoryStore({ logger: P().child({ level: 'debug', stream: 'linhaDoTempo'}) })
const { state, saveState } = useSingleFileAuthState('./cache/anita.json')
async function startJuls() {
const { version, isLatest } = await fetchLatestBaileysVersion()
console.log(`..Conectando..!!`)
console.log(banner.string)
console.log("..Joseph Bot..\nConectado Exitosamente..")
const anita = WAConnection({
logger: P({ level: "silent" }),
printQRInTerminal: true,
browser: ['AnitaBot', 'JulsM', '1.0.0'],
auth: state
})
anita.ev.on ("creds.update", saveState)
store.bind(anita.ev)
anita.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})
anita.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})
anita.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("..Conexión inestable..", lastDisconnect.error, "Intentando conectar...", shouldReconnect);
if(shouldReconnect) {
startJuls()
}
} else if(connection === "open") {
console.log("Joseph Bot funciona correctamente!!!")
}
})
//*******************************************//

anita.ev.on('messages.upsert', async (m) => {
function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}
  try {
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const getExtension = async (type) => {
return await mimetype.extension(type)
 }
const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})
//***************[ FUNCIONES ]***************//
const info = m.messages[0]
  if (!info.message) return 
  if (info.key && info.key.remoteJid == 'status@broadcast') return
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message)
global.prefix
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await anita.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const pushname = info.pushName ? info.pushName : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const botNumber = anita.user.id.split(':')[0]+'@s.whatsapp.net'
const args = body.trim().split(/ +/).slice(1);
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const enviar = (text) => {
  anita.sendMessage(from, {text: text}, {quoted: info})
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? anita.sendMessage(from, {text: teks.trim(), mentions: memberr}) : anita.sendMessage(from, {text: teks.trim(), mentions: memberr})}

  //isQuoted 
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
//*******************************************//
q = args.join(" ")
const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = { text: text1, footer: desc1, buttons: but, headerType: 1 }
anita.sendMessage(id, buttonMessage, {quoted: vr}) }
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = { image: {url: img1}, caption: text1, footerText: desc1, buttons: but, headerType: 4 }
anita.sendMessage(id, buttonMessage, {quoted: vr}) }
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => { templateMessage = { image: {url: img1}, caption: text1, footer: desc1, templateButtons: but, }
anita.sendMessage(id, templateMessage, {quoted: vr}) }
const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => { buttonMessage = { video: {url: gif1}, caption: text1, gifPlayback: true, footerText: desc1, buttons: but, headerType: 4 }
anita.sendMessage(id, buttonMessage, {quoted: vr}) }
//*******************************************//

const enviartexto = (texto) => {
anita.sendMessage(from, {text : texto}, {quoted : contato})
}

const enviarimagen = (imagen) => {
anita.sendMessage(from, {image : imagen}, {quoted : doc})
}

const enviarimagencap = (imagen,caption) => {
anita.sendMessage(from, {image : imagen,caption : caption }, {quoted : doc})
}

const enviarvideos = (videos) => {
anita.sendMessage(from, {video : imagen}, {quoted : doc})
}

const enviarvideoscap = (videos,caption) => {
anita.sendMessage(from, {video : videos,caption : caption }, {quoted : doc})
}

const enviarmusica = (audios) => {
anita.sendMessage(from, {audio : audios}, {quoted : doc})
}

const enviarsticker = (sticker) => {
anita.sendMessage(from, {sticker : sticker}, {quoted : doc})
}

// VERIFICACIONES 

const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}

if(budy == `${prefix}`) {
enviar('🤔👍')}

//=====\\

// RESPUESTAS POR COMANDOS \\
respuesta = {
espere: " ..enviando.. ",
aguarde: "..Espere Porfavor.. ",
dono: ".. Este comando es Privado.. ",
grupos: ".. Este comando es para grupos.. ",
privado: ".. Este comando es para chats.. ",
admin: " ... Este comando es solo para admins..",
botadmin: " .. Este comando funciona si y solo si, el bot es admin ",
error: ".. Error, intente nuevamente.."
}


// MENSAJES EN TERMUX 

 if (!isGroup && isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('┃', 'blue')} ${color('command:', 'blue')} ${color(command)}\n${color('┃', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (!isGroup && !isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('┃', 'blue')} ${color('command:', 'blue')} ${color('No', 'blue')}\n${color('┃', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (isGroup && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('┃', 'blue')} ${color('command:', 'blue')} ${color(command)}\n${color('┃', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('┃', 'blue')} ${color('Grupo:', 'blue')} ${color(groupName, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (!isGroup && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('┃', 'blue')} ${color('Horário:', 'blue')} ${color(time, 'white')}\n${color('┃', 'blue')} ${color('command:', 'blue')} ${color('Não', 'blue')}\n${color('┃', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('┃', 'blue')} ${color('Grupo:', 'blue')} ${color(groupName, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)


// CASES 

switch(command){

// ESCRIBIR AQUI COMANDOS CON PREFIJO
				case 'queesunbin':
	  			case 'que_es_un_bin':
	  			case 'que-es-un-bin':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin1 = fs.readFileSync('./binners/imagebin1.jpg')
		const bin1 = `PARA LOS QUE NO SABEN HACER CUENTAS....ESTE ES UN TUTORIAL TEÓRICO PARA QUE SEPAN A LO QUE SE ESTAN METIENDO.

✅ ¿QUE ES UN BIN?

BIN: Bank Identification Number.

Un bin son los primeros 6 dígitos de una tarjeta de crédito. Estos nos sirven para identificar el país de procedencia, tipo de tarjeta y nivel de la misma.

Ejemplo: 553667

✅ ¿PARA QUE SIRVEN?

Con el bin puedes crear ccs (credit card) en español (tarjeta de crédito).Al generar la cc a base de bin puedes hacer suscripciones en páginas y hasta en ocasiones compras físicas. 

✅ ¿QUE ES UNA CC?

(CC=TARJETA DE CREDITO)

Primero debemos tener claro que una CC no es un BIN, una CC esta compuesta por información real.
Las CCs basicamente se componen por:

°Nombre
°Numero de la tarjeta
°CCV
°Fecha
°Dirección
°Código postal
°Pais
°Algunas traen numero telefónico y/o correo.

✅ ¿COMO RECONOCER EL TIPO DE TARJETA?

Pues Fácil. Observa:

La tarjeta comienza con el número 4 [Visa]

La tarjeta comienza con el número 5 [MasterCard]

La tarjeta comienza con el número 3 [Amex]

La tarjeta comienza con el número 6
[Discovey]

✅ ¿COMO CREAR UN BIN?

Un bin se hace a base de una cc real, solo debemos copiar los 6 primeros números de la cc y agregamos 10 equis (x)

Ejemplo: 4567812364745823

Bin: 456781xxxxxxxxxxx

Haciendo eso te pones a calar en páginas obvio con la misma ip de
la cc de la cual salió el bin.

✅ ¿EN QUE PAGINAS JALAN?

Bueno, esto es depende de donde sea el bin. Hay bins que jalan en una sola pagina ejemplo (crunchyroll) y hay otros que son multifuncionales ejemplo (crunchyroll, mubi, Napster y entre otras).

Posdata: solo tome esas páginas para el ejemplo.

✅ ¿COMO GENERAR UNA CC CON UN BIN?

existen varios generadores de ccs
que se encargan de remplazar las “x” por números que coincidan
con una cc.

El generador que yo usaré será Namso (https://namso-gen.com/)

INSERTE SU BIN: 548572xxxxxxxxxx

Y señalamos Fecha & CCV2 (si es todo generado)

Cantidad a crear 10 o las que quieran

Y le damos generar tarjetas.

✅ ¿QUE ES CHAVELO?

Se le denomina “Chabelo” a un bin que pese a que es viejo sigue funcionando en varias páginas.

✅ ¿Corremos riesgo al utilizar un bin?

Los BINS no son tan peligrosos, con la acción de “binear”, solo se estafa a la empresa en donde la usaste la cc generada.

Las tarjetas no son de dueños reales, solo son algoritmos, que de alguna manera pasan en una
página.

Lo más malo que te puede pasar, es que una página bloquee tu IP real permanentemente o tu dispositivo.

La otra cosa, es que tu IP puede estar en una lista negra de SPAM, eso es
provocado usualmente por VPN’s como Hola que vende este tipo de datos de sus usuarios a otras compañías, lo cual es algo que Hola no te especifica. Igual, hay muchos mejores VPN’s .

Es muy raro que pase, binear no es peligroso, si es que no abusas o llegas a un extremo muy pero muy elevado.

✅ ¿Qué es BAN?

Seguramente en los diversos grupos has escuchado esto, literalmente Ban significa prohibir esto es que se te pone una restricción; ya sea total, parcial, temporal o permanente, al sitio en donde has realizado la compra.

✅ ¿QUE ES UN VPN?

Una red privada virtual (RPV).
En inglés: Virtual Private Network (VPN), en pocas palabras VPN es algo que ayuda a que tu verdadera direccion IP quede cubierta, por ejemplo si tu eres de Argentina y un bin pide IP de Rusia, deberemos descargar un VPN como Tunnelbear para cambiar nuestra direccion a alli, los VPNs son faciles de usar y son una parte fundamental para usar bins, sin ellos no podremos usar la mayoria de ellos.
Existen varios vpns algunos son de paga, y otros gratuitos como Vyprvpn y tunnelbear entre otros. ZeroVPN, VyprVPN, TunnelBear, Hotspot Shield, HMA.

✅ ¿QUE ES IP?

IP = Internet Protocol, o simplemente tu dirección de Internet, todos nuestros dispositivos
conectados a internet poseen uno otorgado gracias a la red a la que estamos conectados. La IP en
algunos casos puede señalar la locación exacta en la que estamos ubicados.

✅ ¿QUE SON LIVES?
Las lives son tarjetas de crédito aprobadas por el mercado, es decir, tienen fondos. Estás sirven para hacer el pago con más seguridad.

✅ ¿QUE ES EXTRAPOLACIÓN?
Extrapolar es cuando sacamos un bin a partir de una tarjeta de credito existente, por ejemplo:

3764010x5xxx03x
37640101x526xxx
3764010xx5x6xx7
3764010xxx2xxx7

✅ ¿CÓMO EXTRAPOLAR UNA ‘CC’ GENERADA A PARTIR DE UN BIN?

Esto sirve para que vuelva a funcionar la tarjeta generada que utilizaste, es muy importante que la guardes, para que le vuelvas a dar una utilidad y disfrutar de ella. Tienes un bin, por ejemplo: 531321xxxxxxxxxx (Deezer Jalando), y con base a éste, generas un par de tarjetas. A partir de que generas dejan de llamarse bins y pasan a ser
tarjetas de crédito. Escoges una al azar por ejemplo: 5321321654829183

Te vas a la pagina de deezer y al registrar dicha tarjeta que hayas escogido, pasa al primer intento para crearla, pero después de un tiempo no funciona el bin.

Lo que haremos será extrapolar la tarjeta que pasó a la primera al crear la cuenta.

Lo haremos (extrapolar), eliminando los últimos 6 digitos de la tarjeta, Ejemplo: teníamos esta: 5321321654829183 y ahora pasa a ser esto:

5313216568xxxxxx

Generas de nuevo para calar en deezer y ya esta, volvió a pasar.`
enviarimagencap(imagebin1,bin1)
		break
		
		case 'extrapolacion':
					case 'extrapolación':
	  				case 'extrapolar':
					case 'extrapolarunbin':
					case 'extrapolar_un_bin':
					case 'extrapolar-un-bin':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin2 = fs.readFileSync('./binners/imagebin2.jpg')
		const bin2 = `⚜ ¿QUE ES EXTRAPOLACIÓN? ⚜

Extrapolar es cuando sacamos un bin a partir de una tarjeta de credito existente, Por Ejemplo:

3764010x5xxx03x
37640101x526xxx
3764010xx5x6xx7
3764010xxx2xxxxx

Hay 3 métodos de extrapolación: básica,  y avanzada.

🔰 𝗕𝗔𝗦𝗜𝗖𝗔:

Consiste en 2 tipos de extrapolación:

Similitud. 
Activación.

✅ ACTIVACIÓN

Simplemente tomas una tarjeta Generada con tu bin carbon y cambias los ultimos 6 digitos por la letra 𝘅

Ejemplo:

Tarjeta Usada: 5292202302315781

Resultado: 5292202302xxxxxx 

✅ SIMILITUD

Requiere tener 2 CC del mismo BIN, que son:
 
T1: 5292203820803126
T2: 5292207483033368

Debemos separar los 6 primeros números de la CC:

[529220] [3820803126]
[529220] [7483033368]

Y, se van a fijar en el segundo grupo:

[3820803126] y [7483033368]

Después, van a comprobar SIMILITUDES entre estos dos, es decir, vas al segundo grupo que se separó:
 
[3820803126]
[7483033368]

Ordenarlas de este modo, y después, comparar.Si tienen el mismo número, se quedan iguales, si no, se reemplazan por una X, es decir:

T1: [3820803126]
T2: [7483033368]

Quedaria asi: [xxxxxx3xxx]

Ahora, juntas el bin con tu resultado: 

New Bin: 529220xxxxxx3xxx

Y ese es tu nuevo bin extrapolado

🔰 𝗔𝗩𝗔𝗡𝗭𝗔𝗗𝗔:

Esta es una compleja, pero muy buena para generar lives.
Muy poca gente la conoce, ya que esta fue extraída de el software de generación de tarjeta SoFlA de un banco b10*sum:

T1: 5292208177212441 
T2: 5292204657663815 

Para este método, debemos usar únicamente los 10 dígitos de dos CCs. 
Pero, como hago si las CCs tienen diferentes números? 
Bueno. Del tercer grupo, solo se usarán los 2 números de la tarjeta.

5292 2081 x72x xxxx 
5292 2081 x76x xxxx

Se suman

7+2= 09 
7+6= 13
 
A partir de estos resultado, se divide el número entre 2: 

7+2= 09÷2=4.5 
7+6= 13÷2=7.5 

Después, se multiplica por 5. 

7+2= 09÷2=4.5=22.5 
7+6= 13÷2=7.5 =37.5 

Si existe un decimal (.) y el número es de dos cifras, se borra el decimal. 

Y el resultado se suma: 

22+37 =59 

Así que terminaria:
 
5292 2081 59xx xxxx

✅ INDENTACION LOGICA:

5292208177212441
 
Debemos separar los 6 primeros números de la CC:

[ 529220] [8177212441]

Y, se van a fijar en el segundo grupo

[8177212441]

Después, este grupo lo deben separar en modo (3-4-3), es decir: 

[817] [7212] [441]

Y, eliminan el número central: 

[8x7] [7xx2 [4x1] 

Después, ordenan el BIN con el resto: 

Resultado Final: 5292208x77xx24x1

✅ MATERIALDINVERTER

Este es algoritmo privado el cual afecta a las tarjetas generadas después de mediados del 2017, fue tomado del software SoFlA del Banco de Bogotá. 

Este es el mas, mas complejo de todos y tiene un 100% de seguridad de sacar lives si lo usas bien. 

Este método requiere 2 CCs, las cuales comúnmente son expedidas entre Octubre 2016 a Febrero 2017. 
Así que:

T1: 5292208177212441 
T2: 5292204657663815

Tienes que separar T1 y T2 en 2 grupos de 8 digitos 

T1:[52922081 [77212441 
T2:[52922046 [57663815 

Ahora, vas a agarrar T2 y vas a ordenarlo del siguiente orden para poder multiplicarlo 
5×5= 25 
2×7= 14 
9×6= 54 
2×6= 12 
2×3= 6 
0×8= 0 
4×1= 4 
6×5= 30 

Vas a escribir cada resultado en una línea pegado: 
2514541260430

Como pueden ver, hay 13 números, debemos hacer que sean 8, así que borramos los últimos 

5 para que nos queden 8 que serían: 

Nos queda: 25145412 

Ahora, vamos a pegar el primer grupo con nuestro resultado: 

=5292204625145412 

Ahora, vamos a realizar extrapolación basica, similitud entre T1 y el resultado, por eso, separamos: 

T1: 5292208177212441 

R1: 5292204625145412 

Nuestro resultado seria: 529220xxxxxxx4xx 

Ahora, si el último dígito termina siendo una X, este se reemplaza por 1 

El resultado final sería: 529220xxxxxxx4x1`
enviarimagencap(imagebin2,bin2)
		break
		
		case 'extrapolacion':
					case 'extrapolación':
	  				case 'extrapolar':
					case 'extrapolarunbin':
					case 'extrapolar_un_bin':
					case 'extrapolar-un-bin':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin4 = fs.readFileSync('./binners/imagebin4.jpg')
		const bin4 = `Bueno geys. En esta oportunidad les enseñare a Verificar su BIN
Primero necesitaremos un BIN. La ves pasada les enseñe como sacarlo xd.

Para ahorrar toda esa clase usaremos al bot del grupo, bueno una ves obtenido el BIN ( 410453 ). 

Luego nos dirigimos a https://www.bincodes.com/bin-checker/

Una ves abierta la pagina. Buscamos el apartado Bank Identification o en español ( Número De Identificación ).Y ahi colocaremos nuestro BIN ( 410453 )

Ahora tendremos que validar,completar el Captcha.

Una ves hecho esto, damos clic en la opción CHEQUE.

Esperamos unos minutos y nos saldra la información de nuestro BIN.

Resultado de la validación de BIN

410453 es un BIN válido.

Detalles del BIN

COMPARTIMIENTO: 410453

Banco emisor: KEMBA CREDIT UNION, INC.

Marca de carro: VISA

Tipo de tarjeta: CRÉDITO

Nivel de tarjeta: CLÁSICO

Nombre de país: ESTADOS UNIDOS

BY: @JOSEPHBINNERZ`
enviarimagencap(imagebin4,bin4)
		break
		
		

default:

}

// COMANDOS SIN PREFIJOS

} catch (e) {
console.log(e)
}
fs.watchFile('./anita.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\a ANITA FUE MODICADO\n ..REINICIANDO INDEX..", "blue"));
process.exit()
}
})
})

}
startJuls()
