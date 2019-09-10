import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super (props);
            this.state={
                time: '0:0:0'
            
            };
                    
    }
    render (){
        return (
            <p>{this.state.time}</p>
        )
    }
}



export default Clock;