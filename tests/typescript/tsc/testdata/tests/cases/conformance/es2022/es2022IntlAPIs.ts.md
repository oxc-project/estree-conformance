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
            "name": "timezoneNames",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 157
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "short",
                  "raw": "'short'",
                  "start": 161,
                  "end": 168
                },
                {
                  "type": "Literal",
                  "value": "long",
                  "raw": "'long'",
                  "start": 170,
                  "end": 176
                },
                {
                  "type": "Literal",
                  "value": "shortOffset",
                  "raw": "'shortOffset'",
                  "start": 178,
                  "end": 191
                },
                {
                  "type": "Literal",
                  "value": "longOffset",
                  "raw": "'longOffset'",
                  "start": 193,
                  "end": 205
                },
                {
                  "type": "Literal",
                  "value": "shortGeneric",
                  "raw": "'shortGeneric'",
                  "start": 207,
                  "end": 221
                },
                {
                  "type": "Literal",
                  "value": "longGeneric",
                  "raw": "'longGeneric'",
                  "start": 223,
                  "end": 236
                }
              ],
              "start": 160,
              "end": 237
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 246
              },
              "typeArguments": null,
              "start": 241,
              "end": 246
            },
            "start": 160,
            "end": 246
          },
          "definite": false,
          "start": 144,
          "end": 246
        }
      ],
      "declare": false,
      "start": 138,
      "end": 247
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "zoneName",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 267
            },
            "init": null,
            "definite": false,
            "start": 259,
            "end": 267
          }
        ],
        "declare": false,
        "start": 253,
        "end": 267
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "timezoneNames",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 284
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "formatter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 303
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 314
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DateTimeFormat",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 329
                    },
                    "optional": false,
                    "computed": false,
                    "start": 310,
                    "end": 329
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "en-US",
                      "raw": "'en-US'",
                      "start": 330,
                      "end": 337
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "timeZone",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 345,
                            "end": 353
                          },
                          "value": {
                            "type": "Literal",
                            "value": "America/Los_Angeles",
                            "raw": "'America/Los_Angeles'",
                            "start": 355,
                            "end": 376
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 345,
                          "end": 376
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "timeZoneName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 382,
                            "end": 394
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "zoneName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 396,
                            "end": 404
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 382,
                          "end": 404
                        }
                      ],
                      "start": 339,
                      "end": 409
                    }
                  ],
                  "start": 306,
                  "end": 410
                },
                "definite": false,
                "start": 294,
                "end": 410
              }
            ],
            "declare": false,
            "start": 290,
            "end": 411
          }
        ],
        "start": 286,
        "end": 413
      },
      "start": 248,
      "end": 413
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
            "name": "enumerationKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 436
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "calendar",
                  "raw": "'calendar'",
                  "start": 440,
                  "end": 450
                },
                {
                  "type": "Literal",
                  "value": "collation",
                  "raw": "'collation'",
                  "start": 452,
                  "end": 463
                },
                {
                  "type": "Literal",
                  "value": "currency",
                  "raw": "'currency'",
                  "start": 465,
                  "end": 475
                },
                {
                  "type": "Literal",
                  "value": "numberingSystem",
                  "raw": "'numberingSystem'",
                  "start": 477,
                  "end": 494
                },
                {
                  "type": "Literal",
                  "value": "timeZone",
                  "raw": "'timeZone'",
                  "start": 496,
                  "end": 506
                },
                {
                  "type": "Literal",
                  "value": "unit",
                  "raw": "'unit'",
                  "start": 508,
                  "end": 514
                }
              ],
              "start": 439,
              "end": 515
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 524
              },
              "typeArguments": null,
              "start": 519,
              "end": 524
            },
            "start": 439,
            "end": 524
          },
          "definite": false,
          "start": 421,
          "end": 524
        }
      ],
      "declare": false,
      "start": 415,
      "end": 525
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 540
            },
            "init": null,
            "definite": false,
            "start": 537,
            "end": 540
          }
        ],
        "declare": false,
        "start": 531,
        "end": 540
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "enumerationKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 559
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "supported",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 578
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 581,
                      "end": 585
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "supportedValuesOf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 586,
                      "end": 603
                    },
                    "optional": false,
                    "computed": false,
                    "start": 581,
                    "end": 603
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 604,
                      "end": 607
                    }
                  ],
                  "optional": false,
                  "start": 581,
                  "end": 608
                },
                "definite": false,
                "start": 569,
                "end": 608
              }
            ],
            "declare": false,
            "start": 565,
            "end": 609
          }
        ],
        "start": 561,
        "end": 611
      },
      "start": 526,
      "end": 611
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 138,
  "end": 611
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 138,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "timezoneNames",
    "start": 144,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161
  },
  {
    "type": "String",
    "value": "'short'",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "String",
    "value": "'long'",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177
  },
  {
    "type": "String",
    "value": "'shortOffset'",
    "start": 178,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 191,
    "end": 192
  },
  {
    "type": "String",
    "value": "'longOffset'",
    "start": 193,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 205,
    "end": 206
  },
  {
    "type": "String",
    "value": "'shortGeneric'",
    "start": 207,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222
  },
  {
    "type": "String",
    "value": "'longGeneric'",
    "start": 223,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 238,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 253,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "zoneName",
    "start": 259,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 268,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "timezoneNames",
    "start": 271,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 290,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "formatter",
    "start": 294,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 306,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormat",
    "start": 315,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "String",
    "value": "'en-US'",
    "start": 330,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "timeZone",
    "start": 345,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "String",
    "value": "'America/Los_Angeles'",
    "start": 355,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "timeZoneName",
    "start": 382,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "zoneName",
    "start": 396,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 415,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "enumerationKeys",
    "start": 421,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 439,
    "end": 440
  },
  {
    "type": "String",
    "value": "'calendar'",
    "start": 440,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 450,
    "end": 451
  },
  {
    "type": "String",
    "value": "'collation'",
    "start": 452,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464
  },
  {
    "type": "String",
    "value": "'currency'",
    "start": 465,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 475,
    "end": 476
  },
  {
    "type": "String",
    "value": "'numberingSystem'",
    "start": 477,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495
  },
  {
    "type": "String",
    "value": "'timeZone'",
    "start": 496,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 506,
    "end": 507
  },
  {
    "type": "String",
    "value": "'unit'",
    "start": 508,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 516,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 519,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 526,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 531,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 537,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 541,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "enumerationKeys",
    "start": 544,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 565,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "supported",
    "start": 569,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 581,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "supportedValuesOf",
    "start": 586,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  }
]
```
