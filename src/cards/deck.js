const colors = ['#00AA00','#FF5555','#5555FF','#FFAA00'];
const extraCards = ['cardChangeColor','cardWild4'];
let deck = [];

colors.forEach(function(color){
    //create 2x ever colored card/color combination
    for(let i=1;i<13;i++){
        let id;
        switch (i) {
            case 10:
                id='Block';
                break;
            case 11:
                id='Reverse';
                break;
            case 12:
                id='Wild2';
                break;
            default:
                id=i;
        }
        deck.push(
            {
                id:"card"+id.toString(),
                value:id,
                color:color,
            },
            {
                id:"card"+id.toString(),
                value:id,
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
        deck.push({
            id:card,
            value:null,
            color:null
        })
    }
});

export default deck;
