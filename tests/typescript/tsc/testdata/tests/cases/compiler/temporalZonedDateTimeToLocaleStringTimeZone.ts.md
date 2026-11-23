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
            "name": "zdt",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Temporal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 84
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ZonedDateTime",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 98
                  },
                  "start": 76,
                  "end": 98
                },
                "typeArguments": null,
                "start": 76,
                "end": 98
              },
              "start": 74,
              "end": 98
            },
            "start": 71,
            "end": 98
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 98
        }
      ],
      "declare": true,
      "start": 57,
      "end": 99
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "zdt",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 164
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 179
          },
          "optional": false,
          "computed": false,
          "start": 161,
          "end": 179
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 189
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
                  "start": 193,
                  "end": 201
                },
                "value": {
                  "type": "Literal",
                  "value": "Europe/Berlin",
                  "raw": "\"Europe/Berlin\"",
                  "start": 203,
                  "end": 218
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 193,
                "end": 218
              }
            ],
            "start": 191,
            "end": 220
          }
        ],
        "optional": false,
        "start": 161,
        "end": 221
      },
      "directive": null,
      "start": 161,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "zdt",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 226
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 241
          },
          "optional": false,
          "computed": false,
          "start": 223,
          "end": 241
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "de-DE",
            "raw": "\"de-DE\"",
            "start": 242,
            "end": 249
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
                  "start": 253,
                  "end": 261
                },
                "value": {
                  "type": "Literal",
                  "value": "Pacific/Auckland",
                  "raw": "\"Pacific/Auckland\"",
                  "start": 263,
                  "end": 281
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 253,
                "end": 281
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "weekday",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 283,
                  "end": 290
                },
                "value": {
                  "type": "Literal",
                  "value": "long",
                  "raw": "\"long\"",
                  "start": 292,
                  "end": 298
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 283,
                "end": 298
              }
            ],
            "start": 251,
            "end": 300
          }
        ],
        "optional": false,
        "start": 223,
        "end": 301
      },
      "directive": null,
      "start": 223,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "zdt",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 313
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 328
          },
          "optional": false,
          "computed": false,
          "start": 310,
          "end": 328
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 310,
        "end": 330
      },
      "directive": null,
      "start": 310,
      "end": 331
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "zdt",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 335
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 350
          },
          "optional": false,
          "computed": false,
          "start": 332,
          "end": 350
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-US",
            "raw": "\"en-US\"",
            "start": 351,
            "end": 358
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
                  "name": "month",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 367
                },
                "value": {
                  "type": "Literal",
                  "value": "long",
                  "raw": "\"long\"",
                  "start": 369,
                  "end": 375
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 362,
                "end": 375
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
                  "start": 377,
                  "end": 389
                },
                "value": {
                  "type": "Literal",
                  "value": "short",
                  "raw": "\"short\"",
                  "start": 391,
                  "end": 398
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 377,
                "end": 398
              }
            ],
            "start": 360,
            "end": 400
          }
        ],
        "optional": false,
        "start": 332,
        "end": 401
      },
      "directive": null,
      "start": 332,
      "end": 402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "zdt",
                "optional": false,
                "typeAnnotation": null,
                "start": 403,
                "end": 406
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "withTimeZone",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 419
              },
              "optional": false,
              "computed": false,
              "start": 403,
              "end": 419
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "Europe/Berlin",
                "raw": "\"Europe/Berlin\"",
                "start": 420,
                "end": 435
              }
            ],
            "optional": false,
            "start": 403,
            "end": 436
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 437,
            "end": 451
          },
          "optional": false,
          "computed": false,
          "start": 403,
          "end": 451
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "de-DE",
            "raw": "\"de-DE\"",
            "start": 452,
            "end": 459
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
                  "name": "dateStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 463,
                  "end": 472
                },
                "value": {
                  "type": "Literal",
                  "value": "full",
                  "raw": "\"full\"",
                  "start": 474,
                  "end": 480
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 463,
                "end": 480
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "timeStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 482,
                  "end": 491
                },
                "value": {
                  "type": "Literal",
                  "value": "long",
                  "raw": "\"long\"",
                  "start": 493,
                  "end": 499
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 482,
                "end": 499
              }
            ],
            "start": 461,
            "end": 501
          }
        ],
        "optional": false,
        "start": 403,
        "end": 502
      },
      "directive": null,
      "start": 403,
      "end": 503
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
            "name": "options",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 528,
                    "end": 532
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DateTimeFormatOptions",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 554
                  },
                  "start": 528,
                  "end": 554
                },
                "typeArguments": null,
                "start": 528,
                "end": 554
              },
              "start": 526,
              "end": 554
            },
            "start": 519,
            "end": 554
          },
          "init": null,
          "definite": false,
          "start": 519,
          "end": 554
        }
      ],
      "declare": true,
      "start": 505,
      "end": 555
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "zdt",
            "optional": false,
            "typeAnnotation": null,
            "start": 556,
            "end": 559
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 560,
            "end": 574
          },
          "optional": false,
          "computed": false,
          "start": 556,
          "end": 574
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-US",
            "raw": "\"en-US\"",
            "start": 575,
            "end": 582
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "options",
            "optional": false,
            "typeAnnotation": null,
            "start": 584,
            "end": 591
          }
        ],
        "optional": false,
        "start": 556,
        "end": 592
      },
      "directive": null,
      "start": 556,
      "end": 593
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
            "name": "instant",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Temporal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 677,
                    "end": 685
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Instant",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 686,
                    "end": 693
                  },
                  "start": 677,
                  "end": 693
                },
                "typeArguments": null,
                "start": 677,
                "end": 693
              },
              "start": 675,
              "end": 693
            },
            "start": 668,
            "end": 693
          },
          "init": null,
          "definite": false,
          "start": 668,
          "end": 693
        }
      ],
      "declare": true,
      "start": 654,
      "end": 694
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "instant",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 702
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 703,
            "end": 717
          },
          "optional": false,
          "computed": false,
          "start": 695,
          "end": 717
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-US",
            "raw": "\"en-US\"",
            "start": 718,
            "end": 725
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
                  "start": 729,
                  "end": 737
                },
                "value": {
                  "type": "Literal",
                  "value": "Europe/Berlin",
                  "raw": "\"Europe/Berlin\"",
                  "start": 739,
                  "end": 754
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 729,
                "end": 754
              }
            ],
            "start": 727,
            "end": 756
          }
        ],
        "optional": false,
        "start": 695,
        "end": 757
      },
      "directive": null,
      "start": 695,
      "end": 758
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
            "name": "plainDateTime",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Temporal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 788,
                    "end": 796
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PlainDateTime",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 797,
                    "end": 810
                  },
                  "start": 788,
                  "end": 810
                },
                "typeArguments": null,
                "start": 788,
                "end": 810
              },
              "start": 786,
              "end": 810
            },
            "start": 773,
            "end": 810
          },
          "init": null,
          "definite": false,
          "start": 773,
          "end": 810
        }
      ],
      "declare": true,
      "start": 759,
      "end": 811
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "plainDateTime",
            "optional": false,
            "typeAnnotation": null,
            "start": 812,
            "end": 825
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "typeAnnotation": null,
            "start": 826,
            "end": 840
          },
          "optional": false,
          "computed": false,
          "start": 812,
          "end": 840
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "en-US",
            "raw": "\"en-US\"",
            "start": 841,
            "end": 848
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
                  "start": 852,
                  "end": 860
                },
                "value": {
                  "type": "Literal",
                  "value": "Europe/Berlin",
                  "raw": "\"Europe/Berlin\"",
                  "start": 862,
                  "end": 877
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 852,
                "end": 877
              }
            ],
            "start": 850,
            "end": 879
          }
        ],
        "optional": false,
        "start": 812,
        "end": 880
      },
      "directive": null,
      "start": 812,
      "end": 881
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 881
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "zdt",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "Temporal",
    "start": 76,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "ZonedDateTime",
    "start": 85,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "zdt",
    "start": 161,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 165,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 180,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "timeZone",
    "start": 193,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "String",
    "value": "\"Europe/Berlin\"",
    "start": 203,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "zdt",
    "start": 223,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 227,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "String",
    "value": "\"de-DE\"",
    "start": 242,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "timeZone",
    "start": 253,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "String",
    "value": "\"Pacific/Auckland\"",
    "start": 263,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "weekday",
    "start": 283,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "String",
    "value": "\"long\"",
    "start": 292,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "zdt",
    "start": 310,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 314,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "zdt",
    "start": 332,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 336,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "String",
    "value": "\"en-US\"",
    "start": 351,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "month",
    "start": 362,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "String",
    "value": "\"long\"",
    "start": 369,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "timeZoneName",
    "start": 377,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "String",
    "value": "\"short\"",
    "start": 391,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "zdt",
    "start": 403,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "withTimeZone",
    "start": 407,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "String",
    "value": "\"Europe/Berlin\"",
    "start": 420,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 437,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "String",
    "value": "\"de-DE\"",
    "start": 452,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "dateStyle",
    "start": 463,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "String",
    "value": "\"full\"",
    "start": 474,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "timeStyle",
    "start": 482,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "String",
    "value": "\"long\"",
    "start": 493,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 505,
    "end": 512
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 513,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 519,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "Intl",
    "start": 528,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "DateTimeFormatOptions",
    "start": 533,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "zdt",
    "start": 556,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 560,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "String",
    "value": "\"en-US\"",
    "start": 575,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 584,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 654,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 662,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "instant",
    "start": 668,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "Temporal",
    "start": 677,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "Instant",
    "start": 686,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "instant",
    "start": 695,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 703,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 717,
    "end": 718
  },
  {
    "type": "String",
    "value": "\"en-US\"",
    "start": 718,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "timeZone",
    "start": 729,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "String",
    "value": "\"Europe/Berlin\"",
    "start": 739,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 759,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 767,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "plainDateTime",
    "start": 773,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "Temporal",
    "start": 788,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "PlainDateTime",
    "start": 797,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "plainDateTime",
    "start": 812,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "toLocaleString",
    "start": 826,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "String",
    "value": "\"en-US\"",
    "start": 841,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "timeZone",
    "start": 852,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "String",
    "value": "\"Europe/Berlin\"",
    "start": 862,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881
  }
]
```
