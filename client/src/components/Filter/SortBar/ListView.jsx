import React, {useState} from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
const ListView = ({ toggleListView }) => {
    const [listView, setListView] = useState(false)

    const handleView = () => {
        setListView(!listView)
        toggleListView(!listView)
    }

  return (
    <div class="dropdown">
        <button class="btn btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          { listView ? <FormatListBulletedIcon /> : <GridViewIcon />}
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#" onClick={handleView}>
            { listView ?  'Gallery View' : 'List View'}
            </a></li>
        </ul>
    </div>
  )
}

export default ListView