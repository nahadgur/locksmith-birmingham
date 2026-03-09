// data/nearby-areas.ts - Auto-generated
export const NEARBY_AREAS: Record<string, string[]> = {
  'edgbaston': [
  "Harborne",
  "Selly Oak",
  "City Centre",
  "Ladywood",
  "Chad Valley",
  "California"
],
  'moseley': [
  "Kings Heath",
  "Balsall Heath",
  "Sparkhill",
  "Billesley",
  "Selly Park",
  "Hall Green"
],
  'jewellery-quarter': [
  "City Centre",
  "Hockley",
  "Handsworth",
  "Lozells",
  "Aston",
  "Ladywood"
],
  'harborne': [
  "Edgbaston",
  "Quinton",
  "Bearwood",
  "Smethwick",
  "Chad Valley",
  "Selly Oak"
],
  'kings-heath': [
  "Moseley",
  "Billesley",
  "Druids Heath",
  "Brandwood End",
  "Stirchley",
  "Bournville"
],
  'digbeth': [
  "City Centre",
  "Deritend",
  "Bordesley",
  "Small Heath",
  "Highgate",
  "Sparkbrook"
],
  'handsworth': [
  "Lozells",
  "Birchfield",
  "Handsworth Wood",
  "Hockley",
  "Jewellery Quarter",
  "Aston"
],
  'selly-oak': [
  "Edgbaston",
  "Harborne",
  "Bournville",
  "Selly Park",
  "California",
  "Northfield"
],
  'erdington': [
  "Gravelly Hill",
  "Stockland Green",
  "Kingstanding",
  "Perry Barr",
  "Aston",
  "Castle Vale"
],
  'northfield': [
  "Longbridge",
  "Rubery",
  "Kings Norton",
  "Selly Oak",
  "Bournville",
  "Rednal"
],
  'perry-barr': [
  "Birchfield",
  "Handsworth Wood",
  "Great Barr",
  "Kingstanding",
  "Erdington",
  "Aston"
],
  'yardley': [
  "Acocks Green",
  "Olton",
  "Small Heath",
  "Tyseley",
  "Hall Green",
  "Billesley"
],
  'small-heath': [
  "Sparkbrook",
  "Bordesley Green",
  "Yardley",
  "Tyseley",
  "Digbeth",
  "Deritend"
],
  'quinton': [
  "Harborne",
  "Bartley Green",
  "Halesowen",
  "Bearwood",
  "Smethwick",
  "Oldbury"
],
  'castle-vale': [
  "Erdington",
  "Minworth",
  "Walmley",
  "Sutton Coldfield",
  "Gravelly Hill",
  "Water Orton"
]
};
export function getNearbyAreas(citySlug: string): string[] { return NEARBY_AREAS[citySlug] || []; }
