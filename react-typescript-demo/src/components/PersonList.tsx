type PersonListProps={
    names:{
        first:string;
        last:string;
    }[]
}
export const PersonList=(props:PersonListProps)=>{
    return (
        <div>
        {props.names.map((name,index)=>(
            <h2 key={index}>{name.first} {name.last}</h2>
        ))}
        first: {props.names[0].first}
        second: {props.names[1].first}
        </div>
    )
}