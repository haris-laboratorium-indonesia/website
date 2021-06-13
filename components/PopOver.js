import { Menu } from "@headlessui/react";
export default function PopOver({ title }) {
  return (
    <Menu>
      <Menu.Button>{title}</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
