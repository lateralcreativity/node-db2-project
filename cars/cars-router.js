const router = require('express').Router();
const Cars = require('./cars-model');

router.get('/', (req, res) => {
    Cars.get()
    .then(payload => {
        res.status(200).json(payload);
    })
    .catch(error => handleError(error, res));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Cars.getById(id)
    .then(payload => {
        if(payload) {
            res.status(200).json(payload);
        } else {
            res.status(404).json({ error: 'Car was not found' });
        }
        
    })
    .catch(error => handleError(error, res));
});

router.post('/', (req, res) => {
    const car = req.body;

    if(!car.vin || !car.make || !car.model || !car.mileage) {
        return res.status(400).json({ error: 'Vin, Make, Model and Mileage are required' });
    } else {
        Cars.create(car)
        .then(payload => {
            res.status(200).json(payload);
        })
        .catch(error => handleError(error, res))
    }
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Cars.update(changes, id)
    .then(payload => {
        res.status(200).json(payload);
    })
    .catch(error => handleError(error, res));
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Cars.remove(id)
    .then(payload => {
        res.status(200).json(payload);
    })
    .catch(error => handleError(error, res));
})

function handleError(error, res) {
    return res.status(500).json({ error: error });
}

module.exports = router;