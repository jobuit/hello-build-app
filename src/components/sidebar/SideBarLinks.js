const links = [
  {
    id: "repositories",
    title: "Github Repositories",
    icon: "fab fa-github",
  },
  {
    id: "calendar",
    title: "Google Calendar",
    icon: "fas fa-calendar-alt",
  },
];

function SidebarLinks() {
  return (
    <div className="flex flex-col w-full mb-4">
      {links.map(({ id, icon, title }) => (
        <div
          key={id}
          className="border-b border-gray-300 flex bg-gray-200 hover:bg-gray-300 w-full items-center py-2 px-4 cursor-pointer"
        >
          <p>
            <i className={`${icon} mr-2`} />
            {title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SidebarLinks;
