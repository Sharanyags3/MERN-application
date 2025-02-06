import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES=[
    {
        id:'p1',
        title:'Empire State Building',
        description:'One of the most famous skyscrappers in the world!',
        imageUrl:'https://flatironnomad.nyc/wp-content/uploads/2023/04/esb-header-history-scaled.jpg',
        address:'20 W 34th St., New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9856644
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'Eiffel Tower',
        description:'One of the most romantic place in the worls',
        imageUrl:'https://cdn-imgix.headout.com/media/images/ee93a79d9e947470e2f581ffb6247b01-Seine%20in%20Paris%20with%20Eiffel%20Tower.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces',
        address:'Av. Gustave Eiffel, 75007 Paris, France',
        location: {
            lat: 48.8583701,
            lng: 2.2919064
        },
        creator: 'u2'
    }
]
const UserPlaces = () => {
   const userId = useParams().userId;
   const loadedPlaces= DUMMY_PLACES.filter(place => place.creator === userId);
   return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;