// Camps amb caddie: un sol registre per a caddie.html, index.html i sw.js. Un camp nou s'hi afegeix amb
// registra_camp_app.js (skill caddie-camps-golf). El Panorámica conserva les claus de localStorage sense prefix,
// la memòria de rajoles i l'exportació d'abans; cada camp nou porta el seu prefix (clau).
//   nom     nom del camp a l'app (clau de COURSE_GEO i de les partides)
//   titol   nom per als textos; curt, per al menú i el títol de la pàgina
//   dades   fitxer de dades (<clau>_caddie.js) i v, la variable que defineix
//   rajoles carpeta de les rajoles de l'ortofoto; bounds, només si les dades no en porten
//   cau     memòria de les rajoles al mòbil; tipus i fitxer, de l'exportació de la ronda
const CADDIE_CAMPS = {
  panoramica: {nom: 'Panoramica Golf', titol: 'Panorámica Golf', curt: 'Panorámica', dades: 'pano_caddie.js', v: () => PANO_CADDIE,
    rajoles: 'rajoles', bounds: [[40.54355, 0.355], [40.55607, 0.37971]], cau: 'pano-rajoles-v1', clau: '', tipus: 'caddie-panoramica', fitxer: 'ronda_panoramica'},
  gaudi: {nom: 'Golf Reus Aiguesverds', titol: 'Gaudí Reus Golf', curt: 'Gaudí', dades: 'gaudi_caddie.js', v: () => GAUDI_CADDIE,
    rajoles: 'rajoles_gaudi', cau: 'gaudi-rajoles-v1', clau: 'gaudi-', tipus: 'caddie-gaudi', fitxer: 'ronda_gaudi'},
};
