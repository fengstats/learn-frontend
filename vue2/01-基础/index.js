const obj1 = { title: 'vue1' }
const vm = obj1

obj1.title = 'vue2'
console.log(vm.title)

vm.title = 'vue3'
console.log(obj1.title)

vm.newTitle = 'vue4'
console.log(obj1)
