/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const map = {};
  words.forEach((w, i) => {
    for (let k = 0; k < w.length; k++) {
      if (map[w[k]]) {
        map[w[k]].push(i);
      } else {
        map[w[k]] = [i];
      }
    }
  });
  console.log(Object.values(map).filter(ws => ws.includes(7) && ws.includes(10)))
  let max = 0;
  for (let k = 0; k < words.length; k++) {
    const repeats = Object.values(map).filter(ws => ws.includes(k)).flat();
    for (let i = k + 1; i < words.length; i++) {
      if (!repeats.includes(i)) {
        max = Math.max(words[i].length * words[k].length, max);
      }
    }
  }
  return max;
};
console.log(maxProduct([
  "kapjnplpbfgnjjlhladkijfecapgakookhpldcaciimganfdhebabkkafbjdinmhpfaodmgdbpfmbmohocikkbokhnakgelodhj",
  "hnedimoljbkejlnpkjfdclnccmagildciicpaekcpbeaonjpbnffdkompelckcnnjcjdlickbhhbfdljahfejabhoohephenk",
  "jjclmapcboloibkhdgld",
  "nfampfgmgipmaidknedemagagdolmkmpamonghkbjjmblaomhcligcnghhpiekebdkenpb",
  "nbmfopmhoikdgcjphmfledjdocgbhbeejhmbkfogodakphncmbhmhnnbndjmlpldalhdjg",
  "cenfbnoifpjemkjbkmnmgdalefhcoaepebdnmafmnlikfbmblkbioafagejencajjaldagnaaneboopbmpknpmlcicdidckoma",
  "kajhkeahcfpnlliejnelaficpabplbnmefbdnbooddkbhmdehfj",
  "hmmpph",
  "dnjbgdpkgcckhbolnedgmimkcimkenpkifijpgkdjfigihgegadbmibnbhgenhiobheamald",
  "mpddokfidofpchimkofhkpfnhmkfbfommgepiomlofikjcbanacebmdiglhogfeoicfhaonomjjfpmimolbjlnmalgljibfnka",
  "lgefcbkkngoiae",
  "cnbboimdmbhlnddfgceghibogoodlgfkkjebehdjmjdgnpadiamchfepccoffdkabcdmfjbjdpnhflmadfjehhoeblehcich",
  "laomgfminhekmjppiiojjlabgffdcknapnbg",
  "gflogcjgockehopflpnchlkedcgmammifjlodnjjakfgpdalofpbafclomhp",
  "idpkimhfkfdbdkmfkfeglceolimbkcanpgjjcddelbhjlmcjhjl",
  "dfhieloiedflomidiejcoknikgfjpilldpakhejdabgn",
  "epejjblchkkjinofppgablbmhipjbkiafg",
  "cmgjbecngijfmmpefnellim",
  "klglgcohnapfhngbmidmpimopinhfgefgbcdinaablonhg",
  "fecmadienoeapdd",
  "eakojbkljidonddabfcoiakmjlccmgkndenhmncjkjefdpglfkkiifpbiklaebfkcgcpmbphhfihlcendmilphkleihmkldmpo",
  "pagicibcfnbcjodmmicminiecm",
  "ecjcmjhmckghpgkhbnjeigopnpphaemnhnldnpjhdejlmmglgekndfpgkbblbjfcdcmmhabpnhagfidfdfgnjkoaoik",
  "oaigigflappmfgcekhocjfaafcmikmbalojep",
  "aonnemglkmohppnppj",
  "poheonmcipoliahfabibbjddikpfeghnecdmbfppnlaomglgnplcnlpdbbiiogjkgkgfjcflloflihnj",
  "dlpaiefgjeeaejdphaaojn",
  "fdcccfgljjjngfenacineplecagbmomg",
  "kianbakiknjganabkanfhpcjdoknagaeokbgifcnbigflmdemgko",
  "iadmfneffifejgnnbmabjjohaddjbhnpecnipiigdcoejebfkcicfbboghiddbdidmpdkhcpecg",
  "fpeobihakjediacakoolpgngbnkdalacfbgnboapgjflbmakaejdmiekkhpo",
  "cephcpllobkjmknhegmabfnbdjlccjlgncfdeafflpbkjkdgahnocnmehgklogocegcfachonllnfdghmbbkbgpdcdbgh",
  "llg",
  "oedkdphiefllmcghcmikhkbklkpaflhfimanhniekmkgcbkclaofonpfhbmkkghbednkfi",
  "mdpeifiklaadnlk",
  "mdidl",
  "eegjh",
  "aebmbdkcffgealhgnko",
  "cefnkdgafaiiafkgpmikpodcdonnhaledlmjkngdbbncehhhmddllhnklnmjoegecjbofnlbighchgdkpelmkeagmfegf",
  "mooacjdknemifjdfamaekkefjcjoalajlfklmbg",
  "hkbpeblgjflbcbnakdncagjekaedhelbbibenapbmopibchbigblpgglljeckmjdbfialdh",
  "bpcggeanhdgncdmjbapecfjbfn",
  "ppdbohmkgamkkdjcpdbgodbkfngnlkbhdnlpedhfickelcggadibinnohhglo",
  "ijbifgcd",
  "naciogjichgmolalkddejakbngpifgeenbnmccmlplkdngbdhliidhngjbdbhedplk",
  "njmejclklmikpghcnkjcbbibgpmcbelnakmpmkpdfpodjjcodncdhmicfmplngifddlmjd",
  "amkbpbdkmdeghkdecgaoidamanjnimniaifdiiocdenecbajkachaagh",
  "gclcmnocpffgnp",
  "amfkceiddpkoddnkglchpoijfflmiocfigihmachnfpajkckjoonngffhlklolgmjbmd",
  "ooaooocjghooanjopjfefekhfpephllaihmco",
  "boacjpiicbgfgkekjoeiojfgnigddf",
  "aflaobmhdnmokgamgojmknmjmbpnagehcmbjeceeecoclgjiljmb",
  "hnhonkaaoapifdgofnghnpanbpfilipfekbhhafpcgmfaohphfjlpakbjmjgpbgodncaggbjmdfjekicmcnolafhoh",
  "iadpiiapljmpodimcgeafbchjbjbfidhdejhjgchdakppifbjiemnidcnmalemkjoacbkcccmgcnahomhhnilikijdggghenicdo",
  "kdicnacjgndgeknmmllghhebnhjnjimp",
  "jljjhnnbgepjelgbkhnddpbdoibnfjhihhphfanpdaogablafabofmcpojpdicalajiijbnodibgamjiijnmheo",
  "bilo",
  "emkogekpgbedocbfafmdofnchchoghnbdiachpnkanbi",
  "oefckknomlonbbhankeplbifpmgenbfodedah",
  "ooaajboojbobodkcaikhacomokghifkjnnmcbpkkicn",
  "ciglciiagjdilnnbgfm",
  "lhbjgcmaenjbcbghibbiljfaibekddmjbekfjokdkdedaoccjigebejnceakdfkomfbnakclmjkajd",
  "apdaklmdfadengaonkibfinochphiiialeddlepkicgnlkbfnciigefhnmegbjm",
  "mebfhjakdckkjbhdafmfejbaemiglldmmdnaifdjimdlcdochhbbphjkocnjpglinbmekpnnfai",
  "amechhmchadddgdoddngclndlcjhacelh",
  "jekbjpjhkpiicdec",
  "bfgpmkcbbhjmflnempfjajeicbgikcemjdjjjhccnbjbedgk",
  "aojdhjebhagheh",
  "gdappfnoddb",
  "fgcaaogajmehbkjnchgoghhchenpalofcfkjdhgecnlgeihjppnfdfpbddecohcpkbcg",
  "fklehjobicaeleahfipeohjoglpgpboapdkcjaepdjdfflfmbcdbhimliolcf",
  "cigemecgnbkjckpkoeebdceblkeknoelnfpmindkkhcoikokbnnlmppaaaadiiplinfaankpfedbpkpi",
  "hopeciiahhoeanlaneckhakf",
  "banjg",
  "ljajjghibknhdmkecicllfcdkldlageaoalmhfhblclldjppgccgjdlddiadnkabihenhagppbehekhganofejejibghjbeobp",
  "jog",
  "pjlopdmigkknnicagkjijikgbbekjdofnifijkiljcahkkpjfcdcoj",
  "pinpjjkdohdmkmenlojilmafajkhfifdgcdkkihkgpoedpaeleplmnggnllajjgkoiejojib",
  "pepplegjkmglhopmmjbhmdplieolckdeponkhlmmaeidnmdfimhifnboojcnmdloikckncmcaphpekdhkicafimpikinmdjpkd",
  "lgpcdpejlgbelgkekbfcibbpidmabgojbfpnhllnhonmlanhongaoaooipibicclhlcngkelcmfegiadapcgnoohkj",
  "jndpfghjgcdhcgk",
  "ommaoccdhbmgbnnekbiagncgfnkmgbgdmccmeaagpbnh",
  "fiomaacpneccappifhgalnjfadibjnndbnchdj",
  "iihimjioiocbodfhhbekgfkjhpnebljghcafdfngjp",
  "kamehpccningnjbpeogpalfkcdkfbaofjhokelcbfbnpikjaoioikhkkiijjillfocgaflkihd",
  "bmljhnhagbodiojaemmkjpkmhpncboneihghilfdljmnlbbdngoddobahnpboegcaianaa",
  "dhkcjadhholabgegdemdlkookgepnejafonaidfofamgdhnchhamcoeaifgpipmbcchdmmakhoeicegkfchcd",
  "hiohfopkekfnmihmjhkpjokjhpbleaa",
  "bmbkajbgh",
  "npncfbbkadamacffeonnpbladennijifeffjpjpdidjoappgpdcmepinpdkaojdfmikokobdabnholpldcdjmncng",
  "ccommodlhaemhomaheakjelnmhcibefmnmefobpljkhihjdjjaheagfhjcmmhiiphaejcogjhjkicbaicdecgp",
  "jjfodnfpffho",
  "aadokooadlhfobnbangekgfpppolnjfjlbmkmccgjconccjlpmanibecdhfhmfgkiookfdjanmgjldaembelb",
  "ehjjpegnpaoihanpcolkbpffdmialkmilmilniidjfkkhdipeeob",
  "dolehajkhhoifgmaokpfnbjnkhmnbkdpgafhjamdkilpeili",
  "lcdjfnlekgfilmnfmakmeegjbinapdlicocgnpknaaandmdhfnjppfcbnlcdbfiahimlaepgkcmkmidcdcdm",
  "hnnofjhniodmbejnmhikdemnplffo",
  "alkdnaemadciokmkcc",
  "mejghbhlllfhfkgpghdphbblooghgifchclkccckopbcloahceelbojmkghombijjcndjhoghdgknpohfmdaimfolimocdda",
  "eeinfacbkjianmoineikmmjaencpdhdnefdejmflgonafgepaomcopbadpjfcgpkcjlobmoggabcbaehnggjohmn",
  "dlcfgkdjebkeedpjabiijfbgeldndalbgblpjkeplohilggcdpgafcdcmgdpogaomjdlnn",
  "aobpdabncchjlkfikkdakfacjpaemecogjhi",
  "kgjdeahhciagblmhnpodjl"]), 84)


