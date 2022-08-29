/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const map = {};
  words.forEach((w, i) => {
    for (let k = 0; k < w.length; k++) {
      if (map[w[k]]) {
        map[w[k]].add(i);
      } else {
        map[w[k]] = new Set([i]);
      }
    }
  });
  let max = 0;
  for (let k = 0; k < words.length; k++) {
    const repeats = new Set(Object.values(map).filter(ws => ws.has(k)).map(f => [...f]).flat());
    for (let i = k + 1; i < words.length; i++) {
      if (!repeats.has(i)) {
        max = Math.max(words[i].length * words[k].length, max);
      }
    }
  }
  return max;
};

// console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]), 4)
// console.log(maxProduct(["abcw", "baz", "foo", "bar", "fxyz", "abcdef"]), 16)
// console.log(maxProduct(["a", "aa", "aaa", "aaaa"]), 0);
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


