import { useSideMenuState } from "../state-store";
import { CloseIcon } from "./icons";
import MenuItems from "./MenuItems";

const menuItems = [
  // ...
  {
    title: "accueil",
    url: "/",
  },
  {
    title: "récapitulatif",
    submenu: [
      {
        title: "La Ligue",
        submenu: [
          {
            title: "Présentation",
            url: "/présentation",
          },
          {
            title: "Les commissions",
            url: "/les-commissions",
          },
        ],
      },
      {
        title: "Les Clubs",
        submenu: [
          { title: "Les clubs affiliés", url: "/les-clubs-affiliés" },
          {
            title: `S'affilier`,
            url: "/s'affilier",
          },
        ],
      },
    ],
  },
  {
    title: "compétitions",
    submenu: [
      {
        title: "Information Des Compétitions",
        url: "/information-des-compétitions",
      },
      {
        title: "Calendrier Des Compétitions",
        url: "/calendrier-des-compétitions",
      },
      {
        title: "Programmes Des Journées De Compétitions",
        url: "/programmes-des-journées-de-compétitions",
      },
      {
        title: "Engagement Des Compétitions",
        url: "/engagement-des-compétitions",
      },
      {
        title: "Le Modele De’engagement Se Trouve",
        url: "/le-modele-d’engagement-se-trouve",
      },
      {
        title: "Résultats des compétition",
        url: "/résultats-des-compétition",
      },
    ],
  },
  {
    title: "document",
    submenu: [
      {
        title: "Assemblée Générale 2022",
        url: "/assemblée-générale-2022",
      },
      {
        title: "Status",
        url: "/status",
      },
      {
        title: "Plan D’action 2022",
        url: "/plan-d’action-2022",
      },
      {
        title: "PV Des Réunions Bureaux De La Ligue",
        url: "/pv-des-réunions-bureaux-de-la-ligue",
      },
      {
        title: "Divers Pv Des Commissions",
        url: "/divers-pv-des-commissions",
      },
    ],
  },
  {
    title: "contact",
    url: "/contact",
  },
];

const Nav = () => {
  const [sideMenuVisible, toggleSideMenuVisible] = useSideMenuState((state) => [
    state.isVisible,
    state.toggle,
  ]);

  return (
    <nav
      className={`nav ${
        sideMenuVisible ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <ul className="pt-7 w-9/12 h-full flex flex-col px-8 bg-white space-y-[24px] lg:space-y-0 lg:flex-grow lg:px-0 lg:justify-around lg:flex-row lg:pt-0 lg:bg-inherit lg:items-center overflow-y-scroll lg:overflow-auto">
        <span className="font-sitka text-3xl mb-16 text-black lg:hidden">
          Lawa
        </span>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
        <button className="w-full min-h-[2.75rem] rounded-full bg-redPrimary uppuercase font-poppins font-normal text-white !mt-8 lg:hidden">
          PARTICIPER
        </button>
      </ul>
      <div
        onClick={toggleSideMenuVisible}
        className="w-1/4 h-full bg-black/70 flex justify-center lg:hidden"
      >
        <div className="mt-7">
          <CloseIcon />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
