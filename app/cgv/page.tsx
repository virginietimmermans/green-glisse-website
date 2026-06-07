import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — Green Glisse Surf School",
  description: "Conditions générales de vente de l'école de surf Green Glisse à Biarritz.",
};

export default function CgvPage() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h1
          className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-8"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Conditions Générales de Vente
        </h1>
        <p className="text-gray-500 text-sm mb-10">Dernière mise à jour : juin 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          {[
            {
              titre: "1. Présentation de l'entreprise",
              contenu: `Green Glisse Surf School est une école de surf située à la Plage de la Côte des Basques, 64200 Biarritz, France. Contact : greenglisse.surfschool@gmail.com — Tél : 06 21 77 25 46.`,
            },
            {
              titre: "2. Prestations proposées",
              contenu: `Green Glisse propose des cours de surf collectifs, des cours particuliers, et des forfaits multi-cours. Toutes les prestations comprennent la mise à disposition du matériel (planche, combinaison) et l'assurance responsabilité civile.`,
            },
            {
              titre: "3. Réservation",
              contenu: `La réservation s'effectue par téléphone, WhatsApp ou email. Elle est confirmée à réception d'un acompte de 30% du montant total ou à la confirmation écrite de notre part. Le solde est à régler le jour du cours.`,
            },
            {
              titre: "4. Tarifs",
              contenu: `Les tarifs en vigueur sont ceux affichés sur notre site au moment de la réservation. Deux grilles tarifaires s'appliquent : tarif hors saison (septembre–juin) et tarif haute saison (juillet–août). Les tarifs sont en euros TTC.`,
            },
            {
              titre: "5. Annulation par le client",
              contenu: `• Annulation > 48h avant le cours : remboursement intégral de l'acompte.\n• Annulation entre 24h et 48h : remboursement de 50% de l'acompte.\n• Annulation < 24h ou absence non signalée : aucun remboursement.\nToute annulation doit être notifiée par écrit (WhatsApp ou email).`,
            },
            {
              titre: "6. Annulation par Green Glisse",
              contenu: `En cas de conditions météorologiques dangereuses (tempête, houle excessive, orage) ou d'événement de force majeure, Green Glisse se réserve le droit d'annuler les cours. Dans ce cas, les cours sont reportés ou remboursés intégralement.`,
            },
            {
              titre: "7. Conditions de participation",
              contenu: `Le participant doit savoir nager. Les mineurs de moins de 18 ans doivent présenter une autorisation parentale. Tout participant est tenu de respecter les consignes de sécurité données par les moniteurs. Green Glisse se réserve le droit d'exclure tout participant dont le comportement mettrait en danger sa sécurité ou celle des autres.`,
            },
            {
              titre: "8. Responsabilité",
              contenu: `Le surf est un sport nautique comportant des risques inhérents. Green Glisse souscrit à une assurance responsabilité civile professionnelle. Les participants pratiquent sous leur propre responsabilité. Green Glisse ne saurait être tenu responsable des accidents résultant du non-respect des consignes de sécurité.`,
            },
            {
              titre: "9. Données personnelles",
              contenu: `Les données personnelles collectées lors de la réservation sont utilisées uniquement dans le cadre de la prestation. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contact : greenglisse.surfschool@gmail.com.`,
            },
            {
              titre: "10. Litiges",
              contenu: `En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, tout litige sera soumis aux tribunaux compétents de Bayonne (France). Le droit applicable est le droit français.`,
            },
          ].map((section) => (
            <div key={section.titre}>
              <h2
                className="text-xl font-bold text-[#2D6A4F] mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {section.titre}
              </h2>
              <div className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                {section.contenu}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
