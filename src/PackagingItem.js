function Item({name, isPacked}){
    //Using If Else Operator
    // if (isPacked){
    //   return  <li>{name}  ✔</li>
    // }
    // return(
    //     <li>{name}</li>
    // )
    //Using Ternary Operator
    // return <li>{isPacked ?  <del>
    //     {name + ' ✔'}
    //   </del>  : name} </li>;
    //Using Double AND operator
    //  return (
    //     <li className="item">
    //       {name} {isPacked && '✔'}
    //     </li>
    //   );
   // Using variable
   let content = name;
   if(isPacked){
   content = content + '✔'
}
return <li>{content}</li>
};
export default function PackagingItem(){
    return(
        <>
            <h1>Sayyed Ashfaq</h1>
            <Item name={"Helmet"} isPacked = {true}></Item>
            <Item name={"Jeans"}  isPacked = {false}></Item>
            <Item name={"Laptop" }isPacked = {true}></Item>
        </>
    )
}