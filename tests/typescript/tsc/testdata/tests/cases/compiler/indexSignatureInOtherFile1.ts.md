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
        "name": "Array1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
              "start": 17,
              "end": 18
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 18
          }
        ],
        "start": 16,
        "end": 19
      },
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
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 24,
            "end": 39
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 46,
                    "end": 52
                  },
                  "start": 44,
                  "end": 52
                },
                "start": 43,
                "end": 52
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
                  "start": 55,
                  "end": 56
                },
                "typeArguments": null,
                "start": 55,
                "end": 56
              },
              "start": 53,
              "end": 56
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 42,
            "end": 57
          }
        ],
        "start": 20,
        "end": 59
      },
      "declare": false,
      "start": 0,
      "end": 59
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrayConstructor1",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 88
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arrayLength",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 111,
                    "end": 117
                  },
                  "start": 109,
                  "end": 117
                },
                "start": 97,
                "end": 117
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 126
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 127,
                      "end": 130
                    }
                  ],
                  "start": 126,
                  "end": 131
                },
                "start": 120,
                "end": 131
              },
              "start": 118,
              "end": 131
            },
            "start": 93,
            "end": 132
          }
        ],
        "start": 89,
        "end": 134
      },
      "declare": false,
      "start": 61,
      "end": 134
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
            "name": "Array1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArrayConstructor1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 173
                },
                "typeArguments": null,
                "start": 156,
                "end": 173
              },
              "start": 154,
              "end": 173
            },
            "start": 148,
            "end": 173
          },
          "init": null,
          "definite": false,
          "start": 148,
          "end": 173
        }
      ],
      "declare": true,
      "start": 136,
      "end": 174
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array1",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 209
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 224
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 225,
                "end": 233
              },
              "optional": false,
              "computed": false,
              "start": 218,
              "end": 233
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 254
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
                        "start": 255,
                        "end": 256
                      },
                      "typeArguments": null,
                      "start": 255,
                      "end": 256
                    }
                  ],
                  "start": 254,
                  "end": 257
                },
                "start": 238,
                "end": 257
              },
              "start": 236,
              "end": 257
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 217,
            "end": 258
          }
        ],
        "start": 213,
        "end": 260
      },
      "declare": false,
      "start": 193,
      "end": 260
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array1",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 303
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
              "start": 304,
              "end": 305
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 304,
            "end": 305
          }
        ],
        "start": 303,
        "end": 306
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 455
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "unscopables",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 467
              },
              "optional": false,
              "computed": false,
              "start": 449,
              "end": 467
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
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
                      "name": "copyWithin",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 480,
                      "end": 490
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 492,
                        "end": 499
                      },
                      "start": 490,
                      "end": 499
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 480,
                    "end": 500
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entries",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 507,
                      "end": 514
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 516,
                        "end": 523
                      },
                      "start": 514,
                      "end": 523
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 507,
                    "end": 524
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fill",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 531,
                      "end": 535
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 537,
                        "end": 544
                      },
                      "start": 535,
                      "end": 544
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 531,
                    "end": 545
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "find",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 552,
                      "end": 556
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 558,
                        "end": 565
                      },
                      "start": 556,
                      "end": 565
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 552,
                    "end": 566
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "findIndex",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 573,
                      "end": 582
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 584,
                        "end": 591
                      },
                      "start": 582,
                      "end": 591
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 573,
                    "end": 592
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 599,
                      "end": 603
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 605,
                        "end": 612
                      },
                      "start": 603,
                      "end": 612
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 599,
                    "end": 613
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 620,
                      "end": 626
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 628,
                        "end": 635
                      },
                      "start": 626,
                      "end": 635
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 620,
                    "end": 636
                  }
                ],
                "start": 472,
                "end": 640
              },
              "start": 470,
              "end": 640
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 448,
            "end": 641
          }
        ],
        "start": 307,
        "end": 643
      },
      "declare": false,
      "start": 287,
      "end": 643
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 644
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
    "value": "Array1",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "number",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 61,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "ArrayConstructor1",
    "start": 71,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 97,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "Array1",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 136,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 144,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "Array1",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "ArrayConstructor1",
    "start": 156,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 193,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Array1",
    "start": 203,
    "end": 209
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
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 218,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 225,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "IterableIterator",
    "start": 238,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 287,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "Array1",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 449,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "unscopables",
    "start": 456,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
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
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "copyWithin",
    "start": 480,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 492,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 507,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 516,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "fill",
    "start": 531,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 537,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "find",
    "start": 552,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 558,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "findIndex",
    "start": 573,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 584,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 599,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 605,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 620,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 628,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 642,
    "end": 643
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array1",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 25
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 36,
                    "end": 42
                  },
                  "start": 34,
                  "end": 42
                },
                "start": 31,
                "end": 42
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              },
              "start": 43,
              "end": 51
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 30,
            "end": 51
          }
        ],
        "start": 26,
        "end": 53
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 53
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 6,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "Array1",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  }
]
```
