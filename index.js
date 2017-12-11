fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      for (let i = 0; i < collection.length; i++) {
        let element = collection[i]
        iteratee(element)

      }
      return collection
    },

    map: function(array, callback) {
      let newArr = []
      for (let i = 0; i < array.length; i++) {
        let element = array[i]
        newArr.push(callback(element))

      }
      return newArr
    },
    find: function(collection, predicate) {
      for (let i = 0; i<collection.length; i++) {
        let element = collection[i]
        debugger
        if (predicate(element)) {
          return element
        }

      }
      return false
    },
    filter: function(collection, predicate) {
      let newArr = []
      for (let i = 0; i<collection.length; i++) {
        let element = collection[i]
        debugger
        if (predicate(element)) {
          newArr.push(element)
        }

      }
      return newArr
    },
    size: function(collection){
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length

    },
    first: function(collection, n=1) {
      return collection.slice(0,n)
    },
    last: function(collection, n=1) {
      return collection.slice(n*(-1))
    },
    compact: function(array) {
      let newArr = []
      array.forEach(element => {
        if (element){
          newArr.push(element)
        }
      })
      return newArr
    },
    sortBy: function(collection, callback) {
      let newArr = []
      let newNewArr = []
      collection.forEach(element =>{
        newArr.push(callback(element))
      })
      for (let j= 1; j<newArr.length; j++) {
        let newEleSplit = String(newArr[j]).split("")
        for (let i = 0; i <newEleSplit.length; i++) {
          let splitToNum = Number(newEleSplit[i])
          if (splitToNum > newArr[j-1]){
            newNewArr.push(j)
            break
          } else {
            newNewArr.unshift(j)
            break
          }
        }

      }
      return newNewArr
    }
  }

})()
