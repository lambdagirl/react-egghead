//spread notation
const array=[1,2,3]
const array2 = [4,5]
const array3=[4,5]

//const array4 = array.push(array2).push(array3) will change origin array
const array4 = [...array, ...array2, ...array3] //deep copy
const state = {
    sampleObj = {
        name: 'obj',
        value: 2
    }
}

state.sampleObj.name = "newObj"
this.setState({sampleObj})

// arrow notations (functions)

const sampleOnj = [{
    name:'ong',
    value:1
},{
    name:'323',
    value:2
},{
    name:'3dsfds',
    value:1
},
]
const newObj = [...sampleObj, {
    name: 'obj3',
    value:3 
}]
const newSampleObj = sampleOnj.map((ObjectItem, index)=> ObjectItem.value = 4)