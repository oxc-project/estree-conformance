__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "omit",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 83
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 84,
              "end": 85
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 84,
            "end": 85
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 97,
              "end": 103
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 87,
            "end": 103
          }
        ],
        "start": 83,
        "end": 104
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "names",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 122
                  },
                  "typeArguments": null,
                  "start": 121,
                  "end": 122
                },
                "start": 121,
                "end": 124
              },
              "start": 112,
              "end": 124
            },
            "start": 110,
            "end": 124
          },
          "start": 105,
          "end": 124
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 132
              },
              "typeArguments": null,
              "start": 131,
              "end": 132
            },
            "start": 129,
            "end": 132
          },
          "start": 126,
          "end": 132
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Omit",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 139
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
                  "start": 140,
                  "end": 141
                },
                "typeArguments": null,
                "start": 140,
                "end": 141
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 144
                },
                "typeArguments": null,
                "start": 143,
                "end": 144
              }
            ],
            "start": 139,
            "end": 145
          },
          "start": 135,
          "end": 145
        },
        "start": 133,
        "end": 145
      },
      "body": null,
      "expression": false,
      "start": 62,
      "end": 146
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "omit",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 168
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 179,
              "end": 185
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 169,
            "end": 185
          }
        ],
        "start": 168,
        "end": 186
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "names",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 203,
                    "end": 204
                  },
                  "typeArguments": null,
                  "start": 203,
                  "end": 204
                },
                "start": 203,
                "end": 206
              },
              "start": 194,
              "end": 206
            },
            "start": 192,
            "end": 206
          },
          "start": 187,
          "end": 206
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
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
                  "start": 210,
                  "end": 211
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 210,
                "end": 211
              }
            ],
            "start": 209,
            "end": 212
          },
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 219
                  },
                  "typeArguments": null,
                  "start": 218,
                  "end": 219
                },
                "start": 216,
                "end": 219
              },
              "start": 213,
              "end": 219
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 228
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
                      "start": 229,
                      "end": 230
                    },
                    "typeArguments": null,
                    "start": 229,
                    "end": 230
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 233
                    },
                    "typeArguments": null,
                    "start": 232,
                    "end": 233
                  }
                ],
                "start": 228,
                "end": 234
              },
              "start": 224,
              "end": 234
            },
            "start": 221,
            "end": 234
          },
          "start": 209,
          "end": 234
        },
        "start": 207,
        "end": 234
      },
      "body": null,
      "expression": false,
      "start": 147,
      "end": 235
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
            "name": "otherProps",
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 268
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 270,
                        "end": 276
                      },
                      "start": 268,
                      "end": 276
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 265,
                    "end": 277
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "qwe",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 281
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 283,
                        "end": 290
                      },
                      "start": 281,
                      "end": 290
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 278,
                    "end": 290
                  }
                ],
                "start": 263,
                "end": 292
              },
              "start": 261,
              "end": 292
            },
            "start": 251,
            "end": 292
          },
          "init": null,
          "definite": false,
          "start": 251,
          "end": 292
        }
      ],
      "declare": true,
      "start": 237,
      "end": 292
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 327
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 328,
              "end": 329
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 328,
            "end": 329
          }
        ],
        "start": 327,
        "end": 330
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 339
              },
              "typeArguments": null,
              "start": 338,
              "end": 339
            },
            "start": 336,
            "end": 339
          },
          "start": 331,
          "end": 339
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "start": 342,
          "end": 346
        },
        "start": 340,
        "end": 346
      },
      "body": null,
      "expression": false,
      "start": 294,
      "end": 346
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "GenericComponent",
            "start": 349,
            "end": 365
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "omit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 374
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "bar",
                        "raw": "'bar'",
                        "start": 376,
                        "end": 381
                      }
                    ],
                    "start": 375,
                    "end": 382
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "otherProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 384,
                    "end": 394
                  }
                ],
                "optional": false,
                "start": 370,
                "end": 395
              },
              "start": 366,
              "end": 396
            }
          ],
          "selfClosing": true,
          "start": 348,
          "end": 399
        },
        "children": [],
        "closingElement": null,
        "start": 348,
        "end": 399
      },
      "directive": null,
      "start": 348,
      "end": 400
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 62,
  "end": 414
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 62,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 70,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "omit",
    "start": 79,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 89,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 97,
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
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "names",
    "start": 105,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 112,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 135,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 147,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 155,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "omit",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 171,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "names",
    "start": 187,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 194,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 213,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 221,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 237,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 245,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "otherProps",
    "start": 251,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 265,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "qwe",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 283,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 294,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 302,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "GenericComponent",
    "start": 311,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 331,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Null",
    "value": "null",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "JSXIdentifier",
    "value": "GenericComponent",
    "start": 349,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 367,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "omit",
    "start": 370,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 375,
    "end": 376
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 376,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "otherProps",
    "start": 384,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  }
]
```
