const text = [
  `I'm baby offal retro anim, sed ut excepteur iPhone authentic taxidermy. Etsy scenester fingerstache taiyaki deep v cillum asymmetrical. Bespoke thundercats subway tile godard officia raclette try-hard XOXO austin four loko. Bicycle rights photo booth cliche vape, tumblr vexillologist salvia VHS skateboard helvetica listicle cillum. Echo park veniam deep v quinoa occaecat williamsburg.`,
  `Ut art party flexitarian 8-bit. Eiusmod magna sustainable, slow-carb next level distillery velit proident gochujang master cleanse consectetur swag lyft. Intelligentsia edison bulb et, portland quinoa DIY lo-fi PBR&B sunt yuccie austin tumeric ut umami meh. Quinoa synth subway tile consequat church-key, nostrud kitsch blog keytar. Humblebrag church-key franzen, health goth lyft meggings banjo pop-up ennui hexagon. Swag vegan lyft affogato, air plant ut anim tousled slow-carb meditation cliche. Cold-pressed quis irony austin in master cleanse quinoa roof party banjo mlkshk paleo mixtape.`,
  `Meditation 90's kitsch, pitchfork post-ironic hashtag pariatur palo santo. Squid cold-pressed ethical fixie, vice snackwave dolor. Est vegan sint yuccie kombucha messenger bag blog unicorn fixie poke helvetica scenester celiac subway tile reprehenderit. Quis offal distillery sint nostrud beard tbh. Hexagon deep v actually skateboard health goth fam dolor kinfolk.`,
  `Sint lyft aute 3 wolf moon tbh nisi tote bag officia street art jean shorts before they sold out aliqua vexillologist +1 mixtape. Craft beer ut before they sold out, man bun shabby chic fingerstache sed hashtag. Ugh migas trust fund taxidermy gluten-free scenester. Blue bottle iPhone shoreditch laborum, blog pitchfork ramps readymade tote bag health goth shaman fingerstache lo-fi.`,
  `Blue bottle culpa pork belly ea, meh shabby chic kinfolk prism synth kale chips tilde lumbersexual butcher +1. Tote bag dolore selvage, tofu dreamcatcher meh tacos aesthetic food truck offal leggings small batch aute plaid. Sartorial deep v brooklyn hammock williamsburg. Umami lyft single-origin coffee fixie gluten-free. YOLO eu actually, ut raclette woke scenester flexitarian bushwick wolf small batch sustainable adaptogen coloring book.`,
  `Lyft forage prism glossier, microdosing celiac live-edge activated charcoal pug truffaut waistcoat. Tempor pinterest cray heirloom meditation, keffiyeh food truck. Mumblecore pok pok taiyaki, man braid pour-over deserunt shoreditch. Jean shorts aute ramps, palo santo elit quinoa prism biodiesel. Do affogato dreamcatcher craft beer ut.`,
  `Ramps tofu food truck pop-up, offal leggings laborum brunch mustache man braid man bun air plant taiyaki readymade. Keffiyeh id incididunt raw denim quinoa, offal try-hard. Wolf ramps beard hexagon blue bottle, minim single-origin coffee humblebrag franzen reprehenderit vaporware 3 wolf moon irony vexillologist. Air plant post-ironic biodiesel cliche, hexagon affogato tacos. Anim fashion axe ea cillum, truffaut ethical hoodie XOXO unicorn jean shorts mustache poke sartorial post-ironic. Ugh tempor art party aliquip keytar gastropub, 3 wolf moon synth chartreuse bitters flannel pork belly banjo. Id church-key iPhone, dolore cold-pressed ullamco pitchfork post-ironic jianbing farm-to-table wolf.`,
  `Chillwave consectetur cred lo-fi cronut yr four dollar toast. In four loko keytar air plant bicycle rights shaman green juice et cloud bread blog banh mi sriracha occaecat. Trust fund gastropub organic stumptown photo booth enamel pin, 3 wolf moon craft beer palo santo taiyaki tempor yuccie kombucha offal godard. Dreamcatcher glossier celiac austin, next level tumeric taiyaki. Ad hammock poutine meggings literally, in activated charcoal pitchfork dolore plaid pour-over normcore paleo pok pok.`,
  `Yuccie prism minim meditation DIY chillwave tempor letterpress. Forage letterpress live-edge raw denim XOXO reprehenderit. Freegan mollit velit id, actually leggings et godard copper mug. Meh jianbing gluten-free hell of glossier iceland truffaut labore.`,
  `Flannel freegan slow-carb blog. Consectetur poutine chillwave duis street art anim veniam adipisicing cold-pressed church-key meggings you probably haven't heard of them. Taiyaki kale chips lomo scenester intelligentsia hot chicken gastropub ut mollit nisi. DIY bicycle rights wolf sustainable meditation air plant, chia typewriter XOXO chillwave. Four loko pour-over +1, godard food truck selfies bicycle rights coloring book forage subway tile lomo chartreuse mlkshk.`
];

const form = document.querySelector(".lorem-form");
const numofpara = document.getElementById("numofpara");
const numofparaRange = document.getElementById("numofparaRange");
const result = document.querySelector(".lorem-text");

numofpara.addEventListener('input', syncParaNumbers);
numofparaRange.addEventListener('input', syncParaNumbers);

function syncParaNumbers(e) {
  const value = e.target.value;
  numofpara.value = value;
  numofparaRange.value = value;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const value = parseInt(numofpara.value);
  let tempText = text.slice(0, value);
  tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");

  result.innerHTML = "";
  result.innerHTML = tempText;
})