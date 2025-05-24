import React from 'react'
import Cover from '../Shared/Cover'
import contactsCover from '../../assets/contact/contacsCover.jpg'
import SectionTitle from '../../components/SectionTitle'
import Location from './Location '
import ContactsForm from './ContactsForm'

const Contacts = () => {
    return (
        <div>
            <Cover img={contactsCover} title={"Contact Us"} des="Would you like to try a dish?" />

            {/* Location */}
            <section>
                <SectionTitle subHeading={'Visit Us'} heading={'Our Location'} />
                <Location />
            </section>

            {/* Contact Form */}
            <section>
                <SectionTitle subHeading={'Send Us a Message'} heading={'CONTACT FORM'} />
                <ContactsForm />
            </section>
        </div>
    )
}

export default Contacts