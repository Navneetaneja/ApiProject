import React from "react";
import './Fetch.css';

class FetchApi extends React.Component{
    constructor()
    {
        super();
        this.state={
            items:[],
            isLoaded:false,
            error:null
        }
    }
    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res=>res.json())
        .then(result=>{
            this.setState({
                items:result,
                isLoaded:true
            })
        },error=>{
            this.setState({
                isLoaded:true,
                error:error
            })
        })
    }
    render()
    {
        const items=this.state.items;
        if(this.state.error!==null)
        {
            return <div>Error: {this.state.error.message}</div>
        }
        else if(!this.state.isLoaded)
        {
            return <div>Loading.....</div>
        }
        return(
            <div class="container">
                {
                    items.filter((item, idx) => idx < 50).map(item=>(
                        <div class="items_container">
                            <span style={{marginRight:"2vw"}}>{item.id}</span>
                            <img src={item.thumbnailUrl} key={item.id} alt={item.albumId}/>
                            <div style={{marginLeft:"2vw"}}>
                            <h4>Title : {item.title}</h4>
                            <a href={item.url} rel="noreferrer" target="_blank">{item.url}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}
export default FetchApi;