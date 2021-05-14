let ninjas = [
    {
        id: 0,
        name: 'Lloyd',
        color: 'Green',
        power: 'All elements',
        image: 'https://i.pinimg.com/originals/c8/58/a8/c858a87ba924d0c42bfdd1321491ebca.jpg'
    },
    {
        id: 1,
        name: 'Jay',
        color: 'Blue',
        power: 'Electricity',
        image: 'https://www.collegesportsmatchups.com/wp-content/uploads/2019/10/coloring-page-space-rover-best-of-jay-walker-ninjago-wiki-of-coloring-page-space-rover.jpg'
    },
    {
        id: 2,
        name: 'Zane',
        color: 'White',
        power: 'Ice',
        image: 'https://i.pinimg.com/736x/bb/08/b8/bb08b8a441846cb71821c7316bcda85e.jpg'
    },
    {
        id: 3,
        name: 'Kai',
        color: 'Red',
        power: 'Fire',
        image: 'https://i.pinimg.com/564x/cd/b7/0a/cdb70ad85198d7fd3c307abdee016df5.jpg'
    },
    {
        id: 4,
        name: 'Cole',
        color: 'Black',
        power: 'Earth',
        image: 'https://i.redd.it/n82esh9y3i731.jpg'
    },
    {
        id: 5,
        name: 'Nya',
        color: 'Black and Blue',
        power: 'Water',
        image: 'https://vignette.wikia.nocookie.net/ninjago/images/3/35/Season_11_Nya.jpeg/revision/latest'
    },
    {
        id: 6,
        name: 'Sensei Wu',
        color: 'Tan',
        power: 'Creation',
        image: 'https://i.pinimg.com/originals/ef/bd/41/efbd41c2cfef92febc065abba3d52f8c.jpg'
    }
]

let id = 7

module.exports = {
    getNinjas: (req, res) => {
        res.status(200).send(ninjas)
    },
    addNinja: (req, res) => {
        const {name, color, power, image} = req.body
        const ninja = {
            id,
            name,
            color,
            power,
            image
        }
        id++
        ninjas.push(ninja)
        res.status(200).send(ninjas)
    },
    deleteNinja: (req, res) => {
        const {id} = req.params
        const index = ninjas.findIndex((e) => {
            return e.id === +id
        })
        ninjas.splice(index, 1)
        res.status(200).send(ninjas)
    },
    editNinja: (req, res) => {
        const {id} = req.params
        const {name} = req.body
        const {color} = req.body
        const {power} = req.body
        const {image} = req.body
        const index = ninjas.findIndex((e) => {
            return e.id === +id
        })
        ninjas[index] = {
            ...ninjas[index],
            name,
            color,
            power,
            image

        }
    }
}