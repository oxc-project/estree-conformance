__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 79
          },
          "start": 74,
          "end": 79
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentPropsWithRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 104
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentPropsWithRef",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 104
          },
          "importKind": "value",
          "start": 83,
          "end": 104
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ElementType",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 117
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ElementType",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 117
          },
          "importKind": "value",
          "start": 106,
          "end": 117
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactNode",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 128
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReactNode",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 128
          },
          "importKind": "value",
          "start": 119,
          "end": 128
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 136,
        "end": 143
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 144
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ButtonBaseProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 166
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 168
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 188
              },
              "typeArguments": null,
              "start": 177,
              "end": 188
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 167,
            "end": 188
          }
        ],
        "start": 166,
        "end": 189
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentPropsWithRef",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 213
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 215
                  },
                  "typeArguments": null,
                  "start": 214,
                  "end": 215
                }
              ],
              "start": 213,
              "end": 216
            },
            "start": 192,
            "end": 216
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 229
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactNode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 241
                    },
                    "typeArguments": null,
                    "start": 232,
                    "end": 241
                  },
                  "start": 230,
                  "end": 241
                },
                "accessibility": null,
                "static": false,
                "start": 221,
                "end": 241
              }
            ],
            "start": 219,
            "end": 243
          }
        ],
        "start": 192,
        "end": 243
      },
      "declare": false,
      "start": 146,
      "end": 244
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 264
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 266
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 286
              },
              "typeArguments": null,
              "start": 275,
              "end": 286
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "span",
                "raw": "'span'",
                "start": 289,
                "end": 295
              },
              "start": 289,
              "end": 295
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 265,
            "end": 295
          }
        ],
        "start": 264,
        "end": 296
      },
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
                "name": "ButtonBaseProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 319
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 320,
                      "end": 321
                    },
                    "typeArguments": null,
                    "start": 320,
                    "end": 321
                  }
                ],
                "start": 319,
                "end": 322
              },
              "start": 304,
              "end": 322
            },
            "start": 302,
            "end": 322
          },
          "start": 297,
          "end": 322
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXFragment",
              "openingFragment": {
                "type": "JSXOpeningFragment",
                "start": 337,
                "end": 339
              },
              "children": [],
              "closingFragment": {
                "type": "JSXClosingFragment",
                "start": 339,
                "end": 342
              },
              "start": 337,
              "end": 342
            },
            "start": 330,
            "end": 343
          }
        ],
        "start": 324,
        "end": 345
      },
      "expression": false,
      "start": 246,
      "end": 345
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 355
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Component",
                "start": 359,
                "end": 368
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "onClick",
                    "start": 369,
                    "end": 376
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 378,
                          "end": 379
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
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 383,
                            "end": 384
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "preventDefault",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 385,
                            "end": 399
                          },
                          "optional": false,
                          "computed": false,
                          "start": 383,
                          "end": 399
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 383,
                        "end": 401
                      },
                      "id": null,
                      "generator": false,
                      "start": 378,
                      "end": 401
                    },
                    "start": 377,
                    "end": 402
                  },
                  "start": 369,
                  "end": 402
                }
              ],
              "selfClosing": true,
              "start": 358,
              "end": 405
            },
            "children": [],
            "closingElement": null,
            "start": 358,
            "end": 405
          },
          "definite": false,
          "start": 353,
          "end": 405
        }
      ],
      "declare": false,
      "start": 347,
      "end": 406
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 67,
  "end": 406
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
    "type": "Identifier",
    "value": "React",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "ComponentPropsWithRef",
    "start": 83,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 106,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 119,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 131,
    "end": 135
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 136,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 146,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "ButtonBaseProps",
    "start": 151,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 169,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 177,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "ComponentPropsWithRef",
    "start": 192,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 221,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 232,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 246,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 255,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 267,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 275,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288
  },
  {
    "type": "String",
    "value": "'span'",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 297,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "ButtonBaseProps",
    "start": 304,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 330,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 347,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 353,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359
  },
  {
    "type": "JSXIdentifier",
    "value": "Component",
    "start": 359,
    "end": 368
  },
  {
    "type": "JSXIdentifier",
    "value": "onClick",
    "start": 369,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 380,
    "end": 382
  },
  {
    "type": "JSXIdentifier",
    "value": "e",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 384,
    "end": 385
  },
  {
    "type": "JSXIdentifier",
    "value": "preventDefault",
    "start": 385,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  }
]
```
