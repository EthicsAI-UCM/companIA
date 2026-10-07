/* CompanIA — diseño doméstico de contacto.
 * Tres proyecciones del mismo conjunto: cabeza 68–194, hombros 214–270,
 * codos 326, muñecas 424, base 523–614. Lienzo: 600 × 650.
 * Carcasa marfil mate; acolchado sellado de tono piedra, lavable y sustituible.
 * Las cubiertas ocultan los mecanismos, no eliminan sensores ni límites físicos.
 */
const robotDefs = `<defs>
  <linearGradient id="shell" x1="0" y1="0" x2="1" y2=".25"><stop stop-color="#deddd4"/><stop offset=".32" stop-color="#faf8ef"/><stop offset=".7" stop-color="#f7f5ec"/><stop offset="1" stop-color="#dbdcd2"/></linearGradient>
  <linearGradient id="sideShell" x1="0" y1="0" x2="1" y2=".15"><stop stop-color="#d8dad0"/><stop offset=".52" stop-color="#f4f3e9"/><stop offset="1" stop-color="#e7e8de"/></linearGradient>
  <linearGradient id="headShell" x1="0" y1="0" x2=".2" y2="1"><stop stop-color="#fffdf4"/><stop offset=".65" stop-color="#f3f2e8"/><stop offset="1" stop-color="#dbdfd4"/></linearGradient>
  <linearGradient id="pad" x1="0" y1="0" x2=".9" y2=".55"><stop stop-color="#b8b9a9"/><stop offset=".4" stop-color="#d1d0bf"/><stop offset=".75" stop-color="#cccbb9"/><stop offset="1" stop-color="#afb6a5"/></linearGradient>
  <linearGradient id="padLight" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="#dbd8c7"/><stop offset=".5" stop-color="#d0cfbb"/><stop offset="1" stop-color="#b6beac"/></linearGradient>
  <linearGradient id="gripSoft" x1="0" y1="0" x2="1" y2=".3"><stop stop-color="#718c7c"/><stop offset=".55" stop-color="#9aae96"/><stop offset="1" stop-color="#7a9482"/></linearGradient>
  <linearGradient id="screen" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="#355755"/><stop offset="1" stop-color="#203f40"/></linearGradient>
  <radialGradient id="lens"><stop stop-color="#81aaa7"/><stop offset=".3" stop-color="#375451"/><stop offset=".8" stop-color="#233c3b"/><stop offset="1" stop-color="#6e8981"/></radialGradient>
  <filter id="shadow" x="-50%" y="-70%" width="200%" height="240%"><feGaussianBlur stdDeviation="9"/></filter>
  <pattern id="softGrain" width="4" height="4" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".45" fill="#f9f4e3" opacity=".5"/><circle cx="3" cy="3" r=".35" fill="#8e9883" opacity=".2"/></pattern>
  <pattern id="perforations" width="4" height="4" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".65" fill="#8e9b8d"/></pattern>
</defs>`;

// Soft panels are sealed, fine-grained surfaces, not exposed fabric or fluffy foam.
const pad = (d,light=false)=>`<path d="${d}" fill="url(#${light?'padLight':'pad'})" stroke="#aab4a2" stroke-width=".7"/><path d="${d}" fill="url(#softGrain)"/>`;
const lens = (x,y,r=5)=>`<circle cx="${x}" cy="${y}" r="${r+2}" fill="#49625c"/><circle cx="${x}" cy="${y}" r="${r}" fill="url(#lens)"/><circle cx="${x-1.5}" cy="${y-1.5}" r="1.4" fill="#d5e8db" opacity=".7"/>`;
const vent = (x,y,w=36,h=12)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h/2}" fill="#e1e5d8"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h/2}" fill="url(#perforations)"/>`;
const stopButton=(x,y)=>`<circle cx="${x}" cy="${y}" r="18" fill="#dfbd58" stroke="#c3aa58" stroke-width=".7"/><circle cx="${x}" cy="${y}" r="13" fill="#b24739"/><ellipse cx="${x}" cy="${y-3}" rx="10" ry="7" fill="#cb6250"/><path d="M${x-4} ${y-3}h8" stroke="#fbe0c6" stroke-width="1.2" stroke-linecap="round"/>`;
const privacyControls=`<rect x="263" y="294" width="74" height="29" rx="13" fill="#f6f4e9" stroke="#bcc8b4"/><rect x="269" y="301" width="25" height="15" rx="6" fill="#597b68"/><rect x="306" y="301" width="25" height="15" rx="6" fill="#597b68"/><path d="M274 305h10v7h-10zm10 1 5-2v9l-5-2M317 304v5m-3-4v4q3 5 6 0v-4m-3 8v2" fill="none" stroke="#f6f6e8" stroke-width="1.2" stroke-linecap="round"/>`;
const neck=`<path d="M274 178Q300 187 326 178L331 215H269Z" fill="url(#sideShell)"/><path d="M274 196q26 8 52 0" fill="none" stroke="#c7d0bf" stroke-width="1"/>`;

function screenContent(privacy,phase){
 if(privacy)return `<rect x="293" y="126" width="14" height="12" rx="3" fill="none" stroke="#e2eddb" stroke-width="1.7"/><path d="M296 126v-4a4 4 0 0 1 8 0v4" fill="none" stroke="#e2eddb" stroke-width="1.7"/><text x="300" y="159" text-anchor="middle" fill="#f4f6e8" font-family="sans-serif" font-size="9">Privacidad activa</text>`;
 const label=phase===1?'Comprobando…':phase===2?'¿Estás bien?':phase>=3?'Aviso de ayuda':'Disponible';
 let symbol=`<rect x="281" y="124" width="9" height="13" rx="4.5" fill="#c7e6ce"/><rect x="310" y="124" width="9" height="13" rx="4.5" fill="#c7e6ce"/>`;
 if(phase===1)symbol=`<circle cx="300" cy="131" r="10" fill="none" stroke="#779d8c" stroke-width="2"/><path d="M300 121a10 10 0 0 1 10 10" fill="none" stroke="#e4eeda" stroke-width="3" stroke-linecap="round"/>`;
 if(phase===2)symbol=`<path d="M284 129v4m8-9v14m8-18v22m8-18v14m8-9v4" fill="none" stroke="#c7e6ce" stroke-width="3" stroke-linecap="round"/>`;
 if(phase>=3)symbol=`<path d="m300 119 13 23h-26Z" fill="none" stroke="#edce83" stroke-width="1.5" stroke-linejoin="round"/><path d="M300 126v7m0 4v1" stroke="#edce83" stroke-width="2" stroke-linecap="round"/>`;
 return `${symbol}<text x="300" y="159" text-anchor="middle" fill="#f4f6e8" font-family="sans-serif" font-size="9">${label}</text>`;
}
const headFront=`${neck}
<path d="M220 120C220 84 245 68 278 68H322C355 68 380 84 380 120V148C380 180 358 195 328 196H272C242 195 220 180 220 148Z" fill="url(#headShell)" stroke="#c4cebf"/>
<path d="M237 100Q250 78 279 78H323Q345 78 360 92" fill="none" stroke="#fffdf7" stroke-width="2.5" stroke-linecap="round"/>
<rect x="269" y="81" width="61" height="18" rx="9" fill="#9baea0"/>${lens(283,90)}${lens(315,90,4)}
<rect class="camera-shutter" x="271" y="83" width="57" height="14" rx="7" fill="#d7dfce"/><path class="camera-shutter" d="M294 87h11m-11 4h11" stroke="#839c86" stroke-width="1.5" stroke-linecap="round"/>
<rect x="337" y="85" width="20" height="9" rx="4.5" fill="#8daa91"/><rect class="camera-on" x="339" y="87" width="16" height="5" rx="2.5"/>
<rect x="240" y="106" width="120" height="72" rx="26" fill="url(#screen)" stroke="#b6c5b2" stroke-width="1.5"/>
<path d="M251 119q6-7 14-7h58" fill="none" stroke="#759a88" opacity=".22" stroke-width="1.5" stroke-linecap="round"/>
<g class="screen-content">__SCREEN_CONTENT__</g>
<circle cx="229" cy="141" r="2" fill="#567b69"/><circle cx="371" cy="141" r="2" fill="#567b69"/>
<circle class="mic-on" cx="229" cy="149" r="2.3"/><circle class="mic-on" cx="371" cy="149" r="2.3"/>`;

// Shared front/rear arm outline: covered shoulders, sealed elbow, soft wrist cuff.
const frontHand=`
<rect x="174" y="421" width="25" height="27" rx="12" fill="url(#shell)" stroke="#b9c7b3"/>
<path d="M177 430q9 4 19 0" fill="none" stroke="#a6b8a2"/>
<path d="M171 448Q171 437 185 437Q201 436 203 451L201 466Q197 476 185 475Q171 474 170 463Z" fill="url(#shell)" stroke="#bec9b6"/>
<path d="M176 458q-9 4-8 15l2 9q2 6 7 4t5-8l-1-10M196 458q10 0 11 11l-1 9q-1 7-6 7t-5-7v-9" fill="url(#gripSoft)" stroke="#859e86" stroke-width=".7"/>
<path d="M183 466v16q0 7 5 7t6-7l-1-16" fill="url(#padLight)" stroke="#a5b29c"/>
<ellipse cx="175" cy="480" rx="4" ry="5" fill="#b4c4a8"/><ellipse cx="201" cy="479" rx="4" ry="5" fill="#b4c4a8"/>
<path d="M180 445q8-3 15 1" fill="none" stroke="#fffdf0" stroke-width="2" stroke-linecap="round"/>`;
const armShoulder='M173 240C174 219 190 208 207 214C225 219 232 238 225 254C219 269 199 275 184 265C177 260 172 252 173 240Z';
const armUpper='M179 267C184 254 206 252 217 264C224 275 218 302 216 316C214 330 203 337 190 334C176 331 172 320 173 306Z';
const armFore='M174 344C179 332 201 332 212 342C221 352 215 380 211 402C209 421 198 434 183 430C165 427 163 414 165 398L168 369Z';
const frontArm=`
<path d="M185 239Q163 282 174 323Q159 365 163 410Q165 436 187 438Q211 438 219 410L229 361Q234 342 223 325L235 258Q237 224 209 217Z" fill="url(#shell)" stroke="#c1cab9"/>
${pad(armShoulder,true)}<path d="M182 235q7-17 22-14" fill="none" stroke="#e8e5d6" stroke-width="2" stroke-linecap="round"/>
${pad(armUpper)}
<path d="M177 320Q192 331 216 320L217 334Q195 346 173 334Z" fill="url(#shell)" stroke="#bdc7b2" stroke-width=".7"/>
<path d="M180 329q15 7 32 0" fill="none" stroke="#aebba5" stroke-width=".8"/>
${pad(armFore)}
<path d="M181 349q-6 13-6 34" stroke="#e2e1d0" fill="none" stroke-width="1.4" stroke-linecap="round"/>
<path d="M171 414q15 9 32 1" fill="none" stroke="#9baa92" stroke-width="1.2"/>
${frontHand}`;
const pairedArms=`${frontArm}<g transform="translate(600 0) scale(-1 1)">${frontArm}</g>`;

const stem=`<path d="M270 405Q300 415 330 405C329 448 338 490 355 536Q301 550 245 536C263 491 271 448 270 405Z" fill="url(#sideShell)" stroke="#c5cebd"/><path d="M277 432Q300 440 323 432" fill="none" stroke="#d6decc"/><path d="M271 478q-3 27-11 41" fill="none" stroke="#fbfaf0" stroke-width="3" stroke-linecap="round"/>`;
const torsoOutline='M300 201C251 197 226 216 227 256C226 288 244 321 249 350C254 385 261 423 300 429C339 423 346 385 351 350C356 321 374 288 373 256C374 216 349 197 300 201Z';
const frontContact='M256 333C267 325 333 325 344 333C354 343 345 373 339 390C333 407 320 417 300 419C280 417 267 407 261 390C255 373 246 343 256 333Z';
const sidePadLeft='M239 250Q252 256 253 285L266 335Q271 359 261 378Q250 374 245 346L230 290Q225 264 239 250Z';
const sidePadRight='M361 250Q348 256 347 285L334 335Q329 359 339 378Q350 374 355 346L370 290Q375 264 361 250Z';
const handles=`<path d="M250 326C224 320 222 337 222 351L223 376Q224 391 244 387M350 326C376 320 378 337 378 351L377 376Q376 391 356 387" fill="none" stroke="#728e76" stroke-width="12" stroke-linecap="round"/><path d="M241 330Q227 329 228 350v22M359 330Q373 329 372 350v22" fill="none" stroke="#a4b799" stroke-width="3" stroke-linecap="round"/>`;
const wheelPair=`<g fill="#58695e"><rect x="211" y="573" width="37" height="44" rx="15"/><rect x="352" y="573" width="37" height="44" rx="15"/></g><path d="m216 599 24 11m-24-3 18 8m123-5 25-11m-19 16 20-9" stroke="#8a9b88" stroke-width="4" stroke-linecap="round"/>`;
function baseShell(rear=false){return `${wheelPair}
<path d="M199 553C199 532 222 521 247 520Q300 511 353 520C378 521 401 532 401 553L409 576C411 594 395 605 376 607H332Q300 599 268 607H224C205 605 189 594 191 576Z" fill="url(#shell)" stroke="#bdc9b5"/>
${pad('M196 568Q204 557 224 558H376Q396 557 404 568L409 584C408 599 394 607 373 608H332Q300 600 268 608H227C206 607 192 599 191 584Z',true)}
<path d="M203 572Q218 565 244 567H356Q382 565 397 572" fill="none" stroke="#e7e7d6" stroke-width="2" stroke-linecap="round"/>
<path d="M216 548Q246 533 276 535M324 535Q354 533 384 548" fill="none" stroke="#fffef3" stroke-width="2.5" stroke-linecap="round"/>
<rect x="214" y="552" width="20" height="7" rx="3.5" fill="#68836e"/><rect x="366" y="552" width="20" height="7" rx="3.5" fill="#68836e"/>
${rear?'<rect x="272" y="550" width="56" height="29" rx="12" fill="#8fA48c"/><rect x="284" y="558" width="8" height="14" rx="3" fill="#d4c18d"/><rect x="309" y="558" width="8" height="14" rx="3" fill="#d4c18d"/>':'<rect x="278" y="546" width="44" height="18" rx="9" fill="#78917d"/><rect x="285" y="551" width="30" height="8" rx="4" fill="#35574c"/><circle cx="310" cy="555" r="2" fill="#93b0a0"/>'}
`}
const front=`${stem}<path d="${torsoOutline}" fill="url(#shell)" stroke="#c2ccb9"/>
${pad(sidePadLeft)}${pad(sidePadRight)}
${pad(frontContact,true)}<path d="M265 342Q300 334 335 342" fill="none" stroke="#e8e5d3" stroke-width="1.4" stroke-linecap="round"/>
<text x="300" y="376" text-anchor="middle" font-size="13" font-weight="600" fill="#697f65" font-family="sans-serif">Compan<tspan fill="#416c56">IA</tspan></text>
${handles}${pairedArms}
${vent(280,214,40,12)}
<path d="M272 237Q300 229 328 237Q340 243 339 263L337 280Q300 294 263 280L261 263Q260 243 272 237Z" fill="#f9f7ed" stroke="#ced5c3"/>
${stopButton(300,260)}${privacyControls}${headFront}${baseShell()}`;

// Right-facing side projection: same modules, padding heights and control positions.
const side=`<rect x="279" y="574" width="47" height="43" rx="17" fill="#58695e"/><path d="m285 602 33 10m-33-2 20 7" stroke="#8b9d87" stroke-width="4" stroke-linecap="round"/>
<path d="M278 402Q300 413 326 402C326 449 337 494 352 535Q306 549 260 532C274 492 278 448 278 402Z" fill="url(#sideShell)" stroke="#c2ceba"/>
<path d="M285 429q18 6 37 0" fill="none" stroke="#d4ddca"/>
<path d="M297 201C270 197 247 218 247 253C245 289 261 324 263 358C265 397 279 425 307 429C335 427 352 402 355 373C359 333 367 289 361 251C357 218 332 200 297 201Z" fill="url(#sideShell)" stroke="#becbb5"/>
${pad('M350 330Q368 336 359 375Q354 407 327 419L325 401Q341 380 342 356Z',true)}
${pad('M259 260Q272 248 282 273L296 329Q301 359 289 385Q274 384 269 357L252 292Q250 272 259 260Z')}
<path d="M347 326Q374 322 376 341L376 371Q375 390 353 388" fill="none" stroke="#759079" stroke-width="12" stroke-linecap="round"/>
<path d="M355 331q15-1 15 13v25" fill="none" stroke="#a6b89a" stroke-width="3" stroke-linecap="round"/>
<path d="M351 242q15 3 16 18t-13 18Z" fill="#dfbd58"/><ellipse cx="361" cy="259" rx="8" ry="13" fill="#bb5443"/>
<path d="M357 296q10 1 10 12t-12 15Z" fill="#edf0df" stroke="#bbc8b0"/><path d="M361 301v5m-1 7v5" stroke="#587967" stroke-width="4" stroke-linecap="round"/>
<path d="M266 234Q247 261 270 303L282 327Q276 347 287 385L300 417Q311 441 332 434Q352 429 344 405L332 363Q329 342 316 327L308 272Q308 240 289 230Z" fill="url(#shell)" stroke="#c0ccb7"/>
${pad('M262 232Q268 211 289 214Q313 218 315 243Q315 265 293 272Q271 271 262 254Q258 245 262 232Z',true)}
${pad('M270 271Q281 258 297 271Q309 287 313 309Q316 328 301 333Q284 337 278 320L265 290Q262 278 270 271Z')}
<path d="M282 321Q296 336 314 324L321 337Q301 350 285 336Z" fill="url(#shell)" stroke="#bdc8b3" stroke-width=".7"/>
${pad('M289 349Q301 337 317 348Q329 366 337 401Q343 417 328 424Q310 433 304 414L287 376Q282 359 289 349Z')}
<path d="M296 356q-1 11 5 26" fill="none" stroke="#e4e1ce" stroke-width="1.5" stroke-linecap="round"/>
<path d="M304 416q15 9 31 0" fill="none" stroke="#9daf94"/>
<rect x="317" y="426" width="21" height="21" rx="10" fill="url(#shell)" stroke="#bac8b0"/>
<path d="M313 448Q314 437 327 438Q342 438 347 452L349 464Q343 475 330 473L317 465Z" fill="url(#shell)" stroke="#bdc9b4"/>
<path d="M320 458q-7 3-4 13l4 13q3 6 8 3t3-8l-3-13M341 458q7-2 10 8l4 10q3 8-3 10t-8-6l-5-13" fill="url(#gripSoft)" stroke="#859e85" stroke-width=".7"/>
<path d="m332 467 3 15q2 7 7 5t3-8l-5-13" fill="url(#padLight)" stroke="#a5b29c"/>
<circle cx="325" cy="482" r="4" fill="#b7c8ab"/><circle cx="350" cy="482" r="4" fill="#b7c8ab"/>
<path d="M275 178Q300 186 326 178L334 211H270Z" fill="url(#sideShell)"/>
<path d="M250 116C248 85 270 68 298 68C320 67 341 80 350 101L370 144C377 166 363 187 339 192L294 196C267 196 253 178 252 157Z" fill="url(#headShell)" stroke="#c2cdba"/>
<path d="M264 99q13-23 36-22" fill="none" stroke="#fffdf3" stroke-width="2.5" stroke-linecap="round"/>
<path d="M341 110Q348 106 353 117L367 150Q371 165 360 174L350 165L338 123Q335 114 341 110Z" fill="url(#screen)" stroke="#a7bba4"/>
<path d="m345 90 7 3 5 10-9-3Z" fill="#5b7866"/>
<path class="camera-shutter" d="m345 90 7 3 5 10-9-3Z" fill="#d5dfcd"/>
<path class="camera-on" d="m338 81 8 5 3 6-8-5Z"/>
<circle cx="265" cy="141" r="2" fill="#5c7b68"/><circle class="mic-on" cx="265" cy="149" r="2.3"/>
<g transform="translate(300 0) scale(1.24 1) translate(-300 0)">
<path d="M218 551C220 528 255 518 286 518Q337 519 374 534Q397 543 398 563L403 581Q402 602 378 607H245Q219 606 211 589Z" fill="url(#shell)" stroke="#c1ccb7"/>
${pad('M215 569Q227 558 250 560H378Q394 560 400 572L403 584Q400 607 374 609H245Q220 608 211 590Z',true)}
<path d="M224 573Q244 566 274 569H385" fill="none" stroke="#e7e7d6" stroke-width="2" stroke-linecap="round"/>
<rect x="231" y="549" width="22" height="7" rx="3.5" fill="#6a846e"/><rect x="376" y="551" width="16" height="7" rx="3.5" fill="#587762"/>
<path d="M234 541q19-11 44-11" fill="none" stroke="#fffdf1" stroke-width="2" stroke-linecap="round"/></g>`;

const back=`${stem}<path d="${torsoOutline}" fill="url(#shell)" stroke="#c2ccb9"/>
${pad(sidePadLeft)}${pad(sidePadRight)}
<path d="M271 221Q300 211 329 221Q349 229 345 259L334 385Q330 408 300 414Q270 408 266 385L255 259Q251 229 271 221Z" fill="none" stroke="#c3cfb8" stroke-width="1"/>
${vent(278,232,44,25)}${stopButton(300,292)}
<rect x="273" y="339" width="54" height="27" rx="8" fill="#e7eadc" stroke="#d1dac5"/>
<text x="300" y="350" text-anchor="middle" font-family="sans-serif" font-size="6" fill="#72876b">CompanIA · C—01</text>
<path d="M283 357h22m4-3v7m3-7v7m3-7v7" stroke="#9bac91" stroke-width=".7"/>
<path d="M287 390h26" stroke="#b5c3a8" stroke-width="2" stroke-linecap="round"/>
${pairedArms}${neck}
<path d="M220 120C220 84 245 68 278 68H322C355 68 380 84 380 120V148C380 180 358 195 328 196H272C242 195 220 180 220 148Z" fill="url(#headShell)" stroke="#c4cebf"/>
<path d="M237 100Q251 78 279 78H321Q345 78 360 92" fill="none" stroke="#fffdf7" stroke-width="2.5" stroke-linecap="round"/>
<path d="M244 137Q244 166 264 173Q300 182 336 173Q356 166 356 137" fill="none" stroke="#d6decd"/>
${vent(280,143,40,13)}
<rect x="284" y="85" width="32" height="8" rx="4" fill="#9ab399"/><rect class="camera-on" x="287" y="87" width="26" height="4" rx="2"/>
<circle cx="229" cy="141" r="2" fill="#587865"/><circle class="mic-on" cx="229" cy="149" r="2.3"/>
<circle cx="371" cy="141" r="2" fill="#587865"/><circle class="mic-on" cx="371" cy="149" r="2.3"/>
${baseShell(true)}
<path d="M222 615Q226 600 253 599H347Q374 600 378 615V620H222Z" fill="#c9d3bd" stroke="#a5b79b"/>
<path d="M231 613h138" stroke="#eef1e2" stroke-width="3" stroke-linecap="round"/><rect x="287" y="612" width="26" height="3" rx="1.5" fill="#7a9c7a"/>`;

// Endpoint coordinates match the visible material/control in each projection.
// New contact-surface point (17) supplements, rather than replaces, existing points.
const viewHotspots = {
 front:[['camera',283,90,210,66],['light',347,89,405,74],['mic',371,141,424,135],['screen',300,136,182,157],['speaker',300,220,404,200],['emergency',300,260,446,254],['privacy',300,308,433,306],['joint',194,330,139,285],['force',192,384,121,369],['hands',189,467,123,458],['support',378,351,466,365],['padding',316,376,448,430],['proximity',300,555,448,524],['bumper',223,584,152,553],['base',372,612,442,590]],
 side:[['camera',349,96,411,72],['light',343,87,307,49],['mic',265,141,211,122],['screen',353,140,420,158],['emergency',362,260,430,247],['privacy',361,308,434,297],['joint',300,333,218,287],['force',316,384,431,391],['hands',334,468,430,466],['support',376,351,449,342],['padding',350,388,413,432],['proximity',403,554,455,524],['bumper',224,583,165,552],['base',307,612,365,631]],
 back:[['light',300,89,406,75],['mic',229,141,185,132],['maintenance',300,245,413,214],['emergency',300,292,433,290],['joint',194,330,139,286],['force',192,384,121,373],['hands',189,467,123,461],['padding',357,284,453,353],['proximity',376,555,449,525],['bumper',223,584,152,553],['base',372,612,442,590],['dock',300,613,298,634]]
};
function renderRobot(view, selected, privacy, phase=0){
 const drawing={front,side,back}[view].replace('__SCREEN_CONTENT__',screenContent(privacy,phase));
 const spots=viewHotspots[view].map(([id,x,y,hx,hy])=>{
  const index=COMPONENTS.findIndex(c=>c.id===id)+1;const c=COMPONENTS[index-1];
  return `<path class="leader" d="M${x} ${y}L${hx} ${hy}"/><g class="hotspot" role="button" tabindex="0" aria-label="${c.name}" aria-pressed="${selected===id}" data-component="${id}" transform="translate(${hx} ${hy})"><title>${c.name}</title><circle class="halo" r="19"/><circle class="dot" r="12"/><text y=".5">${String(index).padStart(2,'0')}</text></g>`;
 }).join('');
 return `<svg class="${privacy?'private':''}" viewBox="0 0 600 650" xmlns="http://www.w3.org/2000/svg" role="group" aria-label="CompanIA, ${VIEW_NAMES[view]}. Selecciona los puntos numerados para explorar sus componentes.">${robotDefs}<ellipse cx="300" cy="608" rx="139" ry="18" fill="#738269" opacity=".17" filter="url(#shadow)"/><ellipse cx="300" cy="614" rx="185" ry="25" fill="none" stroke="#bdcdb6" stroke-width=".6"/><path d="M101 78v532m-5-532h10m-10 532h10" stroke="#a4b699" stroke-width=".7" stroke-dasharray="2 4"/><text x="89" y="351" transform="rotate(-90 89 351)" text-anchor="middle" font-family="sans-serif" font-size="9" letter-spacing="2" fill="#71866b">1,38 M</text><g>${drawing}</g>${spots}</svg>`;
}
