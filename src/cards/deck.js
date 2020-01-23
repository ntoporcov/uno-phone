const colors = ['#00AA00','#FF5555','#5555FF','#FFAA00'];
const extraCards = ['cardChangeColor','cardWild4'];
let deck = [];

colors.forEach(function(color){
    //create 2x ever colored card/color combination
    for(let i=1;i<13;i++){
        let id;
        let value;
        switch (i) {
            case 10:
                id='Block';
                value = '⦸';
                break;
            case 11:
                id='Reverse';
                value='⟲';
                break;
            case 12:
                id='Wild2';
                value='+2';
                break;
            default:
                id=i;
                value=i;
        }
        deck.push(
            {
                id:"card"+id.toString(),
                value:value,
                color:color,
            },
            {
                id:"card"+id.toString(),
                value:value,
                color:color,
            })
    }
    //only one 0 per color
    deck.push({
        id:"card0",
        value:0,
        color:color,
    })
});

extraCards.forEach(function(card){
    for(let i=0;i<4;i++){
        const value = card==='cardChangeColor'?'':'+4';
        deck.push({
            id:card,
            value:value,
            color:null
        })
    }
});

export default deck;
