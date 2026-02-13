type HorizantalPosition='left'|'center'|'right'
type VerticalPosition='top'|'center'|'bottom'
type ToastProps={
    position?:Exclude<`${VerticalPosition}-${HorizantalPosition}`,`center-center`>
}
export const Toast=(props:ToastProps)=>{
    return (
        <div>
            <h2>{props.position}</h2>
        </div>
    )
}