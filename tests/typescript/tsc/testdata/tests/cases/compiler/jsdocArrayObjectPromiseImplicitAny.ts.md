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
            "name": "anyArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 33
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 37,
                "end": 38
              }
            ],
            "start": 36,
            "end": 39
          },
          "definite": false,
          "start": 25,
          "end": 39
        }
      ],
      "declare": false,
      "start": 21,
      "end": 40
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
            "start": 75,
            "end": 86
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 90,
                "end": 91
              }
            ],
            "start": 89,
            "end": 92
          },
          "definite": false,
          "start": 75,
          "end": 92
        }
      ],
      "declare": false,
      "start": 71,
      "end": 93
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnAnyArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 167
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
          "start": 168,
          "end": 171
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
              "start": 184,
              "end": 187
            },
            "start": 177,
            "end": 188
          }
        ],
        "start": 173,
        "end": 190
      },
      "expression": false,
      "start": 144,
      "end": 190
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
            "name": "anyPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 229
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
                "start": 232,
                "end": 239
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 247
              },
              "optional": false,
              "computed": false,
              "start": 232,
              "end": 247
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 248,
                "end": 249
              }
            ],
            "optional": false,
            "start": 232,
            "end": 250
          },
          "definite": false,
          "start": 219,
          "end": 250
        }
      ],
      "declare": false,
      "start": 215,
      "end": 251
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
            "start": 288,
            "end": 301
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
                "start": 304,
                "end": 311
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 319
              },
              "optional": false,
              "computed": false,
              "start": 304,
              "end": 319
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 320,
                "end": 321
              }
            ],
            "optional": false,
            "start": 304,
            "end": 322
          },
          "definite": false,
          "start": 288,
          "end": 322
        }
      ],
      "declare": false,
      "start": 284,
      "end": 323
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnAnyPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 402
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
          "start": 403,
          "end": 405
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
              "start": 418,
              "end": 420
            },
            "start": 411,
            "end": 421
          }
        ],
        "start": 407,
        "end": 423
      },
      "expression": false,
      "start": 377,
      "end": 423
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
            "name": "anyObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 460
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
                  "start": 464,
                  "end": 471
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 473,
                  "end": 474
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 464,
                "end": 474
              }
            ],
            "start": 463,
            "end": 475
          },
          "definite": false,
          "start": 451,
          "end": 475
        }
      ],
      "declare": false,
      "start": 447,
      "end": 476
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
            "start": 560,
            "end": 573
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
                  "start": 577,
                  "end": 584
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 586,
                  "end": 587
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 577,
                "end": 587
              }
            ],
            "start": 576,
            "end": 588
          },
          "definite": false,
          "start": 560,
          "end": 588
        }
      ],
      "declare": false,
      "start": 556,
      "end": 589
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnAnyObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 666
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
          "start": 667,
          "end": 670
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
              "start": 683,
              "end": 686
            },
            "start": 676,
            "end": 687
          }
        ],
        "start": 672,
        "end": 689
      },
      "expression": false,
      "start": 642,
      "end": 689
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 689
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
    "value": "anyArray",
    "start": 25,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 71,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "numberArray",
    "start": 75,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 89,
    "end": 90
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 144,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "returnAnyArray",
    "start": 153,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 177,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "anyPromise",
    "start": 219,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 232,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 240,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 284,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "numberPromise",
    "start": 288,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 304,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 312,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 377,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "returnAnyPromise",
    "start": 386,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "pr",
    "start": 403,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 411,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "pr",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 447,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "anyObject",
    "start": 451,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "valueOf",
    "start": 464,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 556,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "paramedObject",
    "start": 560,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "valueOf",
    "start": 577,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 642,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "returnAnyObject",
    "start": 651,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 667,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 676,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 683,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 688,
    "end": 689
  }
]
```
