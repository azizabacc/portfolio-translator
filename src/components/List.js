function List(props) {
    const items = props.items;
    const listItems = items.map((item,index) =>
      <li className='doc-title' key={index}>{item}</li>
    );
    return (  
        <ul className={props.showLists[props.number] ? 'visible-list' : 'hidden-list'}>{listItems}</ul> 
    );
}

export default List;