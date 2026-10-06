'use strict';
const VIEW_NAMES={front:'vista frontal',side:'vista lateral',back:'vista trasera'};
const COMPONENTS=[
{id:'camera',name:'Cámaras RGB y profundidad',icon:'camera',fn:'Perciben objetos, distancias y posibles situaciones de riesgo en el entorno doméstico.',design:'Ópticas visibles en el módulo superior orientable. Un obturador físico cubre las cámaras cuando se desactivan.',ethics:'Procesamiento prioritariamente local. El usuario puede desactivarlas físicamente; no se presupone grabación continua ni acceso familiar a las imágenes.'},
{id:'light',name:'Indicador de cámara activa',icon:'light',fn:'Permite saber de un vistazo si las cámaras están captando información.',design:'Barra luminosa junto a las lentes, visible desde varios ángulos y vinculada al estado real del hardware.',ethics:'La captación, la grabación y la transmisión son estados distintos. Una luz de actividad no implica que se estén guardando o compartiendo imágenes.'},
{id:'mic',name:'Micrófonos',icon:'mic',fn:'Recogen peticiones de voz para manejar el robot sin depender de una pantalla.',design:'Integrados en los laterales del módulo superior, con indicador propio e interruptor físico de desactivación.',ethics:'La escucha habilitada se señala explícitamente. Al desactivar los micrófonos no se aceptan órdenes por voz; siguen disponibles los controles físicos.'},
{id:'privacy',name:'Controles físicos de privacidad',icon:'lock',fn:'Desactivan las cámaras y los micrófonos de forma independiente en el producto propuesto.',design:'Dos mandos de posición mantenida, con símbolos y relieve. El modo privacidad de esta demo actúa sobre ambos a la vez.',ethics:'Ni familiares ni cuidadores pueden reactivar estos sensores silenciosamente. El usuario conoce qué funciones quedan limitadas.'},
{id:'emergency',name:'Parada de emergencia',icon:'stop',fn:'Interrumpe un movimiento peligroso y activa una respuesta segura para la situación.',design:'Pulsador rojo grande sobre fondo amarillo, delante y detrás. Rearme deliberado, sin reanudar automáticamente la maniobra.',ethics:'Detenerse no debe implicar soltar a una persona o una carga. La seguridad física necesita mecanismos independientes de la IA generativa.'},
{id:'screen',name:'Pantalla accesible',icon:'screen',fn:'Muestra estados, recordatorios, llamadas e instrucciones breves.',design:'Pantalla horizontal de unas 8 pulgadas, inclinable, con alto contraste y símbolos sencillos. Las acciones importantes se confirman también por voz.',ethics:'No simula una cara ni sentimientos. Ofrece información comprensible para que la persona pueda decidir y cancelar.'},
{id:'speaker',name:'Altavoces',icon:'speaker',fn:'Comunican instrucciones, avisos y el audio de las llamadas autorizadas.',design:'Rejilla frontal bajo el módulo superior. Volumen ajustable y avisos acompañados de información visual.',ethics:'Una voz cordial y clara, sin afirmar que el robot tiene sentimientos. La conversación facilita el uso, no busca dependencia emocional.'},
{id:'proximity',name:'Sensores de proximidad',icon:'sensor',fn:'Detectan obstáculos cercanos para limitar el movimiento; los sensores inferiores ayudan a identificar desniveles.',design:'Distribuidos alrededor de la base para cubrir aproximaciones frontales, laterales y posteriores.',ethics:'En modo privacidad se mantienen los sensores de distancia y contacto destinados a seguridad. No se promete la misma percepción que con las cámaras activas.'},
{id:'joint',name:'Articulaciones protegidas',icon:'joint',fn:'Permiten orientar los brazos para acercar y manipular objetos domésticos.',design:'Hombros, codos y muñecas con cubiertas redondeadas y puntos de atrapamiento protegidos. Brazos recogidos al desplazarse.',ethics:'Fuerza y velocidad sujetas a límites validados. La planificación de IA no puede anular las restricciones físicas de seguridad.'},
{id:'force',name:'Sensores de fuerza',icon:'sensor',fn:'Detectan contacto y resistencia inesperada durante la manipulación o la asistencia moderada.',design:'Integrados en articulaciones, muñecas y zonas de apoyo, junto a limitación mecánica de fuerza y superficies blandas.',ethics:'La respuesta debe interrumpir la acción peligrosa conservando el soporte necesario. El mockup no acredita una fuerza segura ni una carga máxima.'},
{id:'hands',name:'Manos robóticas simplificadas',icon:'hand',fn:'Sujetan y acercan vasos, ropa y otros objetos domésticos compatibles.',design:'Tres dedos cortos adaptativos, puntas redondeadas y contacto antideslizante. Algunos objetos necesitan accesorios específicos.',ethics:'Las pinzas no se utilizan para elevar a una persona sujetándola de sus extremidades o ropa. La capacidad de agarre debe verificarse por tarea.'},
{id:'bumper',name:'Defensas blandas',icon:'shield',fn:'Amortiguan contactos accidentales y alojan detección de contacto en la zona inferior.',design:'Banda perimetral de elastómero lavable y reemplazable, contrastada con la carcasa.',ethics:'Son una protección adicional; no sustituyen la prevención de colisiones, el control de velocidad ni la validación con usuarios.'},
{id:'base',name:'Base omnidireccional',icon:'base',fn:'Permite desplazarse y maniobrar en espacios domésticos, con la batería alojada en posición baja.',design:'Base aproximada de 66 × 72 cm, cuatro conjuntos de ruedas protegidos y freno de estacionamiento.',ethics:'La estabilidad, la tracción y el frenado deben validarse. No se presupone capacidad para subir escaleras ni circular por cualquier suelo.'},
{id:'support',name:'Asideros estructurales',icon:'hand',fn:'Ofrecen puntos identificables de apoyo para maniobras de asistencia física moderada.',design:'Unidos al chasis y separados de los manipuladores. Superficies contrastadas, antideslizantes y ajustables en el diseño de ingeniería.',ethics:'Apoyar a quien participa en el movimiento no equivale a levantar su peso completo. Cada uso requiere límites y validación específicos.'},
{id:'dock',name:'Estación de carga',icon:'battery',fn:'Recarga las baterías mediante acoplamiento posterior automático.',design:'Estación baja contra la pared, contactos protegidos y cable guiado fuera de las zonas de paso. Se representa acoplada en la vista trasera.',ethics:'El robot debe regresar con margen de batería y no abandonar una maniobra de apoyo para cargar.'},
{id:'maintenance',name:'Mantenimiento y supervisión',icon:'shield',fn:'Permite acceder a componentes reparables y evacuar calor de la electrónica.',design:'Panel trasero con cierre, ventilación protegida e identificación del producto. Acceso técnico separado de los controles cotidianos.',ethics:'La supervisión humana requiere permisos definidos. Reparar o mantener el equipo no debe dar acceso indiscriminado a datos personales.'}
];
const icons={camera:'<rect x="3" y="6" width="18" height="14" rx="3"/><circle cx="12" cy="13" r="4"/><path d="m7 6 2-3h6l2 3"/>',light:'<path d="M8 16a7 7 0 1 1 8 0v3H8zM9 22h6M12 1v2"/>',mic:'<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"/>',lock:'<rect x="4" y="10" width="16" height="12" rx="3"/><path d="M7 10V7a5 5 0 0 1 10 0v3m-5 5v3"/>',stop:'<path d="m7 2-5 5v10l5 5h10l5-5V7l-5-5Z"/><path d="M9 8v8m6-8v8"/>',screen:'<rect x="2" y="3" width="20" height="15" rx="3"/><path d="M8 22h8m-4-4v4m-5-12h10m-10 4h6"/>',speaker:'<path d="m3 9 5 0 6-5v16l-6-5H3zM18 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',sensor:'<circle cx="12" cy="12" r="3"/><path d="M7 7a7 7 0 0 0 0 10m10-10a7 7 0 0 1 0 10M4 4a11 11 0 0 0 0 16M20 4a11 11 0 0 1 0 16"/>',joint:'<circle cx="12" cy="12" r="4"/><path d="m9 9-5-5 3-3 7 7m1 7 5 5-3 3-7-7"/>',hand:'<path d="M7 13V7a2 2 0 0 1 4 0v6-9a2 2 0 0 1 4 0v9-6a2 2 0 0 1 4 0v10q0 5-6 5H9l-6-7a2 2 0 0 1 3-2l3 3"/>',shield:'<path d="m12 2 9 4v6q0 7-9 11Q3 19 3 12V6z"/><path d="m8 12 3 3 5-6"/>',base:'<path d="M3 9q9-5 18 0v9H3zM3 13h18"/><circle cx="7" cy="20" r="2"/><circle cx="17" cy="20" r="2"/>',battery:'<rect x="2" y="6" width="18" height="13" rx="3"/><path d="M20 10h2v5h-2m-9-8-4 6h6l-4 5"/>'};
const $=selector=>document.querySelector(selector);
let view='front',selected='camera',privacy=false,timers=[],simulationPhase=0;
const picker=$('#component-picker');
picker.innerHTML=COMPONENTS.map((c,i)=>`<option value="${c.id}">${String(i+1).padStart(2,'0')} · ${c.name}</option>`).join('');
function draw(){
 $('#robot-canvas').innerHTML=renderRobot(view,selected,privacy);
 $('#view-caption').textContent=`${{front:'01',side:'02',back:'03'}[view]} / ${VIEW_NAMES[view].toUpperCase()}`;
 document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===view)));
}
function detail(){
 const c=COMPONENTS.find(c=>c.id===selected);const index=COMPONENTS.indexOf(c)+1;
 picker.value=c.id;$('#component-number').textContent=`${String(index).padStart(2,'0')} / ${COMPONENTS.length}`;
 $('#component-detail').innerHTML=`<div class="detail-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${icons[c.icon]}</svg></div><h2>${c.name}</h2><div class="detail-block"><h3>Función</h3><p>${c.fn}</p></div><div class="detail-block"><h3>Justificación de diseño</h3><p>${c.design}</p></div><div class="detail-block ethics-block"><h3>Implicación ética</h3><p>${c.ethics}</p></div>`;
}
function selectComponent(id,restoreFocus=false){
 selected=id;
 if(!viewHotspots[view].some(p=>p[0]===id))view=Object.keys(viewHotspots).find(v=>viewHotspots[v].some(p=>p[0]===id));
 draw();detail();
 if(restoreFocus)$(`[data-component="${id}"]`).focus();
}
document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{
 view=button.dataset.view;
 if(!viewHotspots[view].some(p=>p[0]===selected))selected=viewHotspots[view][0][0];
 draw();detail();
}));
picker.addEventListener('change',()=>selectComponent(picker.value));
$('#robot-canvas').addEventListener('click',e=>{const target=e.target.closest('[data-component]');if(target)selectComponent(target.dataset.component,true)});
$('#robot-canvas').addEventListener('keydown',e=>{const target=e.target.closest('[data-component]');if(target&&(e.key==='Enter'||e.key===' ')){e.preventDefault();selectComponent(target.dataset.component,true)}});
function clearTimers(){timers.forEach(clearTimeout);timers=[]}
function step(phase,message){
 simulationPhase=phase;
 document.querySelectorAll('[data-step]').forEach(el=>{const n=Number(el.dataset.step);el.classList.toggle('active',n===phase);el.classList.toggle('done',n<phase&&phase>0)});
 $('#emergency-status').textContent=message;
 $('#respond').hidden=phase!==2;
}
function resetSimulation(){
 clearTimers();step(0,privacy?'La detección visual está deshabilitada en modo privacidad. Los sensores de distancia y contacto siguen disponibles.':'Simulación sin llamadas reales ni envío de datos.');
 $('#simulate').disabled=privacy;$('#simulate').textContent='Simular detección de caída';$('#reset').hidden=true;
}
$('#privacy-toggle').addEventListener('click',()=>{
 privacy=!privacy;
 $('#privacy-toggle').setAttribute('aria-checked',String(privacy));
 $('#privacy-value').textContent=privacy?'Activado':'Desactivado';
 $('#perception-badge').textContent=privacy?'Privacidad · cámara y micrófonos apagados':'Cámara y micrófonos activos';
 $('#perception-badge').classList.toggle('is-private',privacy);
 $('#privacy-description').textContent=privacy?'Cámaras y micrófonos deshabilitados. Obturador cerrado y captación de audio apagada. Los controles físicos siguen disponibles.':'Cámaras y micrófonos habilitados. Procesamiento prioritariamente local, sin grabación continua por defecto.';
 $('#camera-chip').textContent=privacy?'Cámara apagada':'Cámara activa';$('#mic-chip').textContent=privacy?'Micrófonos apagados':'Micrófonos activos';
 $('#privacy-limit').textContent=privacy?'Sin órdenes de voz ni detección visual de caídas. Se mantienen los sensores de distancia, fuerza y contacto.':'Los indicadores del robot reflejan qué sensores están habilitados.';
 const wasRunning=simulationPhase>0&&simulationPhase<4;
 resetSimulation();
 if(wasRunning&&privacy)$('#emergency-status').textContent='Demostración cancelada al activar privacidad. La detección visual de caídas está deshabilitada; no se ha enviado ninguna alerta.';
 draw();
});
$('#simulate').addEventListener('click',()=>{
 if(privacy)return;
 clearTimers();$('#simulate').disabled=true;$('#reset').hidden=false;
 step(1,'Se detectan indicios de una posible caída. Es una señal que necesita comprobación, no un diagnóstico.');
 timers.push(setTimeout(()=>{
 step(2,'«He detectado una posible caída. ¿Estás bien o necesitas ayuda?» Puedes responder «Estoy bien». Espera de demostración: 8 segundos.');
 timers.push(setTimeout(()=>{
 step(3,'No se ha recibido respuesta. Se activa el protocolo de emergencia acordado previamente con el usuario.');
 timers.push(setTimeout(()=>{
 step(4,'Contacto simulado con la persona autorizada. Alerta mínima: posible caída, hora e identificación necesaria. Si el protocolo lo establece, se contactaría con el servicio correspondiente.');
 $('#simulate').disabled=false;$('#simulate').textContent='Repetir demostración';
 },2200));
 },8000));
 },1600));
});
$('#respond').addEventListener('click',()=>{
 clearTimers();step(0,'Respuesta recibida: «Estoy bien». La simulación termina sin contactar a terceros. CompanIA ofrece ayuda y respeta la decisión del usuario.');
 $('#simulate').disabled=false;$('#simulate').textContent='Repetir demostración';$('#reset').hidden=false;
});
$('#reset').addEventListener('click',resetSimulation);
draw();detail();
