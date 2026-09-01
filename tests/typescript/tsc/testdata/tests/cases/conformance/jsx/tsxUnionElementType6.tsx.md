__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 75
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptySFC1",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 95
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 112,
                  "end": 115
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 111,
                "end": 116
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Hi",
                  "raw": "Hi",
                  "start": 116,
                  "end": 118
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 120,
                  "end": 123
                },
                "start": 118,
                "end": 124
              },
              "start": 111,
              "end": 124
            },
            "start": 104,
            "end": 124
          }
        ],
        "start": 98,
        "end": 126
      },
      "expression": false,
      "start": 77,
      "end": 126
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptySFC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 146
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 163,
                  "end": 166
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 162,
                "end": 167
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Hello",
                  "raw": "Hello",
                  "start": 167,
                  "end": 172
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 174,
                  "end": 177
                },
                "start": 172,
                "end": 178
              },
              "start": 162,
              "end": 178
            },
            "start": 155,
            "end": 178
          }
        ],
        "start": 149,
        "end": 180
      },
      "expression": false,
      "start": 128,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SFC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 195
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "prop",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 205
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 207,
                      "end": 214
                    },
                    "start": 205,
                    "end": 214
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 204,
                  "end": 214
                }
              ],
              "start": 202,
              "end": 216
            },
            "start": 200,
            "end": 216
          },
          "start": 196,
          "end": 216
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "start": 232,
                  "end": 234
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 231,
                "end": 235
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "World",
                  "raw": "World",
                  "start": 235,
                  "end": 240
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "start": 242,
                  "end": 244
                },
                "start": 240,
                "end": 245
              },
              "start": 231,
              "end": 245
            },
            "start": 224,
            "end": 246
          }
        ],
        "start": 218,
        "end": 248
      },
      "expression": false,
      "start": 182,
      "end": 248
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
            "name": "EmptySFCComp",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 266
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 278
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmptySFC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 291
            },
            "start": 269,
            "end": 291
          },
          "definite": false,
          "start": 254,
          "end": 291
        }
      ],
      "declare": false,
      "start": 250,
      "end": 292
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
            "name": "SFC2AndEmptyComp",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 313
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "SFC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 320
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 333
            },
            "start": 316,
            "end": 333
          },
          "definite": false,
          "start": 297,
          "end": 333
        }
      ],
      "declare": false,
      "start": 293,
      "end": 334
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 349
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptySFCComp",
                "start": 353,
                "end": 365
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 366,
                    "end": 367
                  },
                  "value": null,
                  "start": 366,
                  "end": 367
                }
              ],
              "selfClosing": true,
              "start": 352,
              "end": 370
            },
            "children": [],
            "closingElement": null,
            "start": 352,
            "end": 370
          },
          "definite": false,
          "start": 348,
          "end": 370
        }
      ],
      "declare": false,
      "start": 344,
      "end": 371
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 376,
            "end": 377
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SFC2AndEmptyComp",
                "start": 381,
                "end": 397
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 398,
                    "end": 399
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 400,
                    "end": 404
                  },
                  "start": 398,
                  "end": 404
                }
              ],
              "selfClosing": true,
              "start": 380,
              "end": 407
            },
            "children": [],
            "closingElement": null,
            "start": 380,
            "end": 407
          },
          "definite": false,
          "start": 376,
          "end": 407
        }
      ],
      "declare": false,
      "start": 372,
      "end": 408
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 414
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SFC2AndEmptyComp",
                "start": 418,
                "end": 434
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 417,
              "end": 437
            },
            "children": [],
            "closingElement": null,
            "start": 417,
            "end": 437
          },
          "definite": false,
          "start": 413,
          "end": 437
        }
      ],
      "declare": false,
      "start": 409,
      "end": 438
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 444
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SFC2AndEmptyComp",
                "start": 448,
                "end": 464
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-prop",
                    "start": 465,
                    "end": 474
                  },
                  "value": null,
                  "start": 465,
                  "end": 474
                }
              ],
              "selfClosing": true,
              "start": 447,
              "end": 477
            },
            "children": [],
            "closingElement": null,
            "start": 447,
            "end": 477
          },
          "definite": false,
          "start": 443,
          "end": 477
        }
      ],
      "declare": false,
      "start": 439,
      "end": 478
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 479
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 77,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "EmptySFC1",
    "start": 86,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 111,
    "end": 112
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 115,
    "end": 116
  },
  {
    "type": "JSXText",
    "value": "Hi",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 119,
    "end": 120
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 120,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 128,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "EmptySFC2",
    "start": 137,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 162,
    "end": 163
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 173,
    "end": 174
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 182,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "SFC2",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 207,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 231,
    "end": 232
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 232,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 234,
    "end": 235
  },
  {
    "type": "JSXText",
    "value": "World",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 241,
    "end": 242
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 250,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "EmptySFCComp",
    "start": 254,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "EmptySFC1",
    "start": 269,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 279,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "EmptySFC2",
    "start": 282,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 293,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "SFC2AndEmptyComp",
    "start": 297,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "SFC2",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 321,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "EmptySFC1",
    "start": 324,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 344,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 352,
    "end": 353
  },
  {
    "type": "JSXIdentifier",
    "value": "EmptySFCComp",
    "start": 353,
    "end": 365
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 372,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "JSXIdentifier",
    "value": "SFC2AndEmptyComp",
    "start": 381,
    "end": 397
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 399,
    "end": 400
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 400,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 409,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 417,
    "end": 418
  },
  {
    "type": "JSXIdentifier",
    "value": "SFC2AndEmptyComp",
    "start": 418,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 439,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 447,
    "end": 448
  },
  {
    "type": "JSXIdentifier",
    "value": "SFC2AndEmptyComp",
    "start": 448,
    "end": 464
  },
  {
    "type": "JSXIdentifier",
    "value": "data-prop",
    "start": 465,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  }
]
```
