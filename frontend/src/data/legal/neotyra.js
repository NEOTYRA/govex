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
          'technische Daten wie Ihre IP-Adresse an Cloudflare, Inc. übermittelt. Darüber hinaus ' +
          'geben wir keine Personendaten an Dritte weiter, ausser wir sind gesetzlich dazu ' +
          'verpflichtet.',
      },
      {
        title: '7. Bekanntgabe ins Ausland',
        text:
          'Cloudflare kann Daten in Länder ausserhalb der Schweiz und des Europäischen ' +
          'Wirtschaftsraums übermitteln, insbesondere in die USA. Dies geschieht gestützt auf ' +
          'das Swiss-U.S. und das EU-U.S. Data Privacy Framework oder auf ' +
          'Standardvertragsklauseln.',
      },
      {
        title: '8. Dauer der Speicherung',
        text:
          'Personendaten werden nur so lange gespeichert, wie dies für die Erreichung der hier ' +
          'genannten Zwecke erforderlich ist, jedoch nach einer Deaktivierung des Kontos ' +
          'maximal für eine Dauer von 10 Jahren.',
      },
      {
        title: '9. Rechte der betroffenen Personen',
        text:
          'Nach dem DSG haben Sie insbesondere das Recht auf Auskunft (Art. 25 DSG), auf ' +
          'Herausgabe oder Übertragung Ihrer Daten (Art. 28 DSG) sowie auf Berichtigung und ' +
          'Löschung (Art. 32 DSG). Soweit die DSGVO anwendbar ist, stehen Ihnen zudem die ' +
          'Rechte nach Art. 15 bis 21 DSGVO zu, darunter Einschränkung der Verarbeitung und ' +
          'Widerspruch, sowie das Recht, eine Einwilligung jederzeit zu widerrufen. Bitte wenden ' +
          'Sie sich dazu an die oben angegebene Adresse.',
      },
      {
        title: '10. Aufsichtsbehörde',
        text:
          'In der Schweiz ist der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte ' +
          '(EDÖB) zuständig. Personen im Europäischen Wirtschaftsraum können sich zudem bei der ' +
          'Datenschutzaufsichtsbehörde ihres Wohnsitzstaates beschweren.',
      },
      {
        title: '11. Änderung der Datenschutzerklärung',
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
        title: '6. Anwendbares Recht und Gerichtsstand',
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
