interface IReservations { 
    name: string;
    phone: string;
    numberOfPeople: number;
    smoking: boolean;
    dateTime: string;
    specialRequests: string;
    _id?: number;
}


export default IReservations;