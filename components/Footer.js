const Footer = () => {
  return (
    <footer>
      <div className="w-72 lg:w-96">
        <div>
          <h3 className="font-helvetica font-bold text-2xl">A propos</h3>
          <p className="opacity-50 leading-[30px]">
            L’affiliation a la ligue d’athlétisme de la wilaya de Annaba est
            ouverte a toutes association loi 12/06 ayant pour objet la pratique
            de l’athlétisme. <br />
            S’affilier a la ligue permet de bénéficier de nombreux avantages sur
            le plan administratif, sportif et technique.
          </p>
        </div>
      </div>
      <div className="w-72 lg:w-96 flex flex-col lg:items-end">
        <div className="">
          <h3 className="font-helvetica font-bold text-2xl">Contact</h3>
          <span className="opacity-50">Secrétaire Général : 0673-53-25-40</span>
          <span className="opacity-50">Le Secrétariat : 0662-14-73-72</span>
          <span className="opacity-50">Tel  président : 0662-14-72-86</span>
          <span className="opacity-50">
            Tel directeur exécutif 0674-56-02-81
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
