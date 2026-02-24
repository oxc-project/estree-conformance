__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15,
                    "end": 21
                  },
                  "typeArguments": null,
                  "start": 15,
                  "end": 21
                },
                "start": 15,
                "end": 23
              },
              "start": 13,
              "end": 23
            },
            "start": 6,
            "end": 23
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/foo/visualstudiocode",
                "regex": {
                  "pattern": "foo",
                  "flags": "acddeiiloosstuuv"
                },
                "start": 39,
                "end": 60
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/(?med-ium:bar)/",
                "regex": {
                  "pattern": "(?med-ium:bar)",
                  "flags": ""
                },
                "start": 85,
                "end": 101
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\0/",
                "regex": {
                  "pattern": "\\0",
                  "flags": ""
                },
                "start": 125,
                "end": 129
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\1/",
                "regex": {
                  "pattern": "\\1",
                  "flags": ""
                },
                "start": 132,
                "end": 136
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\2/",
                "regex": {
                  "pattern": "\\2",
                  "flags": ""
                },
                "start": 139,
                "end": 143
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/(hi)\\1/",
                "regex": {
                  "pattern": "(hi)\\1",
                  "flags": ""
                },
                "start": 146,
                "end": 154
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/(hi) (hello) \\2/",
                "regex": {
                  "pattern": "(hi) (hello) \\2",
                  "flags": ""
                },
                "start": 157,
                "end": 174
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009/",
                "regex": {
                  "pattern": "\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009",
                  "flags": ""
                },
                "start": 177,
                "end": 234
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009/u",
                "regex": {
                  "pattern": "\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009",
                  "flags": "u"
                },
                "start": 237,
                "end": 295
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/(?<foo>)((?<bar>bar)bar)(?<baz>baz)|(foo(?<foo>foo))(?<baz>)/",
                "regex": {
                  "pattern": "(?<foo>)((?<bar>bar)bar)(?<baz>baz)|(foo(?<foo>foo))(?<baz>)",
                  "flags": ""
                },
                "start": 298,
                "end": 360
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/(\\k<bar>)\\k<absent>(?<foo>foo)|(?<bar>)((?<foo>)|(bar(?<bar>bar)))/",
                "regex": {
                  "pattern": "(\\k<bar>)\\k<absent>(?<foo>foo)|(?<bar>)((?<foo>)|(bar(?<bar>bar)))",
                  "flags": ""
                },
                "start": 363,
                "end": 431
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{}{1,2}_{3}.{4,}?(foo){008}${32,16}\\b{064,128}.+&*?\\???\\n{,256}{\\\\{,/",
                "regex": {
                  "pattern": "{}{1,2}_{3}.{4,}?(foo){008}${32,16}\\b{064,128}.+&*?\\???\\n{,256}{\\\\{,",
                  "flags": ""
                },
                "start": 450,
                "end": 520
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[-A-Za-z-z-aZ-A\\d_-\\d-.-.\\r-\\n\\w-\\W]/",
                "regex": {
                  "pattern": "[-A-Za-z-z-aZ-A\\d_-\\d-.-.\\r-\\n\\w-\\W]",
                  "flags": ""
                },
                "start": 545,
                "end": 583
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/",
                "regex": {
                  "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]",
                  "flags": ""
                },
                "start": 586,
                "end": 656
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/u",
                "regex": {
                  "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]",
                  "flags": "u"
                },
                "start": 659,
                "end": 730
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/v",
                "regex": {
                  "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]",
                  "flags": "v"
                },
                "start": 733,
                "end": 804
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/",
                "regex": {
                  "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{",
                  "flags": ""
                },
                "start": 807,
                "end": 872
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/u",
                "regex": {
                  "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{",
                  "flags": "u"
                },
                "start": 875,
                "end": 941
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/v",
                "regex": {
                  "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{",
                  "flags": "v"
                },
                "start": 944,
                "end": 1010
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/",
                "regex": {
                  "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]",
                  "flags": ""
                },
                "start": 1013,
                "end": 1070
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/u",
                "regex": {
                  "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]",
                  "flags": "u"
                },
                "start": 1073,
                "end": 1131
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/v",
                "regex": {
                  "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]",
                  "flags": "v"
                },
                "start": 1134,
                "end": 1192
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C/",
                "regex": {
                  "pattern": "\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C",
                  "flags": ""
                },
                "start": 1217,
                "end": 1241
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C/u",
                "regex": {
                  "pattern": "\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C",
                  "flags": "u"
                },
                "start": 1244,
                "end": 1269
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/",
                "regex": {
                  "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{",
                  "flags": ""
                },
                "start": 1272,
                "end": 1317
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/u",
                "regex": {
                  "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{",
                  "flags": "u"
                },
                "start": 1320,
                "end": 1366
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/v",
                "regex": {
                  "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{",
                  "flags": "v"
                },
                "start": 1369,
                "end": 1415
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/",
                "regex": {
                  "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]",
                  "flags": ""
                },
                "start": 1444,
                "end": 1529
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/u",
                "regex": {
                  "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]",
                  "flags": "u"
                },
                "start": 1532,
                "end": 1618
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/v",
                "regex": {
                  "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]",
                  "flags": "v"
                },
                "start": 1621,
                "end": 1707
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[[^\\P{Decimal_Number}&&[0-9]]&&\\p{L}&&\\p{ID_Continue}--\\p{ASCII}\\p{CWCF}]/v",
                "regex": {
                  "pattern": "[[^\\P{Decimal_Number}&&[0-9]]&&\\p{L}&&\\p{ID_Continue}--\\p{ASCII}\\p{CWCF}]",
                  "flags": "v"
                },
                "start": 1710,
                "end": 1786
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[^\\p{Emoji}\\p{RGI_Emoji}][^\\p{Emoji}--\\p{RGI_Emoji}][^\\p{Emoji}&&\\p{RGI_Emoji}]/v",
                "regex": {
                  "pattern": "[^\\p{Emoji}\\p{RGI_Emoji}][^\\p{Emoji}--\\p{RGI_Emoji}][^\\p{Emoji}&&\\p{RGI_Emoji}]",
                  "flags": "v"
                },
                "start": 1789,
                "end": 1871
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[^\\p{RGI_Emoji}\\p{Emoji}][^\\p{RGI_Emoji}--\\p{Emoji}][^\\p{RGI_Emoji}&&\\p{Emoji}]/v",
                "regex": {
                  "pattern": "[^\\p{RGI_Emoji}\\p{Emoji}][^\\p{RGI_Emoji}--\\p{Emoji}][^\\p{RGI_Emoji}&&\\p{Emoji}]",
                  "flags": "v"
                },
                "start": 1874,
                "end": 1956
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[^\\p{RGI_Emoji}\\q{foo}][^\\p{RGI_Emoji}--\\q{foo}][^\\p{RGI_Emoji}&&\\q{foo}]/v",
                "regex": {
                  "pattern": "[^\\p{RGI_Emoji}\\q{foo}][^\\p{RGI_Emoji}--\\q{foo}][^\\p{RGI_Emoji}&&\\q{foo}]",
                  "flags": "v"
                },
                "start": 1959,
                "end": 2035
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[^\\p{Emoji}[[\\p{RGI_Emoji}]]][^\\p{Emoji}--[[\\p{RGI_Emoji}]]][^\\p{Emoji}&&[[\\p{RGI_Emoji}]]]/v",
                "regex": {
                  "pattern": "[^\\p{Emoji}[[\\p{RGI_Emoji}]]][^\\p{Emoji}--[[\\p{RGI_Emoji}]]][^\\p{Emoji}&&[[\\p{RGI_Emoji}]]]",
                  "flags": "v"
                },
                "start": 2038,
                "end": 2132
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[^[[\\p{RGI_Emoji}]]\\p{Emoji}][^[[\\p{RGI_Emoji}]]--\\p{Emoji}][^[[\\p{RGI_Emoji}]]&&\\p{Emoji}]/v",
                "regex": {
                  "pattern": "[^[[\\p{RGI_Emoji}]]\\p{Emoji}][^[[\\p{RGI_Emoji}]]--\\p{Emoji}][^[[\\p{RGI_Emoji}]]&&\\p{Emoji}]",
                  "flags": "v"
                },
                "start": 2135,
                "end": 2229
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[^[[\\p{RGI_Emoji}]]\\q{foo}][^[[\\p{RGI_Emoji}]]--\\q{foo}][^[[\\p{RGI_Emoji}]]&&\\q{foo}]/v",
                "regex": {
                  "pattern": "[^[[\\p{RGI_Emoji}]]\\q{foo}][^[[\\p{RGI_Emoji}]]--\\q{foo}][^[[\\p{RGI_Emoji}]]&&\\q{foo}]",
                  "flags": "v"
                },
                "start": 2232,
                "end": 2320
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[^\\q{foo|bar|baz}--\\q{foo}--\\q{bar}--\\q{baz}][^\\p{L}--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]/v",
                "regex": {
                  "pattern": "[^\\q{foo|bar|baz}--\\q{foo}--\\q{bar}--\\q{baz}][^\\p{L}--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]",
                  "flags": "v"
                },
                "start": 2323,
                "end": 2413
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[^[[\\q{foo|bar|baz}]]--\\q{foo}--\\q{bar}--\\q{baz}][^[^[^\\p{L}]]--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]/v",
                "regex": {
                  "pattern": "[^[[\\q{foo|bar|baz}]]--\\q{foo}--\\q{bar}--\\q{baz}][^[^[^\\p{L}]]--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]",
                  "flags": "v"
                },
                "start": 2416,
                "end": 2516
              }
            ],
            "start": 26,
            "end": 2519
          },
          "definite": false,
          "start": 6,
          "end": 2519
        }
      ],
      "declare": false,
      "start": 0,
      "end": 2520
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2520
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "regexes",
    "start": 6,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 26,
    "end": 27
  },
  {
    "type": "RegularExpression",
    "value": "/foo/visualstudiocode",
    "regex": {
      "flags": "visualstudiocode",
      "pattern": "foo"
    },
    "start": 39,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "RegularExpression",
    "value": "/(?med-ium:bar)/",
    "regex": {
      "flags": "",
      "pattern": "(?med-ium:bar)"
    },
    "start": 85,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102
  },
  {
    "type": "RegularExpression",
    "value": "/\\0/",
    "regex": {
      "flags": "",
      "pattern": "\\0"
    },
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 129,
    "end": 130
  },
  {
    "type": "RegularExpression",
    "value": "/\\1/",
    "regex": {
      "flags": "",
      "pattern": "\\1"
    },
    "start": 132,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137
  },
  {
    "type": "RegularExpression",
    "value": "/\\2/",
    "regex": {
      "flags": "",
      "pattern": "\\2"
    },
    "start": 139,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 143,
    "end": 144
  },
  {
    "type": "RegularExpression",
    "value": "/(hi)\\1/",
    "regex": {
      "flags": "",
      "pattern": "(hi)\\1"
    },
    "start": 146,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155
  },
  {
    "type": "RegularExpression",
    "value": "/(hi) (hello) \\2/",
    "regex": {
      "flags": "",
      "pattern": "(hi) (hello) \\2"
    },
    "start": 157,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175
  },
  {
    "type": "RegularExpression",
    "value": "/\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009/",
    "regex": {
      "flags": "",
      "pattern": "\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009"
    },
    "start": 177,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235
  },
  {
    "type": "RegularExpression",
    "value": "/\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009/u",
    "regex": {
      "flags": "u",
      "pattern": "\\2()(\\12)(foo)\\1\\0[\\0\\1\\01\\123\\08\\8](\\3\\03)\\5\\005\\9\\009"
    },
    "start": 237,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 295,
    "end": 296
  },
  {
    "type": "RegularExpression",
    "value": "/(?<foo>)((?<bar>bar)bar)(?<baz>baz)|(foo(?<foo>foo))(?<baz>)/",
    "regex": {
      "flags": "",
      "pattern": "(?<foo>)((?<bar>bar)bar)(?<baz>baz)|(foo(?<foo>foo))(?<baz>)"
    },
    "start": 298,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 360,
    "end": 361
  },
  {
    "type": "RegularExpression",
    "value": "/(\\k<bar>)\\k<absent>(?<foo>foo)|(?<bar>)((?<foo>)|(bar(?<bar>bar)))/",
    "regex": {
      "flags": "",
      "pattern": "(\\k<bar>)\\k<absent>(?<foo>foo)|(?<bar>)((?<foo>)|(bar(?<bar>bar)))"
    },
    "start": 363,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 431,
    "end": 432
  },
  {
    "type": "RegularExpression",
    "value": "/{}{1,2}_{3}.{4,}?(foo){008}${32,16}\\b{064,128}.+&*?\\???\\n{,256}{\\\\{,/",
    "regex": {
      "flags": "",
      "pattern": "{}{1,2}_{3}.{4,}?(foo){008}${32,16}\\b{064,128}.+&*?\\???\\n{,256}{\\\\{,"
    },
    "start": 450,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 520,
    "end": 521
  },
  {
    "type": "RegularExpression",
    "value": "/[-A-Za-z-z-aZ-A\\d_-\\d-.-.\\r-\\n\\w-\\W]/",
    "regex": {
      "flags": "",
      "pattern": "[-A-Za-z-z-aZ-A\\d_-\\d-.-.\\r-\\n\\w-\\W]"
    },
    "start": 545,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 583,
    "end": 584
  },
  {
    "type": "RegularExpression",
    "value": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/",
    "regex": {
      "flags": "",
      "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]"
    },
    "start": 586,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 656,
    "end": 657
  },
  {
    "type": "RegularExpression",
    "value": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/u",
    "regex": {
      "flags": "u",
      "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]"
    },
    "start": 659,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 730,
    "end": 731
  },
  {
    "type": "RegularExpression",
    "value": "/\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]/v",
    "regex": {
      "flags": "v",
      "pattern": "\\p{L}\\p{gc=L}\\p{ASCII}\\p{Invalid}[\\p{L}\\p{gc=L}\\P{ASCII}\\p{Invalid}]"
    },
    "start": 733,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 804,
    "end": 805
  },
  {
    "type": "RegularExpression",
    "value": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/",
    "regex": {
      "flags": "",
      "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{"
    },
    "start": 807,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 872,
    "end": 873
  },
  {
    "type": "RegularExpression",
    "value": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/u",
    "regex": {
      "flags": "u",
      "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{"
    },
    "start": 875,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 941,
    "end": 942
  },
  {
    "type": "RegularExpression",
    "value": "/\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{/v",
    "regex": {
      "flags": "v",
      "pattern": "\\p{InvalidProperty=Value}\\p{=}\\p{sc=}\\P{=foo}[\\p{}\\p\\\\\\P\\P{]\\p{"
    },
    "start": 944,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "RegularExpression",
    "value": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/",
    "regex": {
      "flags": "",
      "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]"
    },
    "start": 1013,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "RegularExpression",
    "value": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/u",
    "regex": {
      "flags": "u",
      "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]"
    },
    "start": 1073,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "RegularExpression",
    "value": "/\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]/v",
    "regex": {
      "flags": "v",
      "pattern": "\\p{RGI_Emoji}\\P{RGI_Emoji}[^\\p{RGI_Emoji}\\P{RGI_Emoji}]"
    },
    "start": 1134,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "RegularExpression",
    "value": "/\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C/",
    "regex": {
      "flags": "",
      "pattern": "\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C"
    },
    "start": 1217,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "RegularExpression",
    "value": "/\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C/u",
    "regex": {
      "flags": "u",
      "pattern": "\\c[\\c0\\ca\\cQ\\c\\C]\\c1\\C"
    },
    "start": 1244,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "RegularExpression",
    "value": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/",
    "regex": {
      "flags": "",
      "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{"
    },
    "start": 1272,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "RegularExpression",
    "value": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/u",
    "regex": {
      "flags": "u",
      "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{"
    },
    "start": 1320,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "RegularExpression",
    "value": "/\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{/v",
    "regex": {
      "flags": "v",
      "pattern": "\\q\\\\\\`[\\q\\\\\\`[\\Q\\\\\\Q{\\q{foo|bar|baz]\\q{]\\q{"
    },
    "start": 1369,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "RegularExpression",
    "value": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/",
    "regex": {
      "flags": "",
      "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]"
    },
    "start": 1444,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "RegularExpression",
    "value": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/u",
    "regex": {
      "flags": "u",
      "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]"
    },
    "start": 1532,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "RegularExpression",
    "value": "/[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]/v",
    "regex": {
      "flags": "v",
      "pattern": "[a--b[--][\\d++[]]&&[[&0-9--]&&[\\p{L}]--\\P{L}-_-]]&&&\\q{foo}[0---9][&&q&&&\\q{bar}&&]"
    },
    "start": 1621,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "RegularExpression",
    "value": "/[[^\\P{Decimal_Number}&&[0-9]]&&\\p{L}&&\\p{ID_Continue}--\\p{ASCII}\\p{CWCF}]/v",
    "regex": {
      "flags": "v",
      "pattern": "[[^\\P{Decimal_Number}&&[0-9]]&&\\p{L}&&\\p{ID_Continue}--\\p{ASCII}\\p{CWCF}]"
    },
    "start": 1710,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "RegularExpression",
    "value": "/[^\\p{Emoji}\\p{RGI_Emoji}][^\\p{Emoji}--\\p{RGI_Emoji}][^\\p{Emoji}&&\\p{RGI_Emoji}]/v",
    "regex": {
      "flags": "v",
      "pattern": "[^\\p{Emoji}\\p{RGI_Emoji}][^\\p{Emoji}--\\p{RGI_Emoji}][^\\p{Emoji}&&\\p{RGI_Emoji}]"
    },
    "start": 1789,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "RegularExpression",
    "value": "/[^\\p{RGI_Emoji}\\p{Emoji}][^\\p{RGI_Emoji}--\\p{Emoji}][^\\p{RGI_Emoji}&&\\p{Emoji}]/v",
    "regex": {
      "flags": "v",
      "pattern": "[^\\p{RGI_Emoji}\\p{Emoji}][^\\p{RGI_Emoji}--\\p{Emoji}][^\\p{RGI_Emoji}&&\\p{Emoji}]"
    },
    "start": 1874,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "RegularExpression",
    "value": "/[^\\p{RGI_Emoji}\\q{foo}][^\\p{RGI_Emoji}--\\q{foo}][^\\p{RGI_Emoji}&&\\q{foo}]/v",
    "regex": {
      "flags": "v",
      "pattern": "[^\\p{RGI_Emoji}\\q{foo}][^\\p{RGI_Emoji}--\\q{foo}][^\\p{RGI_Emoji}&&\\q{foo}]"
    },
    "start": 1959,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "RegularExpression",
    "value": "/[^\\p{Emoji}[[\\p{RGI_Emoji}]]][^\\p{Emoji}--[[\\p{RGI_Emoji}]]][^\\p{Emoji}&&[[\\p{RGI_Emoji}]]]/v",
    "regex": {
      "flags": "v",
      "pattern": "[^\\p{Emoji}[[\\p{RGI_Emoji}]]][^\\p{Emoji}--[[\\p{RGI_Emoji}]]][^\\p{Emoji}&&[[\\p{RGI_Emoji}]]]"
    },
    "start": 2038,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "RegularExpression",
    "value": "/[^[[\\p{RGI_Emoji}]]\\p{Emoji}][^[[\\p{RGI_Emoji}]]--\\p{Emoji}][^[[\\p{RGI_Emoji}]]&&\\p{Emoji}]/v",
    "regex": {
      "flags": "v",
      "pattern": "[^[[\\p{RGI_Emoji}]]\\p{Emoji}][^[[\\p{RGI_Emoji}]]--\\p{Emoji}][^[[\\p{RGI_Emoji}]]&&\\p{Emoji}]"
    },
    "start": 2135,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "RegularExpression",
    "value": "/[^[[\\p{RGI_Emoji}]]\\q{foo}][^[[\\p{RGI_Emoji}]]--\\q{foo}][^[[\\p{RGI_Emoji}]]&&\\q{foo}]/v",
    "regex": {
      "flags": "v",
      "pattern": "[^[[\\p{RGI_Emoji}]]\\q{foo}][^[[\\p{RGI_Emoji}]]--\\q{foo}][^[[\\p{RGI_Emoji}]]&&\\q{foo}]"
    },
    "start": 2232,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "RegularExpression",
    "value": "/[^\\q{foo|bar|baz}--\\q{foo}--\\q{bar}--\\q{baz}][^\\p{L}--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]/v",
    "regex": {
      "flags": "v",
      "pattern": "[^\\q{foo|bar|baz}--\\q{foo}--\\q{bar}--\\q{baz}][^\\p{L}--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]"
    },
    "start": 2323,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "RegularExpression",
    "value": "/[^[[\\q{foo|bar|baz}]]--\\q{foo}--\\q{bar}--\\q{baz}][^[^[^\\p{L}]]--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]/v",
    "regex": {
      "flags": "v",
      "pattern": "[^[[\\q{foo|bar|baz}]]--\\q{foo}--\\q{bar}--\\q{baz}][^[^[^\\p{L}]]--\\q{foo}--[\\q{bar}]--[^[\\q{baz}]]]"
    },
    "start": 2416,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2519,
    "end": 2520
  }
]
```
