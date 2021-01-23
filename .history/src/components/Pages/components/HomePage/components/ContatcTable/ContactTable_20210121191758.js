import React from 'react';
import './ContactTable.css';

const ContactTable = () => (
    <table class="homepage__contact">
        <tbody>
            {[{
                key: 'age',
                title: 'age',
                value: '24',
            }, {
                key: 'residence',
                title: 'Residence',
                value: 'Melbourne',
            },{
                key: 'age',
                title: 'age',
                value: '29',
            }]}
        </tbody>




        <tr>
            <td>Age</td>
            <td>20</td>
        </tr>
        <tr>
            <td>Residence</td>
            <td>Gaia</td>
        </tr>
        <tr>
            <td>Address</td>
            <td>Level 3 / 57 Coronation Drive, Brisbane</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>
            <a href="mailto:info@jiangren.com.au">
                info@jiangren.com.au
            </a>
            </td>
        </tr>
        <tr>
            <td>Phone</td>
            <td>+0123 123 456 789</td>
        </tr>
    </table>
)

export default ContactTable;


