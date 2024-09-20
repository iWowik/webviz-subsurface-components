/* eslint-disable @typescript-eslint/no-loss-of-precision */
/* eslint-disable prettier/prettier */
/**
 * Canonical Truncated Snub Cube (laevo)
 * http://dmccooey.com/polyhedra/CanonicalTruncatedLsnubCube.html
 */

/* eslint-disable no-loss-of-precision */
const C0  = 0.0302251764772701090307923300606
const C1  = 0.0363071672915951331148593569212
const C2  = 0.0409778062246362225458193945047
const C3  = 0.0456429395787649414224784522932
const C4  = 0.0517249303930899655065454791538
const C5  = 0.0874428904727683864261001346480
const C6  = 0.0889753108130376311630881430690
const C7  = 0.09641163211454776963649003756654
const C8  = 0.103835000017680081843811562026
const C9  = 0.105367420357949326580799570447
const C10 = 0.2450214662773631071920643581053
const C11 = 0.252134792945065226794434215441
const C12 = 0.255788526486979252796077241708
const C13 = 0.259407893525480844065447649862
const C14 = 0.266521220193182963667817507199
const C15 = 0.3029689425643569933701316598948
const C16 = 0.3107539819206035142821858189547
const C17 = 0.313739895806156433849991991246
const C18 = 0.316683657123930328933830649928
const C19 = 0.324468696480176849845884808988
const C20 = 0.341582160313331475749836432441
const C21 = 0.342151628299672471981879473588
const C22 = 0.349638984338757152241767048476
const C23 = 0.357079364582979470793901403586
const C24 = 0.357648832569320467025944444734
const C25 = 0.391940478946977214295158968170
const C26 = 0.402215383307808349008215898526
const C27 = 0.402717409481951931035229823292
const C28 = 0.403165328501965936057855186908
const C29 = 0.413440232862797070770912117264
const C30 = 0.422352352366772596332884976776
const C31 = 0.4257635648947751879276442138453
const C32 = 0.431361914520635145594778682227
const C33 = 0.436902308455866726256044549281
const C34 = 0.4403135209838693178508037863502
const C35 = 0.471479357405498664795143730174
const C36 = 0.475460037919842252621946008390
const C37 = 0.480492220013909699306611793938
const C38 = 0.485459845508251798486260261531
const C39 = 0.489440526022595386313062539748
const C40 = 0.631997406136481720130022548434
const C41 = 0.635861486054042501323957014766
const C42 = 0.639842166568386089150759292982
const C43 = 0.641002732085134761084968597476
const C44 = 0.6420771755897582912639852396851
const C45 = 0.643938080377665686012635061440
const C46 = 0.647947477795687904773262748842
const C47 = 0.649921936021662660284721984233
const C49 = 0.685557959079109566018258809311
const C48 = 0.651928158310031492600065027059
const C50 = 0.688969171607112157613018046380
const C51 = 0.693068385870940239724468173151
const C52 = 0.697074482834413973235521502239
const C53 = 0.700485695362416564830280739309
const C54 = 0.765729043260772372082807472863
const C55 = 0.769169895674212281964023549568
const C56 = 0.7697393636605532781960665907152
const C57 = 0.772041383352407496366556208990
const C58 = 0.773210830287960287716720126734
const C59 = 0.774276392373779698479782155693
const C60 = 0.774791316052818233077479806902
const C61 = 0.779739171248962824060380843856
const C62 = 0.780308639235303820292423885003
const C63 = 0.780588732465414822763530891820
const C64 = 0.922705157019364016574154365883
const C65 = 0.923736492872741112092457196358
const C66 = 0.924408205561285513402141498082
const C67 = 0.926898070565870127203144269378
const C68 = 0.927435346016054600951910190606
const C69 = 0.927848015760027714252783557760
const C70 = 0.930337880764612328053786329055496
const C71 = 0.931009593453156729363470630779
const C72 = 0.9320409293065338248817734612548
/* eslint-enable no-loss-of-precision */

export const Points = [ 
C72, -C25,  -C2,
-C72,  C25,  -C2,
C25,  C72,  -C2,
-C25, -C72,  -C2,
 C71, -C15,  C12,
-C71,  C15,  C12,
 C15,  C71,  C12,
-C15, -C71,  C12,
 C10,  C70, -C17,
-C10, -C70, -C17,
 C70, -C10, -C17,
-C70,  C10, -C17,
  C0,  C69,  C27,
 -C0, -C69,  C27,
 C69,  -C0,  C27,
-C69,   C0,  C27,
 C28,  -C1, -C68,
-C28,   C1, -C68,
  C1,  C28, -C68,
 -C1, -C28, -C68,
 C26,   C3,  C68,
-C26,  -C3,  C68,
  C3, -C26,  C68,
 -C3,  C26,  C68,
 C18, -C11,  C68,
-C18,  C11,  C68,
 C11,  C18,  C68,
-C11, -C18,  C68,
 C16,  C13, -C68,
-C16, -C13, -C68,
 C13, -C16, -C68,
-C13,  C16, -C68,
  C4, -C67, -C27,
 -C4,  C67, -C27,
 C67,   C4, -C27,
-C67,  -C4, -C27,
 C14, -C66,  C17,
-C14,  C66,  C17,
 C66,  C14,  C17,
-C66, -C14,  C17,
 C65,  C19, -C12,
-C65, -C19, -C12,
 C19, -C65, -C12,
-C19,  C65, -C12,
 C64,  C29,   C2,
-C64, -C29,   C2,
 C29, -C64,   C2,
-C29,  C64,   C2,
 C63, -C40,  -C7,
-C63,  C40,  -C7,
 C40,  C63,  -C7,
-C40, -C63,  -C7,
 C62, -C35,  C32,
-C62,  C35,  C32,
 C35,  C62,  C32,
-C35, -C62,  C32,
 C30,  C61, -C37,
-C30, -C61, -C37,
 C61, -C30, -C37,
-C61,  C30, -C37,
 C38, -C31,  C60,
-C38,  C31,  C60,
 C31,  C38,  C60,
-C31, -C38,  C60,
 C36,  C33, -C60,
-C36, -C33, -C60,
 C33, -C36, -C60,
-C33,  C36, -C60,
  C5,  C59,  C43,
 -C5, -C59,  C43,
 C59,  -C5,  C43,
-C59,   C5,  C43,
 C44,  -C6, -C58,
-C44,   C6, -C58,
  C6,  C44, -C58,
 -C6, -C44, -C58,
 C42,   C8,  C58,
-C42,  -C8,  C58,
  C8, -C42,  C58,
 -C8,  C42,  C58,
  C9, -C57, -C43,
 -C9,  C57, -C43,
 C57,   C9, -C43,
-C57,  -C9, -C43,
 C34, -C56,  C37,
-C34,  C56,  C37,
 C56,  C34,  C37,
-C56, -C34,  C37,
 C55,  C39, -C32,
-C55, -C39, -C32,
 C39, -C55, -C32,
-C39,  C55, -C32,
 C54,  C47,   C7,
-C54, -C47,   C7,
 C47, -C54,   C7,
-C47,  C54,   C7,
 C53, -C41, -C22,
-C53,  C41, -C22,
 C41,  C53, -C22,
-C41, -C53, -C22,
 C20,  C52,  C45,
-C20, -C52,  C45,
 C52, -C20,  C45,
-C52,  C20,  C45,
 C46, -C21, -C51,
-C46,  C21, -C51,
 C21,  C46, -C51,
-C21, -C46, -C51,
 C42,  C23,  C51,
-C42, -C23,  C51,
 C23, -C42,  C51,
-C23,  C42,  C51,
 C24, -C50, -C45,
-C24,  C50, -C45,
 C50,  C24, -C45,
-C50, -C24, -C45,
 C49,  C48,  C22,
-C49, -C48,  C22,
 C48, -C49,  C22,
-C48,  C49,  C22,
];

export const Faces = [
8,  0,  10,  34,  40,  44,  38,  14,   4,
8,  1,  11,  35,  41,  45,  39,  15,   5,
8,  2,   8,  33,  43,  47,  37,  12,   6,
8,  3,   9,  32,  42,  46,  36,  13,   7,
8, 16,  30,  19,  29,  17,  31,  18,  28,
8, 20,  26,  23,  25,  21,  27,  22,  24,
6, 52, 102,  60, 110,  84, 118,
6, 53, 103,  61, 111,  85, 119,
6, 54, 100,  62, 108,  86, 116,
6, 55, 101,  63, 109,  87, 117,
6, 56,  98,  88, 114,  64, 106,
6, 57,  99,  89, 115,  65, 107,
6, 58,  96,  90, 112,  66, 104,
6, 59,  97,  91, 113,  67, 105,
6,  0,   4,  52, 118,  94,  48,
6,  1,   5,  53, 119,  95,  49,
6,  2,   6,  54, 116,  92,  50,
6,  3,   7,  55, 117,  93,  51,
6,  8,  56, 106,  74,  81,  33,
6,  9,  57, 107,  75,  80,  32,
6, 10,  58, 104,  72,  82,  34,
6, 11,  59, 105,  73,  83,  35,
6, 12,  37,  85, 111,  79,  68,
6, 13,  36,  84, 110,  78,  69,
6, 14,  38,  86, 108,  76,  70,
6, 15,  39,  87, 109,  77,  71,
6, 16,  28,  64, 114,  82,  72,
6, 17,  29,  65, 115,  83,  73,
6, 18,  31,  67, 113,  81,  74,
6, 19,  30,  66, 112,  80,  75,
6, 20,  24,  60, 102,  70,  76,
6, 21,  25,  61, 103,  71,  77,
6, 22,  27,  63, 101,  69,  78,
6, 23,  26,  62, 100,  68,  79,
6, 40,  88,  98,  50,  92,  44,
6, 41,  89,  99,  51,  93,  45,
6, 42,  90,  96,  48,  94,  46,
6, 43,  91,  97,  49,  95,  47,
5,  0,  48,  96,  58,  10,
5,  1,  49,  97,  59,  11,
5,  2,  50,  98,  56,   8,
5,  3,  51,  99,  57,   9,
5,  4,  14,  70, 102,  52,
5,  5,  15,  71, 103,  53,
5,  6,  12,  68, 100,  54,
5,  7,  13,  69, 101,  55,
5, 16,  72, 104,  66,  30,
5, 17,  73, 105,  67,  31,
5, 18,  74, 106,  64,  28,
5, 19,  75, 107,  65,  29,
5, 20,  76, 108,  62,  26,
5, 21,  77, 109,  63,  27,
5, 22,  78, 110,  60,  24,
5, 23,  79, 111,  61,  25,
5, 32,  80, 112,  90,  42,
5, 33,  81, 113,  91,  43,
5, 34,  82, 114,  88,  40,
5, 35,  83, 115,  89,  41,
5, 36,  46,  94, 118,  84,
5, 37,  47,  95, 119,  85,
5, 38,  44,  92, 116,  86,
5, 39,  45,  93, 117,  87]

export const VertexCount = 354;