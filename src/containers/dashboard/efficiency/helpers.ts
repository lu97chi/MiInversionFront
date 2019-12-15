import moment from 'moment';

const months = ['Enero','Febrero','Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];


//diciembre = 11
export const monthlyRatePlan = (plan: {duration: number, monthlyrate: number}, invest:number) => {
    const payload = [];
    const { duration, monthlyrate } = plan;
    let initialMonth = moment().month();
    let initialInvest = invest;
    for (let i = 0; i < duration ; i+=1) {
        const acc = initialInvest * (monthlyrate / 100);
        const nextInvest = acc + initialInvest;
        const nextMonth = getNextMonth(initialMonth)
        payload.push({
            actual: i + 1,
            month : months[nextMonth],
            acc : nextInvest
        });
        initialInvest = nextInvest;
        initialMonth = nextMonth;
    }
    return payload;
}

const getNextMonth = (month:number) => {
    if(month === 11) return 0;
    return month + 1;
}