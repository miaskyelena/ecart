import React, {useState} from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
const ListView = () => {
    const [listView, setListView] = useState(false)

    const handleView = () => {
        setListView(!listView)
    }

  return (
    <ToggleButtonGroup
        value={listView}
        exclusive
        onChange={handleView}
        aria-label="text alignment"
      >
        <ToggleButton value={false} aria-label="left aligned">
          <GridViewIcon />
        </ToggleButton>
        <ToggleButton value={true} aria-label="centered">
          <FormatListBulletedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
  )
}

export default ListView