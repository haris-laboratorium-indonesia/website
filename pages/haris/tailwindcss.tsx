import MiniProjects from '@/components/MiniProjects';
import { Tab } from '@headlessui/react';

export default function FramerMotion() {
  return (
    <MiniProjects title='Tailwindcss'>
      <SubTitle>Menu (Dropdown)</SubTitle>
      <SubTitle>ListBox (Select)</SubTitle>
      <SubTitle>Switch (Toggle)</SubTitle>
      <SubTitle>Disclosure</SubTitle>
      <SubTitle>Dialog (Modal)</SubTitle>
      <SubTitle>Popover</SubTitle>
      <SubTitle>Radio Group</SubTitle>
      <SubTitle>Transition</SubTitle>
      <SubTitle>Tabs</SubTitle>
    </MiniProjects>
  );
}

const SubTitle = ({ children }) => {
  return <div className='mt-10 mb-5 text-xl font-semibold text-gray-800'>{children}</div>;
};
