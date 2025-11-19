import React from 'react'
import TopHeader from './TopHeader/TopHeader'
import MidHeder from './MidHeader/MidHeder'
import LastHeader from './LastHeader/LastHeader'

const Header = () => {
  return (
    <div>
        <TopHeader></TopHeader>
        <MidHeder></MidHeder>
        <LastHeader></LastHeader>
    </div>
  )
}

export default Header