import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Topic } from '@/components/Materi';

//Dialog (Modal)
export default function MyDialog() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Topic name='Dialog' />
      <Dialog as='div' open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay />

        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data will be permanently
          removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog>
    </>
  );
}
