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
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 230
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 260
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 262,
                  "end": 263
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 259,
                "end": 263
              }
            ],
            "start": 257,
            "end": 265
          },
          "definite": false,
          "start": 228,
          "end": 266
        }
      ],
      "declare": false,
      "start": 222,
      "end": 267
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 276
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 306
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 308,
                  "end": 309
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 305,
                "end": 309
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 312
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 314,
                  "end": 315
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 311,
                "end": 315
              }
            ],
            "start": 303,
            "end": 317
          },
          "definite": false,
          "start": 274,
          "end": 318
        }
      ],
      "declare": false,
      "start": 268,
      "end": 319
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 328
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 355,
            "end": 357
          },
          "definite": false,
          "start": 326,
          "end": 358
        }
      ],
      "declare": false,
      "start": 320,
      "end": 359
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 385,
            "end": 387
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 417
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 419,
                  "end": 422
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 416,
                "end": 422
              }
            ],
            "start": 414,
            "end": 424
          },
          "definite": false,
          "start": 385,
          "end": 425
        }
      ],
      "declare": false,
      "start": 379,
      "end": 426
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
            "name": "t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 471,
            "end": 473
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 501
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 507
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "substring",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 517
                },
                "optional": false,
                "computed": false,
                "start": 506,
                "end": 517
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 518,
                  "end": 519
                }
              ],
              "optional": false,
              "start": 506,
              "end": 520
            },
            "id": null,
            "generator": false,
            "start": 499,
            "end": 520
          },
          "definite": false,
          "start": 471,
          "end": 521
        }
      ],
      "declare": false,
      "start": 465,
      "end": 522
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
            "name": "t6",
            "optional": false,
            "typeAnnotation": null,
            "start": 529,
            "end": 531
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 573,
                "end": 574
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 576,
                "end": 577
              }
            ],
            "start": 572,
            "end": 578
          },
          "definite": false,
          "start": 529,
          "end": 579
        }
      ],
      "declare": false,
      "start": 523,
      "end": 580
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
            "name": "t7",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 589
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 619
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "'test'",
                  "start": 621,
                  "end": 627
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 618,
                "end": 627
              }
            ],
            "start": 616,
            "end": 629
          },
          "definite": false,
          "start": 587,
          "end": 630
        }
      ],
      "declare": false,
      "start": 581,
      "end": 631
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
            "name": "t8",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 640
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 670
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "'test'",
                  "start": 672,
                  "end": 678
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 669,
                "end": 678
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 680,
                  "end": 681
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "'test'",
                  "start": 683,
                  "end": 689
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 680,
                "end": 689
              }
            ],
            "start": 667,
            "end": 691
          },
          "definite": false,
          "start": 638,
          "end": 692
        }
      ],
      "declare": false,
      "start": 632,
      "end": 693
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 222,
  "end": 693
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 268,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 320,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 326,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 379,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 417,
    "end": 418
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 419,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 465,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "m",
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
    "value": "=>",
    "start": 503,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "substring",
    "start": 508,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 523,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 572,
    "end": 573
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 574,
    "end": 575
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 581,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "t7",
    "start": 587,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 621,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 632,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "t8",
    "start": 638,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 672,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 683,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  }
]
```
