__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
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
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 19,
        "end": 22
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 37,
                    "end": 43
                  },
                  "start": 35,
                  "end": 43
                },
                "start": 30,
                "end": 43
              }
            ],
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
                  "start": 46,
                  "end": 47
                },
                "typeArguments": null,
                "start": 46,
                "end": 47
              },
              "start": 44,
              "end": 47
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 29,
            "end": 48
          }
        ],
        "start": 23,
        "end": 50
      },
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 71
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
              "start": 72,
              "end": 73
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 73
          }
        ],
        "start": 71,
        "end": 74
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  },
                  "start": 87,
                  "end": 95
                },
                "start": 82,
                "end": 95
              }
            ],
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
                  "start": 98,
                  "end": 99
                },
                "typeArguments": null,
                "start": 98,
                "end": 99
              },
              "start": 96,
              "end": 99
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 81,
            "end": 100
          }
        ],
        "start": 75,
        "end": 102
      },
      "declare": false,
      "start": 52,
      "end": 102
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "numberMapToArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 137
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
              "start": 138,
              "end": 139
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 138,
            "end": 139
          }
        ],
        "start": 137,
        "end": 140
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 158
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
                      "start": 159,
                      "end": 160
                    },
                    "typeArguments": null,
                    "start": 159,
                    "end": 160
                  }
                ],
                "start": 158,
                "end": 161
              },
              "start": 149,
              "end": 161
            },
            "start": 147,
            "end": 161
          },
          "start": 141,
          "end": 161
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
            },
            "typeArguments": null,
            "start": 164,
            "end": 165
          },
          "start": 164,
          "end": 167
        },
        "start": 162,
        "end": 167
      },
      "body": null,
      "expression": false,
      "start": 104,
      "end": 168
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringMapToArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 202
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
              "start": 203,
              "end": 204
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 203,
            "end": 204
          }
        ],
        "start": 202,
        "end": 205
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 223
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
                      "start": 224,
                      "end": 225
                    },
                    "typeArguments": null,
                    "start": 224,
                    "end": 225
                  }
                ],
                "start": 223,
                "end": 226
              },
              "start": 214,
              "end": 226
            },
            "start": 212,
            "end": 226
          },
          "start": 206,
          "end": 226
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
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
          "start": 229,
          "end": 232
        },
        "start": 227,
        "end": 232
      },
      "body": null,
      "expression": false,
      "start": 169,
      "end": 233
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
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumberMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 267
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 268,
                        "end": 276
                      },
                      "typeArguments": null,
                      "start": 268,
                      "end": 276
                    }
                  ],
                  "start": 267,
                  "end": 277
                },
                "start": 258,
                "end": 277
              },
              "start": 256,
              "end": 277
            },
            "start": 247,
            "end": 277
          },
          "init": null,
          "definite": false,
          "start": 247,
          "end": 277
        }
      ],
      "declare": true,
      "start": 235,
      "end": 278
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
            "name": "stringMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 311
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 320
                      },
                      "typeArguments": null,
                      "start": 312,
                      "end": 320
                    }
                  ],
                  "start": 311,
                  "end": 321
                },
                "start": 302,
                "end": 321
              },
              "start": 300,
              "end": 321
            },
            "start": 291,
            "end": 321
          },
          "init": null,
          "definite": false,
          "start": 291,
          "end": 321
        }
      ],
      "declare": true,
      "start": 279,
      "end": 322
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 340
                  },
                  "typeArguments": null,
                  "start": 332,
                  "end": 340
                },
                "start": 332,
                "end": 342
              },
              "start": 330,
              "end": 342
            },
            "start": 328,
            "end": 342
          },
          "init": null,
          "definite": false,
          "start": 328,
          "end": 342
        }
      ],
      "declare": false,
      "start": 324,
      "end": 343
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 350
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberMapToArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 369
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "numberMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 379
              }
            ],
            "optional": false,
            "start": 353,
            "end": 380
          },
          "definite": false,
          "start": 348,
          "end": 380
        }
      ],
      "declare": false,
      "start": 344,
      "end": 381
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 395
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "numberMapToArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 414
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "stringMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 424
              }
            ],
            "optional": false,
            "start": 398,
            "end": 425
          },
          "definite": false,
          "start": 393,
          "end": 425
        }
      ],
      "declare": false,
      "start": 389,
      "end": 426
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 440
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringMapToArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 459
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "numberMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 469
              }
            ],
            "optional": false,
            "start": 443,
            "end": 470
          },
          "definite": false,
          "start": 438,
          "end": 470
        }
      ],
      "declare": false,
      "start": 434,
      "end": 471
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
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 502
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringMapToArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 521
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "stringMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 531
              }
            ],
            "optional": false,
            "start": 505,
            "end": 532
          },
          "definite": false,
          "start": 500,
          "end": 532
        }
      ],
      "declare": false,
      "start": 496,
      "end": 533
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 540
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "NumberMap",
    "start": 10,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 30,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 52,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "StringMap",
    "start": 62,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 82,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 89,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 104,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 112,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "numberMapToArray",
    "start": 121,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "NumberMap",
    "start": 149,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 169,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 177,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "stringMapToArray",
    "start": 186,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "StringMap",
    "start": 214,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 235,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 243,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 247,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "NumberMap",
    "start": 258,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 268,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 279,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 287,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "stringMap",
    "start": 291,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "StringMap",
    "start": 302,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 312,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 324,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 328,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 332,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "var",
    "start": 344,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 348,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "numberMapToArray",
    "start": 353,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 370,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 389,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "numberMapToArray",
    "start": 398,
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
    "value": "stringMap",
    "start": 415,
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
    "value": "var",
    "start": 434,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 438,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "stringMapToArray",
    "start": 443,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 460,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "stringMapToArray",
    "start": 505,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "stringMap",
    "start": 522,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  }
]
```
