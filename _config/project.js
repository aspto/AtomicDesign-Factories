const PROJECT_NAME = 'factories'
const PROJECT_PATH =  __dirname.split(PROJECT_NAME)[0]+PROJECT_NAME
const QUARKS_PATH = PROJECT_PATH + '/_quarks/'
const ATOMS_PATH = PROJECT_PATH + '/_atoms/'
const FACTORIES_PATH = PROJECT_PATH + '/_factories/'
const MOLECULE_FACTORY = FACTORIES_PATH + 'molecule.mongoose'

module.exports = {
  PROJECT_NAME,
  PROJECT_PATH,
  QUARKS_PATH,
  ATOMS_PATH,
  FACTORIES_PATH,
  MOLECULE_FACTORY
}