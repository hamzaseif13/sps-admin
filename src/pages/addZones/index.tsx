import { Wrapper } from '@googlemaps/react-wrapper'
import ZoneForm from './ZoneForm'

function AddZone() {

  return (
    <Wrapper libraries={[ 'places', 'visualization']} apiKey={import.meta.env.VITE_MAPS_API_KEY}>
      <div className='px-2  mt-[10rem]'>
          <h1 className=' font-bold title text-center mb-4'>Add New Zone</h1>
          <ZoneForm/>
      </div>
    </Wrapper>
  )
}

export default AddZone