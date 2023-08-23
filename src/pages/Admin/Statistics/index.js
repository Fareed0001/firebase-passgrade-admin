import React from 'react'
import Bard from './barchart'
import Piy from './piechart'
import Container from '@/SharedComponents/Container'


export default function Index() {
  return (
    <div className='container mx-auto py-10'>
       <Container title="Paid Course" subTitle="Statistical View of Paid Course">
      <div className='flex mt-[6rem]'>
        <Bard />
        <Piy />
    </div>
    </Container>
    </div>
  )
}
