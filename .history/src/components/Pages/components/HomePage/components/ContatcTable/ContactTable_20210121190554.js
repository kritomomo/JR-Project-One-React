import React from 'react';
import './ContactTable.css';

const ContactTable = ({
    title,
    content,
}) => (
    <table className="homepage__contact">
        <tr>
            <td>{title}</td>
            <td>{content}</td>
        </tr>
    </table>
)

export default ContactTable;
    


<ContactTable
    
></ContactTable>

