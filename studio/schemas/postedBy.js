export default {
  name: 'postedBy',
  title: 'posted by',
  type: 'reference',//the reference type connects 2 different documents
  to: [{type: 'user'}]
}
