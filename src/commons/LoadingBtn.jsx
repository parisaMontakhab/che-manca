import { Skeleton,Box } from '@mui/material'
import React from 'react'

export default function LoadingBtn() {
  return (
    <Box>
        <Skeleton  variant="rounded" sx={{width:556,height:56}}  />
    </Box>
  )
}
