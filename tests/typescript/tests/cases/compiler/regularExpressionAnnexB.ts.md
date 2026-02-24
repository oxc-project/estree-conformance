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
                "raw": "/\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s/",
                "regex": {
                  "pattern": "\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s",
                  "flags": ""
                },
                "start": 30,
                "end": 62
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]/",
                "regex": {
                  "pattern": "[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]",
                  "flags": ""
                },
                "start": 66,
                "end": 100
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\P[\\P\\w-_]/",
                "regex": {
                  "pattern": "\\P[\\P\\w-_]",
                  "flags": ""
                },
                "start": 104,
                "end": 116
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s/u",
                "regex": {
                  "pattern": "\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s",
                  "flags": "u"
                },
                "start": 137,
                "end": 170
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]/u",
                "regex": {
                  "pattern": "[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]",
                  "flags": "u"
                },
                "start": 174,
                "end": 209
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\P[\\P\\w-_]/u",
                "regex": {
                  "pattern": "\\P[\\P\\w-_]",
                  "flags": "u"
                },
                "start": 213,
                "end": 226
              }
            ],
            "start": 26,
            "end": 229
          },
          "definite": false,
          "start": 6,
          "end": 229
        }
      ],
      "declare": false,
      "start": 0,
      "end": 230
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regexesWithBraces",
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
                    "start": 257,
                    "end": 263
                  },
                  "typeArguments": null,
                  "start": 257,
                  "end": 263
                },
                "start": 257,
                "end": 265
              },
              "start": 255,
              "end": 265
            },
            "start": 238,
            "end": 265
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/{??/",
                "regex": {
                  "pattern": "{??",
                  "flags": ""
                },
                "start": 272,
                "end": 277
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,??/",
                "regex": {
                  "pattern": "{,??",
                  "flags": ""
                },
                "start": 281,
                "end": 287
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,1??/",
                "regex": {
                  "pattern": "{,1??",
                  "flags": ""
                },
                "start": 291,
                "end": 298
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1??/",
                "regex": {
                  "pattern": "{1??",
                  "flags": ""
                },
                "start": 302,
                "end": 308
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,??/",
                "regex": {
                  "pattern": "{1,??",
                  "flags": ""
                },
                "start": 312,
                "end": 319
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,2??/",
                "regex": {
                  "pattern": "{1,2??",
                  "flags": ""
                },
                "start": 323,
                "end": 331
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{2,1??/",
                "regex": {
                  "pattern": "{2,1??",
                  "flags": ""
                },
                "start": 335,
                "end": 343
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{}??/",
                "regex": {
                  "pattern": "{}??",
                  "flags": ""
                },
                "start": 347,
                "end": 353
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,}??/",
                "regex": {
                  "pattern": "{,}??",
                  "flags": ""
                },
                "start": 357,
                "end": 364
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,1}??/",
                "regex": {
                  "pattern": "{,1}??",
                  "flags": ""
                },
                "start": 368,
                "end": 376
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1}??/",
                "regex": {
                  "pattern": "{1}??",
                  "flags": ""
                },
                "start": 380,
                "end": 387
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,}??/",
                "regex": {
                  "pattern": "{1,}??",
                  "flags": ""
                },
                "start": 391,
                "end": 399
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,2}??/",
                "regex": {
                  "pattern": "{1,2}??",
                  "flags": ""
                },
                "start": 403,
                "end": 412
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{2,1}??/",
                "regex": {
                  "pattern": "{2,1}??",
                  "flags": ""
                },
                "start": 416,
                "end": 425
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{??/u",
                "regex": {
                  "pattern": "{??",
                  "flags": "u"
                },
                "start": 446,
                "end": 452
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,??/u",
                "regex": {
                  "pattern": "{,??",
                  "flags": "u"
                },
                "start": 456,
                "end": 463
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,1??/u",
                "regex": {
                  "pattern": "{,1??",
                  "flags": "u"
                },
                "start": 467,
                "end": 475
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1??/u",
                "regex": {
                  "pattern": "{1??",
                  "flags": "u"
                },
                "start": 479,
                "end": 486
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,??/u",
                "regex": {
                  "pattern": "{1,??",
                  "flags": "u"
                },
                "start": 490,
                "end": 498
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,2??/u",
                "regex": {
                  "pattern": "{1,2??",
                  "flags": "u"
                },
                "start": 502,
                "end": 511
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{2,1??/u",
                "regex": {
                  "pattern": "{2,1??",
                  "flags": "u"
                },
                "start": 515,
                "end": 524
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{}??/u",
                "regex": {
                  "pattern": "{}??",
                  "flags": "u"
                },
                "start": 528,
                "end": 535
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,}??/u",
                "regex": {
                  "pattern": "{,}??",
                  "flags": "u"
                },
                "start": 539,
                "end": 547
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{,1}??/u",
                "regex": {
                  "pattern": "{,1}??",
                  "flags": "u"
                },
                "start": 551,
                "end": 560
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1}??/u",
                "regex": {
                  "pattern": "{1}??",
                  "flags": "u"
                },
                "start": 564,
                "end": 572
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,}??/u",
                "regex": {
                  "pattern": "{1,}??",
                  "flags": "u"
                },
                "start": 576,
                "end": 585
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{1,2}??/u",
                "regex": {
                  "pattern": "{1,2}??",
                  "flags": "u"
                },
                "start": 589,
                "end": 599
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/{2,1}??/u",
                "regex": {
                  "pattern": "{2,1}??",
                  "flags": "u"
                },
                "start": 603,
                "end": 613
              }
            ],
            "start": 268,
            "end": 616
          },
          "definite": false,
          "start": 238,
          "end": 616
        }
      ],
      "declare": false,
      "start": 232,
      "end": 617
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 617
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
    "value": "/\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s/",
    "regex": {
      "flags": "",
      "pattern": "\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s"
    },
    "start": 30,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 62,
    "end": 63
  },
  {
    "type": "RegularExpression",
    "value": "/[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]/",
    "regex": {
      "flags": "",
      "pattern": "[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]"
    },
    "start": 66,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "RegularExpression",
    "value": "/\\P[\\P\\w-_]/",
    "regex": {
      "flags": "",
      "pattern": "\\P[\\P\\w-_]"
    },
    "start": 104,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 116,
    "end": 117
  },
  {
    "type": "RegularExpression",
    "value": "/\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s/u",
    "regex": {
      "flags": "u",
      "pattern": "\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s"
    },
    "start": 137,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 170,
    "end": 171
  },
  {
    "type": "RegularExpression",
    "value": "/[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]/u",
    "regex": {
      "flags": "u",
      "pattern": "[\\q\\u\\i\\c\\k\\_\\f\\o\\x\\-\\j\\u\\m\\p\\s]"
    },
    "start": 174,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 209,
    "end": 210
  },
  {
    "type": "RegularExpression",
    "value": "/\\P[\\P\\w-_]/u",
    "regex": {
      "flags": "u",
      "pattern": "\\P[\\P\\w-_]"
    },
    "start": 213,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 232,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "regexesWithBraces",
    "start": 238,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 268,
    "end": 269
  },
  {
    "type": "RegularExpression",
    "value": "/{??/",
    "regex": {
      "flags": "",
      "pattern": "{??"
    },
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 277,
    "end": 278
  },
  {
    "type": "RegularExpression",
    "value": "/{,??/",
    "regex": {
      "flags": "",
      "pattern": "{,??"
    },
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "RegularExpression",
    "value": "/{,1??/",
    "regex": {
      "flags": "",
      "pattern": "{,1??"
    },
    "start": 291,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 298,
    "end": 299
  },
  {
    "type": "RegularExpression",
    "value": "/{1??/",
    "regex": {
      "flags": "",
      "pattern": "{1??"
    },
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 308,
    "end": 309
  },
  {
    "type": "RegularExpression",
    "value": "/{1,??/",
    "regex": {
      "flags": "",
      "pattern": "{1,??"
    },
    "start": 312,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "RegularExpression",
    "value": "/{1,2??/",
    "regex": {
      "flags": "",
      "pattern": "{1,2??"
    },
    "start": 323,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332
  },
  {
    "type": "RegularExpression",
    "value": "/{2,1??/",
    "regex": {
      "flags": "",
      "pattern": "{2,1??"
    },
    "start": 335,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 343,
    "end": 344
  },
  {
    "type": "RegularExpression",
    "value": "/{}??/",
    "regex": {
      "flags": "",
      "pattern": "{}??"
    },
    "start": 347,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 353,
    "end": 354
  },
  {
    "type": "RegularExpression",
    "value": "/{,}??/",
    "regex": {
      "flags": "",
      "pattern": "{,}??"
    },
    "start": 357,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 364,
    "end": 365
  },
  {
    "type": "RegularExpression",
    "value": "/{,1}??/",
    "regex": {
      "flags": "",
      "pattern": "{,1}??"
    },
    "start": 368,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 376,
    "end": 377
  },
  {
    "type": "RegularExpression",
    "value": "/{1}??/",
    "regex": {
      "flags": "",
      "pattern": "{1}??"
    },
    "start": 380,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 387,
    "end": 388
  },
  {
    "type": "RegularExpression",
    "value": "/{1,}??/",
    "regex": {
      "flags": "",
      "pattern": "{1,}??"
    },
    "start": 391,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 399,
    "end": 400
  },
  {
    "type": "RegularExpression",
    "value": "/{1,2}??/",
    "regex": {
      "flags": "",
      "pattern": "{1,2}??"
    },
    "start": 403,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 412,
    "end": 413
  },
  {
    "type": "RegularExpression",
    "value": "/{2,1}??/",
    "regex": {
      "flags": "",
      "pattern": "{2,1}??"
    },
    "start": 416,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426
  },
  {
    "type": "RegularExpression",
    "value": "/{??/u",
    "regex": {
      "flags": "u",
      "pattern": "{??"
    },
    "start": 446,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 452,
    "end": 453
  },
  {
    "type": "RegularExpression",
    "value": "/{,??/u",
    "regex": {
      "flags": "u",
      "pattern": "{,??"
    },
    "start": 456,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464
  },
  {
    "type": "RegularExpression",
    "value": "/{,1??/u",
    "regex": {
      "flags": "u",
      "pattern": "{,1??"
    },
    "start": 467,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 475,
    "end": 476
  },
  {
    "type": "RegularExpression",
    "value": "/{1??/u",
    "regex": {
      "flags": "u",
      "pattern": "{1??"
    },
    "start": 479,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 486,
    "end": 487
  },
  {
    "type": "RegularExpression",
    "value": "/{1,??/u",
    "regex": {
      "flags": "u",
      "pattern": "{1,??"
    },
    "start": 490,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 498,
    "end": 499
  },
  {
    "type": "RegularExpression",
    "value": "/{1,2??/u",
    "regex": {
      "flags": "u",
      "pattern": "{1,2??"
    },
    "start": 502,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 511,
    "end": 512
  },
  {
    "type": "RegularExpression",
    "value": "/{2,1??/u",
    "regex": {
      "flags": "u",
      "pattern": "{2,1??"
    },
    "start": 515,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 524,
    "end": 525
  },
  {
    "type": "RegularExpression",
    "value": "/{}??/u",
    "regex": {
      "flags": "u",
      "pattern": "{}??"
    },
    "start": 528,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 535,
    "end": 536
  },
  {
    "type": "RegularExpression",
    "value": "/{,}??/u",
    "regex": {
      "flags": "u",
      "pattern": "{,}??"
    },
    "start": 539,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 547,
    "end": 548
  },
  {
    "type": "RegularExpression",
    "value": "/{,1}??/u",
    "regex": {
      "flags": "u",
      "pattern": "{,1}??"
    },
    "start": 551,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 560,
    "end": 561
  },
  {
    "type": "RegularExpression",
    "value": "/{1}??/u",
    "regex": {
      "flags": "u",
      "pattern": "{1}??"
    },
    "start": 564,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 572,
    "end": 573
  },
  {
    "type": "RegularExpression",
    "value": "/{1,}??/u",
    "regex": {
      "flags": "u",
      "pattern": "{1,}??"
    },
    "start": 576,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 585,
    "end": 586
  },
  {
    "type": "RegularExpression",
    "value": "/{1,2}??/u",
    "regex": {
      "flags": "u",
      "pattern": "{1,2}??"
    },
    "start": 589,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 599,
    "end": 600
  },
  {
    "type": "RegularExpression",
    "value": "/{2,1}??/u",
    "regex": {
      "flags": "u",
      "pattern": "{2,1}??"
    },
    "start": 603,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617
  }
]
```
