type StatusProps={
    status:'loading' | 'success' | 'error'
}
export const Status=(props:StatusProps)=>{
    let message;
    if(props.status==='loading'){
        message=<h2>Loading...</h2>
    }else if(props.status==='success'){
        message=<h2>Data fetched</h2>
    }else if(props.status==='error'){
        message=<h2>Error</h2>
    }
    return <div>
        {message}
    </div>
}