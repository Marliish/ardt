/* Edit this CONFIG object to customize the complete landing page. */
const CONFIG = {
  profile: {
    name: "Lexis Wilson",
    countryCode: "us",
    profilePhoto: "media/upload-01.jpg",
    storyPhoto: "media/upload-02.jpg",
    videos: 378, photos: 946, nameColor: "#7c2fe7", countColor: "#ec4d83"
  },
  banner: {
    photo: "media/upload-03.jpg",
    photoPosition: "50% 22%",
    alternateGif: "erotimate-is-free-reveal-transparent-exact-hold-3.5s.gif"
  },
  buttons: {
    first: { emoji: "🔓", text: "Explicit Content" }, second: { emoji: "💎", text: "+18 Livestream" },
    background: "#f02be8", color: "#ffffff"
  },
  information: {
    /* The builder writes a permanent value from 1 to 15. Use 0 for the original default text. */
    presetId: 3,
    liveTitle: "MY LIVE CAM SHOWS",
    liveText: "Riding, SPH, BBC, Cuckold, JOI, CEI, Findom, Nap shows, Goddess Worship & fetish fun! EXC = 1:1, PVT = group. Small Dick Tax 25g, Penetration 20g, BBC 50g, Anal 150g, Squirting dildo 75g (Creampies/Facials)",
    turnTitle: "TURN-ONS",
    turnText: "Being spoiled, manners, interaction, and genuine compliments turn me on. I enjoy attention, admiration, and being treated like a goddess."
  },
  story: { prefix: "Live at", suffix: "on Erotimate", secondLine: "Come get naughty with me 🔥", duration: 8000 },
  popup: {
    intro: "Watch My explicit content for FREE in “Erotimate”",
    steps: ["1- Create a FREE Erotimate Account", "2- Get the Free Lifetime Membership", "3- Enjoy Me & Models like me!"],
    gif: "erotimate-tv.gif", button: "Join for Free", redirectUrl: "https://eroticamslive.com/go/A9B7A90266E2"
  },
  dmca: { canonicalDomain: "rightsrequest.site", recipientPrefix: "dmca", subject: "DMCA Takedown Request" },
  gallery: [
    ["media/upload-04.jpg","photo",false],
    ["media/upload-05.jpg","photo",false],
    ["media/upload-06.jpg","photo",false],
    ["media/upload-07.jpg","video",true],
    ["media/upload-08.jpg","video",true],
    ["media/upload-09.jpg","photo",true],
    ["media/upload-10.jpg","photo",true],
    ["media/upload-11.jpg","photo",true],
    ["media/upload-12.jpg","video",true],
    ["media/upload-13.jpg","photo",true]
  ]
};

const SUPPORTED_FLAGS = {
  us:"United States", gb:"United Kingdom", ca:"Canada", de:"Germany", fr:"France",
  it:"Italy", es:"Spain", nl:"Netherlands", au:"Australia", br:"Brazil",
  mx:"Mexico", ch:"Switzerland", at:"Austria", se:"Sweden", no:"Norway"
};

/* Builder-only presets. The manager chooses one once and saves its number in CONFIG.information.presetId. */
const INFO_PRESETS = [
  ["Toys, outfit, accessories...take me private-panties off-fun begins! Let me show off my body, fuck until we cum, make me squirt, C2C, dirty talk, sex machine, pegging, fetish, anal, taboo, dp.","Don't just sit, talk to me. Vib my toy- see me shake until I drip! Make me feel sexy, desired, naughty. I like trying new things. Show me good cum shot."],
  ["You're lucky to be in my presence. I'm a switch with a taste for domination and a knack for being bratty. My juicy booty is just the beginning - it's my attitude that'll keep you coming back for more.","Confidence, being spoiled with my vibe , genuine connection, watching you, being told thank you after a show, long written reviews on my page."],
  ["Sloppy bj, pussy play, back shots with dildo, butt plug, joi.","A big dick, confidence, a dominate man who knows how to handle a women!"],
  ["I LOVE it ALL& Have An Endless Sex Drive! I Have Big Toys ALL Holes! I LOVE To Have My Holes Stretched & LOVE To Be Pounded Hard & Deep! Deepthroat, Pussy, Anal, DP, Gaping, & More!","I love a hard dick & a wet pussy! I love guys % girls who know what they like! I l love to be told what to do! Take me private & take me 4 a ride you'll never forget!"],
  ["I'm a sweet, bubbly girl who loves to giggle, flirt and get a little shy when you give me attention.I love chatting.","Sweet compliments, gentle flirting, playful teasing, romantic attention, being made to blush, soft dominant energy, fun conversations, and patient guys who enjoy slowly building chemistry and excitement together."],
  ["Breathe if you're horny! Requests with tips. Exclusive is just you and me ;) full nude, c2c, dirty talk, toys, mutual masturbation, special requests.","Gentlemen with a sense of humor, praise, mutual play, dirty talk, c2c, i love watching you cum for me! A good communicator, tell me what you like and i'll do my best to accommodate you!"],
  ["I offer Squirting, Anal, Strip Teases, Roll Play, Feet, Toy Play Including Specialized Dildos & Pussy Pump, CEI, SPH, CUCKING, JOI, CREAMPIES, FACIAL, SQUIRTING DILDO, GFE, EDGING","Making Me Squirt, Talking Dirty To Me, Nipple Play, Teasing, Cumming For Me. BEING SPOILED?"],
  ["Here I will make your fantasies come to life. Let's explore the world of desire together! Anal is 25GOLD in Exclusive. I do Submissive and Dom Shows in Exclusive. I can be your obedient sweet girl or a bratty dom who bully's you","I love when you buzz my lush on HIGH! It drives me CRAAZY! Watch me scream and squirm with pleasure!"],
  ["I love to have fun. I love dildo fucking, sucking, stripping, being watched and watching you cum ;) i like conversation too whether its intellectual or filthy or both :).","Shows, conversation, c2c, confidence, blowjobs, rough sex, dirty talk, worship, regulars, connection, cumming together, masturbation, spanking, dildo play, big tips ;)."],
  ["Domme/MILF with DD tits and big ass for you to worship. TIP toys ONLY (Fuck machine, Butt plug, Domi wand, Lush)! Femdom, Findom, Fetish, Foot Worship, Cuckold, Chastity, Group Cock Ratings/Cuck PVT, Sounding, SPH, CEI, CBT. 15g small dick tax!","Worshipping me with gold and buzzing my pussy. Love watching a man squirm from CBT."],
  ["You can see i'm really good looking, now lets chat. I used to be really shy, but now i can talk the cum right out of you.I've got all sorts of toys and a wild imagination. Let's play.","Someone who can make me laugh. My vibrator. You turning on your cam and showing me your cock, especially if you stroke it. Playing with my nipples."],
  ["Tell me what you want and how you want it, I want to please every inch of you. I'm into EVERYTHING.","i send videos to everyone who hearts me & messages me. (i do custom too)"],
  ["Hairy, bratty Goddess here to nurture your perversions. Pvt is my show to do as I please & Excl is your show for RP, fetishes, C2C, etc. Occasional nap/voyeur streams.","GOONERS, cumshots, cuckolding, bi encouragement, BODY WORSHIP, men in panties, GOLD, dirty talk, sweat/scent play, TEASE & DENIAL, chastity, CFNM, home wrecking, ruined orgasms"],
  ["You've entered into my Forest, now surrounded by magic you find ME. You desire to be GOOD for me. (Ask about my cosplays!)","Watch me SQUIRT in 5mins! I can tell you so many stories about my TIGHT PUSSY! Perhaps you wanna regularly help with my ANAL TRAINING? Or maybe you want Nerd-Next-Door vibes? I'm also great with couplestherapy!"],
  ["In my show i like to explore the dreams of my partener and make it come true!","To turn me on must be sensitive and kaind! Ofcourse must be generous and funny!"]
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const displayName = name => name.length > 16 ? `${name.slice(0,14)}...` : name;
const total = CONFIG.profile.photos + CONFIG.profile.videos;
const STORY_KEY="erotimate-story-created-at", LIVE_KEY="erotimate-story-live-time-v2", VIEWED_KEY="erotimate-story-viewed";
const STORY_CYCLE_MS=24*60*60*1000, STORY_INITIAL_AGE_MS=3*60*1000;
let galleryIndex=0, storyTimer;

function setText(selector, value){ $$(selector).forEach(el => el.textContent=value); }
function show(id){ $(id).classList.remove("hidden"); document.body.style.overflow="hidden"; }
function hide(id){ $(id).classList.add("hidden"); document.body.style.overflow=""; }
function openPopup(){ show("#join-popup"); }
function cleanDomain(value){return String(value||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").split(/[\/:?#]/)[0]}

function initialize(){
  const p=CONFIG.profile, name=displayName(p.name);
  document.title=p.name;
  setText(".profile-name",name); setText(".story-name",name); setText(".gallery-name",name); setText(".game-banner-name",name);
  setText(".total-media",`+${total} Photos and Videos`);
  $("#profile-photo").src=p.profilePhoto; $("#story-avatar").src=p.profilePhoto; $("#story-photo").src=p.storyPhoto;
  $("#video-count").textContent=p.videos; $("#photo-count").textContent=p.photos;
  const flagCode=SUPPORTED_FLAGS[p.countryCode]?p.countryCode:"us", flagName=SUPPORTED_FLAGS[flagCode];
  $("#profile-flag").setAttribute("aria-label",`${flagName} flag`); $("#profile-flag-image").src=`flags/${flagCode}.svg`;
  $$(".profile-name,.gallery-heading h2,.info-block h2").forEach(el=>el.style.color=p.nameColor);
  $(".media-counts").style.color=p.countColor;
  const actionOne=$("#action-one"), actionTwo=$("#action-two");
  actionOne.innerHTML=`<span>${CONFIG.buttons.first.emoji}</span>${CONFIG.buttons.first.text}`;
  actionTwo.innerHTML=`<span>${CONFIG.buttons.second.emoji}</span>${CONFIG.buttons.second.text}`;
  [actionOne,actionTwo].forEach(el=>{el.style.background=CONFIG.buttons.background;el.style.color=CONFIG.buttons.color});
  const selectedPreset=INFO_PRESETS[Number(CONFIG.information.presetId)-1];
  const liveText=selectedPreset?selectedPreset[0]:CONFIG.information.liveText, turnText=selectedPreset?selectedPreset[1]:CONFIG.information.turnText;
  $("#live-title").textContent=CONFIG.information.liveTitle; $("#live-text").textContent=liveText;
  $("#turn-title").textContent=CONFIG.information.turnTitle; $("#turn-text").textContent=turnText;
  const infoLength=liveText.length+turnText.length, defaultLength=CONFIG.information.liveText.length+CONFIG.information.turnText.length;
  $("#information-panel").classList.add("info-preset",infoLength<=defaultLength?"info-default-size":infoLength>430?"info-dense":"info-compact");
  $("#popup-intro").textContent=CONFIG.popup.intro;
  $("#popup-steps").innerHTML=CONFIG.popup.steps.map(step=>`<li>${step}</li>`).join("");
  $("#popup-gif").src=CONFIG.popup.gif; $("#popup-button").textContent=`🔒 ${CONFIG.popup.button}`;
  $$(".redirect-link").forEach(link=>link.href=CONFIG.popup.redirectUrl);
  const domain=cleanDomain(CONFIG.dmca.canonicalDomain)||cleanDomain(location.hostname)||"your-domain.com";
  const recipient=`${CONFIG.dmca.recipientPrefix}@${domain}`;
  $("#dmca-send").href=`mailto:${recipient}?subject=${encodeURIComponent(`${CONFIG.dmca.subject} – ${domain}`)}&body=${encodeURIComponent(`Content URL: ${location.href}\n\nProof of ownership:\n\nContact information:\n\nAdditional details (optional):\n`)}`;
  renderGallery(); updateStoryLabels(); bindEvents();
  const settleImage=async image=>{
    if(!image)return;
    if(!image.complete)await new Promise(resolve=>{
      image.addEventListener("load",resolve,{once:true});
      image.addEventListener("error",resolve,{once:true});
    });
    if(image.naturalWidth&&typeof image.decode==="function"){
      try{await image.decode()}catch(_){ }
    }
  };
  Promise.all([
    settleImage($(".game-banner-template")),
    settleImage($("#banner-photo")),
    settleImage($("#alternate-banner")),
    settleImage($(".game-banner-erotimate")),
    document.fonts?.load('800 italic 20px "Roboto Condensed"')||Promise.resolve()
  ]).then(()=>{
    const reveal=()=>requestAnimationFrame(()=>requestAnimationFrame(()=>
      $("#game-banner")?.classList.replace("banner-loading","banner-ready")
    ));

    /* Opacity keeps every layer paintable while hidden. Give the compositor
       one short paint window, then reveal the complete banner atomically. */
    requestAnimationFrame(()=>requestAnimationFrame(()=>
      setTimeout(reveal,80)
    ));
  });
  if(localStorage.getItem(VIEWED_KEY)==="true") $("#story-open").classList.add("story-viewed");
}

function renderGallery(){
  $("#gallery-track").innerHTML=CONFIG.gallery.map((item,index)=>{
    const [src,type,locked]=item, last=index===CONFIG.gallery.length-1;
    return `<button class="gallery-card${locked?" locked":""}" data-index="${index}" data-locked="${locked}" aria-label="${locked?"Unlock":"Open"} ${type}"><img src="${src}" alt="Gallery ${type} ${index+1}"><span class="media-type">${type==="video"?`<svg class="ermate-gallery-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M10 8.5 16 12l-6 3.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    </svg>`:`<svg class="ermate-gallery-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="9" cy="9" r="1.5" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="m6.5 17 4-4 2.5 2.5 2-2 2.5 3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}</span>${type==="video"&&!last?'<span class="gallery-play"><svg class="ermate-gallery-play-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 6.5 17 12l-8.5 5.5z" fill="currentColor"/></svg></span>':""}${last?`<span class="watch-all"><b>+${total} Photos and Videos</b><em>Watch All</em></span>`:""}</button>`;
  }).join("");
  $$(".gallery-card").forEach(card=>card.addEventListener("click",()=>{
    const index=Number(card.dataset.index); if(card.dataset.locked==="true") return openPopup();
    $("#lightbox-image").src=CONFIG.gallery[index][0]; show("#lightbox");
  })); updateGallery();
}
function updateGallery(){const track=$("#gallery-track"); track.className=`gallery-track gallery-position-${galleryIndex}`; $("#gallery-prev").disabled=galleryIndex===0; $("#gallery-next").disabled=galleryIndex===CONFIG.gallery.length-1}
function updateStoryLabels(){
  let start=Number(localStorage.getItem(STORY_KEY));
  const reset=()=>{start=Date.now()-STORY_INITIAL_AGE_MS;localStorage.setItem(STORY_KEY,String(start));localStorage.removeItem(VIEWED_KEY);$("#story-open").classList.remove("story-viewed");const fixed=`${String((new Date().getHours()+2)%24).padStart(2,"0")}:00`;localStorage.setItem(LIVE_KEY,fixed);return fixed};
  let live;
  if(!Number.isFinite(start)||start>Date.now()||Date.now()-start>=STORY_CYCLE_MS) live=reset();
  const minutes=Math.max(3,Math.floor((Date.now()-start)/60000)); const hours=Math.floor(minutes/60); $("#story-time").textContent=minutes<60?`${minutes}m`:hours<24?`${hours}h`:`${Math.floor(hours/24)}d`;
  live=live||localStorage.getItem(LIVE_KEY); if(!live){live=`${String((new Date().getHours()+2)%24).padStart(2,"0")}:00`;localStorage.setItem(LIVE_KEY,live)}
  $("#story-promo-one").textContent=`${CONFIG.story.prefix} ${live} ${CONFIG.story.suffix}`; $("#story-promo-two").textContent=CONFIG.story.secondLine;
}
function openStory(){
  localStorage.setItem(VIEWED_KEY,"true"); $("#story-open").classList.add("story-viewed");
  const progress=$(".story-progress i"); progress.style.animation="none"; void progress.offsetWidth; progress.style.animation="";
  show("#story-viewer"); clearTimeout(storyTimer); storyTimer=setTimeout(()=>hide("#story-viewer"),CONFIG.story.duration);
}
function closeStory(){clearTimeout(storyTimer);hide("#story-viewer")}
function setTab(tab){
  $$(".profile-tabs [data-tab]").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
  $("#landing-panel").classList.toggle("tab-panel-hidden",tab!=="landing");
  $("#information-panel").classList.toggle("tab-panel-hidden",tab!=="information");
}
function bindEvents(){
  document.addEventListener("contextmenu",event=>{
    const target=event.target;
    if(!(target instanceof Element))return;
    if(target.closest("img")||target.closest("a")?.querySelector("img")){
      event.preventDefault();
    }
  },{capture:true});
  document.addEventListener("dragstart",event=>{
    const target=event.target;
    if(target instanceof Element&&target.closest("img")){
      event.preventDefault();
    }
  },{capture:true});
  $$(".popup-trigger").forEach(el=>el.addEventListener("click",openPopup));
  $$(".profile-tabs [data-tab]").forEach(el=>el.addEventListener("click",()=>setTab(el.dataset.tab)));
  $("#story-open").addEventListener("click",openStory); $("#story-close").addEventListener("click",closeStory);
  $("#story-join").addEventListener("click",()=>{closeStory();openPopup()});
  $("#dmca-open").addEventListener("click",()=>show("#dmca-popup"));
  $("#gallery-prev").addEventListener("click",()=>{galleryIndex=Math.max(0,galleryIndex-1);updateGallery()});
  $("#gallery-next").addEventListener("click",()=>{galleryIndex=Math.min(CONFIG.gallery.length-1,galleryIndex+1);updateGallery()});
  $("#lightbox-watch").addEventListener("click",()=>{hide("#lightbox");openPopup()});
  $$('[data-close="join"]').forEach(el=>el.addEventListener("click",()=>hide("#join-popup")));
  $$('[data-close="dmca"]').forEach(el=>el.addEventListener("click",()=>hide("#dmca-popup")));
  $$('[data-close="lightbox"]').forEach(el=>el.addEventListener("click",()=>hide("#lightbox")));
  [["#join-popup",()=>hide("#join-popup")],["#dmca-popup",()=>hide("#dmca-popup")],["#lightbox",()=>hide("#lightbox")],["#story-viewer",closeStory]].forEach(([id,fn])=>$(id).addEventListener("mousedown",e=>{if(e.target===$(id))fn()}));
  addEventListener("keydown",e=>{if(e.key==="Escape"){closeStory();hide("#join-popup");hide("#dmca-popup");hide("#lightbox")}});
  setInterval(updateStoryLabels,30000);
}
async function loadEditableSettings(){
  try{
    const response=await fetch("api.php",{cache:"no-store"});
    if(!response.ok)throw new Error(`Settings request failed: ${response.status}`);
    const editable=await response.json();
    if(typeof editable.name==="string"&&editable.name.trim())CONFIG.profile.name=editable.name.trim();
    if(typeof editable.profilePhoto==="string")CONFIG.profile.profilePhoto=editable.profilePhoto;
    if(typeof editable.storyPhoto==="string")CONFIG.profile.storyPhoto=editable.storyPhoto;
    if(typeof editable.bannerPhoto==="string")CONFIG.banner.photo=editable.bannerPhoto;
    if(Array.isArray(editable.gallery)){
      editable.gallery.forEach((src,index)=>{
        if(typeof src==="string"&&CONFIG.gallery[index])CONFIG.gallery[index][0]=src;
      });
    }
  }catch(error){console.warn("Using bundled profile settings.",error)}
}
document.addEventListener("DOMContentLoaded",async()=>{
  await loadEditableSettings();
  initialize();
});

;(()=>{"use strict";
const SITE_ID="",ENDPOINT="";
const SESSION_KEY="ermate_neutral_session_v1";
const SESSION_VISIT_KEY="ermate_neutral_session_visit_v1";
const VISITOR_KEY="ermate_neutral_visitor_v1";
const VISIT_COUNT_KEY="ermate_neutral_visit_count_v1";

const randomIdentifier=prefix=>{
  try{
    if(crypto.randomUUID){
      return crypto.randomUUID();
    }
  }catch(_){}

  return prefix+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2);
};

let visitorId=null;
let visitNumber=1;

try{
  visitorId=localStorage.getItem(VISITOR_KEY);

  if(!visitorId){
    visitorId=randomIdentifier("vis_");
    localStorage.setItem(VISITOR_KEY,visitorId);
    localStorage.setItem(VISIT_COUNT_KEY,"0");
  }
}catch(_){
  visitorId=randomIdentifier("vis_");
}

let sid=sessionStorage.getItem(SESSION_KEY);

if(!sid){
  sid=randomIdentifier("ses_");
  sessionStorage.setItem(SESSION_KEY,sid);

  try{
    const previous=Math.max(
      0,
      Number.parseInt(
        localStorage.getItem(VISIT_COUNT_KEY)||"0",
        10
      )||0
    );

    visitNumber=previous+1;
    localStorage.setItem(
      VISIT_COUNT_KEY,
      String(visitNumber)
    );
  }catch(_){
    visitNumber=1;
  }

  try{
    sessionStorage.setItem(
      SESSION_VISIT_KEY,
      String(visitNumber)
    );
  }catch(_){}
}else{
  try{
    visitNumber=Math.max(
      1,
      Number.parseInt(
        sessionStorage.getItem(SESSION_VISIT_KEY)||
        localStorage.getItem(VISIT_COUNT_KEY)||
        "1",
        10
      )||1
    );
    sessionStorage.setItem(
      SESSION_VISIT_KEY,
      String(visitNumber)
    );
  }catch(_){
    visitNumber=1;
  }
}

const navigationStartedAt=Date.now();

let ready=false;
let readyAt=null;
let last=null;
let seq=0;
let activeElapsedMs=0;
let visibleSince=null;
let checkpointIndex=0;
let checkpointTimer=null;

let visitorActionSent=false;
const initialScrollY=Math.max(
  0,
  Number(
    window.scrollY||
    window.pageYOffset||
    0
  )
);

const pendingEvents=[];

let popupSource=null;
let storyOpenedAt=null;
let galleryOpenedAt=null;
let popupOpenedAt=null;
let conversionSent=false;

const checkpointThresholds=[
  5000,
  15000,
  30000,
  60000,
  120000,
  300000,
  600000
];

const activeElapsedNow=()=>{
  if(
    ready&&
    visibleSince!==null&&
    document.visibilityState==="visible"
  ){
    return activeElapsedMs+
      Math.max(
        0,
        Date.now()-visibleSince
      );
  }

  return activeElapsedMs;
};

const dwell=openedAt=>
  openedAt
    ?Math.max(0,Date.now()-openedAt)
    :0;

const send=(event,metadata={})=>{
  if(!ENDPOINT)return;
  if(!ready){
    pendingEvents.push({
      event,
      metadata,
      occurredAt:Date.now()
    });

    return;
  }

  const now=Date.now();
  const activeElapsed=
    metadata.occurred_before_ready===true
      ?0
      :activeElapsedNow();

  const body=JSON.stringify({
    site_id:SITE_ID,
    session_id:sid,
    visitor_id:visitorId,
    visit_number:visitNumber,
    event,
    timestamp:new Date(now).toISOString(),
    metadata:{
      ...metadata,
      seq:++seq,
      page_elapsed_ms:
        Math.max(0,now-readyAt),
      active_elapsed_ms:
        Math.max(
          0,
          Math.round(activeElapsed)
        ),
      since_previous_ms:
        last===null
          ?0
          :Math.max(0,now-last),
      path:location.pathname
    }
  });

  last=now;

  try{
    if(
      navigator.sendBeacon&&
      navigator.sendBeacon(
        ENDPOINT,
        new Blob(
          [body],
          {type:"application/json"}
        )
      )
    ){
      return;
    }
  }catch(_){}

  fetch(ENDPOINT,{
    method:"POST",
    headers:{
      "content-type":
        "application/json"
    },
    body,
    keepalive:true,
    credentials:"omit"
  }).catch(()=>{});
};

const qualifyVisitorAction=(
  action,
  metadata={}
)=>{
  if(visitorActionSent)return;

  visitorActionSent=true;

  send("visitor_action",{
    action,
    ...metadata
  });
};

const recordConversion=target=>{
  const link=target?.closest?.("a.redirect-link");
  if(!link||conversionSent)return false;

  const via=
    link.id==="popup-button"
      ?"popup_button"
      :"popup_gif";
  const popupDwell=dwell(popupOpenedAt);
  const metadata={
    action:"complete_conversion",
    component:"popup",
    via,
    popup_source:popupSource||"other",
    dwell_ms:popupDwell,
    popup_dwell_ms:popupDwell
  };

  conversionSent=true;
  send("conversion",metadata);
  send(
    via==="popup_button"
      ?"popup_button_click"
      :"popup_gif_click",
    metadata
  );
  send("redirect",metadata);
  popupOpenedAt=null;
  return true;
};

const runCheckpoints=()=>{
  if(!ready)return;

  const activeElapsed=
    activeElapsedNow();

  while(
    checkpointIndex<
      checkpointThresholds.length&&
    activeElapsed>=
      checkpointThresholds[
        checkpointIndex
      ]
  ){
    const checkpointMs=
      checkpointThresholds[
        checkpointIndex
      ];

    checkpointIndex++;

    send(
      "engagement_checkpoint",
      {
        checkpoint_ms:checkpointMs,
        duration_ms:
          Math.round(activeElapsed)
      }
    );
  }
};

const beginReady=detail=>{
  if(ready)return;

  const now=Date.now();

  ready=true;
  readyAt=now;
  last=now;

  if(
    document.visibilityState==="visible"
  ){
    visibleSince=now;
  }

  send("page_view",{
    action_qualification_version:1,
    referrer:document.referrer||"",
    viewport_w:innerWidth,
    viewport_h:innerHeight,
    device:
      /Mobi|Android|iPhone|iPad/i.test(
        navigator.userAgent||""
      )
        ?"Mobile"
        :"Desktop",
    load_duration_ms:
      Math.max(
        0,
        Math.round(
          Number(
            detail?.loadDurationMs
          )||
          now-navigationStartedAt
        )
      )
  });

  for(
    const pending
    of pendingEvents.splice(0)
  ){
    send(pending.event,{
      ...pending.metadata,
      occurred_before_ready:true,
      before_ready_ms:
        Math.max(
          0,
          now-pending.occurredAt
        )
    });
  }

  checkpointTimer=setInterval(
    runCheckpoints,
    1000
  );
};

let bannerReadinessObserver=null;

const readinessImageSettled=id=>{
  const image=
    document.getElementById(id);

  return Boolean(
    image&&image.complete
  );
};

const headBodyReady=()=>{
  const banner=
    document.getElementById(
      "game-banner"
    );

  return Boolean(
    banner&&
    banner.classList.contains(
      "banner-ready"
    )&&
    readinessImageSettled(
      "profile-photo"
    )&&
    readinessImageSettled(
      "profile-flag-image"
    )
  );
};

const tryBeginHeadBodyReady=()=>{
  if(
    ready||
    !headBodyReady()
  ){
    return;
  }

  if(bannerReadinessObserver){
    bannerReadinessObserver.disconnect();
    bannerReadinessObserver=null;
  }

  beginReady({
    loadDurationMs:
      Date.now()-navigationStartedAt
  });
};

const monitorHeadBodyReady=()=>{
  const banner=
    document.getElementById(
      "game-banner"
    );

  const profilePhoto=
    document.getElementById(
      "profile-photo"
    );

  const profileFlag=
    document.getElementById(
      "profile-flag-image"
    );

  if(
    !banner||
    !profilePhoto||
    !profileFlag
  ){
    return;
  }

  for(
    const image of [
      profilePhoto,
      profileFlag
    ]
  ){
    image.addEventListener(
      "load",
      tryBeginHeadBodyReady,
      {once:true}
    );

    image.addEventListener(
      "error",
      tryBeginHeadBodyReady,
      {once:true}
    );
  }

  bannerReadinessObserver=
    new MutationObserver(
      tryBeginHeadBodyReady
    );

  bannerReadinessObserver.observe(
    banner,
    {
      attributes:true,
      attributeFilter:["class"]
    }
  );

  tryBeginHeadBodyReady();
};

if(document.readyState==="loading"){
  document.addEventListener(
    "DOMContentLoaded",
    monitorHeadBodyReady,
    {once:true}
  );
}else{
  queueMicrotask(
    monitorHeadBodyReady
  );
}

document.addEventListener(
  "visibilitychange",
  ()=>{
    if(!ready)return;

    const now=Date.now();

    if(
      document.visibilityState==="hidden"
    ){
      if(visibleSince!==null){
        activeElapsedMs+=Math.max(
          0,
          now-visibleSince
        );

        visibleSince=null;
      }
    }else if(visibleSince===null){
      visibleSince=now;
    }
  }
);

const openPopup=(source,metadata={})=>{
  popupSource=source;
  popupOpenedAt=Date.now();
  send("popup_open",{source,...metadata});
};

const closeStory=(method)=>{
  if(!storyOpenedAt)return;
  send("story_click",{
    action:"close_story",
    method,
    component:"story",
    dwell_ms:dwell(storyOpenedAt)
  });
  storyOpenedAt=null;
};

const closeGallery=(method,metadata={})=>{
  if(!galleryOpenedAt)return;
  send("gallery_click",{
    action:"close_lightbox",
    method,
    component:"gallery",
    dwell_ms:dwell(galleryOpenedAt),
    ...metadata
  });
  galleryOpenedAt=null;
};

const closePopup=(method)=>{
  if(!popupOpenedAt)return;
  send("interaction_click",{
    action:"close_popup",
    method,
    component:"popup",
    popup_source:popupSource||"other",
    dwell_ms:dwell(popupOpenedAt)
  });
  popupOpenedAt=null;
  popupSource=null;
};

addEventListener("DOMContentLoaded",()=>{

  [
    ["story-viewer",()=>closeStory("automatic_or_external")],
    ["lightbox",()=>closeGallery("automatic_or_external")],
    ["join-popup",()=>closePopup("automatic_or_external")]
  ].forEach(([id,onClose])=>{
    const element=document.getElementById(id);
    if(!element)return;

    let visible=!element.classList.contains("hidden");

    new MutationObserver(()=>{
      const next=!element.classList.contains("hidden");
      if(visible&&!next)onClose();
      visible=next;
    }).observe(element,{
      attributes:true,
      attributeFilter:["class"]
    });
  });
},{once:true});

document.addEventListener("pointerdown",event=>{
  const target=event.target;
  if(target instanceof Element){
    recordConversion(target);
  }
},{capture:true});

document.addEventListener("click",event=>{
  if(event.isTrusted){
    qualifyVisitorAction("click");
  }

  const target=event.target;
  if(!(target instanceof Element))return;

  if(target.closest(".profile-main")){
    send("header_click",{element:"profile_main"});
    openPopup("header",{element:"profile_main"});
    return;
  }

  if(target.closest(".profile-tabs .popup-trigger")){
    send("header_click",{element:"profile_tab"});
    openPopup("header",{element:"profile_tab"});
    return;
  }

  if(target.closest("#story-open")){
    storyOpenedAt=Date.now();
    send("story_click",{
      action:"open_story",
      component:"story"
    });
    return;
  }

  if(target.closest("#story-close")){
    closeStory("button");
    return;
  }

  if(target.closest("#story-join")){
    const storyDwell=dwell(storyOpenedAt);
    send("story_click",{
      action:"join",
      component:"story",
      dwell_ms:storyDwell
    });
    storyOpenedAt=null;
    openPopup("story",{story_dwell_ms:storyDwell});
    return;
  }

  if(target.closest("#game-banner")){
    send("main_gif_click",{component:"main_gif"});
    openPopup("main_gif");
    return;
  }

  if(target.closest("#action-one")){
    send("body_cta_1_click",{component:"body_cta_1"});
    openPopup("body_cta_1");
    return;
  }

  if(target.closest("#action-two")){
    send("body_cta_2_click",{component:"body_cta_2"});
    openPopup("body_cta_2");
    return;
  }

  const galleryCard=target.closest(".gallery-card");
  if(galleryCard){
    const index=Number(galleryCard.dataset.index)+1;
    const locked=galleryCard.dataset.locked==="true";

    if(!locked)galleryOpenedAt=Date.now();

    send("gallery_click",{
      action:locked?"open_locked":"open_media",
      component:"gallery",
      index,
      locked
    });

    if(locked)openPopup("gallery",{index,locked:true});
    return;
  }

  if(target.closest("#gallery-prev")){
    send("gallery_click",{
      action:"navigate_previous",
      component:"gallery",
      dwell_ms:dwell(galleryOpenedAt)
    });
    return;
  }

  if(target.closest("#gallery-next")){
    send("gallery_click",{
      action:"navigate_next",
      component:"gallery",
      dwell_ms:dwell(galleryOpenedAt)
    });
    return;
  }

  if(target.closest("#lightbox-watch")){
    const galleryDwell=dwell(galleryOpenedAt);

    send("gallery_click",{
      action:"watch_all",
      component:"gallery",
      dwell_ms:galleryDwell
    });

    galleryOpenedAt=null;
    openPopup("gallery",{gallery_dwell_ms:galleryDwell});
    return;
  }

  if(
    target.closest('[data-close="lightbox"]') ||
    target.id==="lightbox"
  ){
    closeGallery("button_or_backdrop");
    return;
  }

  if(target.closest("a.redirect-link")){
    recordConversion(target);
    return;
  }

  if(
    target.closest('[data-close="join"]') ||
    target.id==="join-popup"
  ){
    closePopup("button_or_backdrop");
    return;
  }

  if(target.closest("#dmca-open")){
    send("interaction_click",{
      action:"open_DMCA",
      component:"DMCA",
      id:"dmca-open",
      text:"DMCA"
    });
    return;
  }

  if(target.closest('[data-close="dmca"]')){
    send("interaction_click",{
      action:"close_DMCA_popup",
      component:"DMCA",
      id:"dmca-close",
      text:"Close"
    });
    return;
  }

  const popupTrigger=target.closest(".popup-trigger");
  if(popupTrigger){
    const id=popupTrigger.id||"";
    const text=String(popupTrigger.textContent||"")
      .trim().slice(0,100);

    send("interaction_click",{
      action:"other_popup_trigger",
      component:"other",
      id,
      text
    });

    openPopup("other",{id,text});
    return;
  }

  const clickable=target.closest("button,a,[role=button]");
  if(clickable){
    send("interaction_click",{
      action:"click",
      component:"other",
      id:clickable.id||"",
      text:String(clickable.textContent||"").trim().slice(0,100)
    });
  }
},true);

addEventListener(
  "scroll",
  event=>{
    if(
      visitorActionSent||
      !event.isTrusted
    ){
      return;
    }

    const currentScrollY=Math.max(
      0,
      Number(
        window.scrollY||
        window.pageYOffset||
        0
      )
    );

    const distance=Math.abs(
      currentScrollY-initialScrollY
    );

    const threshold=Math.max(
      1,
      Math.min(
        100,
        Math.round(
          Math.max(
            1,
            window.innerHeight||1
          )*0.1
        )
      )
    );

    if(distance<threshold)return;

    qualifyVisitorAction(
      "scroll",
      {
        scroll_distance_px:
          Math.round(distance),
        scroll_threshold_px:
          threshold
      }
    );
  },
  {
    passive:true,
    capture:true
  }
);

addEventListener("keydown",event=>{
  if(event.key!=="Escape")return;
  closeStory("escape");
  closeGallery("escape");
  closePopup("escape");
},true);

addEventListener("pagehide",()=>{
  if(!ready){
    if(!pendingEvents.length){
      return;
    }

    const exitAt=Date.now();

    ready=true;
    readyAt=exitAt;
    last=exitAt;
    visibleSince=null;

    for(
      const pending
      of pendingEvents.splice(0)
    ){
      send(pending.event,{
        ...pending.metadata,
        occurred_before_ready:true,
        before_ready_ms:
          Math.max(
            0,
            exitAt-pending.occurredAt
          )
      });
    }

    send("session_end",{
      duration_ms:0,
      active_elapsed_ms:0
    });

    return;
  }

  if(checkpointTimer){
    clearInterval(checkpointTimer);
  }

  const activeDuration=
    Math.max(
      0,
      Math.round(
        activeElapsedNow()
      )
    );

  send("session_end",{
    duration_ms:activeDuration,
    active_elapsed_ms:activeDuration,
    active_story_dwell_ms:
      dwell(storyOpenedAt),
    active_gallery_dwell_ms:
      dwell(galleryOpenedAt),
    active_popup_dwell_ms:
      dwell(popupOpenedAt)
  });
});

})();
