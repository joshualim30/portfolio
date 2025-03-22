// Contact.tsx - Contact page component
// 10/22/2024 - Joshua Lim

import React from 'react';
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

// Contact page component
const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isOpenSuccess, onOpenChangeSuccess] = React.useState(false);
  const [isOpenFailure, onOpenChangeFailure] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <section id="contact">
      <div className='max-w-xs lg:max-w-xl h-screen flex items-center justify-center mx-auto'>
        <div className="w-full grid-flow-row space-y-6 justify-between">
          <h1 className='font-bold text-4xl text-center'>Let's get in touch!</h1>
          <h2 className='font-normal text-md pb-6 text-center text-default-500'>Feel free to shoot me a message and I will get back to you as soon as possible!</h2>
          <Input
            isRequired
            label="Name"
            placeholder="John Doe"
            type='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            isRequired
            label="Email"
            placeholder="example@email.com"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Phone Number"
            placeholder="123-456-7890"
            type='tel'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Textarea
            isRequired
            label="Message"
            placeholder="Hello! I would like to get in touch with you!"
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button color="primary" className='w-full' onClick={
            async () => {
              // Enable loading state
              setIsLoading(true);

              // Add message to Firestore
              try {
                // Add a new document with a generated id
                await addDoc(collection(db, "messages"), {
                  name: name,
                  email: email,
                  phone: phone,
                  message: message,
                  timestamp: new Date()
                });

                // Disable loading state
                setIsLoading(false);

                // Clear form
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');

                // Open modal
                onOpenChangeSuccess(true);
              } catch (e) {
                console.error("Error adding document: ", e);
                // Disable loading state
                setIsLoading(false);

                // Open modal
                onOpenChangeFailure(true);
              }
            }
          } isLoading={isLoading}>Send Message</Button>
          <Modal isOpen={isOpenSuccess} onOpenChange={onOpenChangeSuccess}>
            <ModalContent>
              <ModalHeader>Message Sent</ModalHeader>
              <ModalBody>
                Your message has been sent successfully! I will get back to you as soon as possible!
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={
                  // Redirect to home page
                  () => window.location.href = "/"
                }>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Modal isOpen={isOpenFailure} onOpenChange={onOpenChangeFailure}>
            <ModalContent>
              <ModalHeader>Error Sending Message</ModalHeader>
              <ModalBody>
                There was an error sending your message :( Please try again later!
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={
                  // Close modal
                  () => onOpenChangeFailure(false)
                }>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Contact;