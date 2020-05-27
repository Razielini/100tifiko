const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'
//const getHash = () => location.hash.replace(/#\/([a-z]+-?[a-z]+)\/?/, '$1').toLowerCase || '/'
// ([\w+]+[\w+]+)

export default getHash