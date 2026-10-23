const TERMS_RULES = [
  {
    title: 'Antisemitismus',
    description: 'Jegliche Form von antisemitischer Äusserung oder Handlung.',
  },
  {
    title: 'Ausbeuterische Inhalte',
    description: 'Inhalte, die auf die Ausbeutung von Menschen oder Tieren abzielen.',
  },
  {
    title: 'Ausweichung von Minderjährigenschutz',
    description:
      'Handlungen, die gegen den Schutz von Minderjährigen verstossen, wie z. B. unzulässiger Kontakt.',
  },
  {
    title: 'Beleidigung',
    description: 'Gebrauch von abwertender, beleidigender oder vulgärer Sprache.',
  },
  {
    title: 'Belohnungsjagd',
    description: 'Unrechtmässiges Ausnutzen von Funktionen der Plattform.',
  },
  {
    title: 'Belästigung',
    description: 'Unangemessene Annäherung, Kontaktaufnahme oder Nachstellung.',
  },
  {
    title: 'Betrug',
    description: 'Täuschung oder betrügerisches Verhalten zum Zweck der Bereicherung.',
  },
  {
    title: 'Christophobie',
    description: 'Feindseligkeit oder Vorurteile gegenüber Christen oder dem Christentum.',
  },
  {
    title: 'Cybergrooming',
    description:
      'Versuche, Kinder online zu manipulieren oder zu missbrauchen. Erwachsene, die versuchen, sich Kindern auf dieser Plattform anzunähern, werden nicht toleriert.',
  },
  {
    title: 'Diskriminierung',
    description:
      'Benachteiligung oder Herabwürdigung von Personen aufgrund von Geschlecht, Rasse, Religion, sexueller Orientierung oder anderen persönlichen Merkmalen.',
  },
  {
    title: 'Doxxing',
    description:
      'Veröffentlichung oder Weitergabe von privaten Informationen ohne Zustimmung der betroffenen Person.',
  },
  {
    title: 'Drohung',
    description: 'Androhung von Gewalt, Mord oder anderen negativen Konsequenzen.',
  },
  {
    title: 'Erpressung',
    description:
      'Jede Handlung, bei der eine Person durch Androhung von Nachteilen zu etwas gezwungen wird.',
  },
  {
    title: 'Falschinformationen',
    description: 'Verbreitung von falschen oder irreführenden Informationen.',
  },
  { title: 'Faschismus', description: 'Förderung oder Verbreitung faschistischer Ideologien.' },
  {
    title: 'Fremdenfeindlichkeit',
    description:
      'Feindseligkeit oder Vorurteile gegenüber Ausländern oder ethnischen Minderheiten.',
  },
  {
    title: 'Gefährliche Verschwörungstheorien',
    description:
      'Verbreitung oder Unterstützung von Theorien, die Panik, Angst oder Gewalt fördern können.',
  },
  {
    title: 'Gewaltbasierter Inhalt',
    description: 'Verbreitung von Inhalten, die Gewalt fördern oder darstellen.',
  },
  {
    title: 'Gewaltverherrlichung',
    description:
      'Förderung oder Rechtfertigung von Gewalt gegen Einzelpersonen, Gruppen oder Institutionen.',
  },
  {
    title: 'Hassrede',
    description: 'Äusserungen, die zu Hass oder Gewalt gegen bestimmte Gruppen aufrufen.',
  },
  {
    title: 'Homophobie',
    description: 'Feindseligkeit oder Vorurteile gegenüber homosexuellen Personen.',
  },
  {
    title: 'Identitätsdiebstahl',
    description:
      'Falsche Darstellung oder Ausgeben als eine andere Person, Institution oder Entität.',
  },
  {
    title: 'Illegale Inhalte',
    description:
      'Verbreitung oder Bereitstellung von Inhalten, die gegen geltendes Recht verstossen.',
  },
  {
    title: 'Islamophobie',
    description: 'Feindseligkeit oder Vorurteile gegenüber Muslimen oder dem Islam.',
  },
  {
    title: 'Kulturelle Aneignung',
    description:
      'Unangemessene Nutzung oder Darstellung von kulturellen Symbolen, Traditionen oder Werten.',
  },
  {
    title: 'Missbrauch von Privilegien',
    description:
      'Jegliche Form von ungerechtfertigter Ausnutzung von Rechten oder Zugriffsrechten auf dieser Webapplikation.',
  },
  {
    title: 'Plagiate',
    description:
      'Hochladen oder Teilen von Inhalten, die ohne Zustimmung von Dritten kopiert oder vervielfältigt wurden.',
  },
  {
    title: 'Pornografische Inhalte',
    description:
      'Verbreitung, Bereitstellung oder Zugänglichmachung von pornografischen oder sexuellen Inhalten.',
  },
  {
    title: 'Propaganda',
    description:
      'Verbreitung von politisch oder ideologisch einseitigen Informationen zu Manipulationszwecken.',
  },
  {
    title: 'Rassismus',
    description:
      'Diskriminierung oder Feindseligkeit gegenüber Personen aufgrund ihrer ethnischen Herkunft.',
  },
  {
    title: 'Selbstgefährdung',
    description:
      'Inhalte oder Verhaltensweisen, die zu Selbstverletzung oder suizidalem Verhalten ermutigen oder dieses fördern. Wir bitten darum, stattdessen dazu zu ermutigen, sich Hilfe zu suchen und mit jemandem darüber zu sprechen.',
  },
  {
    title: 'Selbstjustiz',
    description:
      'Förderung oder Verherrlichung von Handlungen, die darauf abzielen, Recht in die eigene Hand zu nehmen.',
  },
  {
    title: 'Sexismus',
    description:
      'Diskriminierung oder Herabwürdigung aufgrund des Geschlechts. Das gilt in beide Richtungen, sowohl Misogynie als auch Misandrie.',
  },
  {
    title: 'Sextortion',
    description:
      'Erpressung unter Androhung, private oder intime Informationen zu veröffentlichen.',
  },
  {
    title: 'Spam',
    description: 'Unerwünschte und unaufgeforderte Nachrichten, insbesondere Werbenachrichten.',
  },
  {
    title: 'Unangemessene Wortwahl',
    description: 'Verwendung von respektlosen, beleidigenden oder unangemessenen Ausdrücken.',
  },
  {
    title: 'Unethische Werbung',
    description:
      'Bewerbung von Produkten, Dienstleistungen oder Inhalten, die betrügerisch, unethisch oder schädlich sind.',
  },
]

export default {
  privacy: {
    title: 'Datenschutzerklärung',
    illustration: 'privacy',
    sections: [
      {
        title: '1. Verantwortliche Stelle',
        text:
          'Verantwortlich für die Bearbeitung von Personendaten in govex, dem zentralen Konto ' +
          'für alle Apps von NEOTYRA, ist:',
        lines: ['NEOTYRA', 'Jonas S. Büchi', 'Eichmatt 1', 'CH-3324 Hindelbank', 'Kanton Bern'],
      },
      {
        title: '2. Anwendbares Recht',
        text:
          'Diese Datenschutzerklärung richtet sich nach dem Schweizer Bundesgesetz über den ' +
          'Datenschutz (DSG) und der Verordnung über den Datenschutz (DSV). Soweit Personen im ' +
          'Europäischen Wirtschaftsraum betroffen sind, gilt zusätzlich die ' +
          'Datenschutz-Grundverordnung der Europäischen Union (DSGVO).',
      },
      {
        title: '3. Zweck der Datenbearbeitung',
        text:
          'NEOTYRA bearbeitet Personendaten, um Ihr Konto zu führen, Sie sicher anzumelden, Ihr ' +
          'Konto vor Missbrauch zu schützen und Sie bei den angeschlossenen Apps von NEOTYRA ' +
          'anzumelden. Wer dieser Bearbeitung nicht zustimmen möchte, ist eingeladen, govex ' +
          'nicht weiter zu verwenden.',
      },
      {
        title: '4. Bearbeitete Daten',
        text:
          'Wir bearbeiten Ihre Kontodaten (Benutzername, E-Mail-Adresse und Passwort, dieses nur ' +
          'verschlüsselt), Ihre Sicherheitsdaten (Passkeys, Authenticator-App und aktive ' +
          'Sitzungen), Ihre freiwilligen Profilangaben (Vorname, Nachname, Geburtsdatum und ' +
          'Profilbild) sowie Ihre Zustimmungen zu diesen Richtlinien. Beim Besuch werden zudem ' +
          'automatisch Log-Dateien mit IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL ' +
          'sowie Datum und Uhrzeit des Zugriffs gespeichert.',
      },
      {
        title: '5. Rechtsgrundlage',
        text:
          'Nach dem DSG bearbeiten wir Personendaten im Einklang mit den Grundsätzen von Art. 6 ' +
          'DSG. Soweit die DSGVO anwendbar ist, stützt sich die Bearbeitung auf die Erfüllung ' +
          'des Nutzungsvertrags (Art. 6 Abs. 1 lit. b DSGVO), auf das berechtigte Interesse von ' +
          'NEOTYRA an einem sicheren Betrieb (Art. 6 Abs. 1 lit. f DSGVO) und bei freiwilligen ' +
          'Profilangaben auf Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).',
      },
      {
        title: '6. Weitergabe an Dritte',
        text:
          'Wenn Sie sich bei einer angeschlossenen App von NEOTYRA anmelden, erhält diese Ihren ' +
          'Benutzernamen, Ihre E-Mail-Adresse und Ihre Profilangaben. Zum Schutz vor ' +
          'automatisierten Anmeldungen setzen wir Cloudflare Turnstile ein, dabei werden ' +
          'technische Daten wie Ihre IP-Adresse an Cloudflare, Inc. übermittelt. Die Server, ' +
          'auf denen govex und die angeschlossenen Apps betrieben werden, stellt DigitalOcean, ' +
          'LLC als Auftragsbearbeiter zur Verfügung, der Personendaten ausschliesslich nach ' +
          'Weisung von NEOTYRA und auf Grundlage eines Auftragsverarbeitungsvertrags bearbeitet ' +
          '(Art. 9 DSG; Art. 28 DSGVO). Vorbehalten ' +
          'bleibt die in Ziffer 8 abschliessend umschriebene, auf einer ausdrücklichen ' +
          'Einwilligung beruhende Bekanntgabe von Personendaten im Rahmen des Dossier-Systems ' +
          'Monolith (Art. 5 lit. e, Art. 6 Abs. 7 lit. a und Art. 31 Abs. 1 DSG; Art. 9 Abs. 2 ' +
          'lit. a DSGVO). Darüber hinaus geben wir keine Personendaten an Dritte weiter, ausser ' +
          'wir sind gesetzlich dazu verpflichtet.',
      },
      {
        title: '7. Bekanntgabe ins Ausland',
        text:
          'Sämtliche Personendaten von govex und den angeschlossenen Apps werden auf Servern ' +
          'von DigitalOcean in Rechenzentren in Deutschland gespeichert. Die Bundesrepublik ' +
          'Deutschland gewährleistet als Mitgliedstaat der Europäischen Union nach ' +
          'Feststellung des Bundesrates ein angemessenes Datenschutzniveau, weshalb die ' +
          'Bekanntgabe ohne zusätzliche Garantien zulässig ist (Art. 16 Abs. 1 DSG, Art. 8 ' +
          'Abs. 1 i. V. m. Anhang 1 DSV). Für Personen im Europäischen Wirtschaftsraum liegt ' +
          'insoweit keine Übermittlung in ein Drittland vor (Art. 44 DSGVO). Da DigitalOcean, ' +
          'LLC ihren Sitz in den USA hat, ist ein Zugriff aus den USA nicht auszuschliessen; ' +
          'dieser stützt sich auf das Swiss-U.S. und das EU-U.S. Data Privacy Framework oder ' +
          'auf Standardvertragsklauseln (Art. 16 Abs. 1 und 2 lit. d DSG; Art. 45 und 46 ' +
          'Abs. 2 lit. c DSGVO). ' +
          'Cloudflare kann Daten in Länder ausserhalb der Schweiz und des Europäischen ' +
          'Wirtschaftsraums übermitteln, insbesondere in die USA. Dies geschieht gestützt auf ' +
          'das Swiss-U.S. und das EU-U.S. Data Privacy Framework oder auf ' +
          'Standardvertragsklauseln.',
      },
      {
        title: '8. Bearbeitung im Dossier-System Monolith',
        text:
          'Die nachfolgenden Bestimmungen konkretisieren in Erfüllung der Informationspflicht ' +
          'nach Art. 19 DSG sowie, soweit anwendbar, nach Art. 13 und 14 DSGVO die Modalitäten, ' +
          'unter denen Personendaten von Nutzerinnen und Nutzern von govex in das von NEOTYRA ' +
          'betriebene Dossier-System Monolith Eingang finden können, und präzisieren Gegenstand, ' +
          'Umfang, Zweckbestimmung, normative Rechtfertigung sowie die technischen und ' +
          'organisatorischen Rahmenbedingungen dieser Datenbearbeitung (Art. 19 Abs. 2 und 3 ' +
          'DSG; Art. 12 Abs. 1 DSGVO). Sie tragen dem Umstand Rechnung, dass die Bearbeitung ' +
          'besonders schützenswerter Personendaten und das Profiling einen qualifizierten ' +
          'Eingriff in das verfassungsmässig gewährleistete Recht auf informationelle ' +
          'Selbstbestimmung darstellen können und daher erhöhten Anforderungen an Transparenz, ' +
          'Rechtfertigung und Datensicherheit unterliegen (Art. 13 Abs. 2 BV, Art. 1 DSG; ' +
          'Art. 8 GRCh, Art. 1 Abs. 2 DSGVO). Obgleich Monolith ausschliesslich dem privaten ' +
          'Gebrauch des Verantwortlichen dient, unterwirft sich dieser nach Massgabe von ' +
          'Ziffer 8.1 freiwillig den datenschutzrechtlichen Standards, weshalb die ' +
          'Bearbeitung an dieser Stelle offengelegt wird (Art. 2 Abs. 2 lit. a und Art. 19 ' +
          'DSG; Art. 2 Abs. 2 lit. c und Art. 13 f. DSGVO).',
        items: [
          {
            title: '8.1 Normativer Anwendungsbereich',
            description:
              'Monolith ist ein personenbezogenes Informationssystem, in welchem zu einzelnen ' +
              'natürlichen Personen strukturierte Dossiers geführt, relational miteinander ' +
              'verknüpft und unter den Voraussetzungen von Ziffer 8.8 gegenüber berechtigten ' +
              'Personen offengelegt werden (Art. 5 lit. a, b und d DSG; Art. 4 Nr. 1 und 2 ' +
              'DSGVO). Verantwortlicher im Sinne des Datenschutzrechts ist die in Ziffer 1 ' +
              'bezeichnete Stelle, welche als Entwickler und Betreiber von Monolith über Zweck ' +
              'und Mittel der Bearbeitung allein entscheidet (Art. 5 lit. j DSG; Art. 4 Nr. 7 ' +
              'DSGVO). Der Kreis der betroffenen Personen ist abschliessend auf natürliche ' +
              'Personen aus dem unmittelbaren persönlichen Umfeld des Verantwortlichen ' +
              'beschränkt, namentlich auf Familienangehörige, Verwandte, Partnerinnen und ' +
              'Partner, Freundinnen und Freunde, Kolleginnen und Kollegen sowie Bekannte, ' +
              'während über Personen ausserhalb dieses Umfelds keinerlei Dossiers geführt werden ' +
              '(Art. 6 Abs. 2 und 3 DSG; Art. 5 Abs. 1 lit. b und c DSGVO). Die Bearbeitung ' +
              'dient ihrem Wesen nach dem privaten Gebrauch des Verantwortlichen, sodass sie ' +
              'dem Ausnahmetatbestand für die Bearbeitung durch natürliche Personen zum ' +
              'ausschliesslich persönlichen Gebrauch zumindest nahesteht (Art. 2 Abs. 2 lit. a ' +
              'DSG; Art. 2 Abs. 2 lit. c DSGVO, Erwägungsgrund 18 DSGVO). Ob dieser ' +
              'Ausnahmetatbestand angesichts der Möglichkeit einer Bekanntgabe nach Ziffer 8.8 ' +
              'im Einzelfall tatsächlich greift, kann indes offenbleiben, da sich der ' +
              'Verantwortliche ungeachtet dessen aus eigenem Antrieb, freiwillig und ' +
              'vorbehaltlos sämtlichen Grundsätzen, Pflichten und Standards des ' +
              'Datenschutzrechts unterwirft und die Rechte der betroffenen Personen so ' +
              'gewährleistet, als fände das Datenschutzrecht uneingeschränkt Anwendung (Art. 1, ' +
              'Art. 6 bis 8 und Art. 19 ff. DSG; Art. 1 Abs. 2, Art. 5 und Art. 12 ff. DSGVO). ' +
              'Ebendiese freiwillige Selbstverpflichtung ist der Grund, weshalb Monolith in ' +
              'dieser Datenschutzerklärung überhaupt Erwähnung findet: Sie soll den betroffenen ' +
              'Personen ein Höchstmass an Transparenz, Rechtssicherheit und Kontrolle über die ' +
              'sie betreffenden Daten verschaffen (Art. 6 Abs. 2 und 3 DSG; Art. 5 Abs. 1 lit. a ' +
              'DSGVO). Diese Selbstverpflichtung lässt zwingend anwendbares Recht unberührt und ' +
              'begründet in keinem Fall einen geringeren Schutz, als er von Gesetzes wegen ' +
              'bestünde (Art. 1 DSG; Art. 1 Abs. 2 DSGVO). ' +
              'In räumlicher Hinsicht erfasst das DSG sämtliche Sachverhalte, die sich in der ' +
              'Schweiz auswirken (Art. 3 Abs. 1 DSG), während die DSGVO Anwendung findet, ' +
              'soweit das Verhalten von Personen beobachtet wird, die sich im Europäischen ' +
              'Wirtschaftsraum aufhalten (Art. 3 Abs. 2 lit. b DSGVO).',
          },
          {
            title: '8.2 Provenienz der Daten und Verknüpfung mit govex',
            description:
              'Personendaten werden in Monolith grundsätzlich nicht bei der betroffenen Person ' +
              'selbst, sondern durch den Verantwortlichen sowie durch berechtigte Personen ' +
              'erhoben, weshalb sich die Information nach Massgabe von Art. 19 Abs. 5 DSG bzw. ' +
              'Art. 14 DSGVO richtet. Berechtigte Personen können aktive govex-Konten anhand ' +
              'eines Suchbegriffs auffinden, wobei die Ergebnismenge zahlenmässig begrenzt ist ' +
              'und lediglich Benutzername, Name, E-Mail-Adresse und Profilbild umfasst, was ' +
              'dem Grundsatz der Datenminimierung entspricht (Art. 6 Abs. 2 DSG; Art. 5 Abs. 1 ' +
              'lit. c DSGVO). Zur eindeutigen Identifikation kann ein Dossier sodann mit dem ' +
              'pseudonymen Kontokennzeichen (Subject Identifier) Ihres govex-Kontos verknüpft ' +
              'werden, wobei in Monolith einzig dieses Kennzeichen persistiert wird und die ' +
              'übrigen Kontoangaben im Zeitpunkt ihrer Anzeige aus govex abgerufen werden ' +
              '(Art. 5 lit. d DSG; Art. 4 Nr. 2 und 5 DSGVO). Eine solche Verknüpfung wird ' +
              'weder routinemässig noch vorsorglich vorgenommen, sondern ausschliesslich dann, ' +
              'wenn sie im Einzelfall zur eindeutigen Identifikation, zur Vermeidung von ' +
              'Verwechslungen oder dazu erforderlich ist, Ihnen als Empfängerin oder Empfänger ' +
              'ein Dossier nach Ziffer 8.8 zugänglich zu machen (Art. 6 Abs. 2 und Art. 7 Abs. 3 ' +
              'DSG; Art. 5 Abs. 1 lit. c und Art. 25 Abs. 2 DSGVO). Unterbleibt eine ' +
              'Verknüpfung, so besteht zwischen Ihrem govex-Konto und Monolith keinerlei ' +
              'Verbindung, und es werden keine Angaben aus Ihrem Konto in Monolith ' +
              'übernommen (Art. 6 Abs. 2 DSG; Art. 5 Abs. 1 lit. c DSGVO). Besteht unter ' +
              'demselben ' +
              'Kennzeichen ein Profil bei swissfy, können dessen Profilangaben und Profilbild ' +
              'auf gleiche Weise in die Darstellung des Dossiers eingebunden werden (Art. 6 ' +
              'Abs. 3 DSG; Art. 5 Abs. 1 lit. b DSGVO). Während die blosse Auffindbarkeit im ' +
              'Verzeichnis auf dem überwiegenden Interesse an einer eindeutigen Zuordnung beruht ' +
              '(Art. 31 Abs. 1 DSG; Art. 6 Abs. 1 lit. f DSGVO), setzt die dauerhafte ' +
              'Verknüpfung in jedem Fall die Einwilligung nach Ziffer 8.6 voraus (Art. 6 Abs. 6 ' +
              'DSG; Art. 6 Abs. 1 lit. a DSGVO).',
          },
          {
            title: '8.3 Kategorien bearbeiteter Personendaten',
            description:
              'Gegenstand der Bearbeitung können folgende Datenkategorien sein (Art. 19 Abs. 3 ' +
              'DSG; Art. 14 Abs. 1 lit. d DSGVO): Identifikations- und Stammdaten (Name, ' +
              'Geburtsdatum, Wohnadresse, Kanton und Staatsangehörigkeit); Angaben zur ' +
              'ethnischen Herkunft; relationale Daten über verwandtschaftliche, partnerschaftliche, ' +
              'freundschaftliche und berufliche Beziehungen zu anderen erfassten Personen; ' +
              'datierte Ereignisse in chronologischer Ordnung, einschliesslich frei formulierter ' +
              'Beschreibungen; Angaben zu politischen, ideologischen, weltanschaulichen, ' +
              'religiösen, wirtschafts-, gesellschafts-, migrations-, umwelt- und ' +
              'aussenpolitischen Haltungen; Angaben zu Konsum- und Suchtverhalten in Bezug auf ' +
              'Genussmittel, psychoaktive Substanzen, Glücksspiel und Medien einschliesslich ' +
              'dessen Frequenz; Vertrauensbewertungen und Aufzeichnungen über Verhalten und ' +
              'Verlässlichkeit; sowie Verweise auf externe, öffentlich zugängliche Quellen. ' +
              'Angaben zu politischen, weltanschaulichen und religiösen Ansichten qualifizieren ' +
              'als besonders schützenswerte Personendaten nach Art. 5 lit. c Ziff. 1 DSG; ' +
              'Angaben zur ethnischen Herkunft sowie zum Suchtverhalten, das als Gesundheitsdatum ' +
              'und teilweise als Angabe zur Intimsphäre zu würdigen ist, qualifizieren als ' +
              'solche nach Art. 5 lit. c Ziff. 2 DSG und sind zugleich besondere Kategorien ' +
              'personenbezogener Daten im Sinne von Art. 9 Abs. 1 DSGVO. Da relationale Angaben ' +
              'stets mindestens zwei natürliche Personen betreffen, begründen sie eine ' +
              'Mehrfachbetroffenheit, weshalb jede der beteiligten Personen die ihr ' +
              'zustehenden Rechte eigenständig geltend machen kann (Art. 5 lit. b DSG; Art. 4 ' +
              'Nr. 1 DSGVO). Frei formulierte Beschreibungen dürfen nur Angaben enthalten, die ' +
              'von der erteilten Einwilligung gedeckt sind (Art. 6 Abs. 2 und 6 DSG; Art. 5 ' +
              'Abs. 1 lit. b und c DSGVO).',
          },
          {
            title: '8.4 Profiling',
            description:
              'Aus den erfassten Haltungen wird anhand eines statischen, vordefinierten ' +
              'Gewichtungskatalogs je Themenbereich ein aggregierter Positionswert auf einem ' +
              'politischen Spektrum als arithmetisches Mittel errechnet, und das ' +
              'Vertrauensverhältnis wird mittels einer ordinalen Stufenskala sowie ' +
              'verhaltensbezogener Einträge quantifiziert; beides stellt eine automatisierte ' +
              'Bewertung persönlicher Aspekte und damit ein Profiling dar (Art. 5 lit. f DSG; ' +
              'Art. 4 Nr. 4 DSGVO). Die Berechnung erfolgt deterministisch und ohne Einsatz ' +
              'lernender Verfahren, sodass ihre Ergebnisse jederzeit nachvollziehbar sind und ' +
              'dem Gebot der Transparenz genügen (Art. 6 Abs. 2 DSG; Art. 5 Abs. 1 lit. a ' +
              'DSGVO). Die errechneten Werte stellen lediglich eine summarische, vereinfachende ' +
              'Momentaufnahme dar und beanspruchen keine Aussagekraft über die Persönlichkeit ' +
              'der betroffenen Person in ihrer Gesamtheit (Art. 6 Abs. 5 DSG; Art. 5 Abs. 1 ' +
              'lit. d DSGVO). Angesichts der Verknüpfung besonders schützenswerter Daten, die ' +
              'eine Beurteilung wesentlicher Aspekte der Persönlichkeit erlaubt, ist gleichwohl ' +
              'von einem Profiling mit hohem Risiko auszugehen (Art. 5 lit. g DSG), welches ' +
              'einer ausdrücklichen Einwilligung bedarf (Art. 6 Abs. 7 lit. b DSG; Art. 9 ' +
              'Abs. 2 lit. a DSGVO).',
          },
          {
            title: '8.5 Zweckbindung, Verhältnismässigkeit und Datenrichtigkeit',
            description:
              'Die Bearbeitung dient ausschliesslich der persönlichen Evaluation und Übersicht ' +
              'des Verantwortlichen über Beziehungen, Ereignisse und Vertrauensverhältnisse in ' +
              'dessen unmittelbarem privatem Umfeld und damit allein dessen privatem Gebrauch; ' +
              'sie betrifft ausschliesslich die in Ziffer 8.1 umschriebenen Personen und ' +
              'niemanden sonst (Art. 6 Abs. 3 DSG; Art. 5 Abs. 1 lit. b DSGVO). Eine Verwendung ' +
              'zu beruflichen, behördlichen, kommerziellen oder werblichen Zwecken ' +
              'sowie jede mit diesem Zweck unvereinbare Weiterbearbeitung ist ausgeschlossen ' +
              '(Art. 6 Abs. 3 DSG; Art. 5 Abs. 1 lit. b DSGVO). Eine Änderung dieser ' +
              'Zweckbestimmung bedarf einer erneuten, hierauf gerichteten Einwilligung der ' +
              'betroffenen Person (Art. 6 Abs. 3 und 6 DSG; Art. 6 Abs. 4 DSGVO). Die ' +
              'Bearbeitung erfolgt nach Treu und Glauben und in einer für die betroffene Person ' +
              'erkennbaren Weise (Art. 6 Abs. 2 und 3 DSG; Art. 5 Abs. 1 lit. a DSGVO). Erfasst ' +
              'werden lediglich jene Datenkategorien, in welche die betroffene Person im ' +
              'Einzelnen eingewilligt hat, womit den Grundsätzen der Verhältnismässigkeit und ' +
              'der Datenminimierung Rechnung getragen wird (Art. 6 Abs. 2 DSG; Art. 5 Abs. 1 ' +
              'lit. c DSGVO). Der Verantwortliche hat sich über die Richtigkeit der Daten zu ' +
              'vergewissern und trifft angemessene Massnahmen, um unrichtige oder unvollständige ' +
              'Daten zu berichtigen, zu löschen oder zu vernichten (Art. 6 Abs. 5 DSG; Art. 5 ' +
              'Abs. 1 lit. d DSGVO).',
          },
          {
            title: '8.6 Rechtfertigung durch ausdrückliche Einwilligung',
            description:
              'Die Bearbeitung in Monolith stützt sich ausschliesslich auf die ausdrückliche, ' +
              'freiwillige und nach angemessener Information erteilte Einwilligung der ' +
              'betroffenen Person, welche nach schweizerischem Recht als Rechtfertigungsgrund ' +
              'für eine andernfalls persönlichkeitsverletzende Bearbeitung und nach ' +
              'europäischem Recht als Erlaubnistatbestand fungiert (Art. 6 Abs. 6 und 7 sowie ' +
              'Art. 31 Abs. 1 DSG, Art. 28 Abs. 2 ZGB; Art. 6 Abs. 1 lit. a und Art. 9 Abs. 2 ' +
              'lit. a DSGVO). Ihrer Rechtsnatur nach handelt es sich nicht um eine vertragliche ' +
              'Verpflichtung, sondern um eine einseitige, empfangsbedürftige und jederzeit ' +
              'widerrufliche Gestattung, die den Persönlichkeitsschutz der betroffenen Person ' +
              'nicht aufhebt, sondern lediglich dessen Ausübung im konkreten Fall ausgestaltet ' +
              '(Art. 27 Abs. 2 und Art. 28 Abs. 2 ZGB; Art. 7 Abs. 3 DSGVO). Die Wirksamkeit ' +
              'der Einwilligung bemisst sich nach den in den Ziffern 8.6.1 bis 8.6.12 ' +
              'dargelegten Voraussetzungen, die kumulativ erfüllt sein müssen (Art. 6 Abs. 6 ' +
              'und 7 DSG; Art. 4 Nr. 11 und Art. 7 DSGVO).',
          },
          {
            title: '8.6.1 Einwilligungsfähigkeit',
            description:
              'Die Einwilligung setzt die Urteilsfähigkeit der erklärenden Person voraus, ' +
              'welche relativ, das heisst im Hinblick auf Tragweite, Risiken und Konsequenzen ' +
              'der konkreten Bearbeitung besonders schützenswerter Personendaten und des damit ' +
              'verbundenen Profilings, zu beurteilen ist (Art. 16 ZGB; Erwägungsgrund 38 ' +
              'DSGVO). Urteilsfähige Minderjährige erteilen die Einwilligung als Ausübung eines ' +
              'höchstpersönlichen Rechts selbständig und ohne Zustimmung ihrer gesetzlichen ' +
              'Vertretung (Art. 19c Abs. 1 ZGB). Über urteilsunfähige Personen erfolgt keine ' +
              'Bearbeitung, zumal eine Stellvertretung bei absolut höchstpersönlichen Rechten ' +
              'ausgeschlossen ist und eine Einwilligung durch Dritte daher nicht in Betracht ' +
              'fällt (Art. 19c Abs. 2 ZGB; Art. 9 Abs. 2 lit. a DSGVO). Entfällt die ' +
              'Urteilsfähigkeit nachträglich, bleibt die zuvor wirksam erteilte Einwilligung ' +
              'bestehen, wobei der Verantwortliche die Fortführung der Bearbeitung im Lichte ' +
              'des Verhältnismässigkeitsgrundsatzes neu zu würdigen hat (Art. 6 Abs. 2 DSG; ' +
              'Art. 5 Abs. 1 lit. c DSGVO).',
          },
          {
            title: '8.6.2 Freiwilligkeit',
            description:
              'Die Einwilligung ist nur wirksam, wenn sie frei von Zwang, Drohung, Täuschung ' +
              'oder wesentlichem Irrtum sowie ohne Inaussichtstellung von Nachteilen erteilt ' +
              'wird, wobei die Grundsätze über Willensmängel sinngemäss Anwendung finden ' +
              '(Art. 6 Abs. 6 DSG, Art. 23 ff. OR; Art. 4 Nr. 11 DSGVO, Erwägungsgrund 42 ' +
              'DSGVO). Da zwischen dem Verantwortlichen und den betroffenen Personen ein ' +
              'persönliches Näheverhältnis besteht, ist der Gefahr eines faktischen ' +
              'Erwartungsdrucks mit besonderer Sorgfalt zu begegnen, sodass jede Verweigerung ' +
              'oder Einschränkung der Einwilligung ohne Begründung möglich ist und keinerlei ' +
              'Auswirkungen auf das persönliche Verhältnis zeitigen darf (Art. 6 Abs. 2 und 6 ' +
              'DSG; Art. 7 Abs. 4 DSGVO, Erwägungsgrund 43 DSGVO). Die betroffene Person erhält ' +
              'vor der Unterzeichnung angemessene Bedenkzeit und kann die Erklärung jederzeit ' +
              'unausgefüllt zurückgeben, ohne dass hieraus irgendwelche Schlüsse gezogen werden ' +
              '(Art. 6 Abs. 2 und 6 DSG; Art. 5 Abs. 1 lit. a DSGVO).',
          },
          {
            title: '8.6.3 Informiertheit',
            description:
              'Die Einwilligung setzt voraus, dass die betroffene Person vorgängig in klarer, ' +
              'verständlicher und leicht zugänglicher Form über sämtliche für ihre ' +
              'Willensbildung wesentlichen Umstände in Kenntnis gesetzt wird (Art. 6 Abs. 6 ' +
              'und Art. 19 Abs. 1 DSG; Art. 7 Abs. 2 und Art. 12 Abs. 1 DSGVO). Hierzu zählen ' +
              'namentlich die Identität und Kontaktangaben des Verantwortlichen, der ' +
              'Bearbeitungszweck, die einzelnen Datenkategorien unter Hervorhebung der besonders ' +
              'schützenswerten, das Profiling und dessen Methodik, die Kategorien von ' +
              'Empfängerinnen und Empfängern, der Speicherort einschliesslich des eingesetzten ' +
              'Auftragsbearbeiters, die Aufbewahrungsdauer sowie das Recht auf jederzeitigen ' +
              'Widerruf (Art. 19 Abs. 2 und 3 DSG; Art. 13 Abs. 1 und 2 sowie Art. 14 Abs. 1 ' +
              'und 2 DSGVO, Erwägungsgrund 42 DSGVO). Der betroffenen Person wird überdies ' +
              'Gelegenheit gegeben, vor der Unterzeichnung Fragen zu stellen und Einsicht in ' +
              'diese Datenschutzerklärung zu nehmen, damit sie die Bearbeitung in ihrer ' +
              'Gesamtheit zu überblicken vermag (Art. 6 Abs. 2 und 3 DSG; Art. 5 Abs. 1 lit. a ' +
              'DSGVO).',
          },
          {
            title: '8.6.4 Bestimmtheit und Zweckspezifität',
            description:
              'Die Einwilligung muss hinreichend bestimmt sein und sich auf einen oder mehrere ' +
              'konkret umschriebene Bearbeitungszwecke sowie auf genau bezeichnete ' +
              'Datenkategorien beziehen (Art. 6 Abs. 3 und 6 DSG; Art. 4 Nr. 11 und Art. 6 ' +
              'Abs. 1 lit. a DSGVO). Eine pauschale, blankettartige oder auf künftige, im ' +
              'Zeitpunkt der Erklärung noch nicht absehbare Bearbeitungen gerichtete ' +
              'Einwilligung wäre mangels Bestimmtheit unwirksam (Art. 6 Abs. 3 DSG; Art. 5 ' +
              'Abs. 1 lit. b DSGVO, Erwägungsgrund 32 DSGVO). Massgeblich ist ausschliesslich ' +
              'der in Ziffer 8.5 umschriebene Zweck der persönlichen Evaluation im privaten ' +
              'Umfeld des Verantwortlichen (Art. 6 Abs. 3 DSG; Art. 5 Abs. 1 lit. b DSGVO).',
          },
          {
            title: '8.6.5 Ausdrücklichkeit',
            description:
              'Da Gegenstand der Bearbeitung besonders schützenswerte Personendaten sowie ein ' +
              'Profiling mit hohem Risiko sind, genügt eine bloss konkludente oder aus den ' +
              'Umständen erschlossene Willensäusserung nicht; erforderlich ist vielmehr eine ' +
              'ausdrückliche Erklärung, die sich unmittelbar und unzweideutig auf die konkrete ' +
              'Bearbeitung bezieht (Art. 6 Abs. 7 lit. a und b DSG; Art. 9 Abs. 2 lit. a ' +
              'DSGVO). Stillschweigen, Untätigkeit, die blosse Fortsetzung einer persönlichen ' +
              'Beziehung oder vorausgewählte Optionen gelten unter keinen Umständen als ' +
              'Einwilligung (Erwägungsgrund 32 DSGVO; EuGH, Urteil vom 1. Oktober 2019, ' +
              'C-673/17, Planet49). Die Ausdrücklichkeit wird durch das aktive Ankreuzen jeder ' +
              'einzelnen Kategorie und die eigenhändige Unterschrift der betroffenen Person ' +
              'gewährleistet (Art. 6 Abs. 7 DSG, Art. 14 Abs. 1 OR; Art. 7 Abs. 1 DSGVO).',
          },
          {
            title: '8.6.6 Granularität',
            description:
              'Nach dem Grundsatz der Granularität wird die Einwilligung für jede ' +
              'Datenkategorie sowie für die Bekanntgabe an Dritte gesondert erteilt oder ' +
              'verweigert, damit die betroffene Person ihre Entscheidung differenziert und ' +
              'für jeden Bearbeitungsvorgang eigenständig treffen kann (Art. 6 Abs. 2 und 6 ' +
              'DSG; Art. 7 Abs. 2 DSGVO, Erwägungsgrund 32 und 43 DSGVO). Jede nicht ' +
              'ausdrücklich bejahte Kategorie gilt als nicht erteilt und darf folglich weder ' +
              'erhoben noch anderweitig bearbeitet werden (Art. 6 Abs. 7 und Art. 30 Abs. 2 ' +
              'lit. b DSG; Art. 9 Abs. 1 DSGVO). Die Verweigerung einzelner Kategorien lässt ' +
              'die Wirksamkeit der übrigen, ausdrücklich erteilten Einwilligungen unberührt ' +
              '(Art. 6 Abs. 6 DSG; Art. 7 Abs. 2 DSGVO).',
          },
          {
            title: '8.6.7 Zeitpunkt',
            description:
              'Die Einwilligung ist vor Beginn der jeweiligen Bearbeitung einzuholen, da eine ' +
              'Bearbeitung nur so lange gerechtfertigt ist, als im Zeitpunkt ihrer Vornahme ' +
              'eine wirksame Einwilligung vorliegt (Art. 6 Abs. 1 und Art. 31 Abs. 1 DSG; ' +
              'Art. 6 Abs. 1 lit. a DSGVO). Eine nachträgliche Genehmigung vermag eine bereits ' +
              'erfolgte, nicht gerechtfertigte Bearbeitung nicht rückwirkend zu heilen, sodass ' +
              'vor Erteilung der Einwilligung erhobene Angaben unverzüglich zu löschen wären ' +
              '(Art. 6 Abs. 4 und Art. 32 Abs. 2 lit. c DSG; Art. 17 Abs. 1 lit. d DSGVO).',
          },
          {
            title: '8.6.8 Form, Dokumentation und Beweislast',
            description:
              'Obschon das Datenschutzrecht für die Einwilligung keine besondere Form ' +
              'vorschreibt und insoweit der Grundsatz der Formfreiheit gilt, wird sie aus ' +
              'Gründen der Rechtssicherheit schriftlich mittels eigenhändig unterzeichneter ' +
              'Erklärung eingeholt (Art. 11 Abs. 1, Art. 13 Abs. 1 und Art. 14 Abs. 1 OR; ' +
              'Art. 7 Abs. 1 DSGVO). Diese Form trägt dem Umstand Rechnung, dass der ' +
              'Verantwortliche das Vorliegen einer wirksamen Einwilligung zu beweisen hat und ' +
              'die Einhaltung der Bearbeitungsgrundsätze nachweisen können muss (Art. 8 ZGB; ' +
              'Art. 5 Abs. 2 und Art. 7 Abs. 1 DSGVO). Die Erklärung ist von anderen ' +
              'Sachverhalten klar abgegrenzt, in verständlicher und leicht zugänglicher Form ' +
              'abgefasst und wird in zwei Exemplaren unterzeichnet, von denen eines der ' +
              'betroffenen Person ausgehändigt wird (Art. 7 Abs. 2 DSGVO). Die Aufbewahrung ' +
              'des Exemplars des Verantwortlichen richtet sich nach Ziffer 8.10 (Art. 6 Abs. 4 ' +
              'DSG; Art. 5 Abs. 1 lit. e DSGVO).',
          },
          {
            title: '8.6.9 Reichweite und Auslegung',
            description:
              'Der Umfang der Einwilligung wird nach dem Vertrauensprinzip anhand ihres ' +
              'objektiv erkennbaren Erklärungsinhalts ermittelt und im Zweifel restriktiv ' +
              'zugunsten der betroffenen Person ausgelegt (Art. 18 Abs. 1 OR, Art. 2 Abs. 1 ' +
              'ZGB, Art. 6 Abs. 2 DSG; Art. 5 Abs. 1 lit. a DSGVO). Jede Erweiterung auf ' +
              'zusätzliche Datenkategorien, Empfängerinnen und Empfänger oder Zwecke sowie jede ' +
              'wesentliche Änderung der Art und Weise der Bearbeitung bedarf einer erneuten, ' +
              'hierauf gerichteten Einwilligung (Art. 6 Abs. 3 und 6 DSG; Art. 6 Abs. 4 ' +
              'DSGVO). Bestehen Zweifel daran, ob eine bestimmte Angabe von der Einwilligung ' +
              'gedeckt ist, unterbleibt ihre Erfassung (Art. 6 Abs. 2 DSG; Art. 5 Abs. 1 ' +
              'lit. c DSGVO).',
          },
          {
            title: '8.6.10 Drittbetroffene Personen',
            description:
              'Die Einwilligung einer Person rechtfertigt ausschliesslich die Bearbeitung der ' +
              'sie selbst betreffenden Daten und vermag keine Rechtfertigung für die ' +
              'Bearbeitung von Angaben über Dritte zu begründen, da niemand über die ' +
              'Persönlichkeitsrechte einer anderen Person verfügen kann (Art. 5 lit. b und ' +
              'Art. 31 Abs. 1 DSG, Art. 28 Abs. 2 ZGB; Art. 4 Nr. 1 und 11 DSGVO). Relationale ' +
              'Angaben über eine Beziehung zwischen zwei Personen werden demnach nur erfasst, ' +
              'wenn für beide beteiligten Personen eine hierauf gerichtete Einwilligung ' +
              'vorliegt (Art. 6 Abs. 6 und 7 DSG; Art. 9 Abs. 2 lit. a DSGVO).',
          },
          {
            title: '8.6.11 Ausschluss subsidiärer Rechtfertigungsgründe',
            description:
              'Die Bearbeitung der Inhalte von Monolith wird weder neben noch anstelle der ' +
              'Einwilligung auf ein überwiegendes privates Interesse des Verantwortlichen oder ' +
              'auf einen anderen Rechtfertigungsgrund gestützt (Art. 31 Abs. 1 und 2 DSG; ' +
              'Art. 6 Abs. 1 lit. f und Art. 9 Abs. 2 DSGVO). Entfällt die Einwilligung ' +
              'infolge Widerrufs oder erweist sie sich als unwirksam, ist die Bearbeitung ' +
              'einzustellen und sind die betroffenen Daten nach Massgabe von Ziffer 8.7 zu ' +
              'löschen (Art. 30 Abs. 2 lit. b und Art. 32 Abs. 2 lit. c DSG; Art. 7 Abs. 3 ' +
              'und Art. 17 Abs. 1 lit. b DSGVO). Vorbehalten bleiben einzig zwingende ' +
              'gesetzliche Aufbewahrungs- oder Herausgabepflichten (Art. 31 Abs. 1 DSG; ' +
              'Art. 17 Abs. 3 lit. b DSGVO).',
          },
          {
            title: '8.6.12 Kopplungsverbot',
            description:
              'Die Zustimmung zu dieser Datenschutzerklärung in govex begründet ausdrücklich ' +
              'keine Einwilligung in die Bearbeitung in Monolith (Art. 6 Abs. 6 und 7 DSG; ' +
              'Art. 7 Abs. 2 DSGVO). Die Nutzung von govex sowie sämtlicher angeschlossener ' +
              'Apps ist von der Erteilung einer solchen Einwilligung vollständig unabhängig ' +
              'und wird durch deren Verweigerung oder Widerruf in keiner Weise eingeschränkt ' +
              '(Art. 6 Abs. 6 DSG; Art. 7 Abs. 4 DSGVO, Erwägungsgrund 43 DSGVO).',
          },
          {
            title: '8.7 Widerruf der Einwilligung',
            description:
              'Die Einwilligung kann jederzeit ohne Angabe von Gründen ganz oder teilweise ' +
              'schriftlich gegenüber dem Verantwortlichen widerrufen werden, wobei der Widerruf ' +
              'nicht an strengere Voraussetzungen geknüpft wird als die Erteilung (Art. 7 Abs. 3 ' +
              'DSGVO). Eine Weiterbearbeitung entgegen der ausdrücklichen Willenserklärung der ' +
              'betroffenen Person würde eine Persönlichkeitsverletzung darstellen, während die ' +
              'Rechtmässigkeit der bis zum Widerruf erfolgten Bearbeitung unberührt bleibt ' +
              '(Art. 30 Abs. 2 lit. b DSG; Art. 7 Abs. 3 DSGVO). Ein Teilwiderruf erfasst ' +
              'ausschliesslich die bezeichneten Datenkategorien oder die Bekanntgabe an Dritte, ' +
              'während die Bearbeitung im Übrigen auf der fortbestehenden Einwilligung beruht ' +
              '(Art. 6 Abs. 6 DSG; Art. 6 Abs. 1 lit. a DSGVO). Nach Eingang des Widerrufs ' +
              'werden die betroffenen Daten innert 30 Tagen gelöscht, wobei mit der Löschung ' +
              'eines Dossiers sämtliche damit verbundenen Beziehungen, Ereignisse, Haltungen, ' +
              'Einträge und Freigaben untergehen (Art. 6 Abs. 4 und Art. 32 Abs. 2 lit. c DSG; ' +
              'Art. 17 Abs. 1 lit. b DSGVO).',
          },
          {
            title: '8.8 Bekanntgabe an berechtigte Personen',
            description:
              'Der Verantwortliche kann ein Dossier einzelnen, verifizierten und ausdrücklich ' +
              'berechtigten Nutzerinnen und Nutzern, deren Identität über ihr govex-Konto ' +
              'gesichert ist, zugänglich machen; diese bilden die einzige Kategorie von ' +
              'Empfängerinnen und Empfängern (Art. 19 Abs. 2 lit. c DSG; Art. 14 Abs. 1 lit. e ' +
              'DSGVO). Dabei legt er für jede Angabe granular fest, ob sie vollständig, unter ' +
              'Unkenntlichmachung ihres Inhalts oder vollständig geschwärzt offengelegt wird, ' +
              'womit dem Grundsatz des Datenschutzes durch datenschutzfreundliche ' +
              'Voreinstellungen entsprochen wird (Art. 7 Abs. 3 DSG; Art. 25 Abs. 2 DSGVO). Da ' +
              'die Bekanntgabe besonders schützenswerter Personendaten an Dritte ohne ' +
              'Rechtfertigungsgrund eine Persönlichkeitsverletzung darstellt, erfolgt sie ' +
              'ausschliesslich im Umfang der hierzu gesondert erteilten Einwilligung (Art. 5 ' +
              'lit. e, Art. 30 Abs. 2 lit. c und Art. 31 Abs. 1 DSG; Art. 9 Abs. 2 lit. a ' +
              'DSGVO). Eine erteilte Freigabe kann jederzeit aufgehoben werden, wodurch der ' +
              'Zugang der betreffenden Empfängerin oder des betreffenden Empfängers mit ' +
              'sofortiger Wirkung erlischt (Art. 6 Abs. 2 DSG; Art. 5 Abs. 1 lit. f DSGVO). Die ' +
              'Daten von Monolith werden, wie jene von govex, auf Servern in Deutschland ' +
              'gespeichert, die DigitalOcean als Auftragsbearbeiter nach Ziffer 7 betreibt, ' +
              'wobei die Bundesrepublik Deutschland als Mitgliedstaat der Europäischen Union ' +
              'über ein angemessenes Datenschutzniveau verfügt (Art. 9 und Art. 16 Abs. 1 DSG, ' +
              'Art. 8 Abs. 1 i. V. m. Anhang 1 DSV; Art. 28 DSGVO). Eine darüber hinausgehende ' +
              'Bekanntgabe der Inhalte von Monolith in Staaten ausserhalb der Schweiz und des ' +
              'Europäischen Wirtschaftsraums ist nicht vorgesehen (Art. 16 und 17 DSG; Art. 44 ' +
              'DSGVO).',
          },
          {
            title: '8.9 Datensicherheit und Protokollierung',
            description:
              'Der Verantwortliche gewährleistet durch geeignete technische und organisatorische ' +
              'Massnahmen eine dem Risiko angemessene Datensicherheit, namentlich die ' +
              'Vertraulichkeit, Verfügbarkeit, Integrität und Nachvollziehbarkeit der ' +
              'Bearbeitung (Art. 8 DSG, Art. 1 bis 3 DSV; Art. 5 Abs. 1 lit. f und Art. 32 ' +
              'DSGVO). Besonders schützenswerte und weitere sensible Angaben werden auf Ebene ' +
              'der Datenbank mittels authentifizierter symmetrischer Verschlüsselung persistiert ' +
              '(Encryption at Rest), wobei Suchvorgänge über kryptografische Blind-Indizes ' +
              'erfolgen, sodass der Klartext dem Datenbanksystem verborgen bleibt (Art. 8 DSG; ' +
              'Art. 32 Abs. 1 lit. a DSGVO). Die kryptografischen Schlüssel werden getrennt von ' +
              'der Datenbank verwahrt und können im Wege einer Schlüsselrotation erneuert werden, ' +
              'ohne dass bestehende Daten ihre Lesbarkeit einbüssen (Art. 3 DSV; Art. 32 Abs. 1 ' +
              'lit. b DSGVO). Die Übermittlung sämtlicher Daten erfolgt ausschliesslich ' +
              'transportverschlüsselt (Art. 3 DSV; Art. 32 Abs. 1 lit. a DSGVO). Der Zugriff ' +
              'ist nach dem Need-to-know-Prinzip auf verifizierte Personen mit ausdrücklich ' +
              'zugewiesener Berechtigung beschränkt (Art. 3 DSV; Art. 25 Abs. 2 DSGVO). Jeder ' +
              'Zugriff auf Monolith wird unter Angabe der zugreifenden Person, der Zugriffsart, ' +
              'der aufgerufenen Ressource, des Ergebnisses und des Zeitpunkts protokolliert, ' +
              'und die Zwischenspeicherung von Antworten im Browser wird unterbunden (Art. 4 ' +
              'DSV; Art. 5 Abs. 2 und Art. 32 DSGVO). Führt eine Verletzung der Datensicherheit ' +
              'voraussichtlich zu einem hohen Risiko für die Persönlichkeit oder die Grundrechte ' +
              'der betroffenen Person, erfolgt so rasch als möglich eine Meldung an den EDÖB ' +
              'und, soweit zu ihrem Schutz erforderlich, an die betroffenen Personen (Art. 24 ' +
              'DSG, Art. 15 DSV; Art. 33 und 34 DSGVO).',
          },
          {
            title: '8.10 Aufbewahrungsdauer',
            description:
              'Für Personendaten in Monolith gelten ausschliesslich die nachfolgenden Fristen; ' +
              'die in Ziffer 9 für govex vorgesehene Höchstdauer von 10 Jahren findet auf sie ' +
              'keine Anwendung (Art. 6 Abs. 4 DSG; Art. 5 Abs. 1 lit. e DSGVO). Personendaten in ' +
              'Monolith werden nur so lange aufbewahrt, wie dies für den Bearbeitungszweck ' +
              'erforderlich ist, längstens jedoch bis zum Widerruf der Einwilligung, und ' +
              'anschliessend innert 30 Tagen gelöscht oder anonymisiert (Art. 6 Abs. 4 DSG; ' +
              'Art. 17 Abs. 1 lit. a und b DSGVO). Die Deaktivierung oder Löschung Ihres ' +
              'govex-Kontos lässt ein bestehendes Dossier unberührt, hebt jedoch dessen ' +
              'Verknüpfung mit dem Konto auf, sodass keine Kontoangaben aus govex mehr ' +
              'abgerufen werden können (Art. 6 Abs. 3 DSG; Art. 5 Abs. 1 lit. b DSGVO). Die ' +
              'unterzeichnete Einwilligungserklärung wird zum Nachweis der Rechtmässigkeit für ' +
              'die Dauer der Bearbeitung und danach höchstens zwei Jahre aufbewahrt (Art. 6 ' +
              'Abs. 4 DSG; Art. 5 Abs. 2 und Art. 7 Abs. 1 DSGVO).',
          },
          {
            title: '8.11 Ausschluss automatisierter Einzelentscheidungen',
            description:
              'Die in Ziffer 8.4 beschriebenen Bewertungen dienen ausschliesslich der ' +
              'Orientierung und bilden keine Grundlage für Entscheidungen, die ausschliesslich ' +
              'auf einer automatisierten Bearbeitung beruhen und für die betroffene Person mit ' +
              'einer Rechtsfolge verbunden sind oder sie erheblich beeinträchtigen (Art. 21 DSG; ' +
              'Art. 22 DSGVO). Sämtliche Einschätzungen, die an diese Bewertungen anknüpfen, ' +
              'unterliegen der persönlichen Würdigung durch einen Menschen, weshalb es eines ' +
              'besonderen Anhörungsrechts nach Art. 21 Abs. 2 DSG bzw. Art. 22 Abs. 3 DSGVO ' +
              'nicht bedarf.',
          },
          {
            title: '8.12 Betroffenenrechte',
            description:
              'Unbeschadet der Rechte nach Ziffer 10 können Sie jederzeit Auskunft darüber ' +
              'verlangen, ob und welche Personendaten in Monolith über Sie bearbeitet werden, ' +
              'einschliesslich des Bearbeitungszwecks, der Aufbewahrungsdauer, der Empfänger ' +
              'und der Herkunft der Daten (Art. 25 Abs. 1 und 2 DSG; Art. 15 Abs. 1 DSGVO). Die ' +
              'Auskunft wird nach Prüfung Ihrer Identität in der Regel kostenlos und innert 30 ' +
              'Tagen erteilt (Art. 25 Abs. 6 und 7 DSG, Art. 16 ff. DSV; Art. 12 Abs. 3 und 5 ' +
              'DSGVO). Sie können ferner die Herausgabe Ihrer Daten in einem gängigen ' +
              'elektronischen Format verlangen (Art. 28 DSG; Art. 20 DSGVO). Darüber hinaus ' +
              'können Sie die Berichtigung unrichtiger Daten, die Anbringung eines ' +
              'Bestreitungsvermerks, die Einschränkung der Bearbeitung sowie die Löschung ' +
              'verlangen und die Bekanntgabe an Dritte untersagen lassen (Art. 32 Abs. 1 bis 3 ' +
              'DSG i. V. m. Art. 28 ff. ZGB; Art. 16 bis 18 DSGVO). Es steht Ihnen zudem frei, ' +
              'beim EDÖB eine Anzeige einzureichen oder sich bei der zuständigen ' +
              'Aufsichtsbehörde zu beschweren (Art. 49 DSG; Art. 77 DSGVO).',
          },
          {
            title: '8.13 Datenschutz-Folgenabschätzung und Verzeichnis',
            description:
              'Da die Bearbeitung besonders schützenswerter Daten in Verbindung mit Profiling ' +
              'voraussichtlich ein hohes Risiko für die Persönlichkeit und die Grundrechte der ' +
              'betroffenen Personen mit sich bringt, nimmt der Verantwortliche vorgängig eine ' +
              'Datenschutz-Folgenabschätzung vor, welche die geplante Bearbeitung beschreibt, ' +
              'die Risiken bewertet und die vorgesehenen Schutzmassnahmen darlegt (Art. 22 ' +
              'DSG; Art. 35 DSGVO). Verbleibt trotz dieser Massnahmen ein hohes Risiko, wird ' +
              'vorgängig die Stellungnahme des EDÖB eingeholt (Art. 23 DSG; Art. 36 DSGVO). Der ' +
              'Verantwortliche führt zudem ein Verzeichnis der Bearbeitungstätigkeiten, da die ' +
              'Ausnahme für kleine Unternehmen bei Profiling mit hohem Risiko nicht greift ' +
              '(Art. 12 DSG, Art. 24 DSV; Art. 30 DSGVO).',
          },
          {
            title: '8.14 Vertraulichkeit und Verbot der Weiterverbreitung',
            description:
              'Sämtliche in Monolith bearbeiteten Personendaten werden unter Verschluss gehalten ' +
              'und streng vertraulich behandelt; sie werden weder veröffentlicht noch ' +
              'weiterverbreitet, noch ausserhalb des Systems vervielfältigt (Art. 6 Abs. 2 und 3 ' +
              'sowie Art. 8 DSG; Art. 5 Abs. 1 lit. b und f DSGVO). Eine Offenlegung erfolgt ' +
              'ausschliesslich in dem nach Ziffer 8.8 abschliessend umschriebenen Rahmen, sodass ' +
              'jede darüber hinausgehende Bekanntgabe an Dritte, an die Öffentlichkeit oder an ' +
              'Behörden ausgeschlossen ist, soweit nicht eine gesetzliche Pflicht entgegensteht ' +
              '(Art. 30 Abs. 2 lit. c und Art. 31 Abs. 1 DSG; Art. 6 Abs. 1 lit. c und Art. 9 ' +
              'Abs. 2 lit. a DSGVO). Personen, denen ein Dossier zugänglich gemacht wird, sind ' +
              'zur Geheimhaltung der ihnen offengelegten Angaben verpflichtet und dürfen diese ' +
              'weder aufzeichnen noch weitergeben noch zu eigenen Zwecken verwenden (Art. 8 ' +
              'DSG, Art. 3 DSV; Art. 29 und Art. 32 Abs. 4 DSGVO). Diese Pflicht zur ' +
              'Vertraulichkeit besteht über die Aufhebung einer Freigabe und den Widerruf der ' +
              'Einwilligung hinaus fort (Art. 6 Abs. 2 DSG; Art. 5 Abs. 1 lit. f DSGVO).',
          },
          {
            title: '8.15 Verhältnis zu den übrigen Bestimmungen',
            description:
              'Die Bestimmungen dieser Ziffer gehen als besondere Regelung für Monolith den ' +
              'allgemeinen Bestimmungen dieser Datenschutzerklärung vor, welche im Übrigen ' +
              'ergänzend Anwendung finden, soweit sich aus dieser Ziffer nichts Abweichendes ' +
              'ergibt (Art. 6 Abs. 3 DSG; Art. 13 und 14 DSGVO).',
          },
        ],
      },
      {
        title: '9. Dauer der Speicherung',
        text:
          'Personendaten werden nur so lange gespeichert, wie dies für die Erreichung der hier ' +
          'genannten Zwecke erforderlich ist, jedoch nach einer Deaktivierung des Kontos ' +
          'maximal für eine Dauer von 10 Jahren. Für Personendaten im Dossier-System Monolith ' +
          'gelten ausschliesslich die Fristen nach Ziffer 8.10.',
      },
      {
        title: '10. Rechte der betroffenen Personen',
        text:
          'Nach dem DSG haben Sie insbesondere das Recht auf Auskunft (Art. 25 DSG), auf ' +
          'Herausgabe oder Übertragung Ihrer Daten (Art. 28 DSG) sowie auf Berichtigung und ' +
          'Löschung (Art. 32 DSG). Soweit die DSGVO anwendbar ist, stehen Ihnen zudem die ' +
          'Rechte nach Art. 15 bis 21 DSGVO zu, darunter Einschränkung der Verarbeitung und ' +
          'Widerspruch, sowie das Recht, eine Einwilligung jederzeit zu widerrufen. Bitte wenden ' +
          'Sie sich dazu an die oben angegebene Adresse.',
      },
      {
        title: '11. Aufsichtsbehörde',
        text:
          'In der Schweiz ist der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte ' +
          '(EDÖB) zuständig. Personen im Europäischen Wirtschaftsraum können sich zudem bei der ' +
          'Datenschutzaufsichtsbehörde ihres Wohnsitzstaates beschweren.',
      },
      {
        title: '12. Änderung der Datenschutzerklärung',
        text:
          'NEOTYRA behält sich vor, diese Datenschutzerklärung zu ändern, um sie an aktuelle ' +
          'rechtliche Anforderungen oder Änderungen der Dienste anzupassen. Die jeweils aktuelle ' +
          'Fassung ist jederzeit in govex abrufbar.',
      },
    ],
  },
  terms: {
    title: 'Nutzungsrichtlinien',
    illustration: 'terms',
    sections: [
      {
        title: '1. Allgemeine Grundsätze',
        text:
          'Diese Webapplikation von NEOTYRA ist ein freizeitliches Vorhaben, das ausschliesslich ' +
          'der Weiterbildung und Wissensvermittlung dient. Die Nutzung der Webapplikation ' +
          'unterliegt diesen Nutzungsrichtlinien, die jederzeit von NEOTYRA angepasst werden ' +
          'können. Mit der Nutzung der Webapplikation stimmen Sie diesen Nutzungsrichtlinien zu.',
      },
      {
        title: '2. Strafrechtliche Verfolgung',
        text:
          'Die Nutzung dieser Webapplikation setzt die Einhaltung des geltenden Schweizer Rechts ' +
          'voraus, insbesondere des Strafgesetzbuchs (StGB), des Bundesgesetzes über den ' +
          'Datenschutz (DSG) und des Urheberrechtsgesetzes (URG), sowie des anwendbaren Rechts ' +
          'der Europäischen Union, insbesondere der Datenschutz-Grundverordnung (DSGVO). ' +
          'Verstösse wie z. B. Cybermobbing, Datendiebstahl oder andere rechtswidrige Handlungen ' +
          'werden mit voller Härte strafrechtlich verfolgt. In solchen Fällen werden die für die ' +
          'Verfolgung und Ahndung erforderlichen Personendaten, auch besonders schützenswerte, im ' +
          'Rahmen des DSG und, soweit anwendbar, der DSGVO an die zuständigen Behörden ' +
          'weitergeleitet.',
      },
      {
        title: '3. Verhaltensregeln',
        text:
          'Um eine sichere und respektvolle Umgebung für alle Benutzer zu gewährleisten, sind ' +
          'die folgenden Verhaltensweisen auf dieser Webapplikation strengstens untersagt:',
        items: TERMS_RULES,
      },
      {
        title: '4. Änderung der Nutzungsrichtlinien',
        text:
          'Die Nutzungsrichtlinien können jederzeit ohne vorherige Ankündigung geändert werden. ' +
          'Nutzer werden gebeten, die Richtlinien regelmässig zu überprüfen, um auf dem neusten ' +
          'Stand zu bleiben.',
      },
      {
        title: '5. Geistiges Eigentum',
        text:
          'Alle Inhalte auf dieser Plattform, einschliesslich Texte, Bilder, Grafiken, Logos und ' +
          'Software, sind nach dem Schweizer Urheberrechtsgesetz (URG) und, soweit anwendbar, ' +
          'nach dem Urheberrecht der Staaten der Europäischen Union geschützt. Die ' +
          'Vervielfältigung, Verbreitung oder Verwendung der Inhalte ohne ausdrückliche ' +
          'Genehmigung von NEOTYRA ist untersagt.',
      },
      {
        title: '6. Missbrauchsmeldung',
        text:
          'Wenn Sie Verstösse gegen die Nutzungsrichtlinien oder missbräuchliches Verhalten ' +
          'feststellen, sind Sie verpflichtet, dies unverzüglich über die vorgesehenen Meldewege ' +
          'zu melden. Sollte dies nicht geschehen, verstossen Sie gegen die Nutzungsrichtlinien.',
      },
      {
        title: '7. Datenschutz',
        text:
          'NEOTYRA bearbeitet Ihre Personendaten nach dem Schweizer Bundesgesetz über den ' +
          'Datenschutz (DSG) und, soweit anwendbar, nach der Datenschutz-Grundverordnung der ' +
          'Europäischen Union (DSGVO). Einzelheiten dazu finden Sie in der ' +
          'Datenschutzerklärung.',
      },
      {
        title: '8. Anwendbares Recht und Gerichtsstand',
        text:
          'Für diese Nutzungsrichtlinien gilt Schweizer Recht. Gerichtsstand ist der Sitz von ' +
          'NEOTYRA, soweit nicht zwingende Bestimmungen, etwa zum Schutz von Konsumentinnen und ' +
          'Konsumenten in der Schweiz oder in der Europäischen Union, einen anderen ' +
          'Gerichtsstand vorsehen.',
      },
    ],
  },
  disclaimer: {
    title: 'Haftungsausschluss',
    illustration: 'disclaimer',
    sections: [
      {
        title: '1. Inhalt des Onlineangebots',
        text:
          'Die Inhalte von govex und den Apps von NEOTYRA werden mit grösstmöglicher Sorgfalt ' +
          'erstellt. NEOTYRA übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit ' +
          'und Aktualität der Inhalte. NEOTYRA ist nicht verpflichtet, fremde Informationen, die ' +
          'über ihre Dienste übermittelt oder gespeichert werden, zu überwachen oder nach ' +
          'Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Sobald NEOTYRA ' +
          'von einer konkreten Rechtsverletzung Kenntnis erhält, werden die betroffenen Inhalte ' +
          'umgehend entfernt. Soweit das Recht der Europäischen Union anwendbar ist, gelten die ' +
          'Haftungsregeln für Vermittlungsdienste nach dem Gesetz über digitale Dienste ' +
          '(Verordnung (EU) 2022/2065).',
      },
      {
        title: '2. Haftung für Links',
        text:
          'Die Dienste von NEOTYRA enthalten Links zu externen Webseiten Dritter, auf deren ' +
          'Inhalte NEOTYRA keinen Einfluss hat. Deshalb kann NEOTYRA für diese fremden Inhalte ' +
          'auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der ' +
          'jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Eine permanente ' +
          'inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer ' +
          'Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden ' +
          'derartige Links umgehend entfernt.',
      },
      {
        title: '3. Urheberrecht',
        text:
          'Die durch NEOTYRA erstellten Inhalte und Werke unterliegen dem Schweizer ' +
          'Urheberrechtsgesetz (URG) sowie, soweit anwendbar, dem Urheberrecht der Staaten der ' +
          'Europäischen Union. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art von ' +
          'Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der schriftlichen ' +
          'Zustimmung von NEOTYRA. Downloads und Kopien sind nur für den privaten Gebrauch ' +
          'gestattet. Soweit Inhalte nicht von NEOTYRA erstellt wurden, werden die Urheberrechte ' +
          'Dritter beachtet und Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem ' +
          'auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen ' +
          'entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden derartige ' +
          'Inhalte umgehend entfernt.',
      },
      {
        title: '4. Haftung für Schäden',
        text:
          'Soweit gesetzlich zulässig, schliesst NEOTYRA jegliche Haftung für Schäden aus, die ' +
          'direkt oder indirekt aus der Nutzung ihrer Dienste und der darin enthaltenen ' +
          'Informationen entstehen. Vorbehalten bleibt die Haftung für absichtlich oder ' +
          'grobfahrlässig verursachte Schäden (Art. 100 OR) sowie zwingende gesetzliche ' +
          'Haftungsbestimmungen, auch solche des Rechts der Europäischen Union.',
      },
      {
        title: '5. Keine Abmahnung ohne vorherigen Kontakt',
        text:
          'Sollten Inhalte der Dienste von NEOTYRA die Rechte Dritter oder gesetzliche ' +
          'Bestimmungen verletzen, bitten wir um eine entsprechende Nachricht ohne Kostennote. ' +
          'NEOTYRA garantiert, dass zu Recht beanstandete Inhalte analysiert und evaluiert ' +
          'werden, ohne dass die Einschaltung eines Rechtsbeistandes erforderlich ist. Dennoch ' +
          'ohne vorherige Kontaktaufnahme ausgelöste Kosten werden vollständig zurückgewiesen.',
      },
      {
        title: '6. Haftungsausschluss in Bezug auf das Dossier-System Monolith',
        text:
          'Die nachfolgenden Bestimmungen umschreiben in Ergänzung zu den Ziffern 1 bis 5 ' +
          'abschliessend den Umfang, in welchem NEOTYRA als Entwickler und Betreiber des ' +
          'Dossier-Systems Monolith für dessen Inhalte, dessen Funktionsfähigkeit sowie für ' +
          'die Folgen seiner Nutzung einzustehen hat, und schöpfen dabei die von der ' +
          'Rechtsordnung eröffneten Möglichkeiten der Haftungsbeschränkung im Rahmen des ' +
          'zwingenden Rechts aus (Art. 19 Abs. 1 und Art. 100 OR; Art. 82 DSGVO). Sie sind im ' +
          'Zusammenhang mit Ziffer 8 der Datenschutzerklärung zu lesen, deren Bestimmungen über ' +
          'die Rechte der betroffenen Personen durch diesen Haftungsausschluss in keiner Weise ' +
          'geschmälert werden (Art. 25 ff. und Art. 32 DSG; Art. 12 ff. DSGVO). Soweit eine ' +
          'Bestimmung dieser Ziffer mit zwingendem Recht unvereinbar ist, tritt an ihre Stelle ' +
          'die gesetzlich zulässige Regelung, die ihrem Sinn und Zweck am nächsten kommt ' +
          '(Art. 20 Abs. 2 OR).',
        items: [
          {
            title: '6.1 Rechtsnatur und Unentgeltlichkeit',
            description:
              'Monolith ist ein ausschliesslich dem privaten Gebrauch des Verantwortlichen ' +
              'dienendes, unentgeltlich betriebenes Freizeitvorhaben, welches weder ' +
              'kommerziellen noch beruflichen Zwecken dient und keinerlei Gegenleistung ' +
              'voraussetzt (Art. 6 Abs. 3 DSG; Art. 2 Abs. 2 lit. c DSGVO, Erwägungsgrund 18 ' +
              'DSGVO). Zwischen NEOTYRA und den betroffenen Personen oder den Empfängerinnen ' +
              'und Empfängern eines Dossiers wird durch die Führung eines Dossiers, die ' +
              'Erteilung einer Einwilligung oder die Einräumung eines Zugangs kein Vertrag ' +
              'begründet, da es an einem auf rechtliche Bindung gerichteten, übereinstimmenden ' +
              'Willen der Parteien fehlt (Art. 1 Abs. 1 OR). Es handelt sich vielmehr um ein ' +
              'reines Gefälligkeitsverhältnis, welches keine vertraglichen Leistungs-, Sorgfalts- ' +
              'oder Gewährleistungspflichten nach sich zieht und eine Haftung allenfalls nach ' +
              'den Grundsätzen der ausservertraglichen Haftung zu begründen vermag (Art. 41 ' +
              'Abs. 1 OR). Sollte dennoch ein vertragsähnliches Verhältnis angenommen werden, ' +
              'ist das Mass der Haftung mit Rücksicht darauf, dass das Geschäft für NEOTYRA ' +
              'keinerlei Vorteil bezweckt, milder zu beurteilen und in analoger Anwendung der ' +
              'schenkungsrechtlichen Haftungsordnung auf absichtlich oder grobfahrlässig ' +
              'verursachte Schäden zu beschränken (Art. 99 Abs. 2 und Art. 248 Abs. 1 OR).',
          },
          {
            title: '6.2 Subjektiver Charakter der Inhalte',
            description:
              'Die in Monolith erfassten Haltungen, Vertrauensbewertungen, Verhaltenseinträge, ' +
              'Ereignisbeschreibungen und Beziehungsangaben geben ausschliesslich die ' +
              'persönliche, subjektive Wahrnehmung und Einschätzung des Verantwortlichen im ' +
              'Zeitpunkt ihrer Erfassung wieder (Art. 6 Abs. 3 DSG; Art. 5 Abs. 1 lit. b ' +
              'DSGVO). Sie sind ihrem Wesen nach als Werturteile und persönliche Eindrücke zu ' +
              'qualifizieren und erheben weder den Anspruch, objektiv überprüfbare ' +
              'Tatsachenbehauptungen darzustellen, noch die betroffene Person in ihrer ' +
              'Gesamtheit zu charakterisieren (Art. 16 Abs. 2 BV, Art. 28 Abs. 1 ZGB). Die ' +
              'Erfassung einer Haltung oder eines Verhaltens bedeutet weder deren Billigung ' +
              'noch deren Missbilligung und enthält keinerlei moralisches, rechtliches oder ' +
              'gesellschaftliches Urteil über die betroffene Person (Art. 6 Abs. 2 DSG; Art. 5 ' +
              'Abs. 1 lit. a DSGVO). Die Pflicht des Verantwortlichen, sich über die Richtigkeit ' +
              'der Daten zu vergewissern und unrichtige Angaben zu berichtigen, bleibt hiervon ' +
              'unberührt (Art. 6 Abs. 5 und Art. 32 Abs. 1 DSG; Art. 5 Abs. 1 lit. d und ' +
              'Art. 16 DSGVO).',
          },
          {
            title: '6.3 Keine Gewähr für Richtigkeit, Vollständigkeit und Aktualität',
            description:
              'NEOTYRA übernimmt keinerlei Gewähr dafür, dass die in Monolith enthaltenen ' +
              'Angaben zutreffend, vollständig, aktuell oder für einen bestimmten Zweck ' +
              'geeignet sind, zumal sie weitgehend auf Beobachtungen, mündlichen Mitteilungen ' +
              'und Erinnerungen beruhen und nicht systematisch überprüft werden (Art. 99 Abs. 2 ' +
              'OR; Art. 5 Abs. 1 lit. d DSGVO). Personen und Verhältnisse unterliegen ' +
              'fortwährendem Wandel, weshalb eine einmal erfasste Angabe durch spätere ' +
              'Entwicklungen überholt sein kann, ohne dass dies in Monolith zeitnah abgebildet ' +
              'wird (Art. 6 Abs. 5 DSG; Art. 5 Abs. 1 lit. d DSGVO). Eine Pflicht zur ' +
              'fortlaufenden Aktualisierung besteht über die gesetzliche Pflicht zur ' +
              'Berichtigung auf Verlangen hinaus nicht (Art. 32 Abs. 1 DSG; Art. 16 DSGVO). ' +
              'Die Lückenhaftigkeit eines Dossiers lässt keinerlei Rückschluss darauf zu, dass ' +
              'nicht erfasste Umstände nicht bestehen, und ist insbesondere nicht als ' +
              'abschliessende Darstellung der betroffenen Person zu verstehen (Art. 6 Abs. 2 ' +
              'DSG; Art. 5 Abs. 1 lit. a DSGVO).',
          },
          {
            title: '6.4 Eingeschränkte Aussagekraft des Profilings',
            description:
              'Die in Monolith errechneten Positionswerte und Vertrauensstufen beruhen auf ' +
              'einem statischen, vom Verantwortlichen nach eigenem Ermessen festgelegten ' +
              'Gewichtungskatalog und auf einer vereinfachenden arithmetischen Aggregation, die ' +
              'weder wissenschaftlich validiert noch nach anerkannten politologischen, ' +
              'psychologischen oder soziologischen Methoden entwickelt wurde (Art. 5 lit. f ' +
              'DSG; Art. 4 Nr. 4 DSGVO). Sie stellen eine heuristische Orientierungshilfe ohne ' +
              'jeglichen Anspruch auf Objektivität, Repräsentativität oder Prognosekraft dar ' +
              'und sind namentlich nicht als Gutachten, Diagnose oder Charakterbeurteilung zu ' +
              'verstehen (Art. 6 Abs. 2 und 5 DSG; Art. 5 Abs. 1 lit. a und d DSGVO). Die ' +
              'Einordnung einer Person auf einem politischen Spektrum vermag deren Haltungen ' +
              'notwendigerweise nur verkürzt wiederzugeben und begründet insbesondere keine ' +
              'Zuschreibung einer bestimmten Partei-, Gruppen- oder Bewegungszugehörigkeit ' +
              '(Art. 5 lit. c Ziff. 1 DSG; Art. 9 Abs. 1 DSGVO). Für Schäden, die aus dem ' +
              'Vertrauen auf solche Werte entstehen, wird jede Haftung im gesetzlich zulässigen ' +
              'Umfang ausgeschlossen (Art. 99 Abs. 2 und Art. 100 Abs. 1 OR).',
          },
          {
            title: '6.5 Keine Grundlage für Entscheidungen',
            description:
              'Die Inhalte von Monolith sind nicht dazu bestimmt und nicht dazu geeignet, als ' +
              'Grundlage für Entscheidungen mit rechtlicher, beruflicher, wirtschaftlicher ' +
              'oder sonst erheblicher Tragweite für die betroffene Person oder für Dritte zu ' +
              'dienen (Art. 21 DSG; Art. 22 DSGVO). Wer gestützt auf Inhalte von Monolith ' +
              'Entscheidungen trifft, Dispositionen vornimmt oder Schlussfolgerungen zieht, ' +
              'handelt ausschliesslich in eigener Verantwortung und auf eigenes Risiko (Art. 41 ' +
              'Abs. 1 und Art. 44 Abs. 1 OR). NEOTYRA haftet weder für die Richtigkeit solcher ' +
              'Schlussfolgerungen noch für deren Folgen, insbesondere nicht für ' +
              'Beeinträchtigungen persönlicher, familiärer, freundschaftlicher oder beruflicher ' +
              'Beziehungen, die aus der Kenntnisnahme von Inhalten entstehen (Art. 99 Abs. 2 ' +
              'und Art. 100 Abs. 1 OR). Vorbehalten bleibt die Haftung des Verantwortlichen ' +
              'für eigene Entscheidungen, die er in rechtswidriger Weise auf solche Inhalte ' +
              'stützt (Art. 41 Abs. 1 OR, Art. 28 ZGB).',
          },
          {
            title: '6.6 Verantwortlichkeit der Empfängerinnen und Empfänger',
            description:
              'Personen, denen ein Dossier nach Ziffer 8.8 der Datenschutzerklärung ' +
              'zugänglich gemacht wird, sind zur strikten Vertraulichkeit verpflichtet und ' +
              'dürfen die ihnen offengelegten Angaben weder aufzeichnen, vervielfältigen, ' +
              'veröffentlichen noch an Dritte weitergeben oder zu eigenen Zwecken verwenden ' +
              '(Art. 6 Abs. 3 und Art. 8 DSG; Art. 5 Abs. 1 lit. b und f DSGVO). Jede ' +
              'Verwendung entgegen dieser Pflicht erfolgt ausschliesslich in der eigenen ' +
              'rechtlichen Verantwortung der handelnden Person, welche damit gegebenenfalls ' +
              'selbst zur Verantwortlichen im Sinne des Datenschutzrechts wird und für die ' +
              'daraus entstehenden Persönlichkeitsverletzungen und Schäden persönlich einsteht ' +
              '(Art. 5 lit. j, Art. 30 und Art. 32 DSG, Art. 28 ff. ZGB, Art. 41 OR; Art. 4 ' +
              'Nr. 7 und Art. 82 DSGVO). NEOTYRA haftet nicht für das Verhalten von ' +
              'Empfängerinnen und Empfängern, die nicht als Hilfspersonen in ihrem Auftrag, ' +
              'sondern in eigener Verantwortung handeln (Art. 41 Abs. 1 und Art. 101 OR). ' +
              'Vorbehalten bleiben die strafrechtlichen Folgen einer unbefugten Beschaffung ' +
              'oder Weitergabe von Personendaten (Art. 179novies StGB; Art. 60 ff. DSG).',
          },
          {
            title: '6.7 Unbefugte Zugriffe und Handlungen Dritter',
            description:
              'NEOTYRA trifft die in Ziffer 8.9 der Datenschutzerklärung beschriebenen, dem ' +
              'Risiko angemessenen technischen und organisatorischen Massnahmen, kann jedoch ' +
              'nach dem jeweiligen Stand der Technik eine absolute Sicherheit vor unbefugten ' +
              'Zugriffen, Angriffen oder Datenabflüssen nicht gewährleisten (Art. 8 Abs. 1 und 2 ' +
              'DSG, Art. 1 bis 3 DSV; Art. 32 Abs. 1 DSGVO). Für Schäden, die durch ' +
              'rechtswidrige Handlungen Dritter verursacht werden, namentlich durch unbefugtes ' +
              'Eindringen in Datenverarbeitungssysteme, unbefugte Datenbeschaffung oder ' +
              'Datenbeschädigung, haftet NEOTYRA nur, soweit ihr selbst ein Verschulden zur ' +
              'Last fällt, und im Übrigen nach Massgabe der Ziffer 6.12 (Art. 143, 143bis ' +
              'und 144bis StGB, Art. 41 Abs. 1 OR; Art. 82 Abs. 3 DSGVO). Die Pflicht zur ' +
              'Meldung von Verletzungen der Datensicherheit an den EDÖB und an die betroffenen ' +
              'Personen bleibt hiervon unberührt (Art. 24 DSG; Art. 33 und 34 DSGVO).',
          },
          {
            title: '6.8 Technische Verfügbarkeit und Datenverlust',
            description:
              'NEOTYRA schuldet weder eine bestimmte Verfügbarkeit noch eine ununterbrochene ' +
              'oder fehlerfreie Funktionsfähigkeit von Monolith und kann den Betrieb jederzeit ' +
              'ohne Angabe von Gründen vorübergehend oder dauerhaft einschränken, unterbrechen ' +
              'oder einstellen (Art. 1 Abs. 1 und Art. 99 Abs. 2 OR). Für Schäden infolge von ' +
              'Unterbrüchen, Wartungsarbeiten, Softwarefehlern, Fehlfunktionen, ' +
              'Datenverlusten oder Datenbeschädigungen wird jede Haftung im gesetzlich ' +
              'zulässigen Umfang ausgeschlossen (Art. 100 Abs. 1 OR). Wird der Betrieb ' +
              'eingestellt, werden die gespeicherten Personendaten nach Massgabe von Ziffer ' +
              '8.10 der Datenschutzerklärung gelöscht, ohne dass hieraus Ansprüche auf ' +
              'Herausgabe, Fortführung oder Übertragung entstehen, die über die gesetzlichen ' +
              'Rechte hinausgehen (Art. 6 Abs. 4 und Art. 28 DSG; Art. 17 und 20 DSGVO).',
          },
          {
            title: '6.9 Externe Dienste und Hilfspersonen',
            description:
              'Monolith ist auf die Leistungen externer Dienste angewiesen, namentlich auf ' +
              'die Infrastruktur von DigitalOcean, LLC, auf den Schutzdienst von Cloudflare, ' +
              'Inc. sowie auf die Schnittstellen von govex und swissfy, deren Verfügbarkeit ' +
              'und Funktionsweise sich dem Einfluss von NEOTYRA weitgehend entziehen (Art. 9 ' +
              'DSG; Art. 28 DSGVO). Die Haftung für Schäden, die durch solche Dienste oder ' +
              'durch andere Hilfspersonen verursacht werden, wird im Voraus im gesetzlich ' +
              'zulässigen Umfang wegbedungen (Art. 101 Abs. 2 OR). Die Pflicht von NEOTYRA, ' +
              'Auftragsbearbeiter sorgfältig auszuwählen, zu instruieren und zu überwachen, ' +
              'sowie die datenschutzrechtliche Verantwortlichkeit für die Bearbeitung durch ' +
              'Auftragsbearbeiter bleiben unberührt (Art. 9 Abs. 1 und 2 DSG; Art. 28 Abs. 1 ' +
              'und Art. 82 Abs. 2 DSGVO).',
          },
          {
            title: '6.10 Externe Verweise',
            description:
              'Soweit Dossiers Verweise auf externe Quellen enthalten, namentlich auf Profile ' +
              'in sozialen Netzwerken, Webseiten oder andere öffentlich zugängliche Angebote, ' +
              'macht sich NEOTYRA deren Inhalte nicht zu eigen und übernimmt für diese keinerlei ' +
              'Verantwortung (Art. 41 Abs. 1 OR, Art. 28 Abs. 1 ZGB). Für die Inhalte, die ' +
              'Rechtmässigkeit und die Datenbearbeitung verlinkter Angebote ist ausschliesslich ' +
              'deren jeweilige Anbieterin oder deren jeweiliger Anbieter verantwortlich (Art. 5 ' +
              'lit. j DSG; Art. 4 Nr. 7 DSGVO). Die Bestimmungen der Ziffer 2 über die Haftung ' +
              'für Links finden sinngemäss Anwendung (Art. 41 Abs. 1 OR).',
          },
          {
            title: '6.11 Mitwirkung der betroffenen Person',
            description:
              'Die betroffene Person ist gehalten, NEOTYRA unrichtige, unvollständige oder ' +
              'überholte Angaben, von denen sie Kenntnis erlangt, mitzuteilen, damit diese ' +
              'berichtigt oder gelöscht werden können (Art. 32 Abs. 1 DSG; Art. 16 DSGVO). Hat ' +
              'die betroffene Person in die Bearbeitung eingewilligt oder haben Umstände, für ' +
              'die sie einstehen muss, auf die Entstehung oder Verschlimmerung eines Schadens ' +
              'eingewirkt, kann eine allfällige Ersatzpflicht ermässigt oder gänzlich ' +
              'aufgehoben werden (Art. 44 Abs. 1 OR). Dies gilt insbesondere, wenn sie ' +
              'Angaben, die sie selbst zur Verfügung gestellt hat, nicht berichtigt oder ' +
              'zumutbare Massnahmen zur Abwendung eines Schadens unterlässt (Art. 44 Abs. 1 ' +
              'OR, Art. 2 Abs. 1 ZGB).',
          },
          {
            title: '6.12 Haftungsbeschränkung',
            description:
              'Soweit gesetzlich zulässig, schliesst NEOTYRA jegliche Haftung für Schäden aus, ' +
              'die direkt oder indirekt aus der Führung von Dossiers, aus der Bearbeitung von ' +
              'Personendaten in Monolith, aus der Bekanntgabe nach Ziffer 8.8 der ' +
              'Datenschutzerklärung oder aus der Nutzung von Monolith entstehen, einschliesslich ' +
              'mittelbarer Schäden, Folgeschäden und entgangenen Gewinns (Art. 99 Abs. 2 und ' +
              'Art. 100 Abs. 1 OR). Vorbehalten bleibt in jedem Fall die Haftung für ' +
              'absichtlich oder grobfahrlässig verursachte Schäden, da eine im Voraus ' +
              'getroffene Vereinbarung, durch welche diese Haftung ausgeschlossen würde, ' +
              'nichtig ist (Art. 100 Abs. 1 OR). Vorbehalten bleiben ferner die Ansprüche aus ' +
              'Persönlichkeitsverletzung auf Unterlassung, Beseitigung, Feststellung, ' +
              'Schadenersatz, Genugtuung und Gewinnherausgabe, die Ansprüche nach dem ' +
              'Datenschutzrecht sowie die strafrechtliche Verantwortlichkeit, welche durch ' +
              'diesen Haftungsausschluss weder beschränkt noch ausgeschlossen werden (Art. 28a ' +
              'ZGB, Art. 49 OR, Art. 32 und Art. 60 ff. DSG; Art. 79 und 82 DSGVO).',
          },
          {
            title: '6.13 Höhere Gewalt',
            description:
              'NEOTYRA haftet nicht für die Nichterfüllung oder verspätete Erfüllung von ' +
              'Pflichten, die auf Umstände zurückzuführen ist, welche ausserhalb ihres ' +
              'Einflussbereichs liegen und die sie nicht zu vertreten hat, namentlich ' +
              'Naturereignisse, Ausfälle der Strom- oder Telekommunikationsinfrastruktur, ' +
              'Störungen bei Auftragsbearbeitern, behördliche Anordnungen oder Angriffe auf ' +
              'die Informationssicherheit, die trotz angemessener Schutzmassnahmen erfolgen ' +
              '(Art. 119 Abs. 1 OR; Art. 82 Abs. 3 DSGVO). Die Pflichten nach Art. 8 und 24 ' +
              'DSG bzw. Art. 32 bis 34 DSGVO bleiben auch in solchen Fällen bestehen.',
          },
          {
            title: '6.14 Freiwillige Selbstverpflichtung',
            description:
              'Die freiwillige Unterwerfung unter die Standards des Datenschutzrechts nach ' +
              'Ziffer 8.1 der Datenschutzerklärung erfolgt aus eigenem Antrieb und dient der ' +
              'Transparenz gegenüber den betroffenen Personen (Art. 6 Abs. 2 DSG; Art. 5 ' +
              'Abs. 1 lit. a DSGVO). Sie begründet keine vertraglichen Leistungs- oder ' +
              'Schadenersatzansprüche, die über die gesetzlich vorgesehenen Ansprüche ' +
              'hinausgehen, und ist insbesondere nicht als Garantieversprechen oder als ' +
              'Zusicherung bestimmter Eigenschaften zu verstehen (Art. 1 Abs. 1 und Art. 111 ' +
              'OR). Die in der Datenschutzerklärung zugesicherten Rechte der betroffenen ' +
              'Personen, namentlich auf Auskunft, Berichtigung, Löschung und Widerruf, bleiben ' +
              'hiervon vollumfänglich unberührt (Art. 25, 28 und 32 DSG; Art. 15 bis 20 ' +
              'DSGVO).',
          },
          {
            title: '6.15 Verjährung',
            description:
              'Allfällige Ansprüche auf Schadenersatz oder Genugtuung im Zusammenhang mit ' +
              'Monolith verjähren nach den gesetzlichen Bestimmungen, namentlich mit Ablauf von ' +
              'drei Jahren seit Kenntnis des Schadens und der ersatzpflichtigen Person, jedenfalls ' +
              'aber mit Ablauf von zehn Jahren seit dem schädigenden Verhalten (Art. 60 Abs. 1 ' +
              'OR). Die Ansprüche auf Unterlassung und Beseitigung einer andauernden ' +
              'Persönlichkeitsverletzung sowie die datenschutzrechtlichen Betroffenenrechte ' +
              'unterliegen, solange die Verletzung andauert, keiner Verjährung (Art. 28a ' +
              'Abs. 1 ZGB, Art. 32 DSG).',
          },
          {
            title: '6.16 Ausschluss von Ansprüchen der Empfängerinnen und Empfänger',
            description:
              'Die Einräumung eines Zugangs zu einem Dossier nach Ziffer 8.8 der ' +
              'Datenschutzerklärung erfolgt ausschliesslich gefälligkeitshalber und begründet ' +
              'für die Empfängerin oder den Empfänger keinerlei Anspruch auf Fortbestand des ' +
              'Zugangs, auf einen bestimmten Umfang der offengelegten Angaben oder auf deren ' +
              'Richtigkeit und Vollständigkeit (Art. 1 Abs. 1 und Art. 99 Abs. 2 OR). Der ' +
              'Verantwortliche kann einen Zugang jederzeit, ohne Angabe von Gründen und mit ' +
              'sofortiger Wirkung aufheben oder den Umfang der Offenlegung einschränken, ohne ' +
              'dass hieraus Ansprüche irgendwelcher Art entstehen (Art. 6 Abs. 2 DSG; Art. 5 ' +
              'Abs. 1 lit. c DSGVO). Für Schäden, die einer Empfängerin oder einem Empfänger ' +
              'aus dem Vertrauen auf offengelegte Angaben erwachsen, wird jede Haftung im ' +
              'gesetzlich zulässigen Umfang ausgeschlossen (Art. 41 Abs. 1, Art. 44 Abs. 1 ' +
              'und Art. 100 Abs. 1 OR).',
          },
          {
            title: '6.17 Grenzen der Unkenntlichmachung',
            description:
              'Die in Ziffer 8.8 der Datenschutzerklärung vorgesehene Unkenntlichmachung ' +
              'einzelner Angaben verbirgt deren Inhalt, lässt aber je nach gewählter Stufe die ' +
              'Bezeichnung der betreffenden Kategorie und damit den Umstand erkennbar, dass zu ' +
              'dieser Kategorie überhaupt eine Angabe besteht (Art. 7 Abs. 3 DSG; Art. 25 ' +
              'Abs. 2 DSGVO). Aus dem blossen Vorhandensein einer unkenntlich gemachten ' +
              'Angabe lassen sich keine zuverlässigen Rückschlüsse auf deren Inhalt ziehen, ' +
              'und Schlussfolgerungen, die eine Empfängerin oder ein Empfänger dennoch ' +
              'zieht, erfolgen ausschliesslich in deren eigener Verantwortung (Art. 41 Abs. 1 ' +
              'und Art. 44 Abs. 1 OR). Ebenso wenig vermag die Unkenntlichmachung einen ' +
              'Rückschluss aus dem Zusammenspiel mehrerer offengelegter Angaben vollständig ' +
              'auszuschliessen, weshalb die Wahl der Offenlegungsstufe mit besonderer Sorgfalt ' +
              'und im Zweifel zugunsten der vollständigen Schwärzung getroffen wird (Art. 6 ' +
              'Abs. 2 und Art. 7 DSG; Art. 5 Abs. 1 lit. c und Art. 25 DSGVO).',
          },
          {
            title: '6.18 Angaben aus Drittquellen',
            description:
              'Soweit Angaben in Monolith auf Mitteilungen Dritter, auf öffentlich ' +
              'zugänglichen Quellen oder auf Profilangaben aus govex und swissfy beruhen, ' +
              'werden diese nicht systematisch auf ihre Richtigkeit überprüft, und NEOTYRA ' +
              'macht sich deren Inhalt nicht zu eigen (Art. 6 Abs. 5 und Art. 19 Abs. 5 DSG; ' +
              'Art. 14 Abs. 2 lit. f DSGVO). Für Unrichtigkeiten, die auf solche Quellen ' +
              'zurückzuführen sind, wird jede Haftung im gesetzlich zulässigen Umfang ' +
              'ausgeschlossen, unbeschadet der Pflicht, unrichtige Angaben auf Verlangen zu ' +
              'berichtigen oder zu löschen (Art. 32 Abs. 1 DSG, Art. 100 Abs. 1 OR; Art. 16 ' +
              'und 17 DSGVO). Die Herkunft der Daten wird der betroffenen Person im Rahmen ' +
              'des Auskunftsrechts mitgeteilt, soweit sie verfügbar ist (Art. 25 Abs. 2 ' +
              'lit. e DSG; Art. 15 Abs. 1 lit. g DSGVO).',
          },
          {
            title: '6.19 Keine fachliche Beurteilung',
            description:
              'Die in Monolith erfassten Angaben, insbesondere jene zum Konsum- und ' +
              'Suchtverhalten, zu politischen, weltanschaulichen und religiösen Haltungen ' +
              'sowie zur ethnischen Herkunft, stellen keine medizinische, psychologische, ' +
              'psychiatrische, soziologische, politologische oder rechtliche Beurteilung dar ' +
              'und beruhen nicht auf einer fachkundigen Abklärung (Art. 5 lit. c Ziff. 1 und ' +
              '2 DSG; Art. 9 Abs. 1 DSGVO). Namentlich ist die Erfassung eines Konsumverhaltens ' +
              'nicht als Diagnose einer Abhängigkeitserkrankung oder einer anderen Störung zu ' +
              'verstehen, und die Zuordnung einer Haltung begründet keine Feststellung über die ' +
              'Gesinnung der betroffenen Person (Art. 6 Abs. 5 DSG; Art. 5 Abs. 1 lit. d ' +
              'DSGVO). NEOTYRA übernimmt keinerlei Verantwortung für Handlungen oder ' +
              'Unterlassungen, die im Vertrauen auf eine solche vermeintliche Beurteilung ' +
              'vorgenommen werden (Art. 41 Abs. 1, Art. 44 Abs. 1 und Art. 100 Abs. 1 OR).',
          },
          {
            title: '6.20 Einwilligung als haftungsbegrenzender Umstand',
            description:
              'Eine Bearbeitung, in welche die betroffene Person nach Ziffer 8.6 der ' +
              'Datenschutzerklärung wirksam eingewilligt hat, ist im Umfang dieser ' +
              'Einwilligung nicht widerrechtlich, sodass es insoweit an einer ' +
              'Haftungsvoraussetzung fehlt (Art. 28 Abs. 2 ZGB, Art. 31 Abs. 1 DSG, Art. 41 ' +
              'Abs. 1 OR; Art. 6 Abs. 1 lit. a und Art. 9 Abs. 2 lit. a DSGVO). Dies gilt ' +
              'nach dem Grundsatz «volenti non fit iniuria» auch für Nachteile, die sich ' +
              'als typische und vorhersehbare Folge der eingewilligten Bearbeitung ' +
              'verwirklichen, sofern die betroffene Person über diese im Rahmen der ' +
              'Information angemessen aufgeklärt wurde (Art. 6 Abs. 6 DSG, Art. 44 Abs. 1 OR; ' +
              'Art. 7 Abs. 2 DSGVO). Bearbeitungen, die über den Umfang der Einwilligung ' +
              'hinausgehen oder nach deren Widerruf erfolgen, werden von dieser Bestimmung ' +
              'nicht erfasst (Art. 30 Abs. 2 lit. b DSG; Art. 7 Abs. 3 DSGVO).',
          },
          {
            title: '6.21 Rechtsmissbräuchliche Geltendmachung',
            description:
              'Die Geltendmachung von Rechten oder Ansprüchen im Zusammenhang mit Monolith ' +
              'findet ihre Schranke am Verbot des offenbaren Rechtsmissbrauchs, welcher keinen ' +
              'Rechtsschutz findet (Art. 2 Abs. 2 ZGB). Offensichtlich unbegründete, ' +
              'querulatorische oder einen datenschutzwidrigen Zweck verfolgende Begehren ' +
              'können abgelehnt oder von der Leistung einer angemessenen Kostenbeteiligung ' +
              'abhängig gemacht werden (Art. 26 Abs. 1 lit. c DSG, Art. 19 DSV; Art. 12 Abs. 5 ' +
              'DSGVO). Die Beweislast für den offenkundig unbegründeten oder exzessiven ' +
              'Charakter eines Begehrens trägt NEOTYRA (Art. 8 ZGB; Art. 12 Abs. 5 Satz 3 ' +
              'DSGVO).',
          },
          {
            title: '6.22 Weiterentwicklung und Änderungen',
            description:
              'NEOTYRA ist berechtigt, Monolith jederzeit weiterzuentwickeln, Funktionen ' +
              'hinzuzufügen, zu ändern oder zu entfernen sowie das Datenmodell anzupassen, ' +
              'ohne dass hieraus Ansprüche der betroffenen Personen oder der Empfängerinnen und ' +
              'Empfänger entstehen (Art. 1 Abs. 1 und Art. 99 Abs. 2 OR). Änderungen, welche ' +
              'die Bearbeitung zusätzlicher Datenkategorien, die Bekanntgabe an zusätzliche ' +
              'Empfänger oder eine Änderung des Zwecks zur Folge hätten, werden nur nach ' +
              'Einholung einer erneuten Einwilligung umgesetzt (Art. 6 Abs. 3 und 6 DSG; ' +
              'Art. 6 Abs. 4 und Art. 7 DSGVO). Dieser Haftungsausschluss kann jederzeit ' +
              'angepasst werden, wobei die jeweils aktuelle Fassung in govex abrufbar ist und ' +
              'Änderungen nicht rückwirkend zulasten der betroffenen Personen wirken (Art. 2 ' +
              'Abs. 1 ZGB; Art. 5 Abs. 1 lit. a DSGVO).',
          },
          {
            title: '6.23 Beweislast',
            description:
              'Wer aus einem Umstand im Zusammenhang mit Monolith Rechte ableitet, hat das ' +
              'Vorhandensein dieses Umstandes zu beweisen, soweit das Gesetz nichts anderes ' +
              'bestimmt (Art. 8 ZGB). Für Ansprüche aus ausservertraglicher Haftung obliegt ' +
              'der geschädigten Person namentlich der Nachweis des Schadens, der ' +
              'Widerrechtlichkeit, des natürlichen und adäquaten Kausalzusammenhangs sowie ' +
              'des Verschuldens (Art. 41 Abs. 1 und Art. 42 Abs. 1 OR). Unberührt bleibt die ' +
              'Pflicht von NEOTYRA, das Vorliegen einer wirksamen Einwilligung und die ' +
              'Einhaltung der datenschutzrechtlichen Grundsätze nachzuweisen (Art. 5 Abs. 2 ' +
              'und Art. 7 Abs. 1 DSGVO), sowie die besondere Beweislastregel bei ' +
              'datenschutzrechtlicher Haftung (Art. 82 Abs. 3 DSGVO).',
          },
          {
            title: '6.24 Unterbrechung des Kausalzusammenhangs',
            description:
              'Eine Haftung von NEOTYRA setzt einen natürlichen und adäquaten ' +
              'Kausalzusammenhang zwischen einem ihr zurechenbaren Verhalten und dem ' +
              'eingetretenen Schaden voraus, welcher nach dem gewöhnlichen Lauf der Dinge und ' +
              'der allgemeinen Lebenserfahrung geeignet sein muss, einen Erfolg von der Art ' +
              'des eingetretenen herbeizuführen (Art. 41 Abs. 1 OR). Dieser Zusammenhang wird ' +
              'unterbrochen, wenn ein grobes Selbstverschulden der geschädigten Person oder ein ' +
              'grobes Drittverschulden, namentlich die vertraulichkeitswidrige Weitergabe von ' +
              'Inhalten durch eine Empfängerin oder einen Empfänger oder ein rechtswidriger ' +
              'Zugriff Dritter, derart in den Vordergrund tritt, dass das Verhalten von ' +
              'NEOTYRA als nicht mehr adäquate Ursache erscheint (Art. 41 Abs. 1 und Art. 44 ' +
              'Abs. 1 OR, Art. 143bis und 179novies StGB). In solchen Fällen trifft die ' +
              'Ersatzpflicht ausschliesslich die Person, deren Verhalten die Kausalkette ' +
              'unterbrochen hat (Art. 41 Abs. 1 OR, Art. 28 ff. ZGB; Art. 82 Abs. 3 DSGVO).',
          },
          {
            title: '6.25 Mehrheit von Haftpflichtigen und Rückgriff',
            description:
              'Haben mehrere Personen einen Schaden gemeinsam verschuldet oder haften sie aus ' +
              'verschiedenen Rechtsgründen für denselben Schaden, so richtet sich das ' +
              'Aussenverhältnis nach den Grundsätzen der Solidarität (Art. 50 Abs. 1 und ' +
              'Art. 51 Abs. 1 OR; Art. 82 Abs. 4 DSGVO). Im Innenverhältnis trägt in erster ' +
              'Linie diejenige Person den Schaden, die ihn durch unerlaubte Handlung, ' +
              'insbesondere durch eine vertraulichkeitswidrige Weitergabe oder einen ' +
              'unbefugten Zugriff, verschuldet hat (Art. 51 Abs. 2 OR). Wird NEOTYRA für einen ' +
              'Schaden in Anspruch genommen, den eine Empfängerin, ein Empfänger, ein ' +
              'Auftragsbearbeiter oder ein sonstiger Dritter zu verantworten hat, behält sie ' +
              'sich den Rückgriff auf die verantwortliche Person in vollem Umfang vor ' +
              '(Art. 50 Abs. 2 und Art. 51 OR; Art. 82 Abs. 5 DSGVO).',
          },
          {
            title: '6.26 Schadensminderungsobliegenheit',
            description:
              'Die geschädigte Person ist gehalten, alle ihr zumutbaren Massnahmen zu ' +
              'ergreifen, um den Eintritt eines Schadens abzuwenden oder dessen Ausmass zu ' +
              'begrenzen, namentlich NEOTYRA unverzüglich über eine vermutete ' +
              'Persönlichkeitsverletzung, eine unrichtige Angabe oder eine unbefugte ' +
              'Weitergabe in Kenntnis zu setzen und von ihren Rechten auf Berichtigung, ' +
              'Löschung und Widerruf Gebrauch zu machen (Art. 44 Abs. 1 OR, Art. 2 Abs. 1 ' +
              'ZGB, Art. 32 DSG; Art. 7 Abs. 3, Art. 16 und 17 DSGVO). Unterlässt sie dies, ' +
              'kann eine allfällige Ersatzpflicht im Umfang des vermeidbaren Schadens ' +
              'ermässigt oder gänzlich aufgehoben werden (Art. 44 Abs. 1 OR). NEOTYRA ' +
              'verpflichtet sich ihrerseits, solche Mitteilungen ohne Verzug zu prüfen und ' +
              'die erforderlichen Massnahmen zu treffen (Art. 6 Abs. 5 und Art. 32 DSG; ' +
              'Art. 12 Abs. 3 DSGVO).',
          },
          {
            title: '6.27 Behördliche und gerichtliche Anordnungen',
            description:
              'Ungeachtet der in Ziffer 8.14 der Datenschutzerklärung umschriebenen ' +
              'Vertraulichkeit ist NEOTYRA berechtigt und gegebenenfalls verpflichtet, ' +
              'Personendaten aus Monolith herauszugeben, soweit eine rechtskräftige ' +
              'behördliche oder gerichtliche Anordnung oder eine gesetzliche Mitwirkungs- ' +
              'oder Herausgabepflicht dies gebietet (Art. 31 Abs. 1 DSG, Art. 160 ZPO, ' +
              'Art. 265 StPO; Art. 6 Abs. 1 lit. c und Art. 9 Abs. 2 lit. f DSGVO). Für die ' +
              'Folgen einer solchen gesetzlich gebotenen Herausgabe wird jede Haftung ' +
              'ausgeschlossen, da es insoweit an der Widerrechtlichkeit fehlt (Art. 41 Abs. 1 ' +
              'OR, Art. 28 Abs. 2 ZGB). NEOTYRA informiert die betroffene Person über eine ' +
              'solche Herausgabe, soweit dies rechtlich zulässig ist und den Zweck der ' +
              'Anordnung nicht vereitelt (Art. 19 Abs. 1 und Art. 20 Abs. 1 lit. b DSG; ' +
              'Art. 14 Abs. 5 lit. c und Art. 23 DSGVO).',
          },
          {
            title: '6.28 Verhältnis zur Datenschutzerklärung',
            description:
              'Dieser Haftungsausschluss regelt ausschliesslich die Frage der ' +
              'Einstandspflicht für Schäden und lässt die in der Datenschutzerklärung ' +
              'festgelegten Grundsätze, Pflichten und Rechte, namentlich jene nach deren ' +
              'Ziffer 8, unberührt (Art. 6 bis 8 und Art. 25 ff. DSG; Art. 5 und Art. 12 ff. ' +
              'DSGVO). Im Falle eines Widerspruchs gehen die Bestimmungen der ' +
              'Datenschutzerklärung zugunsten der betroffenen Person vor (Art. 18 Abs. 1 OR, ' +
              'Art. 2 Abs. 1 ZGB).',
          },
        ],
      },
      {
        title: '7. Anwendbares Recht und Gerichtsstand',
        text:
          'Es gilt Schweizer Recht. Gerichtsstand ist der Sitz von NEOTYRA, soweit nicht ' +
          'zwingende Bestimmungen, etwa zum Schutz von Konsumentinnen und Konsumenten in der ' +
          'Schweiz oder in der Europäischen Union, einen anderen Gerichtsstand vorsehen.',
      },
    ],
  },
  cookies: {
    title: 'Cookierichtlinie',
    illustration: 'cookies',
    sections: [
      {
        title: '1. Was sind Cookies?',
        text:
          'Cookies sind kleine Textdateien, die beim Besuch einer Webapplikation auf Ihrem Gerät ' +
          'gespeichert werden.',
      },
      {
        title: '2. Welche Cookies verwenden wir?',
        text:
          'Diese Webapplikation verwendet ausschliesslich technisch notwendige Cookies (Session- ' +
          'und Sicherheits-Cookies), um die Anmeldung und den Schutz vor Cross-Site-Request-' +
          'Forgery zu ermöglichen. Es werden keine Tracking-, Marketing- oder Analyse-Cookies ' +
          'eingesetzt.',
      },
      {
        title: '3. Verwaltung von Cookies',
        text:
          'Sie können die Speicherung von Cookies in Ihrem Browser jederzeit deaktivieren. Da ' +
          'die verwendeten Cookies für die Anmeldefunktion technisch notwendig sind, ist die ' +
          'Nutzung geschützter Bereiche ohne sie eingeschränkt.',
      },
    ],
  },
}
