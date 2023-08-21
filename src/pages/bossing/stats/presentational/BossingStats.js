//presentation for calculating bossing statistics
/* props: 
  calcCurrentIncome: function that computes current income earned      
  calcMaxIncome: function that computes max income possible 
  countCurrentCrystals:  function that counts current crystals sold
  countMaxCrystals:  function that counts max possible crystals
*/
function BossingStats(props) {

    return (
      <>
        BOSSING STATS <br/>
        {/* toLocaleString() adds commas to a number */}
        Weekly Income Earned: {props.calcCurrentIncome().toLocaleString()}/{props.calcMaxIncome().toLocaleString()}<br/> 
        Weekly Crystals Sold: {props.countCurrentCrystals()}/{props.countMaxCrystals()}<br/>
      </>
    );
  }
  
export default BossingStats;