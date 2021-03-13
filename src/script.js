window.packages = [
    {
        id: '1',
        title: 'Delhi - Agra - Delhi Same Day (All Including)',
        partPayment: 20,
        pickUp: 'City Airport',
        note: 'Toll/Parking Extra as per Actual.<br/>Night Charge Rs. 250/- will be charged Extra between 10pm to 6am.',
        sites: [
            'Taj Mahal , Agra Fort ,itmad-ud-daulah Tomb , Mehtab Bagh',
        ],
        vehicles: [
            {
                name: 'Swift Dzire/Etios',
                cost: 5000,
            },
            {
                name: 'Innova',
                cost: 6300,
            },
            {
                name: 'Innova Crysta',
                cost: 7300,
            },
            {
                name: 'Tempo Travellers (12+1)',
                cost: 12300,
            },
        ],
    },
    {
        id: '2',
        title: 'Delhi-Agra-Jaipur-Delhi (Golden Trangle) 4 Nights 5 Days (All Including)',
        partPayment: 20,
        pickUp: 'City Airport',
        note: 'Toll/Parking Extra as per Actual.<br/>Night Charge Rs. 250/- will be charged Extra between 10pm to 6am.',
        sites: [
            'Taj Mahal , Agra Fort ,itmad-ud-daulah Tomb , Mehtab Bagh,   Agra -  Taj Mahal , Agra Fort ,itmad-ud-daulah Tomb , Mehtab Bagh, Fatehpur Sikri',
            'Jaipur - Amber Fort , Jal Mahal , Hawa Mahal, City Palace, Janter Manter',
            'Birla Temple, Nahargah Fort, Camel Safari, Elephant Safari',
        ],
        vehicles: [
            {
                name: 'Swift Dzire/Etios',
                cost: 13500,
            },
            {
                name: 'Innova',
                cost: 17000,
            },
            {
                name: 'Innova Crysta',
                cost: 19000,
            },
            {
                name: 'Tempo Travellers (12+1)',
                cost: 27000,
            },
        ],
    },
    {
        id: '3',
        title: 'Delhi-Haridwar-Rishikesh-Delhi 2 Days (All Including)',
        partPayment: 20,
        pickUp: 'City Airport',
        note: 'Toll/Parking Extra as per Actual.<br/>Night Charge Rs. 250/- will be charged Extra between 10pm to 6am.',
        sites: [
            'Haridwar - Har Ki Pauri ,ganga Aarti , Mansa Devi Temple, Shantikunj , Pawan Dham',
            'Rishikesh- Laxman Jhula, Ram Jhula',
        ],
        vehicles: [
            {
                name: 'Swift Dzire/Etios',
                cost: 7500,
            },
            {
                name: 'Innova',
                cost: 5000,
            },
            {
                name: 'Innova Crysta',
                cost: 8000,
            },
            {
                name: 'Tempo Travellers (12+1)',
                cost: 13000,
            },
        ],
    },
    {
        id: '4',
        title: 'Delhi-Shimla-Manali-Delhi 5 Nights 6 Days (All Including)',
        partPayment: 20,
        pickUp: 'City Airport',
        note: 'Toll/Parking Extra as per Actual.<br/>Night Charge Rs. 250/- will be charged Extra between 10pm to 6am.',
        sites: [
            'Shimla - Mall Road , Jakhu Temple ,  Kuffri',
            'Manali - Mall Road, Hadimba Temple, Manu Temple, Bashiste Temple, Solang Valley',
            'Rohtang Paas, Adventure - River Rafting, Paragliding, River Crossing, Trekking',
        ],
        vehicles: [
            {
                name: 'Swift Dzire/Etios',
                cost: 16500,
            },
            {
                name: 'Innova',
                cost: 22500,
            },
            {
                name: 'Innova Crysta',
                cost: 25000,
            },
            {
                name: 'Tempo Travellers (12+1)',
                cost: 34500,
            },
        ],
    },
];

window.booking = {
    data: {},
    order: {
        id: 0,
        processing: false,
        error: false,
    },
    package: {
        open: false,
        vehicle: {
            name: 0,
            cost: 0,
        },
    },
    payment: {
        full: 0,
        part: 0,
        due: 0,
        type: 'full',
    },
    getVehicleCost($event) {
        let cost = $event.target.getAttribute('data-vehical-cost');
        cost = cost.replace(/[^\d\.\-]/g, '');
        return Math.round(this.package.vehicle.cost = parseFloat(cost));
    },
    getPaymentAmount(){
        this.payment.part = Math.round(((this.package.vehicle.cost/100) * this.data.partPayment).toFixed(2));
        this.payment.full = Math.round(parseFloat(this.package.vehicle.cost));
        this.payment.due = Math.round(parseFloat(this.package.vehicle.cost) - this.payment[this.payment.type] );
    },
    setPackage: ($package) => {
        booking.data = $package;
    },
    submit() {
        const setProcessing = (state) => (this.order.processing = state);
        const setError = (state) => (this.order.error = state);
        const setOrderId = (id) => (this.order.id = id);
        setProcessing(true);
        setError(false);

        // Mock Form Submit
        setTimeout(function(){
            setOrderId(Math.floor(Math.random() * 100) + 1);
            setProcessing(false);
        }, 1000);
    }
};