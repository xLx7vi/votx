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
var Creador = "π²Ν‘ΝββΈΈππ’π¦ππ£πα­" // No cambiar

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
console.log("..ConexiΓ³n inestable..", lastDisconnect.error, "Intentando conectar...", shouldReconnect);
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
enviar('π€π')}

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

 if (!isGroup && isCmd) console.log(`${color('β­ββββββββββββββββββββββββββ?', 'blue')}\n${color('β', 'blue')} ${color('NΓΊmero:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('β', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('β', 'blue')} ${color('command:', 'blue')} ${color(command)}\n${color('β', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('β°ββββββββββββββββββββββββββ―', 'blue')}`)
 if (!isGroup && !isCmd) console.log(`${color('β­ββββββββββββββββββββββββββ?', 'blue')}\n${color('β', 'blue')} ${color('NΓΊmero:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('β', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('β', 'blue')} ${color('command:', 'blue')} ${color('No', 'blue')}\n${color('β', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('β°ββββββββββββββββββββββββββ―', 'blue')}`)
 if (isGroup && isGroup) console.log(`${color('β­ββββββββββββββββββββββββββ?', 'blue')}\n${color('β', 'blue')} ${color('NΓΊmero:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('β', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('β', 'blue')} ${color('command:', 'blue')} ${color(command)}\n${color('β', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('β', 'blue')} ${color('Grupo:', 'blue')} ${color(groupName, 'white')}\n${color('β°ββββββββββββββββββββββββββ―', 'blue')}`)
 if (!isGroup && isGroup) console.log(`${color('β­ββββββββββββββββββββββββββ?', 'blue')}\n${color('β', 'blue')} ${color('NΓΊmero:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('β', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('β', 'blue')} ${color('HorΓ‘rio:', 'blue')} ${color(time, 'white')}\n${color('β', 'blue')} ${color('command:', 'blue')} ${color('NΓ£o', 'blue')}\n${color('β', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('β', 'blue')} ${color('Grupo:', 'blue')} ${color(groupName, 'white')}\n${color('β°ββββββββββββββββββββββββββ―', 'blue')}`)


// CASES 

switch(command){

// ESCRIBIR AQUI COMANDOS CON PREFIJO
				case 'queesunbin':
	  			case 'que_es_un_bin':
	  			case 'que-es-un-bin':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin1 = fs.readFileSync('./binners/queesunbin.jpg')
		const bin1 = `PARA LOS QUE NO SABEN HACER CUENTAS....ESTE ES UN TUTORIAL TEΓRICO PARA QUE SEPAN A LO QUE SE ESTAN METIENDO.

β ΒΏQUE ES UN BIN?

BIN: Bank Identification Number.

Un bin son los primeros 6 dΓ­gitos de una tarjeta de crΓ©dito. Estos nos sirven para identificar el paΓ­s de procedencia, tipo de tarjeta y nivel de la misma.

Ejemplo: 553667

β ΒΏPARA QUE SIRVEN?

Con el bin puedes crear ccs (credit card) en espaΓ±ol (tarjeta de crΓ©dito).Al generar la cc a base de bin puedes hacer suscripciones en pΓ‘ginas y hasta en ocasiones compras fΓ­sicas. 

β ΒΏQUE ES UNA CC?

(CC=TARJETA DE CREDITO)

Primero debemos tener claro que una CC no es un BIN, una CC esta compuesta por informaciΓ³n real.
Las CCs basicamente se componen por:

Β°Nombre
Β°Numero de la tarjeta
Β°CCV
Β°Fecha
Β°DirecciΓ³n
Β°CΓ³digo postal
Β°Pais
Β°Algunas traen numero telefΓ³nico y/o correo.

β ΒΏCOMO RECONOCER EL TIPO DE TARJETA?

Pues FΓ‘cil. Observa:

La tarjeta comienza con el nΓΊmero 4 [Visa]

La tarjeta comienza con el nΓΊmero 5 [MasterCard]

La tarjeta comienza con el nΓΊmero 3 [Amex]

La tarjeta comienza con el nΓΊmero 6
[Discovey]

β ΒΏCOMO CREAR UN BIN?

Un bin se hace a base de una cc real, solo debemos copiar los 6 primeros nΓΊmeros de la cc y agregamos 10 equis (x)

Ejemplo: 4567812364745823

Bin: 456781xxxxxxxxxxx

Haciendo eso te pones a calar en pΓ‘ginas obvio con la misma ip de
la cc de la cual saliΓ³ el bin.

β ΒΏEN QUE PAGINAS JALAN?

Bueno, esto es depende de donde sea el bin. Hay bins que jalan en una sola pagina ejemplo (crunchyroll) y hay otros que son multifuncionales ejemplo (crunchyroll, mubi, Napster y entre otras).

Posdata: solo tome esas pΓ‘ginas para el ejemplo.

β ΒΏCOMO GENERAR UNA CC CON UN BIN?

existen varios generadores de ccs
que se encargan de remplazar las βxβ por nΓΊmeros que coincidan
con una cc.

El generador que yo usarΓ© serΓ‘ Namso (https://namso-gen.com/)

INSERTE SU BIN: 548572xxxxxxxxxx

Y seΓ±alamos Fecha & CCV2 (si es todo generado)

Cantidad a crear 10 o las que quieran

Y le damos generar tarjetas.

β ΒΏQUE ES CHAVELO?

Se le denomina βChabeloβ a un bin que pese a que es viejo sigue funcionando en varias pΓ‘ginas.

β ΒΏCorremos riesgo al utilizar un bin?

Los BINS no son tan peligrosos, con la acciΓ³n de βbinearβ, solo se estafa a la empresa en donde la usaste la cc generada.

Las tarjetas no son de dueΓ±os reales, solo son algoritmos, que de alguna manera pasan en una
pΓ‘gina.

Lo mΓ‘s malo que te puede pasar, es que una pΓ‘gina bloquee tu IP real permanentemente o tu dispositivo.

La otra cosa, es que tu IP puede estar en una lista negra de SPAM, eso es
provocado usualmente por VPNβs como Hola que vende este tipo de datos de sus usuarios a otras compaΓ±Γ­as, lo cual es algo que Hola no te especifica. Igual, hay muchos mejores VPNβs .

Es muy raro que pase, binear no es peligroso, si es que no abusas o llegas a un extremo muy pero muy elevado.

β ΒΏQuΓ© es BAN?

Seguramente en los diversos grupos has escuchado esto, literalmente Ban significa prohibir esto es que se te pone una restricciΓ³n; ya sea total, parcial, temporal o permanente, al sitio en donde has realizado la compra.

β ΒΏQUE ES UN VPN?

Una red privada virtual (RPV).
En inglΓ©s: Virtual Private Network (VPN), en pocas palabras VPN es algo que ayuda a que tu verdadera direccion IP quede cubierta, por ejemplo si tu eres de Argentina y un bin pide IP de Rusia, deberemos descargar un VPN como Tunnelbear para cambiar nuestra direccion a alli, los VPNs son faciles de usar y son una parte fundamental para usar bins, sin ellos no podremos usar la mayoria de ellos.
Existen varios vpns algunos son de paga, y otros gratuitos como Vyprvpn y tunnelbear entre otros. ZeroVPN, VyprVPN, TunnelBear, Hotspot Shield, HMA.

β ΒΏQUE ES IP?

IP = Internet Protocol, o simplemente tu direcciΓ³n de Internet, todos nuestros dispositivos
conectados a internet poseen uno otorgado gracias a la red a la que estamos conectados. La IP en
algunos casos puede seΓ±alar la locaciΓ³n exacta en la que estamos ubicados.

β ΒΏQUE SON LIVES?
Las lives son tarjetas de crΓ©dito aprobadas por el mercado, es decir, tienen fondos. EstΓ‘s sirven para hacer el pago con mΓ‘s seguridad.

β ΒΏQUE ES EXTRAPOLACIΓN?
Extrapolar es cuando sacamos un bin a partir de una tarjeta de credito existente, por ejemplo:

3764010x5xxx03x
37640101x526xxx
3764010xx5x6xx7
3764010xxx2xxx7

β ΒΏCΓMO EXTRAPOLAR UNA βCCβ GENERADA A PARTIR DE UN BIN?

Esto sirve para que vuelva a funcionar la tarjeta generada que utilizaste, es muy importante que la guardes, para que le vuelvas a dar una utilidad y disfrutar de ella. Tienes un bin, por ejemplo: 531321xxxxxxxxxx (Deezer Jalando), y con base a Γ©ste, generas un par de tarjetas. A partir de que generas dejan de llamarse bins y pasan a ser
tarjetas de crΓ©dito. Escoges una al azar por ejemplo: 5321321654829183

Te vas a la pagina de deezer y al registrar dicha tarjeta que hayas escogido, pasa al primer intento para crearla, pero despuΓ©s de un tiempo no funciona el bin.

Lo que haremos serΓ‘ extrapolar la tarjeta que pasΓ³ a la primera al crear la cuenta.

Lo haremos (extrapolar), eliminando los ΓΊltimos 6 digitos de la tarjeta, Ejemplo: tenΓ­amos esta: 5321321654829183 y ahora pasa a ser esto:

5313216568xxxxxx

Generas de nuevo para calar en deezer y ya esta, volviΓ³ a pasar.`
enviarimagencap(imagebin1,bin1)
		break
		
		case 'extrapolacion':
					case 'extrapolaciΓ³n':
	  				case 'extrapolar':
					case 'extrapolarunbin':
					case 'extrapolar_un_bin':
					case 'extrapolar-un-bin':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin2 = fs.readFileSync('./binners/extrapolacion.jpg')
		const bin2 = `β ΒΏQUE ES EXTRAPOLACIΓN? β

Extrapolar es cuando sacamos un bin a partir de una tarjeta de credito existente, Por Ejemplo:

3764010x5xxx03x
37640101x526xxx
3764010xx5x6xx7
3764010xxx2xxxxx

Hay 3 mΓ©todos de extrapolaciΓ³n: bΓ‘sica,  y avanzada.

π° πππ¦πππ:

Consiste en 2 tipos de extrapolaciΓ³n:

Similitud. 
ActivaciΓ³n.

β ACTIVACIΓN

Simplemente tomas una tarjeta Generada con tu bin carbon y cambias los ultimos 6 digitos por la letra π

Ejemplo:

Tarjeta Usada: 5292202302315781

Resultado: 5292202302xxxxxx 

β SIMILITUD

Requiere tener 2 CC del mismo BIN, que son:
 
T1: 5292203820803126
T2: 5292207483033368

Debemos separar los 6 primeros nΓΊmeros de la CC:

[529220] [3820803126]
[529220] [7483033368]

Y, se van a fijar en el segundo grupo:

[3820803126] y [7483033368]

DespuΓ©s, van a comprobar SIMILITUDES entre estos dos, es decir, vas al segundo grupo que se separΓ³:
 
[3820803126]
[7483033368]

Ordenarlas de este modo, y despuΓ©s, comparar.Si tienen el mismo nΓΊmero, se quedan iguales, si no, se reemplazan por una X, es decir:

T1: [3820803126]
T2: [7483033368]

Quedaria asi: [xxxxxx3xxx]

Ahora, juntas el bin con tu resultado: 

New Bin: 529220xxxxxx3xxx

Y ese es tu nuevo bin extrapolado

π° ππ©ππ‘π­πππ:

Esta es una compleja, pero muy buena para generar lives.
Muy poca gente la conoce, ya que esta fue extraΓ­da de el software de generaciΓ³n de tarjeta SoFlA de un banco b10*sum:

T1: 5292208177212441 
T2: 5292204657663815 

Para este mΓ©todo, debemos usar ΓΊnicamente los 10 dΓ­gitos de dos CCs. 
Pero, como hago si las CCs tienen diferentes nΓΊmeros? 
Bueno. Del tercer grupo, solo se usarΓ‘n los 2 nΓΊmeros de la tarjeta.

5292 2081 x72x xxxx 
5292 2081 x76x xxxx

Se suman

7+2= 09 
7+6= 13
 
A partir de estos resultado, se divide el nΓΊmero entre 2: 

7+2= 09Γ·2=4.5 
7+6= 13Γ·2=7.5 

DespuΓ©s, se multiplica por 5. 

7+2= 09Γ·2=4.5=22.5 
7+6= 13Γ·2=7.5 =37.5 

Si existe un decimal (.) y el nΓΊmero es de dos cifras, se borra el decimal. 

Y el resultado se suma: 

22+37 =59 

AsΓ­ que terminaria:
 
5292 2081 59xx xxxx

β INDENTACION LOGICA:

5292208177212441
 
Debemos separar los 6 primeros nΓΊmeros de la CC:

[ 529220] [8177212441]

Y, se van a fijar en el segundo grupo

[8177212441]

DespuΓ©s, este grupo lo deben separar en modo (3-4-3), es decir: 

[817] [7212] [441]

Y, eliminan el nΓΊmero central: 

[8x7] [7xx2 [4x1] 

DespuΓ©s, ordenan el BIN con el resto: 

Resultado Final: 5292208x77xx24x1

β MATERIALDINVERTER

Este es algoritmo privado el cual afecta a las tarjetas generadas despuΓ©s de mediados del 2017, fue tomado del software SoFlA del Banco de BogotΓ‘. 

Este es el mas, mas complejo de todos y tiene un 100% de seguridad de sacar lives si lo usas bien. 

Este mΓ©todo requiere 2 CCs, las cuales comΓΊnmente son expedidas entre Octubre 2016 a Febrero 2017. 
AsΓ­ que:

T1: 5292208177212441 
T2: 5292204657663815

Tienes que separar T1 y T2 en 2 grupos de 8 digitos 

T1:[52922081 [77212441 
T2:[52922046 [57663815 

Ahora, vas a agarrar T2 y vas a ordenarlo del siguiente orden para poder multiplicarlo 
5Γ5= 25 
2Γ7= 14 
9Γ6= 54 
2Γ6= 12 
2Γ3= 6 
0Γ8= 0 
4Γ1= 4 
6Γ5= 30 

Vas a escribir cada resultado en una lΓ­nea pegado: 
2514541260430

Como pueden ver, hay 13 nΓΊmeros, debemos hacer que sean 8, asΓ­ que borramos los ΓΊltimos 

5 para que nos queden 8 que serΓ­an: 

Nos queda: 25145412 

Ahora, vamos a pegar el primer grupo con nuestro resultado: 

=5292204625145412 

Ahora, vamos a realizar extrapolaciΓ³n basica, similitud entre T1 y el resultado, por eso, separamos: 

T1: 5292208177212441 

R1: 5292204625145412 

Nuestro resultado seria: 529220xxxxxxx4xx 

Ahora, si el ΓΊltimo dΓ­gito termina siendo una X, este se reemplaza por 1 

El resultado final serΓ­a: 529220xxxxxxx4x1`
enviarimagencap(imagebin2,bin2)
		break
		
		case 'extrapolacionhq':
case 'extrapolacion-hq':
case 'extrapolacion_hq':
case 'extrapolaciΓ³nhq':
case 'extrapolaciΓ³n-hq':
case 'extrapolaciΓ³n_hq':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin3 = fs.readFileSync('./binners/extrapolacionhq.jpg')
		const bin3 = `β METODO PARA SACAR LIVE FAST SIN BOT SIN NADA , Y PARA TENER LA CERTITUD QUE JALA O ESTA REALMENTE LIVE USA CAROL O CUALQUIER OTRO BOT O CHECKER WEB , SI TE DA DIED EL BIN NO SIRVE O LO HICISTE MAL 

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

β NOTA EL METODO ESTA FULL Y LLEGA A SACAR CCS CON SALDO.`
enviarimagencap(imagebin3,bin3)
		break
		
		
		
		case 'verificarunbin':
					case 'verificar_un_bin':
	  				case 'verificar-un-bin':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin4 = fs.readFileSync('./binners/verificarbin.jpg')
		const bin4 = `Bueno geys. En esta oportunidad les enseΓ±are a Verificar su BIN
Primero necesitaremos un BIN. La ves pasada les enseΓ±e como sacarlo xd.

Para ahorrar toda esa clase usaremos al bot del grupo, bueno una ves obtenido el BIN ( 410453 ). 

Luego nos dirigimos a https://www.bincodes.com/bin-checker/

Una ves abierta la pagina. Buscamos el apartado Bank Identification o en espaΓ±ol ( NΓΊmero De IdentificaciΓ³n ).Y ahi colocaremos nuestro BIN ( 410453 )

Ahora tendremos que validar,completar el Captcha.

Una ves hecho esto, damos clic en la opciΓ³n CHEQUE.

Esperamos unos minutos y nos saldra la informaciΓ³n de nuestro BIN.

Resultado de la validaciΓ³n de BIN

410453 es un BIN vΓ‘lido.

Detalles del BIN

COMPARTIMIENTO: 410453

Banco emisor: KEMBA CREDIT UNION, INC.

Marca de carro: VISA

Tipo de tarjeta: CRΓDITO

Nivel de tarjeta: CLΓSICO

Nombre de paΓ­s: ESTADOS UNIDOS

BY: @JOSEPHBINNERZ`
enviarimagencap(imagebin4,bin4)
		break
		
		case 'queeslive':	
case 'que_es_live':
case 'que-es-live':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin5 = fs.readFileSync('./binners/queeslive.jpg')
		const bin5 = `-Una live es una Cc que serΓ‘ aprobada en el lugar de donde es el bin

Una live igual es una cc que tiene fondos.

ΒΏCΓ³mo sacar una live?

Las Lives se pueden sacar de diferentes maneras

1- Una live se puede sacar desde un bot de Telegram ya sea gratuito o de paga, esos son los checkers spam [Anti Spam]

2- Otra forma de sacar una Live es comprando un checker web, esos son checkers que no tienen [Anti Spam] y puedes cargar varias ccs sin necesidad de esperar un molesto [Anti Spam]

ΒΏQuΓ© es un checker y cuanto valen?

-Un checker es un sistema el cual se encarga de verificar que una cc estΓ‘ live

-El precio de un checker varΓ­a de cada dueΓ±o del checker

ΒΏQuΓ© es un Gate? Un Gate es un lugar especifico para meter una cc, existen varios tipos de Gate como:

-Multigata

-CVV gate

-CCN GATE

ΒΏQuΓ© es CCN Y CVV?

-Una CCN es una cc que tiene correcto los 16 dΓ­gitos y la fecha correcta pero el cΓ³digo de seguridad es incorrecta

-Una CVV es una cc que tiene todo correcto

ΒΏPara quΓ© sirve una CVV?

La CVV sirve para hacer compras fΓ­sicas u comprar algΓΊn servicio sin riesgo a que el mismo se caiga a las semanas o dΓ­as.`
enviarimagencap(imagebin5,bin5)
		break
		
case 'iban':
	  case 'sepa':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin6 = fs.readFileSync('./binners/iban.jpg')
		const bin6 = `β οΈ| MΓ©todo Iban.

Bueno chicos hoy les voy a enseΓ±ar un metodo sencillo que puede sacarlos de un apuro, se llama Iban o Sepa...

ΒΏY que es esto?

El International Bank Account Number "CΓ³digo Internacional de Cuenta Bancaria" en su traducciΓ³n al espaΓ±ol, es un cΓ³digo alfanumΓ©rico que identifica una cuenta bancaria determinada en una entidad financiera en cualquier lugar del mundo. 
Es decir, a cada cuenta le corresponde un ΓΊnico IBAN mediante el cual se identifica el paΓ­s, la entidad, la oficina y la cuenta. 
Se trata de un estΓ‘ndar del ComitΓ© Europeo de EstΓ‘ndares Bancarios, que a su vez cumple con el estΓ‘ndar ISO 13616.

A continuaciΓ³n les mostrare una lista de paΓ­ses que usan este metodo (esta actualizada asΓ­ que aprecienlo)

Caracteres Albania [π¦π±]~[28]: AL35202111090000000001234567     
  Caracteres Andorra [π¦π©]~[24] AD1400080001001234567890  
Caracteres AzerbaiyΓ‘n [π¦πΏ]~[28] AZ96AZEJ00000000001234567890         
 Caracteres BahrΓ©in [π§π­]~[22] BH02CITI00001077181611  
Caracteres BΓ©lgica [π§πͺ]~[16]
BE71096123456769Β  
Caracteres Bosnia [π§π¦]~[20]: BA275680000123456789 
Caracteres Brasil [π§π·]~[29]: BR1500000000000010932840814P2          
 Caracteres Bulgaria [π§π¬]~[22]:
BG18RZBB91550123456789 
Caracteres Costa Rica [π¨π·]~[22] CR37012600000123456789  
Caracteres Dinamarca [π©π°]~[18]: DK9520000123456789 
Caracteres Alemania [π©πͺ]~[22]: DE91100000000123456789  
Caracteres Salvador [πΈπ»]~[28]:
SV43ACAT00000000000000123123     
 Caracteres Estonia [πͺπͺ]~[20]:
EE471000001020145685Β    
Caracteres Finlandia [π¦π½]~[18]:
FI1410093000123458Β Β 
Caracteres Francia [π¨π΅]~[27]: FR7630006000011234567890189Β   
  Caracteres Georgia [π¬πͺ]~[22]:
GE60NB0000000123456789Β   
Caracteres Polonia [π΅π±]~[28]:
PL10105000997603123456789123  
  Caracteres Portugal [π΅πΉ]~[25]:
PT50002700000001234567833  
Caracteres Rumania [π²π©]~[24]:
RO09BCYP0000001234567890  
Caracteres Suiza [π¨π­]~[21]:
CH5604835012345678009 
Caracteres Serbia [π·πΈ]~[22]
RS35105008123123123173Β    
Caracteres Eslovenia [πΈπ?]~[19] SI56192001234567892`
enviarimagencap(imagebin6,bin6)
		break
		
		case 'iban':
	  case 'sepa':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin7 = fs.readFileSync('./binners/iban.jpg')
		const bin7 = `β οΈ| MΓ©todo Iban Parte Β²

~Basicamente esa es la teorΓ­a de que es Iban π.

ΒΏPara que funciona?

β’Se utiliza como metodo alternativo al Bin, ya que puede que funcione de diferente manera en paginas destinadas a otros servicios como es el caso mas comΓΊn con Napster.
 Su uso puede varias, ya es cuestiΓ³n de ustedes Intentar.

Iba a utilizar Napster para enseΓ±arles, pero Alemania fue baneada de sus servidores asΓ­ que no funciona Pero no se preocupen cualquier pagina con un dominio Aleman o de los paΓ­ses anteriormente mostrados servira.

ΒΏQue necesitamos para este metodo?

[β] VPN activado en Alemania (puede que funcione cualquier VPN pero recomiendo uno como HMA).

[β] Entrar en la pΓ‘gina fake-it.ws y seleccionar la Bandera de Alemania.

[β]  Intentar en sitios que acepten este tipo de pago. 

[1οΈβ£] En primer lugar con nuestro VPN Activado, ingresamos a fake-it.ws

[β οΈ] Chicos las identidades falsas son clave en este mundo. 

[β οΈ]Algunas paginas piden minimo algo de relaciΓ³n entre nombre y vivienda

[β οΈ] Incluso numero de celular, que aunque no lo verifiquen puede llegar a molestar buscarlo.

[β] AsΓ­ que usen fake-it.ws

[β] La interfaz de la pagina es bastante intuitiva,fΓ‘cil de entender y usarla.`
enviarimagencap(imagebin7,bin7)
		break
		
		case 'introduccionbins':
case 'introduccion_bins':
case 'introduccion-bins':
case 'introducciΓ³nbins':
case 'introducciΓ³n_bins':
case 'introducciΓ³n-bins':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin8 = fs.readFileSync('./binners/introbins.jpg')
		const bin8 = `π introducciΓ³n Bins

π± Glosario:

β ΒΏQuΓ© es un Bin?

- Un bin son los 6 primeros nΓΊmeros de una tarjeta lo cual identifica al banco y al tipo de tarjeta que es.Β Los bins nos permiten generar tarjetas de crΓ©dito o debito.

β ΒΏDonde encontrar bins?

- Los bins se pueden encontrar en grupos de whatsapp, facebook, twitter y telegram. Como son bins pΓΊblicos, lo mΓ‘s probables es que esten quemados.

β ΒΏCΓ³mo sacar bins funcionales?

- Si deseas un bin privado la unica manera que existe es buscando foros, grupos donde pasen ccs (no importa que esten quemadas), sacarles extras y ponerse a calar!

Ejemplo β

β CC: 5240821096213085|02|2029|824
β BIN: 524082109621xxxx

β ΒΏEn quΓ© pΓ‘ginas jalan?

- Bueno, esto depende de donde mucho del bin. Hay bins que jalan en una sola pagina ejemplo (crunchyroll) y hay otros que son multifuncionales ejemplo (crunchyroll, mubi, Onlyfans, entre otras).

β ΒΏCΓ³mo generar ccs?

- Ingresaras a https://namso-gen.com/ copiaras tu bin y le darΓ‘s al botΓ³n de generar.

-  Recuerda que estas tarjetas solo son generadas!

β ΒΏQue extrapolar?

- Existen muchos mΓ©todos, pero en esta introducciΓ³n, no la veremos. Si deseas saber mucho mΓ‘s a detalle que extrapolar, usa al bot o apk del grupo, ahi encontrarΓ‘s una informaciΓ³n mucho detallada https://www.mediafire.com/file/oxlgjgmlgw2uh6c/Bineria+Universal.apk/file

β ΒΏQuΓ© es un vpn?

- Pues basicamente un vpn es una herramienta que usaremos casi siempre xd
- Con la vpn nosotros podremos crear cuentas premiun

Ejemplo β

Queremos obtener una cuenta de tidal premiun, pero el bin es de Colombia y yo soy de Venezuela. Lo que haremos serΓ‘ usar un vpn que nos permita cambiarnos de pais (direcciΓ³n ip)

β ΒΏQuΓ© es live?

BΓ‘sicamente las lives son tarjetas de crΓ©dito aprobadas por el mercado, es decir, tienen fondos. EstΓ‘s sirven para realizar pequeΓ±as, grandes compras fisicas y/o renovar suscripciones, informaciΓ³n mΓ‘s detalladas del tema de lives en el bot.

β  PΓ‘guinas para sacar lives manualmente

https://karmeyhesed.org/
https://dzi.org/make-a-donation 
https://www.habitat.org/ 
https://secure.givewell.org/

β ΒΏCΓ³mo sacar lives manualmente?

- Se registran en cualquiera de esas paguinas como una paguina cualquiera, luego donas o haces una compra menor (cargo o monto pequeΓ±o). Si les da decline significa que esta muerta y si les sale Thanks you o code incorrect significa que esta viva.

- Como dato adicional les invito a unirse a mi canal de telegram subo bins y mΓ©todos interesantes https://t.me/bineriauniversal

β ΒΏQuΓ© es chavelo?

-Se le denomina βChabeloβ a un bin que pese a que es viejo sigue funcionando en varias pΓ‘ginas.

β ΒΏCorremos riesgo al utilizar un bin?

- Los bins no son tan peligrosos, con la acciΓ³n de binear, solo se estafa a la empresa en donde la usaste la cc generada.

- Las tarjetas no son de dueΓ±os reales, solo son algoritmos, que de alguna manera pasan en una pΓ‘gina.

- Lo mΓ‘s malo que te puede pasar, es que una pΓ‘gina bloquee tu IP real permanentemente o tu dispositivo.

- La otra cosa, es que tu IP puede estar en una lista negra de SPAM, eso es provocado usualmente por vpns como holavpn que vende este tipo de datos de sus usuarios a otras compaΓ±Γ­as, lo cual es algo que Hola no te especifica. Igual, hay muchos mejores vpns .

- Es muy raro que pase, binear no es peligroso, si es que no abusas o llegas a un extremo muy pero muy elevado.

β ΒΏQuΓ© es ban?

- Seguramente en los diversos grupos has escuchado esto, literalmente Ban significa prohibir esto es que se te pone una restricciΓ³n; ya sea total, parcial, temporal o permanente, al sitio en donde has realizado la compra.

- Bueno bros espero les haya servido esta breve introducciΓ³n, recuerda que si tienes dudas puedes contactarme, o preguntarle a cualquier miembro del grupo con gusto ellos te ayudarΓ‘n.`
enviarimagencap(imagebin8,bin8)
		break
		
		case 'introduccioncarding':
case 'introduccion_carding':
case 'introduccion-carding':
case 'introducciΓ³ncarding':
case 'introducciΓ³n_carding':
case 'introducciΓ³n-carding':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin9 = fs.readFileSync('./binners/introcarding.jpg')
		const bin9 = `Bueno aprovechando que el amigo SP3L1N4X  dejo una pequeΓ±a introduccion al Carding

Manual de Carding

1.- IntroducciΓ³n
2.- Carding
3.- Estructura de las Tarjetas de CrΓ©dito
4.- Tengo el numero que hago?
5.- Quiero tener mΓ‘s NΓΊmeros de tarjetas rΓ‘pidamente
6.- Trashing
7.- El Verdadero Peligro
8.- Herramientas



Disclamer: NO asumo ninguna responsabilidad debida al mal empleo de la informaciΓ³n aquΓ­ contenida, puesto que este texto solamente tiene fines educativos y en ningΓΊn caso pretende incitar a nadie a cometer ningΓΊn delito ya sea informΓ‘tico o de otra Γ­ndole.



Buenas con todos los que puedan leer este documento.


1.- IntroducciΓ³n

En este manual voy a indicar que es el carding? Algunos tΓ©rminos del mismo como utilizarlo y sacar provecho Smiley

Comencemos...................

2.- Carding

Este es un concepto que indica lo mΓ‘s claramente posible que es y de que se trata el carding

Carding: Es el uso ilegitimo de las tarjetas de crΓ©dito, o de sus nΓΊmeros, pertenecientes a otras personas. Se relaciona con el hacking, porque para conseguir nΓΊmeros de tarjetas de crΓ©ditos, una de las formas es utilizando Ingenieria Social y sobre todo nuestra inteligencia (esto es lo mas importante)

Se debe tener mucho cuidado en hacer esto ya que nos podemos meter en muchos lΓ­os.
Con nuestras tarjetas de crΓ©dito debemos ser cuidadosos ya que alguien puede leer este documento antes que uno de ustedes y ser capaz de estafarlos.

Se puede recuperar el dinero talvez pero para eso tendrΓ­an que hablar con el administrador del sitio donde se realizo el pago del artΓ­culo solicitando la IP de donde se hizo la compra y luego de todo esto tenemos que demostrar que nosotros no hicimos la compra del mismo.

El carding consiste en comprar usando la cuenta bancaria o la tarjeta crΓ©dito de otro, esto se consigue con un poco de ingenieria social y mucha perseverancia.

Cuando alguna persona utiliza carding para comprar objetos materiales se suele utilizar una direcciΓ³n falsa con una identificaciΓ³n tambiΓ©n falsa, es decir todo el formulario de compra lo llena con datos falsos.
De esta manera el comprador quedara esperando en el lugar indicado la entrega del material como si se tratara de su residencia.

La filosofΓ­a de los carders se basa en que existe mucha gente que tiene grandes cantidades de dinero que no cae nada mal utilizar algo de ese dinero para comprar algunas cositas para cada uno de ellos, ya que posiblemente el dueΓ±o de la tarjeta ni se de cuenta de esta compra que el no la hizo.

Si ustedes estΓ‘n pensando en comprar por Internet programas o suscripciones y piensan que utilizando el carding serΓ‘ muy fΓ‘cil pues tienen toda la razΓ³n resulta muy sencillo.
En este manual se conseguirΓ‘ revisar los mΓ©todos que utilizan los carders para hacerse de los nΓΊmeros de tarjetas y burlar las seguridades para poder comprar sin ningΓΊn tipo de problemas.

Tienen que saber que el robo de una tarjeta de crΓ©dito es un delito universal por lo que puede tener causas penales muy graves si no quieres irte de paseo a Cana..da (para otros paΓ­ses CΓ‘rcel) no intenten hacer nada de esto.


3.- Estructura de las Tarjetas de CrΓ©dito

Para mi esta es la parte mΓ‘s importante ya que aquΓ­ sabremos como funcionan las tarjetas de crΓ©dito porque se puede hacer programas para que nos den nΓΊmeros validos pero lo importante es saber como es que se hace todo eso

Comencemos.....

Los nΓΊmeros de las tarjetas se forman de 16 dΓ­gitos divididos en 4 grupos de 4 dΓ­gitos pueden tener valores del 0 al 9 los primeros 4 dΓ­gitos sirven para determinar el banco.

El resto de nΓΊmeros se pone al azar no mentira vamos a ver el algoritmo

Hagamos un ejemplo de la creaciΓ³n de un nΓΊmero de tarjeta

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

Luego de esto se multiplica los 2 primeros dΓ­gitos entre si luego los siguientes y asi sucesivamente para que sea mas claro quedarΓ­a de la siguiente forma:

5*8=40
2*4=8
3*4=12
8*6=48

Si tenemos cifras mayores a 9 se suma los nΓΊmeros es decir las cifras reducidas 8+5=13 entonces
1+3=4

En el ejemplo quedarΓ­a asi:

5*8=40 4+0=4
2*4=8 8
3*4=12 1+2=3
8*6=48 4+8=12 1+2=3

En resumen los nΓΊmeros que nos quedan son:

4
8
3
3


Luego de esto suma los nΓΊmeros pares que descartamos al principio y sΓΊmalos con estos el resultado debe ser un nΓΊmero mΓΊltiplo de 10 para que el nΓΊmero sea correcto:

4+8+3+3+1+0+3+5+9+2+7+5=50


Si no nos diera un numero correcto como va a suceder en la mayorΓ­a de los casos lo recomendable es dejar el ultimo casillero libre y jugar con este digito hasta que nos de un numero valido.

Esta es una de las formas de conseguir un numero de tarjeta de crΓ©dito es decir adivinando a ver si nos sale otra puede ser esperar pacientemente el fin de mes el momento que llega el corte de pago de la tarjeta del vecino nos robamos su correspondencia y listo ahΓ­ tenemos un numerito.

O buscamos dentro de su basura (esto creo que es mas feo) pero igual funciona ya que no suelen romper los cortes de tarjeta de crΓ©dito simplemente los botan arrugados a la basura pero igual obtenemos el numero deseado.

Otra de las formas es creando un portal de Internet donde ponemos artΓ­culos a la venta se explicara esto mas adelante

4.- Tengo el numero que hago?

El momento de realizar una compra en lΓ­nea nos solicitan una serie de datos pero los mas importantes es decir los que nunca faltan son estos:

Nombre.
Numero de Cuenta.
Fecha de ExpiraciΓ³n.
Tipo de tarjeta.
Numero de verificaciΓ³n

Estos datos son muy fΓ‘ciles de conseguir (a veces)

El nombre es el de la victima sencillo de conseguir, el nΓΊmero de su tarjeta es un poco mΓ‘s complicado pero hay formas revisando su correspondencia por ejemplo

La fecha de expiraciΓ³n la podremos conseguir haciΓ©ndonos pasar por el banco con los datos que ya conocemos podremos decirle que vamos ampliar su cupo por sus pagos puntuales o cualquier cosa esto ya queda a su imaginaciΓ³n lo que si nos queda claro es que conseguir estos datos resulta sumamente sencillo.

Tipo de Tarjeta ya lo sabemos ya revisamos su correspondencia revisar paso uno Wink
Para reconocer el tipo de tarjeta se puede utilizar, el primer digito de la tarjeta que nos indica el tipo de la misma.

Si el primer numero es....

3 ->American Express (15 dΓ­gitos)
4 ->VISA (13 o 16 dΓ­gitos)
5 ->Mastercard (16 dΓ­gitos)
6 ->Discover (16 dΓ­gitos)

Con estos datos ya se puede comprar algo en lΓ­nea generalmente los carders realizan una compra de algΓΊn software pequeΓ±o que sea de descarga o una subscripciΓ³n para ver pornografΓ­a esto lo hacen para probar si la tarjeta funciona o no .

Si el momento de la compra nos solicitaran mas datos ya saben que hacer es mas creo que al momento de revisar su correo no tendrΓ‘n estos datos tendrΓ‘n muchos mas.


5.- Quiero tener mΓ‘s NΓΊmeros de tarjetas rΓ‘pidamente

Como aquΓ­ se a explicado bastante me canse y ahora hagan un repaso de lo que aprendieron hasta aquΓ­ y piensen en una posible victima hasta mientras me voy hacer un juguito y regreso para seguirles explicando unas cositas bastante interesantes.


Bueno despuΓ©s de estos 15 minutos de tranquilidad volvamos en lo que estΓ‘bamos..


Para obtener tarjetas podrΓ­a entrar en juego la famosa Ingenieria Social que tal si llamamos a nuestra victima y decimos algo como lo siguiente:

βBuenas tardes, soy Camilo Albornoz de la secciΓ³n fraudes de Master Card , hemos detectado un posible uso fraudulento de su tarjeta, por lo que necesitamos que nos indique todos los datos de la misma, para realizar una comprobaciΓ³nβ

Este tipo de llamada es bueno realizarla en horas de trabajo ya que la persona se encuentra preocupada con la cabeza enfocada solo en su trabajo por lo que puede resultar un buen momento para que nuestra victima caiga en esta trampa.

Si nos llamaran de un banco diciΓ©ndonos algo parecido a lo que escribΓ­ anteriormente lo que tienen que hacer es pedir que les repita su nombre completo solicitarle el numero y devolver la llamada de esta manera se evitaran este tipo de estafa.

Todos los que lean pilas que ya estΓ‘n avisados de cΓ³mo funciona este mΓ©todo

Aunque parezca mentira existe gran cantidad de gente que cae en este juego y dan todos los datos que les solicitan sin ningΓΊn tipo de inconveniente.

Para verificar si la tarjeta es ΓΊtil se puede hacer una llamada a la entidad bancaria de donde pertenece la tarjeta nos hacemos pasar como dueΓ±os de la tarjeta indicando que quisimos hacer una compra y nuestra tarjeta fue rechazada para verificar si hablan con el dueΓ±o de la tarjeta pedirΓ‘n verificar unos datos harΓ‘n preguntas sencillas como cual es el numero de tarjeta, numero de verificaciΓ³n esto ya no es problema para nosotros ya que tenemos toda la informaciΓ³n que conseguimos antes al hacernos pasar como empleados de la entidad que emite la tarjeta

La informaciΓ³n que conseguimos aquΓ­ es fundamental ya que podremos saber si la tarjeta es principal o es un adicional si es de uso nacional o mundial cuanto es el cupo que tiene la misma , etc.

Las compras que suelen hacer los carders son mediante Internet o telefΓ³nicamente no de montos muy altos para que no se pida confirmaciΓ³n al dueΓ±o de la tarjeta y para no levantar sospechas

El carder es muy cuidadoso no puede andar gritando al mundo sus hazaΓ±as porque el es un ladrΓ³n el esta robando , si hace un pedido de un articulo no puede pedir otro y otro articulo a la misma direcciΓ³n tiene que ir rotando de lugares .

Generalmente si el encargo esta en la oficina de correos el ira cuando no haya nadie si estuviera mucha gente preferirΓ‘ no arriesgarse y ni siquiera acercarse mas al lugar ya que podrΓ­a resultar peligroso para el

Un carder nunca pide algo gigante no se comprara un carro para que le traigan por DHL ni nada extremadamente caro (un collar de oro de 18 kilates) tampoco algo muy baratito pero estarΓ­a bien que se compre una palm ultimo modelo ese es un buen carder.

El problema que se podrΓ­a presentar es que el carder cada vez quiere comprar algo mas y no para se vuelve mas adicto por el riesgo y por que se esta comprando buenas cositas pero no se da cuenta que talvez lo tiene fichado y prΓ³ximamente le haga una visita la policΓ­a

Los lugares de entrega de tus pedidos:

NOTA.- NUNCA HAGAS QUE TE ENTREGUEN EN TU CASA

Pero si lo puedes hacer al azar escogiendo alguna persona de la guΓ­a telefΓ³nica claro que no este tan lejos de tu casa eso si necesitas hablar muy bien para explicar a alguien porque le llego algo tuyo en su casa debes ser bueno para tratar con la gente y no ponerte nervioso.
La casa de un amigo prΓ³ximo a cambiarse de casa que te ayude con este favor antes de irse difΓ­cil esta forma pero puede ocurrir.

Pedir que lo envΓ­en a una direcciΓ³n de un condominio generalmente lo dejan al guardia ya que asumen que el conoce a toda la gente del condominio y por seguridad a la persona que deja la correspondencia no la dejaran pasar porque son βOrdenes de la Administradoraβ y quien serΓ‘ la ΓΊnica persona que ira a pedir el paquete?? Exacto el carder.


Bueno estas son una de las tantas formas en las que pueden recibir sus compras seguramente a ustedes se les ocurrirΓ‘ muchas mas .



6.- Trashing

Me parece un tema interesante y que no se lo ve regularmente aquΓ­ les explico de que se trata aunque entre las ideas que indique antes ya lo mencione.

Se trata de buscar y remover la basura de la victima que estas buscando es decir intentar encontrar estados de cuenta, cortes de pago, recibos, etc.

Por eso un sano consejo cuando boten algo importante rompanlo y botenlo si es posible haciendolo tiritas talvez piensen este tipo esta medio loco pero yo supe de alguien que quemaba sus papeles una vez por semana quien es el loco el o yo??

7.- El verdadero Peligro


Ahora con toda la tecnologΓ­a a nuestro alcance se pueden hacer muchas cosas , esto es lo que utilizan los carders necesitan saber programar y dos invitados muy importantes.

PHP + MySQL

PHP.- Lenguaje de programaciΓ³n web
MySQL.- Base de Datos trabaja excelente con PHP

Que es lo que hacen??

Se esmeran un par de horas programando un sitio de venta de artΓ­culos pueden ser de cualquier tipo deportivos, tecnolΓ³gicos, etc.

Con precios sumamente accesibles y con productos de excelente calidad la victima se emociona con esta verdadera gamga cuando va a adquirir un producto viene el mΓ©todo de pago el cual es con tarjeta de crΓ©dito.

La victima ingresa su tarjeta , nombres , numero de verificaciΓ³n todos los datos necesarios luego de esto el carder ya posee todo lo que necesita queda simplemente enviar un e-mail o hacer una llamada disculpΓ‘ndose y notificando que la transacciΓ³n no se realizo por no tener el articulo en stock o simplemente el momento que supuestamente hace la compra se le muestra un mensaje de error que diga algo similar a esto:
βNO SE PUDO CONCLUIR LA TRANSACCIONβ
La victima pensara que no paso nada pero nuestra base de datos ya se engordo un poco mas y con datos totalmente reales y listos para usar.


8.- Herramientas

Existen programas que nos ayudan a generar nΓΊmeros de tarjetas validos esto ahora tiempo a los carders


Estas herramientas son:

Fakeid

Te da otros datos de personas verificables, interesante para quienes no tienen habilidad de inventarse personalidades.

Para aquellos programas que no te brindan la fecha de expiraciΓ³n solo queda hacerlo manualmente, probando al mejor estilo brute forcing.

CCards

En caso de que quieran ver unos nΓΊmeros de tarjeta de crΓ©dito validos como ejemplo, vean el programa CCards.exe que les genera de una manera sencilla y rΓ‘pida estos nΓΊmeros


Credit Card Master 4

Este completo programa permite realizar una amplia cantidad de acciones destinadas al carding, genera numeros te ayuda viendo si el digito verificador es correcto y si no es asi no te preocupes ahi mismo te genera otro lo importante es que todos los datos estΓ©n correctos


Credit

Es un programa muy potente parecido al Credit Card Master aunque tiene interfaz grafica y tiene algunas otras utilidades como por ejemplo generar identidades falsas que como estuvimos viendo pueden ser de gran utilidad.


Bueno espero que toda la explicaciΓ³n del manual este clara y que les sirva para conocer el carding mΓ‘s a fondo.
Nunca olviden que esto es totalmente ilegal y que si no quieren meterse en lΓ­os no lo pongan en prΓ‘ctica suerte a todos.

Espero que les haya gustado, y espero que con esto mas o menos se de una ideita...


Saludos a todos Bic`
enviarimagencap(imagebin9,bin9)
		break
		
		case 'plataformasparacalar':
	  case 'plataformas_para_calar':
	  case 'plataformas-para-calar':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin10 = fs.readFileSync('./binners/plataformas.jpg')
		const bin10 = `100  PLATAFORMAS DONDE PUEDEN CALAR , VAMOS β

1 CRUNCHYROLL
2 PLEX 
3 TOPIC
4 HIDIVE
5 BRITBOX 
6 UMC TV
7 TIDAL
8 NAPSTER
9 HBO MAX 
10 HBO GO MΓXICO 
11 HBO ESPAΓA 
12 FΓBO TV
13 FANATIZ 
14 DIRECT TV GO MΓXICO
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
66 ONLYFANS π
67 ADOBE
68 PREZI 
69 WEBSHARE 
70 ACORN TV
71 PRIVATE  TΓNEL
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
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin11 = fs.readFileSync('./binners/vpn.jpg')
		const bin11 = `β VPN PREMIUN β

π TurboVPN

https://www.mediafire.com/file/qguhyliuqql4v93/Turbo_VPN.apk/file

π Ultra VPN

https://www.mediafire.com/file/xwl06cfqnkyh7p1/Ultra_VPN.apk/file

π Hola VPN

https://www.mediafire.com/file/si7o10xofgayewk/Hola_VPN.apk/file

π VPNhub

https://www.mediafire.com/file/j3lullhkk59y1vi/VPNhub.apk/file

π AdGuard VPN

https://www.mediafire.com/file/sh0dfwlxc87tfds/AdGuardVPN.apk/file

π TunnelBear

https://www.mediafire.com/file/ep0fv0l2yna9xzk/TunnelBear.apk/file

π± Cortesia De: @BineriaUniversal`
enviarimagencap(imagebin11,bin11)
		break
		
		case 'navegadores':
	  				case 'navegadoresprivados':
					case 'navegadores_privados':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin12 = fs.readFileSync('./binners/navegadores.jpg')
		const bin12 = `β Navegadores Privados β

π° DuckDuckGo

https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&hl=es_US&gl=PE

π° FireFox Focus

https://play.google.com/store/apps/details?id=org.mozilla.focus

π° Navegador Web Dolphin Browser

https://play.google.com/store/apps/details?id=mobi.mgeek.TunnyBrowser

π° Brave Browser

https://play.google.com/store/apps/details?id=com.brave.browser&hl=es_US&gl=PE

π° Cortesia De: @BineriaUniversal`
enviarimagencap(imagebin12,bin12)
		break
		
		case 'sitiossms':
	  				case 'sitiosms':
					case 'sitios_sms':
					case 'sitios-sms':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin13 = fs.readFileSync('./binners/sms.jpg')
		const bin13 = `π° SITIOS HQ PARA VERIFICACIΓN DE SMS DE BYPASS (ALGUNAS YA NO FUNCIONAN) π°

 βοΈΚα΄α΄α΄Ιͺα΄ α΄ α΄Ι΄ sα΄s: https://receive-a-sms.com/
 βοΈsα΄s Κα΄α΄α΄Ιͺα΄ α΄ ?Κα΄α΄: https://smsreceivefree.com/
 βοΈα΄Ι΄ΚΙͺΙ΄α΄ sα΄s: https://sms-online.co/
 βοΈΚα΄α΄α΄Ιͺα΄ α΄ sα΄s α΄Ι΄ΚΙͺΙ΄α΄: https://smsreceiveonline.com/
 βοΈΙ’α΄α΄ α΄ ?Κα΄α΄ sα΄s Ι΄α΄α΄Κα΄Κ: https://getfreesmsnumber.com/
 βοΈΚα΄α΄α΄Ιͺα΄ α΄ sα΄s: http://sms-receive.net/
 βοΈΚα΄α΄α΄Ιͺα΄ α΄ sα΄s α΄Ι΄ΚΙͺΙ΄α΄.Ι΄α΄α΄: https://www.receivesmsonline.net/
 βοΈ?Κα΄α΄ sα΄s α΄Κα΄α΄α΄s: http://www.freesmsverifications.com/
 βοΈ7 sΙͺα΄.Ι΄α΄α΄: http://7sim.net
 βοΈΚs3x: http://hs3x.com
 βοΈΚα΄α΄α΄Ιͺα΄ α΄ ?Κα΄α΄ sα΄s: http://receivefreesms.com/
 βοΈΚα΄α΄α΄Ιͺα΄ α΄ ?Κα΄α΄ sα΄s.Ι΄α΄α΄: http://receivefreesms.net/
 βοΈΚα΄α΄α΄Ιͺα΄ α΄ sα΄s α΄Ι΄ΚΙͺΙ΄α΄.ΙͺΙ΄: http://receivesmsonline.in/
 βοΈΚα΄α΄α΄Ιͺα΄ α΄ sα΄s α΄Ι΄ΚΙͺΙ΄α΄: https://receive-sms-online.com/
 βοΈsα΄α΄ sα΄s: https://www.smsver.com/
 βοΈΙ’Κα΄α΄α΄ Κ: https://www.groovl.com/
 βοΈsα΄s.sα΄ΚΚα΄Ιͺα΄α΄: http://sms.sellaite.com/
 βοΈsα΄Ι΄α΄ sα΄s Ι΄α΄α΄‘: http://www.sendsmsnow.com/
 βοΈΚα΄α΄α΄Ιͺα΄ α΄ sα΄s α΄Ι΄ΚΙͺΙ΄α΄.α΄α΄: http://receivesmsonline.eu/
 βοΈα΄Κα΄α΄α΄ Κ: https://www.proovl.com/numbers
 βοΈα΄Ι΄α΄Ι΄ sα΄s: https://anon-sms.com/
 βοΈΚΙͺα΄α΄ α΄Κ Ι΄α΄α΄Κα΄Κs: http://hidemynumbers.com/
 βοΈα΄ΙͺΙ΄Ι’α΄Κ: https://www.pinger.com/
 βοΈ?Κα΄α΄ α΄Ι΄ΚΙͺΙ΄α΄ α΄Κα΄Ι΄α΄: https://www.freeonlinephone.org/
 βοΈ5sΙͺα΄: https://5sim.net/
 βοΈsα΄Κα΄α΄ΚΚΚα΄ ?Κα΄α΄ α΄ ΙͺΚα΄α΄α΄Κ Ι΄α΄α΄Κα΄Κ: http: //www.freevirtu...r.skycallbd.com/
 βοΈα΄α΄α΄α΄α΄Κα΄ sα΄s: https://catchsms.com/
 βοΈsα΄s Ι’α΄α΄: http://smsget.net
 βοΈ1s2α΄: https://1s2u.com/
 βοΈΚα΄α΄α΄Ιͺα΄ α΄ sα΄s: http://getsms.org/
 βοΈα΄ ΚΙͺα΄α΄Κ: https://virtty.com/
 βοΈα΄α΄xα΄ α΄Ι΄Κα΄‘Κα΄Κα΄: http://www.textanywhere.net/
 βοΈΚα΄α΄α΄Ιͺα΄ α΄ sα΄s α΄Ι΄ΚΙͺΙ΄α΄.α΄α΄: http://receivesmsonline.me/
 βοΈα΄α΄α΄α΄α΄Κα΄ΚΚ α΄α΄α΄ΙͺΚs: https://www.temp-mails.com/
 βοΈα΄α΄Κα΄Κα΄sα΄ α΄ ΙͺΚα΄α΄α΄Κ Ι΄α΄α΄Κα΄Κ: http://www.virtualnumberbuy.com/
 βοΈ?Κα΄α΄ Κα΄α΄α΄Ιͺα΄ α΄ sα΄s α΄Ι΄ΚΙͺΙ΄α΄: http://freereceivesmsonline.com/
 βοΈΙ΄α΄α΄α΄Ι΄ sα΄s: https://sms.ndtan.net/
 βοΈsα΄s ΚΙͺsα΄α΄Ι΄: https://smslisten.com/
 βοΈ?Κα΄α΄ α΄ ΙͺΚα΄α΄α΄Κ sα΄s Ι΄α΄α΄Κα΄Κ: https://freevirtualsmsnumber.com/
 βοΈsα΄s α΄ΙͺΚα΄: https://smstibo.com/
 βοΈΚα΄α΄α΄Ιͺα΄ α΄ sα΄s Ι΄α΄α΄Κα΄Κ: https://receivesmsnumber.com/
 βοΈ?Κα΄α΄ sα΄s α΄α΄α΄α΄: https://freesmscode.com/
 βοΈα΄Ι΄ΚΙͺΙ΄α΄ sα΄s Ι΄α΄α΄Κα΄Κs: https://smsnumbersonline.com/
 βοΈsα΄s Κα΄α΄α΄α΄α΄Ιͺα΄Ι΄: https: //smsreceiving.com
 βοΈα΄Κα΄sΚ α΄α΄ΚΙͺΚα΄ https://es.mytrashmobile.com/nu`
enviarimagencap(imagebin13,bin13)
		break
		
		case 'grupobins':
	  			  case 'grupo_bins':
					case 'grupo-bins':
					case 'bineriauniversal':
					case 'bineria-universal':
					case 'bineria_universal':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin14 = fs.readFileSync('./binners/bineriauniversal.jpg')
		const bin14 = `βΎοΈBineria Universal - Grupo Oficial

βΎοΈContenido: Carding - Binning

β½Bins
β½Lives
β½MΓ©todos
β½Tutoriales
β½Cosas Extras

βΎοΈAprenderΓ‘s A Sacar Todo Tipo De Cuentas

β½Disney+
β½HboMax
β½Stars+
β½Paramount+
β½Acorntv
β½Prime Video
β½Netflix (aveces)
β½Crunchyroll
β½Funimation
β½Hulu
β½Spotify
β½Deezer
β½Napster
β½Tidal
β½Twitch
β½IpVanish
β½Duolingo Plus
β½Onlyfans
β½NordVpn
β½ExpressVpn
β½Fanatiz
β½FΓΊtboTv
β½Apple Music
β½PayPal
β½Canva
β½Hootsuite
β½Noggin

βΎοΈLink: https://chat.whatsapp.com/DwvnxoVjSoz4246vFbZBCP

βΎοΈNota:

β½El Grupo Se Creo con La IntenciΓ³n De Compartir Conocimiento,MΓ©todos y Bins Funcionales.

β½No Enlaces - Spam - Ventas - Presumir - Cambios.

β½Contamos Con Un Bot De Autoayuda.

β½TambiΓ©n sorteamos NΓΊmeros Para WhatsApp y Cuentas Premiun.

β½Porfavor Respetar Las Reglas Del Grupo y Disfrutar Tu EstadΓ­a.`
enviarimagencap(imagebin14,bin14)
		break
		
		case 'miembros':
	  			  case 'staff':
					case 'member':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin15 = fs.readFileSync('./binners/bineriauniversal.jpg')
		const bin15 = `ππππ¦ ππ’π§ππ«π’π ππ§π’π―ππ«π¬ππ₯:

ππ­πππ πππ’ππ’ππ₯ ππ ππ’π§ππ«π’π ππ§π’π―ππ«π¬ππ₯:

β’ Joseph β Fundador
β’ Ghost  β Cofundador
β’ Joel β Cofundador
β’ Admiro β Iptv
β’ Angy β Ayudante
β’ Blankito β Checker
β’ Jose Miguel β Hits
β’ Joshua β Free
β’ Sangronith Reymundo β HSBC

Bot:

β’ JosephBot β Moderador

Comunidad:

β’ Bineria Universal

β https://t.me/+I5F2JBRwE6c5M2Jh
β https://chat.whatsapp.com/DwvnxoVjSoz4246vFbZBCP`
enviarimagencap(imagebin15,bin15)
		break

		case 'apkbinero':
	  				case 'apk-binero':
					case 'apk_binero':
					case 'carding':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin16 = fs.readFileSync('./binners/apkbins.jpg')
		const bin16 = `Les recomiendo esta nueva aplicaciΓ³n de carding completamemente gratis.

https://www.mediafire.com/file/oxlgjgmlgw2uh6c/Bineria+Universal.apk/file

Contenido π

Bins
MΓ©todos
Cuentas Premiun
Cursos
Tutoriales
Generadores y mucho mΓ‘s`
enviarimagencap(imagebin16,bin16)
		break
		
		case 'chfree':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin17 = fs.readFileSync('./binners/bineriauniversal.jpg')
		const bin17 = `βοΈπ CURSO VIP πβοΈ
 
βοΈ Temario Del Curso:

π Crear Cuentas Premiun

π ${prefix}Acorntv
π ${prefix}Duolingo
π ${prefix}Hbomax
π ${prefix}Lumosity
π ${prefix}PrimeVideo

π Extrapolar Un Bin

π ${prefix}ExtrapolaciΓ³n
π ${prefix}ExtrapolaciΓ³n_HQ
π ${prefix}Extrapolar_Compras

π Checker CC

π ${prefix}adobe

π Crear Cuentas Premiun Sin Bin

π ${prefix}CactusVPN
π ${prefix}Tidal
π ${prefix}Pornhub
π ${prefix}Avira

π Bonus

π ${prefix}IntroducciΓ³n_bins
π ${prefix}IntroducciΓ³n_carding
π ${prefix}Bonus
π ${prefix}Carding

βͺοΈ Soporte y Ayuda β©οΈ

https://chat.whatsapp.com/DwvnxoVjSoz4246vFbZBCP`
enviarimagencap(imagebin17,bin17)
		break
		
		case 'acorntv':
					case 'acorn_tv':
	  				case 'acorn-tv':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const acorntv = fs.readFileSync('./vidbinners/acorntv.mp4')
		const bin18 = `[β] TUTORIAL ACORNTV

[π] APORTADOR: JOSEPH

[π] MΓS CONTENIDO AQUΓ π

[π] https://t.me/BineriaUniversal`
enviarvideoscap(acorntv,bin18)
		break
		
		case 'hbomax':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const hbomax = fs.readFileSync('./vidbinners/hbomax.mp4')
		const bin19 = `[β] TUTORIAL HBOMAX

[π] APORTADOR: JOEL

[π] MΓS CONTENIDO AQUΓ π

[π] https://t.me/BineriaUniversal`
enviarvideoscap(hbomax,bin19)
		break
		
		case 'duolingo':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const duolingo = fs.readFileSync('./vidbinners/duolingo.mp4')
		const bin20 = `[β] TUTORIAL DUOLINGO

[π] APORTADOR: CANIBALDOC

[π] MΓS CONTENIDO AQUΓ π

[π] https://t.me/BineriaUniversal`
enviarvideoscap(hbomax,bin20)
		break
		
		case 'primevideo':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const prime = fs.readFileSync('./vidbinners/primevideo.mp4')
		const bin21 = `[β] TUTORIAL PRIME VIDEO

[π] APORTADOR: CANIBALDOC

[π] MΓS CONTENIDO AQUΓ π

[π] https://t.me/BineriaUniversal`
enviarvideoscap(prime,bin21)
		break
		
		case 'lumosity':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const lumosity= fs.readFileSync('./vidbinners/lumosity.jpg')
		const bin22 = `π§ Lumosity MΓ©todo

π No es necesario usar vpn

π Ingresa al siguiente enlace: https://www.lumosity.com/sign_up

π Registrar y crear su cuenta

π Rellenar con datos inventados.

π Ya con la cuenta creada ir a "Obtener acceso Ilimitado"

π Escoger cualquier plan

π En la pΓ‘gina de pago colocar:

π³ Tarjeta: 4242424242424242
π Fecha: Generado
π Cvv: Generado

π Pais: Estados Unidos
π City: New York 
π State : New York
π Zip Code: 10080 

β Felicidades, ya tienes Lumosity Premiun

π± CortesΓ­a De: Bineria Universal`
enviarimagencap(lumosity,bin22)
		break
		
		case 'extrapolar_compras':
case 'Extrapolar-Compras':
case 'ExtrapolarCompras':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin23 = fs.readFileSync('./vidbinners/extrapolacioncompras.jpg')
		const bin23 = `β‘*EXTRAPOLAR CC PARA UN BIN DE COMPRAS FΓSICAS*β‘

*INICIAMOS DE UN PUNTO BASE (UNA CC REAL)*

*EJEMPLO:*
4213-1660-3321-0102
12/23 189

*COMO SE EXTRAPOLA LA EXTRAPOLACION BΓSICA Y LA DE 5 X*

4213-1660-3321-XXXX
USAMOS FECHAS DE LA CC
12/23
EL CVV PUEDE SER RAMDON O EL DE LA CC


*ESAS EXTRAPOLACIONES SON LAS COMUNES PARA BINS DE COMPRAS FISICAS*

*SI SE ENCUENTRA UN BIN ASI:*

*EJEMPLO:*
421316XXXXXXXXX
GEN:
GEN:

 *ESE BIN ES SOLO DE CUENTAS PREMIUM SABEMOS QUE NO SIRVE PARA COMPRAS FISICAS*`
enviarimagencap(imagebin23,bin23)
		break
		
		case 'cactusvpn':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin24 = fs.readFileSync('./vidbinners/captusvpn.jpg')
		const bin24 = `π©π° CAPTUS VPN SIN BIN   π°π©

β IP: Con La Tuya

1οΈβ£ Ir al siguiente link:

https://www.cactusvpn.com/es/prueba-de-vpn-gratis/

2οΈβ£ Llenar los datos con correo invetado

3οΈβ£ Confirmar la cuenta y crear su contraseΓ±a y listo

βΉ Recuerda Usar Firefox Focus

π± Cortesia De: @BineriaUniversal`
enviarimagencap(imagebin24,bin24)
		break
		
		case 'tidal':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const tidal = fs.readFileSync('./vidbinners/tidal.mp4')
		const bin25 = `π©π° MΓTODO TIDAL π°π©

π PASOS:

β PRIMER PASO: ENCENDER VPN EN BULGARIA EN CASO NO TENGAS DE UN VPN DE PAGA RECOMIENDO HOLAVPN MOOD

β SEGUNDO PASO: DIRIGIRSE A LA PΓGINA DE TIDAL. RECUERDEN USAR NAVEGADOR PRIVADO
Duckduckgo Via FirefoxFocus Brave Browser Etc

β TERCER PASO: REGISTRATE CON UN CORREO Y UNA CONTRASEΓA 

β CUARTO PASO: TE DIRIGIRA A ESCOJER UN PLAN ESCOJES EL QUE TE SALE

β QUINTO PASO: LISTO AHORA TIENES TIDAL PREMIUM SIN NECESIDAD DE BIN

π± Cortesia De: https://t.me/BineriaUniversal`
enviarvideoscap(tidal,bin25)
		break
		
		case 'avira':
		if (!isGroup) return enviartexto('Este comando solo funciona en grupos\n\nπ₯ ΓNETE: https://chat.whatsapp.com/CjllRNlWLP833gx7t9ruUb')
		const imagebin26 = fs.readFileSync('./vidbinners/avira.jpg')
		const bin26 = `π©π° MΓTODO AVIRA (ANTIVIRUS & VPN) SIN BIN π°π©

π VPN: No es necesario

1οΈβ£ Ingresa al siguiente enlace: https://www.avira.com/it/freesecurity-lp?x-c-channel=partnerize

2οΈβ£ Se registran con correo temporal.

3οΈβ£ Luego en tu bandeja de entrada, te llegara un mensaje de confirmaciΓ³n, lo abres y creas una contraseΓ±a

4οΈβ£ Les pedira su nombre y pais. Lo colocan y le dan en continuar 

5οΈβ£ Felicidades, ya tienes Avira Antivirus & VPN en su versiΓ³n Premiun.

βͺοΈ CortesΓ­a De: Bineria Universal`
enviarimagencap(imagebin26,bin26)
		break
		
		// Final Bins - Carding
		
		
		
		
		
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
