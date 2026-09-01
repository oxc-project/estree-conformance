__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 76,
              "end": 79
            },
            "declare": false,
            "start": 48,
            "end": 79
          }
        ],
        "start": 22,
        "end": 81
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 81
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
            "name": "Div",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 99
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 102,
            "end": 103
          },
          "definite": false,
          "start": 96,
          "end": 103
        }
      ],
      "declare": false,
      "start": 92,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Div",
            "start": 106,
            "end": 109
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 105,
          "end": 112
        },
        "children": [],
        "closingElement": null,
        "start": 105,
        "end": 112
      },
      "directive": null,
      "start": 105,
      "end": 113
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fact",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 134
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 138,
          "end": 141
        },
        "start": 136,
        "end": 141
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 151,
              "end": 155
            },
            "start": 144,
            "end": 156
          }
        ],
        "start": 142,
        "end": 158
      },
      "expression": false,
      "start": 121,
      "end": 158
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Fact",
            "start": 160,
            "end": 164
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 159,
          "end": 167
        },
        "children": [],
        "closingElement": null,
        "start": 159,
        "end": 167
      },
      "directive": null,
      "start": 159,
      "end": 167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 191
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 195,
          "end": 201
        },
        "start": 193,
        "end": 201
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 210,
              "end": 212
            },
            "start": 203,
            "end": 213
          }
        ],
        "start": 201,
        "end": 215
      },
      "expression": false,
      "start": 178,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Fnum",
            "start": 217,
            "end": 221
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 216,
          "end": 224
        },
        "children": [],
        "closingElement": null,
        "start": 216,
        "end": 224
      },
      "directive": null,
      "start": 216,
      "end": 224
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj1",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 240
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 251,
                "end": 253
              },
              "start": 249,
              "end": 253
            },
            "start": 244,
            "end": 254
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 260,
                "end": 266
              },
              "start": 258,
              "end": 266
            },
            "start": 256,
            "end": 267
          }
        ],
        "start": 241,
        "end": 269
      },
      "declare": false,
      "start": 226,
      "end": 269
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
            "name": "Obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 292
                },
                "typeArguments": null,
                "start": 288,
                "end": 292
              },
              "start": 286,
              "end": 292
            },
            "start": 282,
            "end": 292
          },
          "init": null,
          "definite": false,
          "start": 282,
          "end": 292
        }
      ],
      "declare": true,
      "start": 270,
      "end": 293
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj1",
            "start": 295,
            "end": 299
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 294,
          "end": 302
        },
        "children": [],
        "closingElement": null,
        "start": 294,
        "end": 302
      },
      "directive": null,
      "start": 294,
      "end": 303
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj2",
        "optional": false,
        "typeAnnotation": null,
        "start": 350,
        "end": 354
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 362,
                "end": 368
              },
              "start": 360,
              "end": 368
            },
            "start": 358,
            "end": 369
          }
        ],
        "start": 355,
        "end": 371
      },
      "declare": false,
      "start": 340,
      "end": 371
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
            "name": "Obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 394
                },
                "typeArguments": null,
                "start": 390,
                "end": 394
              },
              "start": 388,
              "end": 394
            },
            "start": 384,
            "end": 394
          },
          "init": null,
          "definite": false,
          "start": 384,
          "end": 394
        }
      ],
      "declare": true,
      "start": 372,
      "end": 395
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj2",
            "start": 397,
            "end": 401
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 396,
          "end": 404
        },
        "children": [],
        "closingElement": null,
        "start": 396,
        "end": 404
      },
      "directive": null,
      "start": 396,
      "end": 405
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj3",
        "optional": false,
        "typeAnnotation": null,
        "start": 426,
        "end": 430
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 431,
        "end": 434
      },
      "declare": false,
      "start": 416,
      "end": 434
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
            "name": "Obj3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 457
                },
                "typeArguments": null,
                "start": 453,
                "end": 457
              },
              "start": 451,
              "end": 457
            },
            "start": 447,
            "end": 457
          },
          "init": null,
          "definite": false,
          "start": 447,
          "end": 457
        }
      ],
      "declare": true,
      "start": 435,
      "end": 458
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "Obj3",
            "start": 460,
            "end": 464
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 459,
          "end": 467
        },
        "children": [],
        "closingElement": null,
        "start": 459,
        "end": 467
      },
      "directive": null,
      "start": 459,
      "end": 468
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 477
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 25,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 48,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 58,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "Div",
    "start": 96,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 105,
    "end": 106
  },
  {
    "type": "JSXIdentifier",
    "value": "Div",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 121,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Fact",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 144,
    "end": 150
  },
  {
    "type": "Null",
    "value": "null",
    "start": 151,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160
  },
  {
    "type": "JSXIdentifier",
    "value": "Fact",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 178,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Fnum",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 203,
    "end": 209
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 216,
    "end": 217
  },
  {
    "type": "JSXIdentifier",
    "value": "Fnum",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 226,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "Obj1",
    "start": 236,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 270,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 278,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "Obj1",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "Obj1",
    "start": 288,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 294,
    "end": 295
  },
  {
    "type": "JSXIdentifier",
    "value": "Obj1",
    "start": 295,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 340,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "Obj2",
    "start": 350,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 362,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 372,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 380,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "Obj2",
    "start": 384,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "Obj2",
    "start": 390,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 396,
    "end": 397
  },
  {
    "type": "JSXIdentifier",
    "value": "Obj2",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 416,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "Obj3",
    "start": 426,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 435,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 443,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "Obj3",
    "start": 447,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "Obj3",
    "start": 453,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 459,
    "end": 460
  },
  {
    "type": "JSXIdentifier",
    "value": "Obj3",
    "start": 460,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  }
]
```
