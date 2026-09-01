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
            "start": 52,
            "end": 57
          },
          "start": 52,
          "end": 57
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 63,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 71
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ButtonProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 85,
          "end": 96
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
                "start": 97,
                "end": 98
              },
              "constraint": null,
              "default": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 101,
                "end": 103
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 97,
              "end": 103
            }
          ],
          "start": 96,
          "end": 104
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 107,
                  "end": 112
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ButtonHTMLAttributes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 133
                },
                "start": 107,
                "end": 133
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLButtonElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 151
                    },
                    "typeArguments": null,
                    "start": 134,
                    "end": 151
                  }
                ],
                "start": 133,
                "end": 152
              },
              "start": 107,
              "end": 152
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
                    "name": "outline",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 168
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 171,
                      "end": 178
                    },
                    "start": 169,
                    "end": 178
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 161,
                  "end": 179
                }
              ],
              "start": 155,
              "end": 181
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 185
              },
              "typeArguments": null,
              "start": 184,
              "end": 185
            }
          ],
          "start": 107,
          "end": 185
        },
        "declare": false,
        "start": 80,
        "end": 186
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 73,
      "end": 186
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 208
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
              "start": 209,
              "end": 210
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 213,
              "end": 215
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 209,
            "end": 215
          }
        ],
        "start": 208,
        "end": 216
      },
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 230
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 240
        },
        "optional": false,
        "computed": false,
        "start": 225,
        "end": 240
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ButtonProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 252
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
                    "start": 253,
                    "end": 254
                  },
                  "typeArguments": null,
                  "start": 253,
                  "end": 254
                }
              ],
              "start": 252,
              "end": 255
            },
            "start": 241,
            "end": 255
          }
        ],
        "start": 240,
        "end": 256
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 257,
        "end": 260
      },
      "abstract": false,
      "declare": true,
      "start": 188,
      "end": 260
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CustomButtonProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 289
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ButtonProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 309
          },
          "typeArguments": null,
          "start": 298,
          "end": 309
        }
      ],
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
              "name": "customProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 326
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 328,
                "end": 334
              },
              "start": 326,
              "end": 334
            },
            "accessibility": null,
            "static": false,
            "start": 316,
            "end": 335
          }
        ],
        "start": 310,
        "end": 337
      },
      "declare": false,
      "start": 262,
      "end": 337
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
            "name": "CustomButton",
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
                    "name": "React",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 359,
                    "end": 364
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SFC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 368
                  },
                  "start": 359,
                  "end": 368
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CustomButtonProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 369,
                        "end": 386
                      },
                      "typeArguments": null,
                      "start": 369,
                      "end": 386
                    }
                  ],
                  "start": 368,
                  "end": 387
                },
                "start": 359,
                "end": 387
              },
              "start": 357,
              "end": 387
            },
            "start": 345,
            "end": 387
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
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 395
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "Button",
                  "start": 400,
                  "end": 406
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXSpreadAttribute",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 411,
                      "end": 416
                    },
                    "start": 407,
                    "end": 417
                  }
                ],
                "selfClosing": true,
                "start": 399,
                "end": 420
              },
              "children": [],
              "closingElement": null,
              "start": 399,
              "end": 420
            },
            "id": null,
            "generator": false,
            "start": 390,
            "end": 420
          },
          "definite": false,
          "start": 345,
          "end": 420
        }
      ],
      "declare": false,
      "start": 339,
      "end": 421
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 421
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 58,
    "end": 62
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 73,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 80,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 85,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "ButtonHTMLAttributes",
    "start": 113,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "HTMLButtonElement",
    "start": 134,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "outline",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 171,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 188,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 196,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "extends",
    "start": 217,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 231,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 241,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 262,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "CustomButtonProps",
    "start": 272,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 290,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "ButtonProps",
    "start": 298,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "customProp",
    "start": 316,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 328,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 339,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "CustomButton",
    "start": 345,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 359,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "SFC",
    "start": 365,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "CustomButtonProps",
    "start": 369,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 390,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 396,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 400,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 408,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 411,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421
  }
]
```
