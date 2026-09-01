__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 84
          },
          "start": 74,
          "end": 84
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 90,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 98
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 115
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 125
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "accessibility": null,
            "static": false,
            "start": 122,
            "end": 134
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "dataProp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 150,
                    "end": 156
                  },
                  "start": 148,
                  "end": 156
                },
                "start": 140,
                "end": 156
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              },
              "start": 157,
              "end": 165
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 139,
            "end": 166
          }
        ],
        "start": 116,
        "end": 168
      },
      "declare": false,
      "start": 100,
      "end": 168
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Yadda",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 192
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 205
              },
              "typeArguments": null,
              "start": 200,
              "end": 205
            },
            "start": 198,
            "end": 205
          },
          "start": 193,
          "end": 205
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 211
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 219
            },
            "start": 208,
            "end": 219
          },
          "typeArguments": null,
          "start": 208,
          "end": 219
        },
        "start": 206,
        "end": 219
      },
      "body": null,
      "expression": false,
      "start": 170,
      "end": 220
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
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 238
                },
                "typeArguments": null,
                "start": 233,
                "end": 238
              },
              "start": 231,
              "end": 238
            },
            "start": 226,
            "end": 238
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 250
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 252,
                  "end": 254
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 247,
                "end": 254
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "data-yadda",
                  "raw": "\"data-yadda\"",
                  "start": 260,
                  "end": 272
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 274,
                  "end": 276
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 260,
                "end": 276
              }
            ],
            "start": 241,
            "end": 289
          },
          "definite": false,
          "start": 226,
          "end": 289
        }
      ],
      "declare": false,
      "start": 222,
      "end": 290
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 298
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Yadda",
                "start": 302,
                "end": 307
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "foo",
                    "start": 308,
                    "end": 311
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 312,
                    "end": 319
                  },
                  "start": 308,
                  "end": 319
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-yadda",
                    "start": 320,
                    "end": 330
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 332,
                      "end": 334
                    },
                    "start": 331,
                    "end": 335
                  },
                  "start": 320,
                  "end": 335
                }
              ],
              "selfClosing": true,
              "start": 301,
              "end": 337
            },
            "children": [],
            "closingElement": null,
            "start": 301,
            "end": 337
          },
          "definite": false,
          "start": 296,
          "end": 337
        }
      ],
      "declare": false,
      "start": 292,
      "end": 338
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 345
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Yadda",
                "start": 349,
                "end": 354
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "bar",
                    "start": 355,
                    "end": 358
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 359,
                    "end": 366
                  },
                  "start": 355,
                  "end": 366
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "data-yadda",
                    "start": 367,
                    "end": 377
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 379,
                      "end": 381
                    },
                    "start": 378,
                    "end": 382
                  },
                  "start": 367,
                  "end": 382
                }
              ],
              "selfClosing": true,
              "start": 348,
              "end": 384
            },
            "children": [],
            "closingElement": null,
            "start": 348,
            "end": 384
          },
          "definite": false,
          "start": 343,
          "end": 384
        }
      ],
      "declare": false,
      "start": 339,
      "end": 385
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 67,
  "end": 395
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 76,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 79,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 85,
    "end": 89
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 90,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 100,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 110,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "dataProp",
    "start": 140,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 170,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 178,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Yadda",
    "start": 187,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 193,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 200,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 212,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 222,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 233,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 252,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"data-yadda\"",
    "start": 260,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 296,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 301,
    "end": 302
  },
  {
    "type": "JSXIdentifier",
    "value": "Yadda",
    "start": 302,
    "end": 307
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 312,
    "end": 319
  },
  {
    "type": "JSXIdentifier",
    "value": "data-yadda",
    "start": 320,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 332,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 339,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "JSXIdentifier",
    "value": "Yadda",
    "start": 349,
    "end": 354
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 359,
    "end": 366
  },
  {
    "type": "JSXIdentifier",
    "value": "data-yadda",
    "start": 367,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 378,
    "end": 379
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 379,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  }
]
```
