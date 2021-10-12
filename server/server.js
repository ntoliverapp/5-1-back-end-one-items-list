const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 
'sailboat', 'conditioner', 'rusty nail', 'desk']

app.get('/api/inventory', (req,res) => {
    if(req.query.item){
        const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))

        res.status(200).send(filteredItems)

    }else{
            res.status(200).send(inventory)
        }
    }
)

app.get('/api/inventory/:id', (req, res) => {
    console.log(req.params)
    const item = inventory[req.params.id]

    res.status(200).send(item)
})

app.listen(5050, () => console.log('Server running in port 5050'))


