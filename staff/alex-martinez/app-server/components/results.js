require('../logic/search-vehicles')
const Item = require('./item')

module.exports = function(props= {}) {
    const {vehicles, error} = props

    let result = ''
    
    for(var i=0; i<vehicles.length; i++){
        result+= Item({vehicles, error})
    }
    
    return result

}