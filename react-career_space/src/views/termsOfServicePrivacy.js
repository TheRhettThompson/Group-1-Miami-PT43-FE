import React from 'react';
import "../styles/termsOfServicePrivacy.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function TermsOfServicePrivacy() {
    return (
        <div className='termsOfServicePrivacy container'>
            <Card>
                <Card.Header><h1>Terms of Service & Privacy</h1></Card.Header>
                <Card.Body>
                    <Card.Title>Please read the following Terms of Service Agreement carefully.</Card.Title>
                    <Card.Text className='tosText'>
                        By accessing or using SouthFLDevJobs, known as "our website", and our services,
                        you hereby agree to be bound by the terms and all terms incorporated
                        herein by reference. It is the responsibility of you, the user, or
                        potential User, to read the terms and conditions before proceeding to use
                        this site.
                    </Card.Text> 
                    <Card.Text className='tosText'>
                        There will be some legal language here about how SouthFLDevJobs deals with 
                        persome information of our users, how we collect, use, protect, and
                        share this information. Users include those who visit our website and use our
                        mobile web applicationWe, and otherwise interact with us. 
                    </Card.Text>
                    <Card.Text className='tosText'>
                        If you do not expressly agre to all of the terms and
                        conditions, then please do not access or use our site or our services.
                        This terms of service agreement is effective as the date you sign up. 
                    </Card.Text>
                   <div className='AgreeButton'>
                        <Button className='agreeButton' variant="mb-3 btn btn-info">I agree.</Button>
                    </div>
                </Card.Body>
            </Card>
            <br>
            </br>

        </div>
    )
}

export default TermsOfServicePrivacy