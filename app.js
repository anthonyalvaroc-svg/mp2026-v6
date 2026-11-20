const F17_ITEMS = [
  { id: "f17_01", name: "1. Caminos", desc: "FOTOS CAMINOS, CALLES DESDE CUSTODIO HACIA SITE, INCLUYE CAMINATA HACIA CERRO" },
  { id: "f17_02", name: "2. Edificio & Cercos", desc: "FOTOS PANORAMICAS DEL EDIFICIO O SITE POR LOS 4 LADOS" },
  { id: "f17_03", name: "3. Medidor & Tableros & Contadores", desc: "FOTOS PANORAMICAS DE LOS TABLEROS, SUMINISTROS Y CONTADORES" },
  { id: "f17_04", name: "4. Accesos & Puertas", desc: "FOTOS DE ACCESO A EDIFICIO, PUERTAS, ESCALERAS INCLUYE LLAVES O CANDADOS" },
  { id: "f17_05", name: "5. Base de torre & Linea de Vida", desc: "FOTOS DE PEDESTAL DE TORRE Y BASE DE VIENTOS O ARRIOSTRES POR LOS 4 LADOS" },
  { id: "f17_06", name: "6. Equipos en piso & Losas", desc: "FOTOS PANORAMICOS DE GABINETES INCLUYE PLATAFORMA, MODULOS, GPS EN PISO" },
  { id: "f17_07", name: "7. Sistema de puesta a tierra", desc: "FOTOS DE BARRAS EN PISO Y TORRE. CABLE DE BAJADA DE ATERRAMIENTO. PARARAYO Y CABLE DE BAJADA. POZOS TIERRA LIMPIEZA Y MEDICIONES" },
  { id: "f17_08", name: "8. Portacables & Escalerillas rack", desc: "FOTOS DE ESCALERILLA EN PISO Y TORRE" },
  { id: "f17_09", name: "9. Sistema de balizamiento", desc: "FOTOS DE FANALES, FOTOCELDA, CABLE VULCANIZADO, LIMPIEZA DE FANALES Y PRUEBA DE FUNCIONAMIENTO" },
  { id: "f17_10", name: "10. Equipos en torre", desc: "FOTOS PANORAMICO DE EQUIPOS, ETIQUETA, CABLES, INICIO Y FIN DE SOPORTES, MEDICION DE TUBO, ALTURA DE EQUIPO" },
  { id: "f17_11", name: "11. Vista encima de torre", desc: "FOTOS DE TORRES HACIA ABAJO POR LOS 4 LADOS" },
  { id: "f17_12", name: "12. Vista panoramica de torre", desc: "FOTOS PANORAMICO DE TORRE INCLUYE ZOOM DE AREA DE ROLDANA POR LOS 4 LADOS" },
  { id: "f17_13", name: "13. Vista de site general", desc: "FOTOS GENERALES, PISOS, PAREDES, EQUIPOS, LETRERO, LUMINARIAS, TOMACORRIENTES, TECHOS, SOPORTES" },
  { id: "f17_14", name: "14. Transformadores & Postes", desc: "FOTOS DE POSTES DE COMETIDA, FOTOS DE POSTE DE TRANSFORMADOR INCLUYE ZOOM A TRANSFORMADOR" },
  { id: "f17_15", name: "15. Vistas de 30° encima de torre cada foto 5MB", desc: "FOTOS EN HORIZONTAL 12 FOTOS CADA 30 GRADOS, FOTOS BARRIDO 0 A 180 Y 180 A 360 (3 RONDAS) [ALTA RESOLUCION]" },
  { id: "f17_16", name: "16. Generadores", desc: "FOTOS DE GENERADORES, TANQUE COMBUSTIBLE, FOTOS DE AREA DE GENERADOR" },
  { id: "f17_17", name: "17. Estado de torre", desc: "FOTOS DE ANGULOS, PERNERIA Y PRUEBA DE TORQUE, ESTADO DE PINTURA. VERIFICAR CORROSION Y FALTANTES" },
  { id: "f17_18", name: "18. Vista panoramica de la estación por dentro y fuera", desc: "FOTOS PANORAMICAS DE PAREDES POR DENTRO Y FUERA POR 4 LADOS" },
  { id: "f17_19", name: "19. Vista de ingreso de Fibra Optica, identificar Operador, abrir cajas de pase", desc: "FOTOS ETIQUETAR OPERADOR FIBRA OPTICA, FOTOS DE RECORRIDO, CAMARAS" },
  { id: "f17_20", name: "20. Diagrama Unifilar desde Medidor hasta tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO ATP HACIA TABLERO ATP" },
  { id: "f17_21", name: "21. Diagrama Unifilar de Tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO OPERADOR HACIA TABLERO OPERADOR" },
  { id: "f17_22", name: "22. Diagrama de traslado desde Provincia al site", desc: "ESCRIBIR EL RECORRIDO DE LA RUTA DESDE EL CUSTODIO HACIA EL SITE, ZONAS PUNTUALES Y TIEMPO" },
  { id: "f17_23", name: "23. Vista de concertina", desc: "FOTOS VERIFICAR CORROSION Y CORTADO DE CONCERTINA. INCLUYE REPARAR CONCERTINA. FOTO ANTES Y DESPUES" },
  { id: "f17_24", name: "24. Vista de buzones abiertos y cerrados", desc: "FOTOS DE BUZONES ABIERTO Y CERRADO, FIBRA OPTICA, LLAVE Y CANDADO, LIMPIEZA DE BUZONES" },
  { id: "f17_25", name: "25. Etiquetado de llaves y video de validacion", desc: "FOTOS DE LLAVES SUELTAS DEL MANOJO Y ETIQUETADO EN PISO. VIDEO FUNCIONAMIENTO DE LA LLAVE EN LA PUERTA PRINCIPAL DEL SITE" },
  { id: "f17_26", name: "26. Estado de polimero, pvc, persiana, radomo, etc", desc: "FOTOS PANORAMICA DE POLIMERO O PVC, PERNERIA, EMPALMES, PINTURA" },
  { id: "f17_27", name: "27. Vista de luminarias en poste, site, arqueta", desc: "FOTOS DE LUMINARIAS APAGADAS Y PRENDIDAS EN SALA EQUIPOS Y POSTE SI APLICA" },
  { id: "f17_28", name: "28. Fotos de gestion ambiental", desc: "FOTOS DE CHARLA Y PERSONAL CON EPPS, SEÑALIZACION Y GESTION DE RESIDUOS, USO DE EPPS DE TECNICO" },
  { id: "f17_29", name: "29. Fotos de cambio de batería", desc: "FOTOS Y VIDEOS DE PROCESO DE CAMBIO DE BATERIA, MEDICION DE BATERIA. VIDEO FUNCIONAMIENTO DE CANDADO NUEVO" }
];

const MP_ITEMS = [
  { id: "mp_01", name: "1. Personal con EPPs & Equipos utilizados", desc: "FOTO DE PERSONAL CON EPPS Y CHARLA DE 5 MINUTOS, EQUIPOS UTILIZADOS, TELUROMETRO, PINZA, DESARMADORES, BRUJULA, ETC" },
  { id: "mp_02", name: "2. Altura de torre", desc: "FOTO DE ARRIBA HACIA ABAJO, DE ABAJO HACIA ARRIBA. INCLUYE ALTURA TORRE + BASE, ROLDANA SUPERIOR E INFERIOR" },
  { id: "mp_03", name: "3. Medida de pedestal", desc: "FOTO PANORAMICA DE ALTURA, LARGO Y ANCHO" },
  { id: "mp_04", name: "4. Limpieza de fanales", desc: "FOTOS LIMPIEZA DE FANALES Y FOTOCELDA" },
  { id: "mp_05", name: "5. Limpieza de pozos", desc: "FOTOS LIMPIEZA DE POZOS TIERRA, INCLUYE PINTADO" },
  { id: "mp_06", name: "6. Limpieza del site y Polimero", desc: "FOTOS DE LIMPIEZA DE PISOS, PAREDES, ESCALERILLA, BASTIDORES, POLIMERO O PVC EN TORRE" },
  { id: "mp_07", name: "7. Trabajo en contador", desc: "FOTOS PANORAMICA, LIMPIEZA Y MEDICION DE CONTADORES" },
  { id: "mp_08", name: "8. Aceitado en chapas y bisagras", desc: "FOTOS DE LIMPIEZA Y ACEITADO DE CHAPAS, BISAGRAS DE TODAS LAS PUERTAS EN SITE" },
  { id: "mp_09", name: "9. Validación de diagrama unifilar de tableros", desc: "FOTOS DIBUJAR EN HOJA EL DIAGRAMA ACTUAL DESDE SUMINISTRO HACIA TABLEROS INCLUYE TODAS LAS LLAVES" },
  { id: "mp_10", name: "10. Prueba de espesor", desc: "FOTOS DE ESPESOR DE PINTURA Y GALVANIZADO EN VALOR mils EN VARIAS PARTES DE LA TORRE" },
  { id: "mp_11", name: "11. Prueba de adherencia", desc: "FOTOS DE CORTE, CINTA CERRADA, CINTA ABIERTA EN VARIAS PARTES DE LA TORRE" },
  { id: "mp_12", name: "12. Limpieza y engrase de BT", desc: "FOTOS ANTES, CON ESPATULA Y DESPUES ENGRASADO DE TODAS LAS BARRAS EN PISO Y TORRE" },
  { id: "mp_13", name: "13. Mantenimiento de tableros", desc: "FOTOS DE LIMPIEZA CON BROCHA Y TORQUE DE TODOS LOS TABLEROS EN LA ESTACION" },
  { id: "mp_14", name: "14. Medición de tableros", desc: "FOTOS DE MEDICIONES DE AMPERIOS (R,S,T) Y VOLTAJE (RS, RT, ST) EN I.G Y SALIDA DE EQUIPOS O TABLERO OPERADOR" },
  { id: "mp_15", name: "15. Limpieza de pedestal", desc: "FOTOS DE LIMPIEZA CON ESCOBA EN PEDESTAL Y BASE DE VIENTOS U ARRIOSTRES" },
  { id: "mp_16", name: "16. Mantenimiento y medidas de equipos en piso", desc: "FOTOS DE MANTENIMIENTO DE LIMPIEZA CON ESCOBA Y MEDICION CON WINCHA DE TODOS LOS EQUIPOS EN PISO (ANCHO, LARGO Y ALTURA)" },
  { id: "mp_17", name: "17. Brujula", desc: "FOTOS DE BRUJULA Y ESCRITO CON PLUMON EL AZIMUT EN LA PATA DE TORRE" },
  { id: "mp_18", name: "18. GPS", desc: "FOTOS PANORAMICA Y DE CERCA A GPS EN BASE DE TORRE, QUE SE NOTE LAS COORDENADAS (GRADOS, MINUTOS Y SEGUNDOS)" },
  { id: "mp_19", name: "19. Altura de edificio", desc: "ALTURA EDIFICIO, ALTURA PARAPETO, ALTURA ESCALERA AZOTEA" },
  { id: "mp_20", name: "20. Uso de nivel", desc: "FOTO PANORAMICA DE NIVEL EN MONTANTE DE TORRE, EN TORRE VENTADA, MASTIL Y AUTOSOPORTADA, MONOPOLO" },
  { id: "mp_21", name: "21. Aplicación de spray", desc: "FOTO APLICACION EN ACCESORIOS DE LINEA DE VIDA, ACCESORIOS DE VIENTOS, GRAMPAS Y GRILLETES SI ESTAN OXIDADOS" },
  { id: "mp_22", name: "22. Soportes vacios en torre, mastil, altura y azimut", desc: "FOTOS PANORAMICA DE TUBO, FOTO DE MEDIDA DE TUBO, AZIMUT, ALTURA EJE DE TUBO DE TODOS LOS SOPORTES VACIOS" },
  { id: "mp_23", name: "23. Vistas de las coordenadas de cada arista del site", desc: "FOTOS PANORAMICA DE GPS EN CADA ESQUINA DE SALA EQUIPOS, ESCRIBIR CON PLUMON A, B, C, D" },
  { id: "mp_24", name: "24. Vistas de las medidas del perimetro del site", desc: "FOTOS PANORAMICA Y CERCA DE MEDIDA DE WINCHA DE ANCHO, LARGO Y ALTURA DE SALA DE EQUIPO" },
  { id: "mp_25", name: "25. Mantenimiento de ramas y hojas del monopolo", desc: "FOTOS DE LIMPIEZA DE OJOS Y CAMBIO DE CINTILLO DE HOJAS EN MIMETIZADO SI APLICA" },
  { id: "mp_26", name: "26. Mantenimiento de aires forzados y video de funcionamiento", desc: "FOTOS DE PANORAMICA, LIMPIEZA, PLACAS, MEDICION DE INYECTOR Y EXTRACTOR, FOTOS EXTERIOR DE EXTRACTOR Y LIMPIEZA REJILLA" },
  { id: "mp_27", name: "27. Altura soportes ocupados", desc: "FOTOS PANORAMICA DE ALTURA DE EJE DE SOPORTES OCUPADOS. ESCRIBIR QUE OPERADOR Y EQUIPO ESTA EN ESE SOPORTE" },
  { id: "mp_28", name: "28. Vista de Azotea", desc: "FOTOS PANORAMICA DE AZOTEA DE PROPIETARIO POR LOS 4 LADOS" },
  { id: "mp_29", name: "29. Vista de Limpieza exterior 4 lados", desc: "FOTOS DE LIMPIEZA EXTERIOR, LIMPIAR BASURA Y MALEZA 1 METRO Y MEDIO APROX. FOTOS DE ANTES Y DESPUES" },
  { id: "mp_30", name: "30. Fotos del mtto de video camara", desc: "FOTOS DE LIMPIEZA DE CAMARA, TORQUE TABLERO, REINICIAR CAMARA SI REQUIERE, VERIFICAR FUNCIONAMIENTO CON CRISTIAN SALAZAR" }
];

const FORMATOS_ITEMS = [
  { id: "fmt_01", name: "2. FORMATOS MP", desc: "SUBIR FOTOS Y ARCHIVOS PDF DE FORMATOS DE MANTENIMIENTO PREVENTIVO" }
];

let db;
let currentProjectId = null;
let currentTab = 1;
let activeSubId = null;
let activeSubName = "";
let camStream = null;
let gpsCoords = "";
let gpsPlace = "";
let viewerItems = [];
let viewerIdx = 0;
let lastCaptureTime = 0;

// IndexedDB setup
const req = indexedDB.open("ReportesSiteDB", 2);
req.onupgradeneeded = (e) => {
  db = e.target.result;
  if (!db.objectStoreNames.contains("projects")) {
    db.createObjectStore("projects", { keyPath: "id" });
  }
  if (!db.objectStoreNames.contains("files")) {
    const store = db.createObjectStore("files", { keyPath: "id", autoIncrement: true });
    store.createIndex("proj_sub", ["projectId", "subId"], { unique: false });
    store.createIndex("projectId", "projectId", { unique: false });
  }
};
req.onsuccess = (e) => {
  db = e.target.result;
  renderProjects();
};

function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.display = "none"; }, 3000);
}

function createProject() {
  const input = document.getElementById("newProjectName");
  const name = input.value.trim() || "SITE_" + new Date().toISOString().slice(0, 10);
  const proj = { id: "proj_" + Date.now(), name, created: Date.now() };
  const tx = db.transaction("projects", "readwrite");
  tx.objectStore("projects").add(proj);
  tx.oncomplete = () => {
    input.value = "";
    renderProjects();
    openProject(proj.id);
  };
}

function renderProjects() {
  const tx = db.transaction("projects", "readonly");
  tx.objectStore("projects").getAll().onsuccess = (e) => {
    const list = e.target.result.sort((a, b) => b.created - a.created);
    const el = document.getElementById("projectList");
    if (!list.length) {
      el.innerHTML = '<div class="card" style="text-align:center;color:#6b7280;">Crea una carpeta principal arriba para comenzar.</div>';
      return;
    }
    el.innerHTML = list.map(p => `
      <div class="card" style="display:flex;justify-content:space-between;align-items:center;">
        <div onclick="openProject('${p.id}')" style="flex:1;cursor:pointer;">
          <div style="font-weight:700;font-size:16px;">📁 ${escapeHtml(p.name)}</div>
          <div style="font-size:12px;color:#6b7280;">${new Date(p.created).toLocaleDateString()}</div>
        </div>
        <button class="btn-danger btn-sm" onclick="deleteProject('${p.id}', '${escapeHtml(p.name)}')">Eliminar</button>
      </div>
    `).join("");
  };
}

function deleteProject(id, name) {
  if (!confirm(`¿Seguro que deseas eliminar toda la carpeta "${name}" y sus fotos?`)) return;
  const tx = db.transaction(["projects", "files"], "readwrite");
  tx.objectStore("projects").delete(id);
  const idx = tx.objectStore("files").index("projectId");
  idx.getAllKeys(id).onsuccess = (e) => {
    e.target.result.forEach(k => tx.objectStore("files").delete(k));
  };
  tx.oncomplete = () => renderProjects();
}

function openProject(id) {
  currentProjectId = id;
  const tx = db.transaction("projects", "readonly");
  tx.objectStore("projects").get(id).onsuccess = (e) => {
    const p = e.target.result;
    if (!p) return;
    document.getElementById("editProjectName").value = p.name;
    document.getElementById("homeView").style.display = "none";
    document.getElementById("projectView").style.display = "block";
    document.getElementById("shareReadyBox").style.display = "none";
    renderSubfolders();
  };
}

function goHome() {
  currentProjectId = null;
  document.getElementById("projectView").style.display = "none";
  document.getElementById("homeView").style.display = "block";
  renderProjects();
}

function renameCurrentProject() {
  const newName = document.getElementById("editProjectName").value.trim();
  if (!newName || !currentProjectId) return;
  const tx = db.transaction("projects", "readwrite");
  const store = tx.objectStore("projects");
  store.get(currentProjectId).onsuccess = (e) => {
    const p = e.target.result;
    if (p) {
      p.name = newName;
      store.put(p);
      toast("Nombre actualizado");
    }
  };
}

function switchTab(t) {
  currentTab = t;
  [1, 2, 3].forEach(n => {
    document.getElementById("tab" + n).classList.toggle("active", n === t);
  });
  renderSubfolders();
}

function getItemsForCurrentTab() {
  if (currentTab === 1) return F17_ITEMS;
  if (currentTab === 2) return FORMATOS_ITEMS;
  return MP_ITEMS;
}

function renderSubfolders() {
  const items = getItemsForCurrentTab();
  const tx = db.transaction("files", "readonly");
  const idx = tx.objectStore("files").index("projectId");
  idx.getAll(currentProjectId).onsuccess = (e) => {
    const allFiles = e.target.result;
    const bySub = {};
    allFiles.forEach(f => {
      if (!bySub[f.subId]) bySub[f.subId] = [];
      bySub[f.subId].push(f);
    });

    const container = document.getElementById("subfolderList");
    container.innerHTML = items.map(item => {
      const files = bySub[item.id] || [];
      const badge = files.length
        ? `<span class="badge-count">${files.length} archivo(s)</span>`
        : `<span class="badge-empty">Vacía → NO APLICA</span>`;

      const thumbsHtml = files.length ? `<div class="thumbs">` + files.map((f, idx) => {
        const url = URL.createObjectURL(f.blob);
        let media = "";
        if (f.type.startsWith("image/")) {
          media = `<img src="${url}" onclick="openViewer('${item.id}', ${idx})" />`;
        } else if (f.type.startsWith("video/")) {
          media = `<video src="${url}" onclick="openViewer('${item.id}', ${idx})"></video>`;
        } else {
          media = `<div class="thumb-pdf" onclick="openViewer('${item.id}', ${idx})">📄 ${escapeHtml(f.name)}</div>`;
        }
        return `<div class="thumb-box">${media}<button class="thumb-del" onclick="deleteFile(${f.id}, '${escapeHtml(f.name)}')">×</button></div>`;
      }).join("") + `</div>` : "";

      return `
        <div class="sub-card">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:6px;">
            <p class="sub-title">${escapeHtml(item.name)}</p>
            ${badge}
          </div>
          <p class="sub-desc">${escapeHtml(item.desc)}</p>
          <div class="sub-actions">
            <button class="btn-primary btn-sm" onclick="startCamera('${item.id}', '${escapeHtml(item.name)}')">📷 Cámara</button>
            <button class="btn-secondary btn-sm" onclick="triggerGallery('${item.id}', '${escapeHtml(item.name)}')">📁 Subir Galería</button>
          </div>
          ${thumbsHtml}
        </div>
      `;
    }).join("");
  };
}

function deleteFile(fileId, fileName) {
  if (!confirm(`¿Seguro que deseas eliminar "${fileName}"?`)) return;
  const tx = db.transaction("files", "readwrite");
  tx.objectStore("files").delete(fileId);
  tx.oncomplete = () => {
    renderSubfolders();
    toast("Archivo eliminado");
  };
}

// GPS Helper
function updateGPS() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude.toFixed(6);
    const lon = pos.coords.longitude.toFixed(6);
    gpsCoords = `${lat}, ${lon}`;
    try {
      const resp = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=16`);
      const data = await resp.json();
      if (data && data.address) {
        const a = data.address;
        gpsPlace = [a.road, a.suburb || a.neighbourhood, a.city || a.town || a.village].filter(Boolean).join(", ");
      }
    } catch (_) {}
  }, () => {}, { enableHighAccuracy: true, timeout: 8000 });
}

// Camera + Volume Shutter Support
async function startCamera(subId, subName) {
  activeSubId = subId;
  activeSubName = subName;
  updateGPS();
  document.getElementById("camSubLabel").textContent = subName;
  updateCamPreviewBadge();

  try {
    camStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" }, width: { ideal: 1920 }, height: { ideal: 1080 } },
      audio: false
    });
    const video = document.getElementById("camVideo");
    video.srcObject = camStream;
    document.getElementById("camModal").classList.add("open");
    attachVolumeKeys();
  } catch (err) {
    toast("Abriendo cámara del sistema...");
    triggerNativeCamFallback();
  }
}

function closeCamera() {
  detachVolumeKeys();
  if (camStream) {
    camStream.getTracks().forEach(t => t.stop());
    camStream = null;
  }
  document.getElementById("camModal").classList.remove("open");
  renderSubfolders();
}

function handleVolumeKeyDown(e) {
  const modalOpen = document.getElementById("camModal").classList.contains("open");
  const viewerOpen = document.getElementById("viewerModal").classList.contains("open");
  if (!modalOpen || viewerOpen) return;

  const volKeys = ["AudioVolumeUp", "AudioVolumeDown", "VolumeUp", "VolumeDown", "Camera"];
  if (volKeys.includes(e.key) || e.keyCode === 24 || e.keyCode === 25 || e.keyCode === 27) {
    e.preventDefault();
    e.stopPropagation();
    const now = Date.now();
    if (now - lastCaptureTime > 450) {
      lastCaptureTime = now;
      capturePhoto();
    }
  }
}

function attachVolumeKeys() {
  window.addEventListener("keydown", handleVolumeKeyDown, true);
}

function detachVolumeKeys() {
  window.removeEventListener("keydown", handleVolumeKeyDown, true);
}

function triggerNativeCamFallback() {
  const inp = document.getElementById("nativeCamInput");
  inp.value = "";
  inp.click();
}

async function handleNativeCam(e) {
  const file = e.target.files[0];
  if (!file) return;
  const processed = await stampAndCompressImage(file, true);
  saveFileRecord(processed.blob, file.name, "image/jpeg");
  updateCamPreviewBadge();
  renderSubfolders();
  toast("Foto guardada");
}

async function capturePhoto() {
  const video = document.getElementById("camVideo");
  if (!video.videoWidth) return;

  const btn = document.getElementById("shutterBtn");
  btn.style.background = "#93c5fd";
  setTimeout(() => { btn.style.background = "#fff"; }, 120);

  const canvas = document.getElementById("workCanvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  drawWatermark(ctx, canvas.width, canvas.height);

  const isHighRes = activeSubId === "f17_15";
  const blob = await compressCanvas(canvas, isHighRes);
  const stampName = "IMG_" + new Date().toISOString().replace(/[-:T]/g, "").slice(0, 14) + ".jpg";

  saveFileRecord(blob, stampName, "image/jpeg", () => {
    updateCamPreviewBadge();
  });
}

function drawWatermark(ctx, w, h) {
  const projName = document.getElementById("editProjectName").value.trim() || "SITE";
  const now = new Date();
  const dateStr = now.toLocaleDateString("es-PE") + " " + now.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  const lines = [projName, dateStr];
  if (gpsCoords) lines.push("GPS: " + gpsCoords);
  if (gpsPlace) lines.push(gpsPlace);

  const fontSize = Math.max(18, Math.round(w * 0.024));
  ctx.font = `600 ${fontSize}px sans-serif`;
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";

  // Pure white text with subtle drop shadow, transparent background, bottom-right corner
  ctx.shadowColor = "rgba(0,0,0,0.85)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  ctx.fillStyle = "#ffffff";

  const padX = Math.round(w * 0.015);
  const padY = Math.round(h * 0.015);
  const lineHeight = Math.round(fontSize * 1.25);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[lines.length - 1 - i];
    ctx.fillText(line, w - padX, h - padY - (i * lineHeight));
  }

  ctx.shadowColor = "transparent";
}

function compressCanvas(canvas, isHighRes) {
  return new Promise((resolve) => {
    if (isHighRes) {
      canvas.toBlob((b) => resolve(b), "image/jpeg", 0.95);
      return;
    }
    let quality = 0.85;
    const attempt = () => {
      canvas.toBlob((b) => {
        if (b.size <= 1024 * 1024 || quality <= 0.35) {
          resolve(b);
        } else {
          quality -= 0.15;
          attempt();
        }
      }, "image/jpeg", quality);
    };
    attempt();
  });
}

function stampAndCompressImage(file, applyStamp) {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = async () => {
      URL.revokeObjectURL(url);
      const isHighRes = activeSubId === "f17_15";
      const canvas = document.getElementById("workCanvas");
      let w = img.width;
      let h = img.height;

      if (!isHighRes && Math.max(w, h) > 1920) {
        const scale = 1920 / Math.max(w, h);
        w = Math.round(w * scale);
        h = Math.round(h * scale);
      }

      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      if (applyStamp) drawWatermark(ctx, w, h);

      if (isHighRes && !applyStamp && file.size > 0) {
        resolve({ blob: file });
        return;
      }
      const blob = await compressCanvas(canvas, isHighRes);
      resolve({ blob });
    };
    img.onerror = () => resolve({ blob: file });
    img.src = url;
  });
}

function triggerGallery(subId, subName) {
  activeSubId = subId;
  activeSubName = subName;
  const inp = document.getElementById("galleryInput");
  inp.accept = subId === "fmt_01" ? "image/*,application/pdf" : "image/*,video/*";
  inp.value = "";
  inp.click();
}

async function handleGalleryUpload(e) {
  const files = Array.from(e.target.files);
  if (!files.length) return;
  toast(`Procesando ${files.length} archivo(s)...`);

  for (const file of files) {
    if (file.type.startsWith("image/")) {
      const processed = await stampAndCompressImage(file, false);
      await saveFileRecordAsync(processed.blob, file.name, file.type);
    } else {
      await saveFileRecordAsync(file, file.name, file.type || "application/octet-stream");
    }
  }
  renderSubfolders();
  toast(`${files.length} archivo(s) guardado(s)`);
}

function saveFileRecord(blob, name, type, cb) {
  const tx = db.transaction("files", "readwrite");
  tx.objectStore("files").add({
    projectId: currentProjectId,
    subId: activeSubId,
    name,
    type,
    blob,
    created: Date.now()
  });
  tx.oncomplete = () => { if (cb) cb(); };
}

function saveFileRecordAsync(blob, name, type) {
  return new Promise((resolve) => saveFileRecord(blob, name, type, resolve));
}

function updateCamPreviewBadge() {
  const tx = db.transaction("files", "readonly");
  const idx = tx.objectStore("files").index("proj_sub");
  idx.getAll([currentProjectId, activeSubId]).onsuccess = (e) => {
    const list = e.target.result;
    document.getElementById("camCountBadge").textContent = list.length;
    const imgEl = document.getElementById("camPreviewImg");
    if (list.length) {
      const last = list[list.length - 1];
      imgEl.src = URL.createObjectURL(last.blob);
      imgEl.style.display = "block";
    } else {
      imgEl.style.display = "none";
    }
  };
}

function openCamGallery() {
  openViewer(activeSubId, -1);
}

// Swipeable Lightbox Viewer
function openViewer(subId, index) {
  const tx = db.transaction("files", "readonly");
  const idx = tx.objectStore("files").index("proj_sub");
  idx.getAll([currentProjectId, subId]).onsuccess = (e) => {
    viewerItems = e.target.result;
    if (!viewerItems.length) return;
    viewerIdx = index < 0 ? viewerItems.length - 1 : index;
    document.getElementById("viewerModal").classList.add("open");
    renderViewerItem();
  };
}

function closeViewer() {
  document.getElementById("viewerModal").classList.remove("open");
  if (document.getElementById("camModal").classList.contains("open")) {
    updateCamPreviewBadge();
  } else {
    renderSubfolders();
  }
}

function navViewer(dir) {
  if (!viewerItems.length) return;
  viewerIdx = (viewerIdx + dir + viewerItems.length) % viewerItems.length;
  renderViewerItem();
}

function renderViewerItem() {
  const item = viewerItems[viewerIdx];
  document.getElementById("viewerInfo").textContent = `${viewerIdx + 1}/${viewerItems.length} - ${item.name}`;
  const content = document.getElementById("viewerContent");
  const url = URL.createObjectURL(item.blob);

  if (item.type.startsWith("image/")) {
    content.innerHTML = `<img src="${url}" />`;
  } else if (item.type.startsWith("video/")) {
    content.innerHTML = `<video src="${url}" controls autoplay></video>`;
  } else {
    content.innerHTML = `<div style="color:#fff;text-align:center;padding:20px;"><p>📄 ${escapeHtml(item.name)}</p><a href="${url}" download="${escapeHtml(item.name)}" style="color:#93c5fd;">Abrir / Descargar PDF</a></div>`;
  }
}

function deleteCurrentViewerItem() {
  const item = viewerItems[viewerIdx];
  if (!item) return;
  if (!confirm(`¿Seguro que deseas eliminar "${item.name}"?`)) return;

  const tx = db.transaction("files", "readwrite");
  tx.objectStore("files").delete(item.id);
  tx.oncomplete = () => {
    viewerItems.splice(viewerIdx, 1);
    if (!viewerItems.length) {
      closeViewer();
    } else {
      if (viewerIdx >= viewerItems.length) viewerIdx = viewerItems.length - 1;
      renderViewerItem();
    }
    toast("Archivo eliminado");
  };
}

// Touch swipe on viewer
let touchStartX = 0;
document.getElementById("viewerBody").addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });
document.getElementById("viewerBody").addEventListener("touchend", (e) => {
  const diff = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diff) > 45) navViewer(diff < 0 ? 1 : -1);
}, { passive: true });

// ZIP Packaging & Sharing
async function generateZip(mode) {
  toast("Generando archivo ZIP completo...");
  const projName = (document.getElementById("editProjectName").value.trim() || "REPORTE_SITE").replace(/[\\/:*?"<>|]/g, "_");
  const zip = new JSZip();
  const root = zip.folder(projName);

  // Fetch NO_APLICA.png
  let noAplicaBlob = null;
  try {
    const resp = await fetch("no_aplica.png");
    noAplicaBlob = await resp.blob();
  } catch (_) {}

  const allFiles = await new Promise((resolve) => {
    const tx = db.transaction("files", "readonly");
    tx.objectStore("files").index("projectId").getAll(currentProjectId).onsuccess = (e) => resolve(e.target.result);
  });

  const bySub = {};
  allFiles.forEach(f => {
    if (!bySub[f.subId]) bySub[f.subId] = [];
    bySub[f.subId].push(f);
  });

  const addSection = (parentFolder, itemsList) => {
    itemsList.forEach(item => {
      const subFolder = parentFolder.folder(item.name.replace(/[\\/:*?"<>|]/g, "_"));
      const files = bySub[item.id] || [];
      if (files.length === 0) {
        if (noAplicaBlob) subFolder.file("NO_APLICA.png", noAplicaBlob);
      } else {
        const usedNames = {};
        files.forEach(f => {
          let fname = f.name;
          if (usedNames[fname]) {
            const dot = fname.lastIndexOf(".");
            fname = dot > 0 ? `${fname.slice(0, dot)}_${usedNames[fname]}${fname.slice(dot)}` : `${fname}_${usedNames[fname]}`;
          }
          usedNames[f.name] = (usedNames[f.name] || 0) + 1;
          subFolder.file(fname, f.blob);
        });
      }
    });
  };

  addSection(root.folder("1. F17-CARPETA DE FOTOS"), F17_ITEMS);

  // 2. FORMATOS MP
  const fmtFolder = root.folder("2. FORMATOS MP");
  const fmtFiles = bySub["fmt_01"] || [];
  if (fmtFiles.length === 0) {
    if (noAplicaBlob) fmtFolder.file("NO_APLICA.png", noAplicaBlob);
  } else {
    fmtFiles.forEach(f => fmtFolder.file(f.name, f.blob));
  }

  addSection(root.folder("3. MANTENIMIENTO PREVENTIVO"), MP_ITEMS);

  const zipBlob = await zip.generateAsync({ type: "blob" });
  const zipFileName = `${projName}.zip`;

  if (mode === "download") {
    triggerDownload(zipBlob, zipFileName);
    toast("ZIP descargado");
  } else {
    const shareFile = new File([zipBlob], zipFileName, { type: "application/zip" });
    const shareBox = document.getElementById("shareReadyBox");
    const shareBtn = document.getElementById("nativeShareBtn");
    shareBox.style.display = "block";

    shareBtn.onclick = async () => {
      if (navigator.canShare && navigator.canShare({ files: [shareFile] })) {
        try {
          await navigator.share({ files: [shareFile], title: zipFileName });
          shareBox.style.display = "none";
        } catch (err) {
          if (err.name !== "AbortError") {
            triggerDownload(zipBlob, zipFileName);
            toast("Guardado en Descargas para compartir manualmente");
          }
        }
      } else {
        triggerDownload(zipBlob, zipFileName);
        toast("Guardado en Descargas para compartir");
      }
    };
    toast("ZIP listo. Toca el botón verde para enviar");
  }
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}
