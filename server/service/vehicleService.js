function findAllVehicles(req, res){
  //res.status(200).send('teeeste');
  //return
  let posts = [{nome:'danilo mmmm mm'},{nome: 'nnn nnnnn nnnn  nn'}];
  res.status(200).send(posts);
  return;
}

module.exports = ()=>findAllVehicles