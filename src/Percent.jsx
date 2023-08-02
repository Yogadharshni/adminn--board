import MoreHoriz from '@mui/icons-material/MoreHoriz';

export function Perchantage_containe() {
  const data1 = [{
    name: "Server Migration",
    perchantage: "20",
    color: "red",
  }, {
    name: "Sales Tracking",
    perchantage: "40",
    color: "blue"
  }, {
    name: "Customer Databas",
    perchantage: "60",
    color: "green"
  }, {
    name: "Payout Details",
    perchantage: "80",
    color: "rgb(255, 166, 0)"
  }, {
    name: "Account Setup",
    perchantage: "100",
    color: "rgb(55, 200, 255)"
  }];
  return (
    <div className='perchantage_containe'>
      <div className='clicle-top-title-container'>
        <h6>Projects</h6>

        <MoreHoriz sx={{ rotate: "90deg" }} />

      </div>
      {data1.map((dd, index) => (<Perchantage_level name1={dd} key={index} />))}

    </div>
  );
}
function Perchantage_level({ name1 }) {
  const styles = {
    backgroundColor: `${name1.color}`,
    width: `${name1.perchantage}%`
  };
  return (
    <div className='perchantage_level_container'>
      <div className='perchantage_level_title'>
        <h6>{name1.name}</h6>
        <h6>{name1.perchantage + "%"}</h6>
      </div>
      <div className='perchantage_level_background'>

        <div className='perchantage_level' style={styles}></div>
      </div>
    </div>
  );
}