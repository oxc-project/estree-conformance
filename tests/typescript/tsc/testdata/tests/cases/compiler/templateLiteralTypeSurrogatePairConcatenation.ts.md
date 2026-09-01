__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Hi",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 284
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": "\ud83d",
          "raw": "\"\\uD83D\"",
          "start": 287,
          "end": 295
        },
        "start": 287,
        "end": 295
      },
      "declare": false,
      "start": 277,
      "end": 296
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Lo",
        "optional": false,
        "typeAnnotation": null,
        "start": 302,
        "end": 304
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": "\ude00",
          "raw": "\"\\uDE00\"",
          "start": 307,
          "end": 315
        },
        "start": 307,
        "end": 315
      },
      "declare": false,
      "start": 297,
      "end": 316
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pair",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 326
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 329,
            "end": 332
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 334,
            "end": 337
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 339,
            "end": 341
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Hi",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 334
            },
            "typeArguments": null,
            "start": 332,
            "end": 334
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lo",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 339
            },
            "typeArguments": null,
            "start": 337,
            "end": 339
          }
        ],
        "start": 329,
        "end": 341
      },
      "declare": false,
      "start": 317,
      "end": 342
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Pair",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 357
                },
                "typeArguments": null,
                "start": 353,
                "end": 357
              },
              "start": 351,
              "end": 357
            },
            "start": 350,
            "end": 357
          },
          "init": {
            "type": "Literal",
            "value": "😀",
            "raw": "\"😀\"",
            "start": 360,
            "end": 364
          },
          "definite": false,
          "start": 350,
          "end": 364
        }
      ],
      "declare": false,
      "start": 344,
      "end": 365
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
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "😀",
                  "raw": "\"😀\"",
                  "start": 375,
                  "end": 379
                },
                "start": 375,
                "end": 379
              },
              "start": 373,
              "end": 379
            },
            "start": 372,
            "end": 379
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "x",
                "raw": "\"x\"",
                "start": 382,
                "end": 385
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 389,
                "end": 396
              },
              "start": 382,
              "end": 396
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pair",
                "optional": false,
                "typeAnnotation": null,
                "start": 400,
                "end": 404
              },
              "typeArguments": null,
              "start": 400,
              "end": 404
            },
            "start": 382,
            "end": 404
          },
          "definite": false,
          "start": 372,
          "end": 404
        }
      ],
      "declare": false,
      "start": 366,
      "end": 405
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Gapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 488,
        "end": 494
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 497,
            "end": 500
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "-",
              "cooked": "-"
            },
            "tail": false,
            "start": 502,
            "end": 506
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 508,
            "end": 510
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Hi",
              "optional": false,
              "typeAnnotation": null,
              "start": 500,
              "end": 502
            },
            "typeArguments": null,
            "start": 500,
            "end": 502
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lo",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 508
            },
            "typeArguments": null,
            "start": 506,
            "end": 508
          }
        ],
        "start": 497,
        "end": 510
      },
      "declare": false,
      "start": 483,
      "end": 511
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Gapped",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 521,
                  "end": 527
                },
                "typeArguments": null,
                "start": 521,
                "end": 527
              },
              "start": 519,
              "end": 527
            },
            "start": 518,
            "end": 527
          },
          "init": {
            "type": "Literal",
            "value": "\ud83d-\ude00",
            "raw": "\"\\uD83D-\\uDE00\"",
            "start": 530,
            "end": 545
          },
          "definite": false,
          "start": 518,
          "end": 545
        }
      ],
      "declare": false,
      "start": 512,
      "end": 546
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 277,
  "end": 546
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 277,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "Hi",
    "start": 282,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286
  },
  {
    "type": "String",
    "value": "\"\\uD83D\"",
    "start": 287,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 297,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "Lo",
    "start": 302,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306
  },
  {
    "type": "String",
    "value": "\"\\uDE00\"",
    "start": 307,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 317,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "Pair",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 327,
    "end": 328
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 329,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "Hi",
    "start": 332,
    "end": 334
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 334,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "Lo",
    "start": 337,
    "end": 339
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 344,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "Pair",
    "start": 353,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359
  },
  {
    "type": "String",
    "value": "\"😀\"",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 366,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "String",
    "value": "\"😀\"",
    "start": 375,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 382,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 386,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 389,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 397,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "Pair",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 483,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "Gapped",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 495,
    "end": 496
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 497,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "Hi",
    "start": 500,
    "end": 502
  },
  {
    "type": "Template",
    "value": "}-${",
    "start": 502,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "Lo",
    "start": 506,
    "end": 508
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 508,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 512,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "Gapped",
    "start": 521,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "String",
    "value": "\"\\uD83D-\\uDE00\"",
    "start": 530,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546
  }
]
```
