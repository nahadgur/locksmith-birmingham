// data/locations.ts - Auto-generated
export const LOCATIONS: Record<string, string[]> = {
  'Central Birmingham': [
  "City Centre",
  "Jewellery Quarter",
  "Digbeth",
  "Deritend",
  "Bordesley",
  "Nechells",
  "Aston",
  "Ladywood",
  "Lee Bank",
  "Highgate",
  "Balsall Heath",
  "Sparkbrook",
  "Sparkhill",
  "Small Heath",
  "Bordesley Green"
],
  'South Birmingham': [
  "Edgbaston",
  "Selly Oak",
  "Selly Park",
  "Bournville",
  "Kings Norton",
  "Northfield",
  "Longbridge",
  "Rednal",
  "Rubery",
  "Cofton Hackett",
  "Bartley Green",
  "Quinton",
  "Harborne",
  "Chad Valley",
  "California"
],
  'East Birmingham': [
  "Moseley",
  "Kings Heath",
  "Billesley",
  "Yardley",
  "Acocks Green",
  "Olton",
  "Tyseley",
  "Hay Mills",
  "Small Heath",
  "Bordesley Green",
  "Alum Rock",
  "Saltley",
  "Ward End",
  "Washwood Heath",
  "Hodge Hill"
],
  'North Birmingham': [
  "Aston",
  "Lozells",
  "Handsworth",
  "Handsworth Wood",
  "Birchfield",
  "Perry Barr",
  "Great Barr",
  "Kingstanding",
  "Erdington",
  "Stockland Green",
  "Gravelly Hill",
  "Castle Vale",
  "Minworth",
  "Walmley",
  "Sutton Coldfield"
],
  'West Birmingham': [
  "Smethwick",
  "West Bromwich",
  "Oldbury",
  "Rowley Regis",
  "Blackheath",
  "Cradley Heath",
  "Halesowen",
  "Stourbridge",
  "Hagley",
  "Pedmore",
  "Wollaston",
  "Amblecote",
  "Wordsley",
  "Kingswinford",
  "Wall Heath"
]
};
export function getCityBySlug(slug: string): string | undefined {
  const all = Object.values(LOCATIONS).flat();
  return all.find(city => toSlug(city) === slug);
}
export function toSlug(city: string): string {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
