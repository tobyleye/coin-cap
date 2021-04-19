
interface Currency {
    name: string;
    symbol: string;
    quote: {
      USD: {
        market_cap: number;
        price: number;
        percent_change_1h: number;
        percent_change_24h: number;
      }
    };
    total_supply: number
  }

  function getColor(percent: number): string {
    return percent >=0 ? 'green' : 'red'
  }
    // format number or price or whatever
  function formatNumberOrPrice(number: number): string {
      // because toFixed method returns a string and toLocaleString in our context doesnt work as intended with strings
      // cast string to number before final chain. 
      return Number(number.toFixed(2)).toLocaleString()
  }
  
  function ListingTable({ listings }: { listings: Array<Currency>} ) {
    return (
      <table className="table">
        <thead>
          <tr>
          <td>No</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Market cap</td>
            <td>Price</td>
            <td>Circulating supply</td>
            <td>%1h</td>
            <td>%24h</td>
          </tr>
        </thead>
        <tbody>
          { listings.map((item, index ) => (
            <tr>
             <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.symbol}</td>
            <td>${formatNumberOrPrice(item.quote.USD.market_cap)}</td>
            <td>${formatNumberOrPrice(item.quote.USD.price)}</td>
            <td>${formatNumberOrPrice(item.total_supply)}</td>
            <td style={{ color: getColor(item.quote.USD.percent_change_1h) }}>
            {item.quote.USD.percent_change_1h.toFixed(2)}
            </td>
            <td style={{ color: getColor(item.quote.USD.percent_change_24h) }}>
            {item.quote.USD.percent_change_24h.toFixed(2)}
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  export default ListingTable