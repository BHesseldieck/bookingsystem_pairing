/*
Creating a booking system for rooms
*/

const input = [
  {
    id: '12344',
    title: 'Weekly Wrapup',
    room: 1,
    hostName: 'Carlos Cerveza',
    startDate: 1,
    endDate: 3,
    participants: ['Peter Pan', 'Wolfgang Carrott'],
    category: 'private',
  },
  {
    id: '34411',
    title: 'Lecture on JavaScript',
    room: 3,
    hostName: 'James Bond',
    startDate: 2,
    endDate: 3,
    participants: [],
    category: 'public',
  },
]

/*
1. We would like to know how many Bookings we have in our system
*/
const countBookings = () => input.length; // counting via reduce would be also an option or just simple loop

/*
2. For a better Overview we would like to have a function that returns public or private bookings in a separate array depending
   on the category as argument.
*/

const separator = (category) => input.filter((booking) => booking.category === category);

/*
   Rooms are open for usage from 09:00 to 17:00. Please return all bookings in an array that violate this rule.
*/

const outOfHours = () => input.filter((booking) => booking.startDate < 9 || booking.endDate > 17);

/*
3. Sometimes we need to know on which bookings a certain person will participate. Please write a function that returns an array of
   the booking titles where the person is registered.
*/

const getBookingsForName = (name) => input.reduce((acc, booking) => {
  if (booking.hostname === name || booking.participants.indexOf(name) !== -1) {
    acc.push(booking.title);
  }
  return acc;
},[]);

/*
4. To not overbook our rooms we need a function which determines if room bookings overlap. Print the booking ids as an array in
   case of an overlap.
*/

const checkOverlap =



