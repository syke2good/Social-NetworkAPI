const dateFormat = function(time){
    return new Date(time).toLocaleDateString()
}
module.exports = {dateFormat};