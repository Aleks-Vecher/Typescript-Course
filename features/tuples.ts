const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
}

type Drink = [string, boolean, number] // this does not create an array,  type annotation
const pepsi: Drink = ['brown', true, 40 ]
const sprite: Drink = ['clear', true, 0]
