import * as Dialog from '@radix-ui/react-dialog';
import { SearchIcon } from './Icons';

export default () => (
  <Dialog.Root>
    <Dialog.Trigger>
      <SearchIcon />
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 bg-gray-900' />
      <Dialog.Content className='fixed top-1/2 left-1/2 max-h-[80vh] max-w-screen-xs -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-5 py-4 shadow-xl'>
        <div className='space-y-3'>
          <div className='flex items-center justify-between'>
            <Dialog.Title className='text-lg font-semibold text-gray-700'>
              Are you sure want to Edit your profile ?
            </Dialog.Title>
            <Dialog.Close>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7 rounded-full p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </Dialog.Close>
          </div>
          <Dialog.Description className='text-gray-500'>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </Dialog.Description>
          <div className='flex justify-end'>
            <Dialog.Close className='rounded-md bg-blue-600 px-3 pt-0.5 pb-1 font-semibold text-white duration-100 ease-in-out hover:bg-blue-700'>
              Confirm
            </Dialog.Close>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
