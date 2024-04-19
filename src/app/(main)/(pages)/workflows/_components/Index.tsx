import React from 'react'
import WorkFlow from './WorkFlow'

type Props = {}

const WorkFlows = (props: Props) => {
  return (
    <div className="relative flex flex-col ">
        <section className='flex flex-col m-4'>
            <WorkFlow name='Automate Discord' description='test WorkFlow' id='e78yre78hf87wh8f' publish />
        </section>
    </div>
  )
}

export default WorkFlows