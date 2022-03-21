import classes from './SearchItem.module.css'

const SearchItem = props=> {

    return (
        <div className= {classes.searchitem}>
            <h4>{props.scenario}</h4>
            <div style = {{display: 'flex'}}>
                <h6 style={{paddingRight: '20px'}}>Product:<span style={{color:"#EF5455"}}> {props.product} </span></h6>
                <h6 style={{paddingLeft: '20px'}}>KB Article: <a target= "_blank" rel="noreferrer" href= {props.url}>{props.kb}</a></h6>
            </div>
            <div style = {{display: 'flex'}}>
                <h6 tyle={{paddingRight: '20px'}}>Resolution Category: <span style={{color:"#EF5455"}}> {props.resolutionCategory} </span></h6>
                <h6 style={{paddingLeft: '20px'}}>Description: <span style={{color:"#EF5455"}}> {props.description} </span></h6>
            </div>
        </div>
    )

}

export default SearchItem;
