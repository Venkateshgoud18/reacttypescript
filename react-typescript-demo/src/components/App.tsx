import {Toast} from './Toast'
export const App=()=>{
    return (
        <div>
            <Toast position='top-left'/>
            <Toast position='top-center'/>
            <Toast position='top-right'/>
            <Toast position='center-left'/>
            {/* <Toast position='center-center'/> */}
            <Toast position='center-right'/>
            <Toast position='bottom-left'/>
            <Toast position='bottom-center'/>
            <Toast position='bottom-right'/>
        </div>
    )
} 