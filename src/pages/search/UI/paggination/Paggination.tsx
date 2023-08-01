import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import './style.scss'

type Props = {}

const Paggination = (props: Props) => {
  return (
    <div className='paggination'>
        <div className="paggination__arrows">
            <MdKeyboardArrowLeft/>
        </div>
        <div className="paggination__arrows">
            <MdKeyboardArrowRight/>
        </div>
    </div>
  )
}

export default Paggination