const fraktur_f = {'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦', 'j': '𝔧', 'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱', 'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷', 'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍', 'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗', 'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ'}
const monospaced_f = {'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣', 'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉'}
const scrpt_f = {'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏', 'A': '𝒜', 'B': '𝐵', 'C': '𝒞', 'D': '𝒟', 'E': '𝐸', 'F': '𝐹', 'G': '𝒢', 'H': '𝐻', 'I': '𝐼', 'J': '𝒥', 'K': '𝒦', 'L': '𝐿', 'M': '𝑀', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': '𝑅', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵'}
const italic_f = {'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻', 'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡'}
const fat_f = {'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ', 'h': 'ｈ', 'i': 'ｉ', 'j': 'ｊ', 'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ', 'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ', 'u': 'ｕ', 'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ', 'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ', 'H': 'Ｈ', 'I': 'Ｉ', 'J': 'Ｊ', 'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ', 'O': 'Ｏ', 'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ', 'U': 'Ｕ', 'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ'}
const small_f = {'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ', 'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ'}
const germany_f = {'a': 'ᗩ', 'b': 'ᗷ', 'c': 'ᑕ', 'd': 'ᗪ', 'e': 'E', 'f': 'ᖴ', 'g': 'G', 'h': 'ᕼ', 'i': 'I', 'j': 'ᒍ', 'k': 'K', 'l': 'ᒪ', 'm': 'ᗰ', 'n': 'ᑎ', 'o': 'O', 'p': 'ᑭ', 'q': 'ᑫ', 'r': 'ᖇ', 's': 'ᔕ', 't': 'T', 'u': 'ᑌ', 'v': 'ᐯ', 'w': 'ᗯ', 'x': '᙭', 'y': 'Y', 'z': 'ᘔ', 'A': 'ᗩ', 'B': 'ᗷ', 'C': 'ᑕ', 'D': 'ᗪ', 'E': 'E', 'F': 'ᖴ', 'G': 'G', 'H': 'ᕼ', 'I': 'I', 'J': 'ᒍ', 'K': 'K', 'L': 'ᒪ', 'M': 'ᗰ', 'N': 'ᑎ', 'O': 'O', 'P': 'ᑭ', 'Q': 'ᑫ', 'R': 'ᖇ', 'S': 'ᔕ', 'T': 'T', 'U': 'ᑌ', 'V': 'ᐯ', 'W': 'ᗯ', 'X': '᙭', 'Y': 'Y', 'Z': 'ᘔ'}
const japanese_f = {'a': '卂', 'b': '乃', 'c': '匚', 'd': '刀', 'e': '乇', 'f': '下', 'g': '厶', 'h': '卄', 'i': '工', 'j': '丁', 'k': '长', 'l': '乚', 'm': '从', 'n': '𠘨', 'o': '口', 'p': '尸', 'q': '㔿', 'r': '尺', 's': '丂', 't': '丅', 'u': '凵', 'v': 'リ', 'w': '山', 'x': '乂', 'y': '丫', 'z': '乙', 'A': '卂', 'B': '乃', 'C': '匚', 'D': '刀', 'E': '乇', 'F': '下', 'G': '厶', 'H': '卄', 'I': '工', 'J': '丁', 'K': '长', 'L': '乚', 'M': '从', 'N': '𠘨', 'O': '口', 'P': '尸', 'Q': '㔿', 'R': '尺', 'S': '丂', 'T': '丅', 'U': '凵', 'V': 'リ', 'W': '山', 'X': '乂', 'Y': '丫', 'Z': '乙'}

function fraktur(){
  let text = document.getElementById("InputText").value;
  const ObjKeys = Object.keys(fraktur_f);
  let output = document.getElementById("OutputText");
  
  let fancy_text = "";
  for (let i = 0; i < text.length; i++){
    let CurrentChar = text[i];
    if (ObjKeys.includes(CurrentChar)){
      fancy_text += fraktur_f[CurrentChar];
    } else {
      fancy_text += CurrentChar;
    }
  };
  output.value = fancy_text;
};

function mnspace(){
  let text = document.getElementById("InputText").value;
  const ObjKeys = Object.keys(monospaced_f);
  let output = document.getElementById("OutputText");
  
  let fancy_text = "";
  for (let i = 0; i < text.length; i++){
    let CurrentChar = text[i];
    if (ObjKeys.includes(CurrentChar)){
      fancy_text += monospaced_f[CurrentChar];
    } else {
      fancy_text += CurrentChar;
    }
  };
  output.value = fancy_text;
};

function script(){
  let text = document.getElementById("InputText").value;
  const ObjKeys = Object.keys(scrpt_f);
  let output = document.getElementById("OutputText");
  
  let fancy_text = "";
  for (let i = 0; i < text.length; i++){
    let CurrentChar = text[i];
    if (ObjKeys.includes(CurrentChar)){
      fancy_text += scrpt_f[CurrentChar];
    } else {
      fancy_text += CurrentChar;
    }
  };
  output.value = fancy_text;
};

function italic(){
  let text = document.getElementById("InputText").value;
  const ObjKeys = Object.keys(italic_f);
  let output = document.getElementById("OutputText");
  
  let fancy_text = "";
  for (let i = 0; i < text.length; i++){
    let CurrentChar = text[i];
    if (ObjKeys.includes(CurrentChar)){
      fancy_text += italic_f[CurrentChar];
    } else {
      fancy_text += CurrentChar;
    }
  };
  output.value = fancy_text;
};

function fat(){
  let text = document.getElementById("InputText").value;
  const ObjKeys = Object.keys(fat_f);
  let output = document.getElementById("OutputText");
  
  let fancy_text = "";
  for (let i = 0; i < text.length; i++){
    let CurrentChar = text[i];
    if (ObjKeys.includes(CurrentChar)){
      fancy_text += fat_f[CurrentChar];
    } else {
      fancy_text += CurrentChar;
    }
  };
  output.value = fancy_text;
};

function small(){
  let text = document.getElementById("InputText").value;
  const ObjKeys = Object.keys(small_f);
  let output = document.getElementById("OutputText");
  
  let fancy_text = "";
  for (let i = 0; i < text.length; i++){
    let CurrentChar = text[i];
    if (ObjKeys.includes(CurrentChar)){
      fancy_text += small_f[CurrentChar];
    } else {
      fancy_text += CurrentChar;
    }
  };
  output.value = fancy_text;
};

function unk(){
  let text = document.getElementById("InputText").value;
  const ObjKeys = Object.keys(germany_f);
  let output = document.getElementById("OutputText");
  
  let fancy_text = "";
  for (let i = 0; i < text.length; i++){
    let CurrentChar = text[i];
    if (ObjKeys.includes(CurrentChar)){
      fancy_text += germany_f[CurrentChar];
    } else {
      fancy_text += CurrentChar;
    }
  };
  output.value = fancy_text;
};

function japanize(){
  let text = document.getElementById("InputText").value;
  const ObjKeys = Object.keys(japanese_f);
  let output = document.getElementById("OutputText");
  
  let fancy_text = "";
  for (let i = 0; i < text.length; i++){
    let CurrentChar = text[i];
    if (ObjKeys.includes(CurrentChar)){
      fancy_text += japanese_f[CurrentChar];
    } else {
      fancy_text += CurrentChar;
    }
  };
  output.value = fancy_text;
};

function Copy(){
  let text = document.getElementById("OutputText").value;
  navigator.clipboard.writeText(text)
};
