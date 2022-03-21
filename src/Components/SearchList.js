import classes from './SearchList.module.css';
import SearchItem from './SearchItem';

const SearchList = props =>{
    return (
        <div className= {classes.searchlist}>
            <ul>
                {props.searchResults.map(({product,id, scenario, kb, url, resolution_category, Description})=> 
                <SearchItem 
                    key = {id}
                    product = {product}
                    scenario= {scenario}
                    resolutionCategory ={resolution_category}
                    kb= {kb}
                    url= {url}
                    description = {Description}
                />)}
            </ul>
        </div>
    )
}

export default SearchList;
