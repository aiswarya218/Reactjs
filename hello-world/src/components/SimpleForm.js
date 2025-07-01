import React, { useState } from 'react';

function SimpleForm() {
    const [formData, setFormData] = useState({
        name : '',
        email : '',
        message : '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name] : value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted:', formData);
        alert(`Thank you, ${formData.name}! Your message has been received.`);
        setFormData({ name : '', email : '', message : ''});
    };

    return (
        <div style = {{ maxWidth : '400px', margin : 'auto', padding : '20px'}}>
            <h2>Contact Us</h2>
            <form onSubmit = {handleSubmit}>
                <div style = {{ marginBottom : '10px' }}>
                    <label>
                        Name :
                        <input type = "text" name = "name" value = {formData.name} onChange = {handleChange}  placeholder = "Enter your name" required
                        style = {{
                            width : '100%', padding : '8px', marginTop : '5px', border : '1px solid #ccc',
                            borderRadius : '5px',
                        }}
                        />
                    </label>
                </div>
                <div style = {{ marginBottom : '10px' }}>
                    <label>
                        Email : 
                        <input type = "email" name = "email" value = {formData.email} onChange = {handleChange}
                        placeholder = "Enter your email" requiredstyle = {{
                            width : '100%',
                            padding : '8px',
                            marginTop : '5px',
                            border : '1px solid #ccc',
                            borderRadius : '5px',
                        }}
                        />
                    </label>
                </div>
                <div style = {{ marginBottom : '10px'}}>
                    <label>
                        Message :
                        <textarea name = "message"  value = {formData.message} onChange = {handleChange} placeholder = "Your message here..."
                        required style = {{
                            width : '100%',
                            padding : '8px',
                            marginTop : '5px',
                            border : '1ps solid #ccc',
                            borderRadius : '5px',
                        }}
                        />
                    </label>
                </div>
                <button type = "submit" style = {{
                    padding : '10px 20px',
                    backgroundColor : '#007BFF',
                    color : 'white',
                    border : 'none',
                    borderRadius : '5px',
                    cursor : 'pointer',
                }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SimpleForm;