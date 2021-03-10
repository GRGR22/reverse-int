module.exports = function reverse (n) {
    if (n<0) n=0-n
    n+='';
    let newN = n.split('').reverse().join('')
    return (newN)
}
