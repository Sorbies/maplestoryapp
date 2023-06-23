function BossingStats(props) {

    return (
      <>
        STATS <br/>
        {/* toLocaleString() adds commas to a number */}
        Weekly Income Earned: {props.calcCurrentIncome().toLocaleString()}/{props.calcMaxIncome().toLocaleString()}<br/> 
        Weekly Crystals Sold: {props.countCurrentCrystals()}/{props.countMaxCrystals()}<br/>
      </>
    );
  }
  
export default BossingStats;