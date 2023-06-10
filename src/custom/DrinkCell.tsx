import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const DrinkCell = (props) => {
    const { cellData } = props;

    const [drinks, setDrinks] = useState([]);

    const drinkApiUrl = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/drinks`;
    const drinkAdminUrl = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/admin/collections/drinks`;

    const getDrinkNames = async (drinkId: string) => {
        await axios.get(
            `${drinkApiUrl}/${drinkId}`)
            .then((res) => {
                setDrinks(prevState => ([
                    ...prevState,
                    { id: drinkId, name: res?.data?.title }
                ]));
            });
    };

    useEffect(() => {
        cellData && cellData.map((drink: string) => getDrinkNames(drink));
    }, [cellData]);

    return (
        <>
            <ul className='drink-list'>
                {drinks && drinks.map((drink) => (
                    <li key={drink?.id}>
                        <a href={`${drinkAdminUrl}/${drink?.id}`}>
                            {drink?.name}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};

