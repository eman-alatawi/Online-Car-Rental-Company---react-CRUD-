import React, { useState, createContext } from 'react'

export const CarContext = createContext();

export const CarProvider = (props) => {

    const [cars, setCars] = useState([
        {
           
            id: 'ba452134-5a70-4530-b76f-965724953b1c',
            modelName: 'M5',
            brandName: 'BMW',
            price: "91,500",
            manufactureYear: '2018',
            carUrl: 'https://images.unsplash.com/photo-1552489816-36cbb35b47e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'

        },
        {

            id: 'ba452134-5abn-4530-b7dg-965724953b1c',
            modelName: 'MUSTANG',
            brandName: 'FORD',
            price: '32,655',
            manufactureYear: '2021',
            carUrl: 'https://www.me.ford.com/content/dam/Ford/website-assets/mea/sa/nameplate/mustang-full-section-2018/colorizer/oxford-white/Oxford-White.jpg.dam.full.high.jpg/1571051273456.jpg'


        },
        {
           
            id: 'd9452134-5a70-4530-b76f-965724953b1c',
            modelName: 'YARIS',
            brandName: 'TOYOTA',
            price: "61,679",
            manufactureYear: '2021',
            carUrl: 'https://images.unsplash.com/photo-1633708640808-c3697ee83840?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80'

        },
        {

            id: 'gf452134-5abn-4530-b7dg-965724953b1c',
            modelName: 'CORELA',
            brandName: 'TOYOTA',
            price: "30,120",
            manufactureYear: '2016',
            carUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'


        }

    ])

    return (
        <CarContext.Provider value={[cars, setCars]}>
            {props.children}
        </CarContext.Provider>
    )

}
