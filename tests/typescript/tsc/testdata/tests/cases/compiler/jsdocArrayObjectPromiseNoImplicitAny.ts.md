__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "notAnyArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 36
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 40,
                "end": 41
              }
            ],
            "start": 39,
            "end": 42
          },
          "definite": false,
          "start": 25,
          "end": 42
        }
      ],
      "declare": false,
      "start": 21,
      "end": 43
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 89
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 93,
                "end": 94
              }
            ],
            "start": 92,
            "end": 95
          },
          "definite": false,
          "start": 78,
          "end": 95
        }
      ],
      "declare": false,
      "start": 74,
      "end": 96
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnNotAnyArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 173
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": null,
          "start": 174,
          "end": 177
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 193
            },
            "start": 183,
            "end": 194
          }
        ],
        "start": 179,
        "end": 196
      },
      "expression": false,
      "start": 147,
      "end": 196
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "notAnyPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 238
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 248
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 256
              },
              "optional": false,
              "computed": false,
              "start": 241,
              "end": 256
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 257,
                "end": 258
              }
            ],
            "optional": false,
            "start": 241,
            "end": 259
          },
          "definite": false,
          "start": 225,
          "end": 259
        }
      ],
      "declare": false,
      "start": 221,
      "end": 260
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 310
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 320
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 328
              },
              "optional": false,
              "computed": false,
              "start": 313,
              "end": 328
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 329,
                "end": 330
              }
            ],
            "optional": false,
            "start": 313,
            "end": 331
          },
          "definite": false,
          "start": 297,
          "end": 331
        }
      ],
      "declare": false,
      "start": 293,
      "end": 332
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnNotAnyPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 395,
        "end": 414
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pr",
          "optional": false,
          "typeAnnotation": null,
          "start": 415,
          "end": 417
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "pr",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 432
            },
            "start": 423,
            "end": 433
          }
        ],
        "start": 419,
        "end": 435
      },
      "expression": false,
      "start": 386,
      "end": 435
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "notAnyObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 475
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
                  "name": "valueOf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 486
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 488,
                  "end": 489
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 479,
                "end": 489
              }
            ],
            "start": 478,
            "end": 490
          },
          "definite": false,
          "start": 463,
          "end": 490
        }
      ],
      "declare": false,
      "start": 459,
      "end": 491
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "paramedObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 580,
            "end": 593
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
                  "name": "valueOf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 604
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 606,
                  "end": 607
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 597,
                "end": 607
              }
            ],
            "start": 596,
            "end": 608
          },
          "definite": false,
          "start": 580,
          "end": 608
        }
      ],
      "declare": false,
      "start": 576,
      "end": 609
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnNotAnyObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 671,
        "end": 689
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 690,
          "end": 693
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 709
            },
            "start": 699,
            "end": 710
          }
        ],
        "start": 695,
        "end": 712
      },
      "expression": false,
      "start": 662,
      "end": 712
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 712
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 21,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "notAnyArray",
    "start": 25,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 39,
    "end": 40
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 74,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "numberArray",
    "start": 78,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 92,
    "end": 93
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 147,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "returnNotAnyArray",
    "start": 156,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 183,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 190,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 221,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "notAnyPromise",
    "start": 225,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 241,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 293,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "numberPromise",
    "start": 297,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 313,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 321,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 386,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "returnNotAnyPromise",
    "start": 395,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "pr",
    "start": 415,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 423,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "pr",
    "start": 430,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 459,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "notAnyObject",
    "start": 463,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "valueOf",
    "start": 479,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 576,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "paramedObject",
    "start": 580,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "valueOf",
    "start": 597,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "function",
    "start": 662,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "returnNotAnyObject",
    "start": 671,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 690,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 695,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 699,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 706,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 711,
    "end": 712
  }
]
```
