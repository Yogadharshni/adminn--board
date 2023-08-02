import MoreHoriz from '@mui/icons-material/MoreHoriz';

export function Circlevalue() {
  return (
    <div className='circle_background'>
      <div className='clicle-top-title-container'>
        <h6>Revenue Sources</h6>

        <MoreHoriz sx={{ rotate: "90deg" }} />

      </div>

      <div className='circle-value-container'>
        <div className='circle-value'></div>
      </div>
      <div className='circle-bottom'>
        <div className='small_circle_container'><div className='small_circle'></div>Direct</div>
        <div className='small_circle_container'><div className='small_circle2'></div>Social</div>
        <div className='small_circle_container'><div className='small_circle3'></div>Referral</div>
      </div>
    </div>

  );
}