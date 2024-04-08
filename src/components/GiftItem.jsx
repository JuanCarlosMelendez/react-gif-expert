
export const GiftItem = ({ title, url }) => {

console.log( {url});

  return (
    <div>
        <img src={ url } alt={ title }/>
        <p>{ title }</p>
    </div>
  )
  
}
