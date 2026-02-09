type RandomProps={
    value:number
    isPositive?:boolean
    isNegative?:boolean
    isZero?:boolean
}
export const RestrictProps=(props:RandomProps)=>{
    let message;
    if(props.isPositive){
        message='The number is positive'
    }
    else if(props.isNegative){
        message='The number is negative'
    }
    else if(props.isZero){
        message='The number is zero'
    }
    return (
        <div>
            <h2>{props.value}</h2>
            <p>{message}</p>
        </div>
    )
}