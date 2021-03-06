const CONFIG_PATH = './../_config/'

const REQUIRED = require(CONFIG_PATH + 'fields-required')
const OPTIONAL = require(CONFIG_PATH + 'fields-optional')
const FIELDS_REMOVE = require(CONFIG_PATH + 'fields-remove')

const createRequired = (CONFIG) => 
  // console.log('CONFIG no atom factory', CONFIG)
  CONFIG.VALIDATE_FACTORY_PATH
    ? ({type: CONFIG.type,
        validate: require(CONFIG.VALIDATE_FACTORY_PATH)(CONFIG.ATOM_NAME.toUpperCase()) 
      })
    : ({type: CONFIG.type})

const createOptional = (CONFIG) => 
  Object.keys(CONFIG)
    .filter( (key) => OPTIONAL.includes(key) )
    .map( (option, i) => Object.assign({}, {[option]: CONFIG[option]}) )
    .reduce( (acc, cur) => Object.assign(acc, {
        [Object.keys(cur)[0]]: cur[Object.keys(cur)[0]]
      }), {})

module.exports = (CONFIG) => {
  // console.log('CONFIG atom factory', CONFIG)
  // console.log('FIELDS_REMOVE', FIELDS_REMOVE)
  // if (CONFIG.COMPOSE) {
  //   console.log('EH COMPOOOSEE')
  //   const _atoms = Object.keys(CONFIG).filter((field) => !FIELDS_REMOVE.includes(field))

  // }
  return Object.assign( {}, createRequired(CONFIG), createOptional(CONFIG))
}

