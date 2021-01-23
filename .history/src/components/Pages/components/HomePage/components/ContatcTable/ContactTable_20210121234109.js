import React from 'react';
import './ContactTable.css';

const info = [{
    key: 'age',
    title: 'age',
    value: '24',
}, {
    key: 'residence',
    title: 'Residence',
    value: 'Melbourne',
},{
    key: 'address',
    title: 'Address',
    value: '105 Batman St, West Melbourne',
}, {
    key: 'email',
    title: 'Email',
    value: (
        <a href="robert.xu.owl@gmail.com">
            robert.xu.owl@gmail.com
        </a>
    ),
}, {
    key: 'phone',
    title: 'Phone',
    value: '+0451 167 306',
    }]

const ContactTable = () => (
    <table className="homepage__contact">
        <tbody>
            {info.map(({ key, title, value }) => (
                    <tr key={key}>
                        <td>{title}</td>
                        <td>{value}</td>
                    </tr>
            ))}
        </tbody>
    </table>
)

export default ContactTable;


