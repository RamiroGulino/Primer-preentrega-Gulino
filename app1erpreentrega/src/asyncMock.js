const products = [
    { 
        id: '1',
        name: 'Stratocaster',
        category: 'strato',
        stock: 4,
        description: 'Fender Stratocaster americana',
        img: '/img/Strato2.jpg',
        price: '$140.000'
    },
    { 
        id: '2',
        name: 'Telecaster',
        category: 'teleca',
        stock: 3,
        description: 'Fender Telecaster custom japonesa',
        img: '/img/Tele4.jpg',
        price: '$240.000'
    },
    { 
        id: '3',
        name: 'Jaguar',
        category: 'jaguar',
        stock: 5,
        description: 'Fender jaguar custom HH kurt cobain',
        img: '/img/Jaguar2',
        price: '$600.000'
    }   
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod=> prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}