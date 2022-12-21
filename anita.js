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
		
		case 'extrapolacionhq':
case 'extrapolacion-hq':
case 'extrapolacion_hq':
case 'extrapolaciónhq':
case 'extrapolación-hq':
case 'extrapolación_hq':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin3 = fs.readFileSync('./binners/imagebin3.jpg')
		const bin3 = `✅ METODO PARA SACAR LIVE FAST SIN BOT SIN NADA , Y PARA TENER LA CERTITUD QUE JALA O ESTA REALMENTE LIVE USA CAROL O CUALQUIER OTRO BOT O CHECKER WEB , SI TE DA DIED EL BIN NO SIRVE O LO HICISTE MAL 

4519912161013521|03|2026|618

CC : 451991216101 { 3521 } 
3+5= 8| ( 8+3 = 11)
2+1= 3 |

FECHA : ( 11 )

YEAR : ( 2026 = 20 ( 2 ) + 6 ) = 8
2026 = 202(8)

Cvv = 618 = 6/2=3+1=4+8=12
Cvv 618= 412 


CC final : 4519912161013521|11|2028|412

✅ NOTA EL METODO ESTA FULL Y LLEGA A SACAR CCS CON SALDO.`
enviarimagencap(imagebin3,bin3)
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
		
		case 'queeslive':	
case 'que_es_live':
case 'que-es-live':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin5 = fs.readFileSync('./binners/imagebin5.jpg')
		const bin5 = `-Una live es una Cc que será aprobada en el lugar de donde es el bin

Una live igual es una cc que tiene fondos.

¿Cómo sacar una live?

Las Lives se pueden sacar de diferentes maneras

1- Una live se puede sacar desde un bot de Telegram ya sea gratuito o de paga, esos son los checkers spam [Anti Spam]

2- Otra forma de sacar una Live es comprando un checker web, esos son checkers que no tienen [Anti Spam] y puedes cargar varias ccs sin necesidad de esperar un molesto [Anti Spam]

¿Qué es un checker y cuanto valen?

-Un checker es un sistema el cual se encarga de verificar que una cc está live

-El precio de un checker varía de cada dueño del checker

¿Qué es un Gate? Un Gate es un lugar especifico para meter una cc, existen varios tipos de Gate como:

-Multigata

-CVV gate

-CCN GATE

¿Qué es CCN Y CVV?

-Una CCN es una cc que tiene correcto los 16 dígitos y la fecha correcta pero el código de seguridad es incorrecta

-Una CVV es una cc que tiene todo correcto

¿Para qué sirve una CVV?

La CVV sirve para hacer compras físicas u comprar algún servicio sin riesgo a que el mismo se caiga a las semanas o días.`
enviarimagencap(imagebin5,bin5)
		break
		
case 'iban':
	  case 'sepa':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin6 = fs.readFileSync('./binners/imagebin6.jpg')
		const bin6 = `⚠️| Método Iban.

Bueno chicos hoy les voy a enseñar un metodo sencillo que puede sacarlos de un apuro, se llama Iban o Sepa...

¿Y que es esto?

El International Bank Account Number "Código Internacional de Cuenta Bancaria" en su traducción al español, es un código alfanumérico que identifica una cuenta bancaria determinada en una entidad financiera en cualquier lugar del mundo. 
Es decir, a cada cuenta le corresponde un único IBAN mediante el cual se identifica el país, la entidad, la oficina y la cuenta. 
Se trata de un estándar del Comité Europeo de Estándares Bancarios, que a su vez cumple con el estándar ISO 13616.

A continuación les mostrare una lista de países que usan este metodo (esta actualizada así que aprecienlo)

Caracteres Albania [🇦🇱]~[28]: AL35202111090000000001234567     
  Caracteres Andorra [🇦🇩]~[24] AD1400080001001234567890  
Caracteres Azerbaiyán [🇦🇿]~[28] AZ96AZEJ00000000001234567890         
 Caracteres Bahréin [🇧🇭]~[22] BH02CITI00001077181611  
Caracteres Bélgica [🇧🇪]~[16]
BE71096123456769  
Caracteres Bosnia [🇧🇦]~[20]: BA275680000123456789 
Caracteres Brasil [🇧🇷]~[29]: BR1500000000000010932840814P2          
 Caracteres Bulgaria [🇧🇬]~[22]:
BG18RZBB91550123456789 
Caracteres Costa Rica [🇨🇷]~[22] CR37012600000123456789  
Caracteres Dinamarca [🇩🇰]~[18]: DK9520000123456789 
Caracteres Alemania [🇩🇪]~[22]: DE91100000000123456789  
Caracteres Salvador [🇸🇻]~[28]:
SV43ACAT00000000000000123123     
 Caracteres Estonia [🇪🇪]~[20]:
EE471000001020145685    
Caracteres Finlandia [🇦🇽]~[18]:
FI1410093000123458  
Caracteres Francia [🇨🇵]~[27]: FR7630006000011234567890189   
  Caracteres Georgia [🇬🇪]~[22]:
GE60NB0000000123456789   
Caracteres Polonia [🇵🇱]~[28]:
PL10105000997603123456789123  
  Caracteres Portugal [🇵🇹]~[25]:
PT50002700000001234567833  
Caracteres Rumania [🇲🇩]~[24]:
RO09BCYP0000001234567890  
Caracteres Suiza [🇨🇭]~[21]:
CH5604835012345678009 
Caracteres Serbia [🇷🇸]~[22]
RS35105008123123123173    
Caracteres Eslovenia [🇸🇮]~[19] SI56192001234567892`
enviarimagencap(imagebin6,bin6)
		break
		
		case 'iban':
	  case 'sepa':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin7 = fs.readFileSync('./binners/imagebin7.jpg')
		const bin7 = `⚠️| Método Iban Parte ²

~Basicamente esa es la teoría de que es Iban 😛.

¿Para que funciona?

•Se utiliza como metodo alternativo al Bin, ya que puede que funcione de diferente manera en paginas destinadas a otros servicios como es el caso mas común con Napster.
 Su uso puede varias, ya es cuestión de ustedes Intentar.

Iba a utilizar Napster para enseñarles, pero Alemania fue baneada de sus servidores así que no funciona Pero no se preocupen cualquier pagina con un dominio Aleman o de los países anteriormente mostrados servira.

¿Que necesitamos para este metodo?

[✓] VPN activado en Alemania (puede que funcione cualquier VPN pero recomiendo uno como HMA).

[✓] Entrar en la página fake-it.ws y seleccionar la Bandera de Alemania.

[✓]  Intentar en sitios que acepten este tipo de pago. 

[1️⃣] En primer lugar con nuestro VPN Activado, ingresamos a fake-it.ws

[⚠️] Chicos las identidades falsas son clave en este mundo. 

[⚠️]Algunas paginas piden minimo algo de relación entre nombre y vivienda

[⚠️] Incluso numero de celular, que aunque no lo verifiquen puede llegar a molestar buscarlo.

[✓] Así que usen fake-it.ws

[✓] La interfaz de la pagina es bastante intuitiva,fácil de entender y usarla.`
enviarimagencap(imagebin7,bin7)
		break
		
		case 'introduccionbins':
case 'introduccion_bins':
case 'introduccion-bins':
case 'introducciónbins':
case 'introducción_bins':
case 'introducción-bins':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin8 = fs.readFileSync('./binners/imagebin8.jpg')
		const bin8 = `👑 introducción Bins

🔱 Glosario:

❑ ¿Qué es un Bin?

- Un bin son los 6 primeros números de una tarjeta lo cual identifica al banco y al tipo de tarjeta que es. Los bins nos permiten generar tarjetas de crédito o debito.

❒ ¿Donde encontrar bins?

- Los bins se pueden encontrar en grupos de whatsapp, facebook, twitter y telegram. Como son bins públicos, lo más probables es que esten quemados.

❒ ¿Cómo sacar bins funcionales?

- Si deseas un bin privado la unica manera que existe es buscando foros, grupos donde pasen ccs (no importa que esten quemadas), sacarles extras y ponerse a calar!

Ejemplo ✍

➜ CC: 5240821096213085|02|2029|824
➜ BIN: 524082109621xxxx

❑ ¿En qué páginas jalan?

- Bueno, esto depende de donde mucho del bin. Hay bins que jalan en una sola pagina ejemplo (crunchyroll) y hay otros que son multifuncionales ejemplo (crunchyroll, mubi, Onlyfans, entre otras).

❒ ¿Cómo generar ccs?

- Ingresaras a https://namso-gen.com/ copiaras tu bin y le darás al botón de generar.

-  Recuerda que estas tarjetas solo son generadas!

❑ ¿Que extrapolar?

- Existen muchos métodos, pero en esta introducción, no la veremos. Si deseas saber mucho más a detalle que extrapolar, usa al bot o apk del grupo, ahi encontrarás una información mucho detallada https://www.mediafire.com/file/oxlgjgmlgw2uh6c/Bineria+Universal.apk/file

❑ ¿Qué es un vpn?

- Pues basicamente un vpn es una herramienta que usaremos casi siempre xd
- Con la vpn nosotros podremos crear cuentas premiun

Ejemplo ✍

Queremos obtener una cuenta de tidal premiun, pero el bin es de Colombia y yo soy de Venezuela. Lo que haremos será usar un vpn que nos permita cambiarnos de pais (dirección ip)

❑ ¿Qué es live?

Básicamente las lives son tarjetas de crédito aprobadas por el mercado, es decir, tienen fondos. Estás sirven para realizar pequeñas, grandes compras fisicas y/o renovar suscripciones, información más detalladas del tema de lives en el bot.

⚠ Páguinas para sacar lives manualmente

https://karmeyhesed.org/
https://dzi.org/make-a-donation 
https://www.habitat.org/ 
https://secure.givewell.org/

❑ ¿Cómo sacar lives manualmente?

- Se registran en cualquiera de esas paguinas como una paguina cualquiera, luego donas o haces una compra menor (cargo o monto pequeño). Si les da decline significa que esta muerta y si les sale Thanks you o code incorrect significa que esta viva.

- Como dato adicional les invito a unirse a mi canal de telegram subo bins y métodos interesantes https://t.me/bineriauniversal

❑ ¿Qué es chavelo?

-Se le denomina “Chabelo” a un bin que pese a que es viejo sigue funcionando en varias páginas.

❑ ¿Corremos riesgo al utilizar un bin?

- Los bins no son tan peligrosos, con la acción de binear, solo se estafa a la empresa en donde la usaste la cc generada.

- Las tarjetas no son de dueños reales, solo son algoritmos, que de alguna manera pasan en una página.

- Lo más malo que te puede pasar, es que una página bloquee tu IP real permanentemente o tu dispositivo.

- La otra cosa, es que tu IP puede estar en una lista negra de SPAM, eso es provocado usualmente por vpns como holavpn que vende este tipo de datos de sus usuarios a otras compañías, lo cual es algo que Hola no te especifica. Igual, hay muchos mejores vpns .

- Es muy raro que pase, binear no es peligroso, si es que no abusas o llegas a un extremo muy pero muy elevado.

❑ ¿Qué es ban?

- Seguramente en los diversos grupos has escuchado esto, literalmente Ban significa prohibir esto es que se te pone una restricción; ya sea total, parcial, temporal o permanente, al sitio en donde has realizado la compra.

- Bueno bros espero les haya servido esta breve introducción, recuerda que si tienes dudas puedes contactarme, o preguntarle a cualquier miembro del grupo con gusto ellos te ayudarán.`
enviarimagencap(imagebin8,bin8)
		break
		
		case 'introduccioncarding':
case 'introduccion_carding':
case 'introduccion-carding':
case 'introduccióncarding':
case 'introducción_carding':
case 'introducción-carding':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin9 = fs.readFileSync('./binners/imagebin9.jpg')
		const bin9 = `Bueno aprovechando que el amigo SP3L1N4X  dejo una pequeña introduccion al Carding

Manual de Carding

1.- Introducción
2.- Carding
3.- Estructura de las Tarjetas de Crédito
4.- Tengo el numero que hago?
5.- Quiero tener más Números de tarjetas rápidamente
6.- Trashing
7.- El Verdadero Peligro
8.- Herramientas



Disclamer: NO asumo ninguna responsabilidad debida al mal empleo de la información aquí contenida, puesto que este texto solamente tiene fines educativos y en ningún caso pretende incitar a nadie a cometer ningún delito ya sea informático o de otra índole.



Buenas con todos los que puedan leer este documento.


1.- Introducción

En este manual voy a indicar que es el carding? Algunos términos del mismo como utilizarlo y sacar provecho Smiley

Comencemos...................

2.- Carding

Este es un concepto que indica lo más claramente posible que es y de que se trata el carding

Carding: Es el uso ilegitimo de las tarjetas de crédito, o de sus números, pertenecientes a otras personas. Se relaciona con el hacking, porque para conseguir números de tarjetas de créditos, una de las formas es utilizando Ingenieria Social y sobre todo nuestra inteligencia (esto es lo mas importante)

Se debe tener mucho cuidado en hacer esto ya que nos podemos meter en muchos líos.
Con nuestras tarjetas de crédito debemos ser cuidadosos ya que alguien puede leer este documento antes que uno de ustedes y ser capaz de estafarlos.

Se puede recuperar el dinero talvez pero para eso tendrían que hablar con el administrador del sitio donde se realizo el pago del artículo solicitando la IP de donde se hizo la compra y luego de todo esto tenemos que demostrar que nosotros no hicimos la compra del mismo.

El carding consiste en comprar usando la cuenta bancaria o la tarjeta crédito de otro, esto se consigue con un poco de ingenieria social y mucha perseverancia.

Cuando alguna persona utiliza carding para comprar objetos materiales se suele utilizar una dirección falsa con una identificación también falsa, es decir todo el formulario de compra lo llena con datos falsos.
De esta manera el comprador quedara esperando en el lugar indicado la entrega del material como si se tratara de su residencia.

La filosofía de los carders se basa en que existe mucha gente que tiene grandes cantidades de dinero que no cae nada mal utilizar algo de ese dinero para comprar algunas cositas para cada uno de ellos, ya que posiblemente el dueño de la tarjeta ni se de cuenta de esta compra que el no la hizo.

Si ustedes están pensando en comprar por Internet programas o suscripciones y piensan que utilizando el carding será muy fácil pues tienen toda la razón resulta muy sencillo.
En este manual se conseguirá revisar los métodos que utilizan los carders para hacerse de los números de tarjetas y burlar las seguridades para poder comprar sin ningún tipo de problemas.

Tienen que saber que el robo de una tarjeta de crédito es un delito universal por lo que puede tener causas penales muy graves si no quieres irte de paseo a Cana..da (para otros países Cárcel) no intenten hacer nada de esto.


3.- Estructura de las Tarjetas de Crédito

Para mi esta es la parte más importante ya que aquí sabremos como funcionan las tarjetas de crédito porque se puede hacer programas para que nos den números validos pero lo importante es saber como es que se hace todo eso

Comencemos.....

Los números de las tarjetas se forman de 16 dígitos divididos en 4 grupos de 4 dígitos pueden tener valores del 0 al 9 los primeros 4 dígitos sirven para determinar el banco.

El resto de números se pone al azar no mentira vamos a ver el algoritmo

Hagamos un ejemplo de la creación de un número de tarjeta

Numero de tarjeta: 5180 2345 3942 8765

Las posiciones impares son:

5
8
2
4
3
4
8
6

Luego de esto se multiplica los 2 primeros dígitos entre si luego los siguientes y asi sucesivamente para que sea mas claro quedaría de la siguiente forma:

5*8=40
2*4=8
3*4=12
8*6=48

Si tenemos cifras mayores a 9 se suma los números es decir las cifras reducidas 8+5=13 entonces
1+3=4

En el ejemplo quedaría asi:

5*8=40 4+0=4
2*4=8 8
3*4=12 1+2=3
8*6=48 4+8=12 1+2=3

En resumen los números que nos quedan son:

4
8
3
3


Luego de esto suma los números pares que descartamos al principio y súmalos con estos el resultado debe ser un número múltiplo de 10 para que el número sea correcto:

4+8+3+3+1+0+3+5+9+2+7+5=50


Si no nos diera un numero correcto como va a suceder en la mayoría de los casos lo recomendable es dejar el ultimo casillero libre y jugar con este digito hasta que nos de un numero valido.

Esta es una de las formas de conseguir un numero de tarjeta de crédito es decir adivinando a ver si nos sale otra puede ser esperar pacientemente el fin de mes el momento que llega el corte de pago de la tarjeta del vecino nos robamos su correspondencia y listo ahí tenemos un numerito.

O buscamos dentro de su basura (esto creo que es mas feo) pero igual funciona ya que no suelen romper los cortes de tarjeta de crédito simplemente los botan arrugados a la basura pero igual obtenemos el numero deseado.

Otra de las formas es creando un portal de Internet donde ponemos artículos a la venta se explicara esto mas adelante

4.- Tengo el numero que hago?

El momento de realizar una compra en línea nos solicitan una serie de datos pero los mas importantes es decir los que nunca faltan son estos:

Nombre.
Numero de Cuenta.
Fecha de Expiración.
Tipo de tarjeta.
Numero de verificación

Estos datos son muy fáciles de conseguir (a veces)

El nombre es el de la victima sencillo de conseguir, el número de su tarjeta es un poco más complicado pero hay formas revisando su correspondencia por ejemplo

La fecha de expiración la podremos conseguir haciéndonos pasar por el banco con los datos que ya conocemos podremos decirle que vamos ampliar su cupo por sus pagos puntuales o cualquier cosa esto ya queda a su imaginación lo que si nos queda claro es que conseguir estos datos resulta sumamente sencillo.

Tipo de Tarjeta ya lo sabemos ya revisamos su correspondencia revisar paso uno Wink
Para reconocer el tipo de tarjeta se puede utilizar, el primer digito de la tarjeta que nos indica el tipo de la misma.

Si el primer numero es....

3 ->American Express (15 dígitos)
4 ->VISA (13 o 16 dígitos)
5 ->Mastercard (16 dígitos)
6 ->Discover (16 dígitos)

Con estos datos ya se puede comprar algo en línea generalmente los carders realizan una compra de algún software pequeño que sea de descarga o una subscripción para ver pornografía esto lo hacen para probar si la tarjeta funciona o no .

Si el momento de la compra nos solicitaran mas datos ya saben que hacer es mas creo que al momento de revisar su correo no tendrán estos datos tendrán muchos mas.


5.- Quiero tener más Números de tarjetas rápidamente

Como aquí se a explicado bastante me canse y ahora hagan un repaso de lo que aprendieron hasta aquí y piensen en una posible victima hasta mientras me voy hacer un juguito y regreso para seguirles explicando unas cositas bastante interesantes.


Bueno después de estos 15 minutos de tranquilidad volvamos en lo que estábamos..


Para obtener tarjetas podría entrar en juego la famosa Ingenieria Social que tal si llamamos a nuestra victima y decimos algo como lo siguiente:

“Buenas tardes, soy Camilo Albornoz de la sección fraudes de Master Card , hemos detectado un posible uso fraudulento de su tarjeta, por lo que necesitamos que nos indique todos los datos de la misma, para realizar una comprobación”

Este tipo de llamada es bueno realizarla en horas de trabajo ya que la persona se encuentra preocupada con la cabeza enfocada solo en su trabajo por lo que puede resultar un buen momento para que nuestra victima caiga en esta trampa.

Si nos llamaran de un banco diciéndonos algo parecido a lo que escribí anteriormente lo que tienen que hacer es pedir que les repita su nombre completo solicitarle el numero y devolver la llamada de esta manera se evitaran este tipo de estafa.

Todos los que lean pilas que ya están avisados de cómo funciona este método

Aunque parezca mentira existe gran cantidad de gente que cae en este juego y dan todos los datos que les solicitan sin ningún tipo de inconveniente.

Para verificar si la tarjeta es útil se puede hacer una llamada a la entidad bancaria de donde pertenece la tarjeta nos hacemos pasar como dueños de la tarjeta indicando que quisimos hacer una compra y nuestra tarjeta fue rechazada para verificar si hablan con el dueño de la tarjeta pedirán verificar unos datos harán preguntas sencillas como cual es el numero de tarjeta, numero de verificación esto ya no es problema para nosotros ya que tenemos toda la información que conseguimos antes al hacernos pasar como empleados de la entidad que emite la tarjeta

La información que conseguimos aquí es fundamental ya que podremos saber si la tarjeta es principal o es un adicional si es de uso nacional o mundial cuanto es el cupo que tiene la misma , etc.

Las compras que suelen hacer los carders son mediante Internet o telefónicamente no de montos muy altos para que no se pida confirmación al dueño de la tarjeta y para no levantar sospechas

El carder es muy cuidadoso no puede andar gritando al mundo sus hazañas porque el es un ladrón el esta robando , si hace un pedido de un articulo no puede pedir otro y otro articulo a la misma dirección tiene que ir rotando de lugares .

Generalmente si el encargo esta en la oficina de correos el ira cuando no haya nadie si estuviera mucha gente preferirá no arriesgarse y ni siquiera acercarse mas al lugar ya que podría resultar peligroso para el

Un carder nunca pide algo gigante no se comprara un carro para que le traigan por DHL ni nada extremadamente caro (un collar de oro de 18 kilates) tampoco algo muy baratito pero estaría bien que se compre una palm ultimo modelo ese es un buen carder.

El problema que se podría presentar es que el carder cada vez quiere comprar algo mas y no para se vuelve mas adicto por el riesgo y por que se esta comprando buenas cositas pero no se da cuenta que talvez lo tiene fichado y próximamente le haga una visita la policía

Los lugares de entrega de tus pedidos:

NOTA.- NUNCA HAGAS QUE TE ENTREGUEN EN TU CASA

Pero si lo puedes hacer al azar escogiendo alguna persona de la guía telefónica claro que no este tan lejos de tu casa eso si necesitas hablar muy bien para explicar a alguien porque le llego algo tuyo en su casa debes ser bueno para tratar con la gente y no ponerte nervioso.
La casa de un amigo próximo a cambiarse de casa que te ayude con este favor antes de irse difícil esta forma pero puede ocurrir.

Pedir que lo envíen a una dirección de un condominio generalmente lo dejan al guardia ya que asumen que el conoce a toda la gente del condominio y por seguridad a la persona que deja la correspondencia no la dejaran pasar porque son “Ordenes de la Administradora” y quien será la única persona que ira a pedir el paquete?? Exacto el carder.


Bueno estas son una de las tantas formas en las que pueden recibir sus compras seguramente a ustedes se les ocurrirá muchas mas .



6.- Trashing

Me parece un tema interesante y que no se lo ve regularmente aquí les explico de que se trata aunque entre las ideas que indique antes ya lo mencione.

Se trata de buscar y remover la basura de la victima que estas buscando es decir intentar encontrar estados de cuenta, cortes de pago, recibos, etc.

Por eso un sano consejo cuando boten algo importante rompanlo y botenlo si es posible haciendolo tiritas talvez piensen este tipo esta medio loco pero yo supe de alguien que quemaba sus papeles una vez por semana quien es el loco el o yo??

7.- El verdadero Peligro


Ahora con toda la tecnología a nuestro alcance se pueden hacer muchas cosas , esto es lo que utilizan los carders necesitan saber programar y dos invitados muy importantes.

PHP + MySQL

PHP.- Lenguaje de programación web
MySQL.- Base de Datos trabaja excelente con PHP

Que es lo que hacen??

Se esmeran un par de horas programando un sitio de venta de artículos pueden ser de cualquier tipo deportivos, tecnológicos, etc.

Con precios sumamente accesibles y con productos de excelente calidad la victima se emociona con esta verdadera gamga cuando va a adquirir un producto viene el método de pago el cual es con tarjeta de crédito.

La victima ingresa su tarjeta , nombres , numero de verificación todos los datos necesarios luego de esto el carder ya posee todo lo que necesita queda simplemente enviar un e-mail o hacer una llamada disculpándose y notificando que la transacción no se realizo por no tener el articulo en stock o simplemente el momento que supuestamente hace la compra se le muestra un mensaje de error que diga algo similar a esto:
“NO SE PUDO CONCLUIR LA TRANSACCION”
La victima pensara que no paso nada pero nuestra base de datos ya se engordo un poco mas y con datos totalmente reales y listos para usar.


8.- Herramientas

Existen programas que nos ayudan a generar números de tarjetas validos esto ahora tiempo a los carders


Estas herramientas son:

Fakeid

Te da otros datos de personas verificables, interesante para quienes no tienen habilidad de inventarse personalidades.

Para aquellos programas que no te brindan la fecha de expiración solo queda hacerlo manualmente, probando al mejor estilo brute forcing.

CCards

En caso de que quieran ver unos números de tarjeta de crédito validos como ejemplo, vean el programa CCards.exe que les genera de una manera sencilla y rápida estos números


Credit Card Master 4

Este completo programa permite realizar una amplia cantidad de acciones destinadas al carding, genera numeros te ayuda viendo si el digito verificador es correcto y si no es asi no te preocupes ahi mismo te genera otro lo importante es que todos los datos estén correctos


Credit

Es un programa muy potente parecido al Credit Card Master aunque tiene interfaz grafica y tiene algunas otras utilidades como por ejemplo generar identidades falsas que como estuvimos viendo pueden ser de gran utilidad.


Bueno espero que toda la explicación del manual este clara y que les sirva para conocer el carding más a fondo.
Nunca olviden que esto es totalmente ilegal y que si no quieren meterse en líos no lo pongan en práctica suerte a todos.

Espero que les haya gustado, y espero que con esto mas o menos se de una ideita...


Saludos a todos Bic`
enviarimagencap(imagebin9,bin9)
		break
		
		case 'plataformasparacalar':
	  case 'plataformas_para_calar':
	  case 'plataformas-para-calar':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin10 = fs.readFileSync('./binners/imagebin10.jpg')
		const bin10 = `100  PLATAFORMAS DONDE PUEDEN CALAR , VAMOS ✅

1 CRUNCHYROLL
2 PLEX 
3 TOPIC
4 HIDIVE
5 BRITBOX 
6 UMC TV
7 TIDAL
8 NAPSTER
9 HBO MAX 
10 HBO GO MÉXICO 
11 HBO ESPAÑA 
12 FÚBO TV
13 FANATIZ 
14 DIRECT TV GO MÉXICO
15 BLIM 
16 PUREFLIX
17 SCRIBD
18 CANVA 
19  HOOTSUITE
20 LINKEDIN
21 SHUDDER
22 VRV 
23 SKYPE 
24 PROXYSCAPE
25 INDIEFLIX
26 WWE 
27 FILMBOX
28 MUBI TV
29 MICROSOFT 365
30 AWS AMAZON 
31 AZURE 
32 SPOTIFY 
33 YOUTUBE 
34 BADOO 
35 PLAYSTORE 
36 FACEBOOK ADS
37 NAMCHEAP VPN 
38 VPN CITY 
39 PRIVATE TUNEL 
40 PAYPAL
41 APPLE MUSIC 
42 EBAY 
43 ALIEXPRES
44 DEEZER 
45 FANATIZ 
46 DAZN 
47 HULU 
48 NOOR PLAY 
49 SOUNDCLOUD
50 DUOLINGO 
51 PANDORA 
52 SMALL PDF 
53 BLIZZARD
54 WAR GAMING
55 LUMOSITY LIFETIME 
56 UTOMIK
57 DC UNIVERSE
58 ETSY
59 MARVEL UNLIMITED
60 PICSART 
61 CALM
62 ANCESTRY 
63 HISTORY VAULT 
64 IP VANISH 
65 DROPBOX
66 ONLYFANS 😍
67 ADOBE
68 PREZI 
69 WEBSHARE 
70 ACORN TV
71 PRIVATE  TÚNEL
72 NOGGIN
73 INFLTR
74 APP STORE 
75 QOBUZ 
76 TREEHOUSE
77 GREEN MAN GAMING
78 STEAM 
79 G2A 
80 NORTON 
81 IWOOT 
82 PUMA 
83 ADIDAS
84 REEBOK
85 NIKE 
86 HM
87 MY PREOTEIN
88 UBER EAT 
89 MC DONAL,S 
90 MERCADO LIBRE
91 SHERLY 
92 STAN 
93 OLDFLIX
94 VIKI RAKUTEN
95 PDF DRIVE 
96 ATRESPLAYER
97 SHUTHESTOCK
98 INSTAGRAM
99 PORHUB
100 BRAZZERS`
enviarimagencap(imagebin10,bin10)
		break
		
		case 'vpn':
	  				case 'vpns':
					case 'vpnpremiun':
					case 'vpnspremiun':
					case 'vpn_premiun':
					case 'vpn-premiun':
					case 'vpns_premiun':
					case 'vpns-premiun':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin11 = fs.readFileSync('./binners/imagebin11.jpg')
		const bin11 = `⚜ VPN PREMIUN ⚜

🌐 TurboVPN

https://www.mediafire.com/file/qguhyliuqql4v93/Turbo_VPN.apk/file

🌐 Ultra VPN

https://www.mediafire.com/file/xwl06cfqnkyh7p1/Ultra_VPN.apk/file

🌐 Hola VPN

https://www.mediafire.com/file/si7o10xofgayewk/Hola_VPN.apk/file

🌐 VPNhub

https://www.mediafire.com/file/j3lullhkk59y1vi/VPNhub.apk/file

🌐 AdGuard VPN

https://www.mediafire.com/file/sh0dfwlxc87tfds/AdGuardVPN.apk/file

🌐 TunnelBear

https://www.mediafire.com/file/ep0fv0l2yna9xzk/TunnelBear.apk/file

🔱 Cortesia De: @BineriaUniversal`
enviarimagencap(imagebin11,bin11)
		break
		
		case 'navegadores':
	  				case 'navegadoresprivados':
					case 'navegadores_privados':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin12 = fs.readFileSync('./binners/imagebin12.jpg')
		const bin12 = `⚜ Navegadores Privados ⚜

🔰 DuckDuckGo

https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&hl=es_US&gl=PE

🔰 FireFox Focus

https://play.google.com/store/apps/details?id=org.mozilla.focus

🔰 Navegador Web Dolphin Browser

https://play.google.com/store/apps/details?id=mobi.mgeek.TunnyBrowser

🔰 Brave Browser

https://play.google.com/store/apps/details?id=com.brave.browser&hl=es_US&gl=PE

🔰 Cortesia De: @BineriaUniversal`
enviarimagencap(imagebin12,bin12)
		break
		
		case 'sitiossms':
	  				case 'sitiosms':
					case 'sitios_sms':
					case 'sitios-sms':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin13 = fs.readFileSync('./binners/imagebin13.jpg')
		const bin13 = `🔰 SITIOS HQ PARA VERIFICACIÓN DE SMS DE BYPASS (ALGUNAS YA NO FUNCIONAN) 🔰

 Ⓜ️ʀᴇᴄᴇɪᴠᴇ ᴀɴ sᴍs: https://receive-a-sms.com/
 Ⓜ️sᴍs ʀᴇᴄᴇɪᴠᴇ ғʀᴇᴇ: https://smsreceivefree.com/
 Ⓜ️ᴏɴʟɪɴᴇ sᴍs: https://sms-online.co/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ: https://smsreceiveonline.com/
 Ⓜ️ɢᴇᴛ ᴀ ғʀᴇᴇ sᴍs ɴᴜᴍʙᴇʀ: https://getfreesmsnumber.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs: http://sms-receive.net/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ.ɴᴇᴛ: https://www.receivesmsonline.net/
 Ⓜ️ғʀᴇᴇ sᴍs ᴄʜᴇᴄᴋs: http://www.freesmsverifications.com/
 Ⓜ️7 sɪᴍ.ɴᴇᴛ: http://7sim.net
 Ⓜ️ʜs3x: http://hs3x.com
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ ғʀᴇᴇ sᴍs: http://receivefreesms.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ ғʀᴇᴇ sᴍs.ɴᴇᴛ: http://receivefreesms.net/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ.ɪɴ: http://receivesmsonline.in/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ: https://receive-sms-online.com/
 Ⓜ️sᴇᴇ sᴍs: https://www.smsver.com/
 Ⓜ️ɢʀᴏᴏᴠʟ: https://www.groovl.com/
 Ⓜ️sᴍs.sᴇʟʟᴀɪᴛᴇ: http://sms.sellaite.com/
 Ⓜ️sᴇɴᴅ sᴍs ɴᴏᴡ: http://www.sendsmsnow.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ.ᴇᴜ: http://receivesmsonline.eu/
 Ⓜ️ᴘʀᴏᴏᴠʟ: https://www.proovl.com/numbers
 Ⓜ️ᴀɴᴏɴ sᴍs: https://anon-sms.com/
 Ⓜ️ʜɪᴅᴇ ᴍʏ ɴᴜᴍʙᴇʀs: http://hidemynumbers.com/
 Ⓜ️ᴘɪɴɢᴇʀ: https://www.pinger.com/
 Ⓜ️ғʀᴇᴇ ᴏɴʟɪɴᴇ ᴘʜᴏɴᴇ: https://www.freeonlinephone.org/
 Ⓜ️5sɪᴍ: https://5sim.net/
 Ⓜ️sᴋʏᴄᴀʟʟʙᴅ ғʀᴇᴇ ᴠɪʀᴛᴜᴀʟ ɴᴜᴍʙᴇʀ: http: //www.freevirtu...r.skycallbd.com/
 Ⓜ️ᴄᴀᴘᴛᴜʀᴇ sᴍs: https://catchsms.com/
 Ⓜ️sᴍs ɢᴇᴛ: http://smsget.net
 Ⓜ️1s2ᴜ: https://1s2u.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs: http://getsms.org/
 Ⓜ️ᴠʀɪᴛᴛʏ: https://virtty.com/
 Ⓜ️ᴛᴇxᴛ ᴀɴʏᴡʜᴇʀᴇ: http://www.textanywhere.net/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ.ᴍᴇ: http://receivesmsonline.me/
 Ⓜ️ᴛᴇᴍᴘᴏʀᴀʀʏ ᴇᴍᴀɪʟs: https://www.temp-mails.com/
 Ⓜ️ᴘᴜʀᴄʜᴀsᴇ ᴠɪʀᴛᴜᴀʟ ɴᴜᴍʙᴇʀ: http://www.virtualnumberbuy.com/
 Ⓜ️ғʀᴇᴇ ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ: http://freereceivesmsonline.com/
 Ⓜ️ɴᴅᴛᴀɴ sᴍs: https://sms.ndtan.net/
 Ⓜ️sᴍs ʟɪsᴛᴇɴ: https://smslisten.com/
 Ⓜ️ғʀᴇᴇ ᴠɪʀᴛᴜᴀʟ sᴍs ɴᴜᴍʙᴇʀ: https://freevirtualsmsnumber.com/
 Ⓜ️sᴍs ᴛɪʙᴏ: https://smstibo.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ɴᴜᴍʙᴇʀ: https://receivesmsnumber.com/
 Ⓜ️ғʀᴇᴇ sᴍs ᴄᴏᴅᴇ: https://freesmscode.com/
 Ⓜ️ᴏɴʟɪɴᴇ sᴍs ɴᴜᴍʙᴇʀs: https://smsnumbersonline.com/
 Ⓜ️sᴍs ʀᴇᴄᴇᴘᴛɪᴏɴ: https: //smsreceiving.com
 Ⓜ️ᴛʀᴀsʜ ᴍᴏʙɪʟᴇ https://es.mytrashmobile.com/nu`
enviarimagencap(imagebin13,bin13)
		break
		
		case 'grupobins':
	  			  case 'grupo_bins':
					case 'grupo-bins':
					case 'bineriauniversal':
					case 'bineria-universal':
					case 'bineria_universal':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin14 = fs.readFileSync('./binners/imagebin14.jpg')
		const bin14 = `◾️Bineria Universal - Grupo Oficial

◾️Contenido: Carding - Binning

◽Bins
◽Lives
◽Métodos
◽Tutoriales
◽Cosas Extras

◾️Aprenderás A Sacar Todo Tipo De Cuentas

◽Disney+
◽HboMax
◽Stars+
◽Paramount+
◽Acorntv
◽Prime Video
◽Netflix (aveces)
◽Crunchyroll
◽Funimation
◽Hulu
◽Spotify
◽Deezer
◽Napster
◽Tidal
◽Twitch
◽IpVanish
◽Duolingo Plus
◽Onlyfans
◽NordVpn
◽ExpressVpn
◽Fanatiz
◽FútboTv
◽Apple Music
◽PayPal
◽Canva
◽Hootsuite
◽Noggin

◾️Link: https://chat.whatsapp.com/DwvnxoVjSoz4246vFbZBCP

◾️Nota:

◽El Grupo Se Creo con La Intención De Compartir Conocimiento,Métodos y Bins Funcionales.

◽No Enlaces - Spam - Ventas - Presumir - Cambios.

◽Contamos Con Un Bot De Autoayuda.

◽También sorteamos Números Para WhatsApp y Cuentas Premiun.

◽Porfavor Respetar Las Reglas Del Grupo y Disfrutar Tu Estadía.`
enviarimagencap(imagebin14,bin14)
		break
		
		case 'grupobins':
	  			  case 'grupo_bins':
					case 'grupo-bins':
					case 'bineriauniversal':
					case 'bineria-universal':
					case 'bineria_universal':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\n🔥 ÚNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin15 = fs.readFileSync('./binners/imagebin15.jpg')
		const bin15 = `𝐓𝐞𝐚𝐦 𝐁𝐢𝐧𝐞𝐫𝐢𝐚 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐚𝐥:

𝐒𝐭𝐚𝐟𝐟 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝐃𝐞 𝐁𝐢𝐧𝐞𝐫𝐢𝐚 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐚𝐥:

• Joseph ➜ Fundador
• Castillo ➜ Cofundador
• Duende ➜ Cofundador
• Ghost  ➜ Cofundador
• Jasiel ➜ Cofundador
• Joel ➜ Cofundador
• Ruso ➜ Cofundador
• Admiro ➜ Iptv
• Angy ➜ Ayudante
• Arturo ➜ Dx
• Antonio ➜ Ayudante
• Blankito ➜ Checker
• Edgar ➜ Ayudante
• Jose Miguel ➜ Hits
• Joshua ➜ Netfree
• Sangronith Reymundo ➜ Vip
• Suicida ➜ Cancerbero

Bot:

• JosephBot ➜ Moderador

Comunidad:

• Bineria Universal

➜ https://t.me/+I5F2JBRwE6c5M2Jh
➜ https://chat.whatsapp.com/DwvnxoVjSoz4246vFbZBCP`
enviarimagencap(imagebin15,bin15)
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
