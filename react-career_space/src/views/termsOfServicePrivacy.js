import React from 'react';
import "../styles/termsOfServicePrivacy.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function TermsOfServicePrivacy() {
    return (
        <div className='termsOfServicePrivacy'>
            <Card>
                <Card.Header><h1>Terms of Service & Privacy</h1></Card.Header>
                <Card.Body>
                    <Card.Title>Please read the following Terms of Service Agreement carefully.</Card.Title>
                    <Card.Text>
                        <p> By accessing or using SouthFLDevJobs, known as "our website", and our services,
                            you hereby agree to be bound by the terms and all terms incorporated
                            herein by reference. It is the responsibility of you, the user, or
                            potential User, to read the terms and conditions before proceeding to use
                            this site. If you do not expressly agre to all of the terms and
                            conditions, then please do not access or use our site or our services.
                            This terms of service agreement is effective as the date you sign up. </p>
                    </Card.Text>
                    <Button variant="primary">I agree.</Button>
                </Card.Body>
            </Card>
            <br>
            </br>

        </div>
    )
}

export default TermsOfServicePrivacy