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
                  "value": "hello",
                  "raw": "hello",
                  "start": 116,
                  "end": 121
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 123,
                  "end": 126
                },
                "start": 121,
                "end": 127
              },
              "start": 111,
              "end": 127
            },
            "start": 104,
            "end": 128
          }
        ],
        "start": 98,
        "end": 130
      },
      "expression": false,
      "start": 77,
      "end": 130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptySFC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 150
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
                  "start": 167,
                  "end": 170
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 166,
                "end": 171
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "Hello",
                  "raw": "Hello",
                  "start": 171,
                  "end": 176
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 178,
                  "end": 181
                },
                "start": 176,
                "end": 182
              },
              "start": 166,
              "end": 182
            },
            "start": 159,
            "end": 183
          }
        ],
        "start": 153,
        "end": 185
      },
      "expression": false,
      "start": 132,
      "end": 185
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SFC2",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 200
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
                    "start": 209,
                    "end": 210
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 212,
                      "end": 219
                    },
                    "start": 210,
                    "end": 219
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 209,
                  "end": 219
                }
              ],
              "start": 207,
              "end": 221
            },
            "start": 205,
            "end": 221
          },
          "start": 201,
          "end": 221
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
                  "start": 237,
                  "end": 239
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 236,
                "end": 240
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "World",
                  "raw": "World",
                  "start": 240,
                  "end": 245
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "h1",
                  "start": 247,
                  "end": 249
                },
                "start": 245,
                "end": 250
              },
              "start": 236,
              "end": 250
            },
            "start": 229,
            "end": 251
          }
        ],
        "start": 223,
        "end": 253
      },
      "expression": false,
      "start": 187,
      "end": 253
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
            "start": 259,
            "end": 271
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 283
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmptySFC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 296
            },
            "start": 274,
            "end": 296
          },
          "definite": false,
          "start": 259,
          "end": 296
        }
      ],
      "declare": false,
      "start": 255,
      "end": 297
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
            "start": 302,
            "end": 318
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "SFC2",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 325
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "EmptySFC1",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 338
            },
            "start": 321,
            "end": 338
          },
          "definite": false,
          "start": 302,
          "end": 338
        }
      ],
      "declare": false,
      "start": 298,
      "end": 339
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
            "start": 345,
            "end": 346
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptySFCComp",
                "start": 350,
                "end": 362
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 349,
              "end": 365
            },
            "children": [],
            "closingElement": null,
            "start": 349,
            "end": 365
          },
          "definite": false,
          "start": 345,
          "end": 365
        }
      ],
      "declare": false,
      "start": 341,
      "end": 365
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 372
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "EmptySFCComp",
                "start": 376,
                "end": 388
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-prop",
                    "start": 389,
                    "end": 398
                  },
                  "value": null,
                  "start": 389,
                  "end": 398
                }
              ],
              "selfClosing": true,
              "start": 375,
              "end": 401
            },
            "children": [],
            "closingElement": null,
            "start": 375,
            "end": 401
          },
          "definite": false,
          "start": 370,
          "end": 401
        }
      ],
      "declare": false,
      "start": 366,
      "end": 401
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
            "start": 406,
            "end": 407
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "SFC2AndEmptyComp",
                "start": 411,
                "end": 427
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 428,
                    "end": 429
                  },
                  "value": null,
                  "start": 428,
                  "end": 429
                }
              ],
              "selfClosing": true,
              "start": 410,
              "end": 432
            },
            "children": [],
            "closingElement": null,
            "start": 410,
            "end": 432
          },
          "definite": false,
          "start": 406,
          "end": 432
        }
      ],
      "declare": false,
      "start": 402,
      "end": 432
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 432
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
    "value": "hello",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 122,
    "end": 123
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 132,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "EmptySFC2",
    "start": 141,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 166,
    "end": 167
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 170,
    "end": 171
  },
  {
    "type": "JSXText",
    "value": "Hello",
    "start": 171,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 177,
    "end": 178
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 187,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "SFC2",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 212,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 236,
    "end": 237
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 239,
    "end": 240
  },
  {
    "type": "JSXText",
    "value": "World",
    "start": 240,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 246,
    "end": 247
  },
  {
    "type": "JSXIdentifier",
    "value": "h1",
    "start": 247,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 255,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "EmptySFCComp",
    "start": 259,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "EmptySFC1",
    "start": 274,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 284,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "EmptySFC2",
    "start": 287,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "SFC2AndEmptyComp",
    "start": 302,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "SFC2",
    "start": 321,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 326,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "EmptySFC1",
    "start": 329,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 341,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 349,
    "end": 350
  },
  {
    "type": "JSXIdentifier",
    "value": "EmptySFCComp",
    "start": 350,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 375,
    "end": 376
  },
  {
    "type": "JSXIdentifier",
    "value": "EmptySFCComp",
    "start": 376,
    "end": 388
  },
  {
    "type": "JSXIdentifier",
    "value": "data-prop",
    "start": 389,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 402,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 410,
    "end": 411
  },
  {
    "type": "JSXIdentifier",
    "value": "SFC2AndEmptyComp",
    "start": 411,
    "end": 427
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 431,
    "end": 432
  }
]
```
