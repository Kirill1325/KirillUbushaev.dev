import React from 'react'

interface ContactsProps {
  reff: React.RefObject<HTMLDivElement>
}

function Contacts({ reff }: ContactsProps) {
  return (
    <div className='contacts' ref={reff}>
      <h2>CONTACTS</h2>
      <div className='contactsContent'>
        <div className='contactsCategorie'>
          <b>Mail</b>
          <p>ubushaevkirill@gmail.com</p>
        </div>
        <div className='contactsCategorie'>
          <b>Phone</b>
          <p>8 (989) 344-12-53</p>
        </div>
        <div className='contactsCategorie'>
          <b>telegram</b>
          <p>@UbushaevKM</p>
        </div>
      </div>
    </div>
  )
}

export default Contacts