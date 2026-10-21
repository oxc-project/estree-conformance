__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enhancer",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 13
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Extension",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 23
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 32,
              "end": 34
            },
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 37,
              "end": 39
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 39
          }
        ],
        "start": 13,
        "end": 40
      },
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
                "name": "Next",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 48
              },
              "constraint": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 57,
                "end": 59
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 44,
              "end": 59
            }
          ],
          "start": 43,
          "end": 60
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "next",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 71
                },
                "typeArguments": null,
                "start": 67,
                "end": 71
              },
              "start": 65,
              "end": 71
            },
            "start": 61,
            "end": 71
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 80
                },
                "typeArguments": null,
                "start": 76,
                "end": 80
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Extension",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 92
                },
                "typeArguments": null,
                "start": 83,
                "end": 92
              }
            ],
            "start": 76,
            "end": 92
          },
          "start": 73,
          "end": 92
        },
        "start": 43,
        "end": 92
      },
      "declare": false,
      "start": 0,
      "end": 93
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compose",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 118
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 119,
            "end": 120
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 126
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 135,
                "end": 138
              },
              "start": 135,
              "end": 140
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 122,
            "end": 140
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 148
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 142,
            "end": 148
          }
        ],
        "start": 118,
        "end": 149
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "first",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 165,
                        "end": 166
                      },
                      "typeArguments": null,
                      "start": 165,
                      "end": 166
                    },
                    "start": 163,
                    "end": 166
                  },
                  "start": 158,
                  "end": 166
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 177
                  },
                  "typeArguments": null,
                  "start": 171,
                  "end": 177
                },
                "start": 168,
                "end": 177
              },
              "start": 157,
              "end": 177
            },
            "start": 155,
            "end": 177
          },
          "start": 150,
          "end": 177
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "second",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 195
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 197,
                        "end": 201
                      },
                      "typeArguments": null,
                      "start": 197,
                      "end": 201
                    },
                    "start": 195,
                    "end": 201
                  },
                  "value": null,
                  "start": 188,
                  "end": 201
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 207
                  },
                  "typeArguments": null,
                  "start": 206,
                  "end": 207
                },
                "start": 203,
                "end": 207
              },
              "start": 187,
              "end": 207
            },
            "start": 185,
            "end": 207
          },
          "start": 179,
          "end": 207
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 218
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 224
                  },
                  "typeArguments": null,
                  "start": 220,
                  "end": 224
                },
                "start": 218,
                "end": 224
              },
              "value": null,
              "start": 211,
              "end": 224
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 235
              },
              "typeArguments": null,
              "start": 229,
              "end": 235
            },
            "start": 226,
            "end": 235
          },
          "start": 210,
          "end": 235
        },
        "start": 208,
        "end": 235
      },
      "body": null,
      "expression": false,
      "start": 94,
      "end": 236
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compose",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 261
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
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 268
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 262,
            "end": 268
          }
        ],
        "start": 261,
        "end": 269
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "functions",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 282
          },
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
                  "start": 284,
                  "end": 292
                },
                "typeArguments": null,
                "start": 284,
                "end": 292
              },
              "start": 284,
              "end": 294
            },
            "start": 282,
            "end": 294
          },
          "value": null,
          "start": 270,
          "end": 294
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 305
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 307,
                    "end": 310
                  },
                  "start": 307,
                  "end": 312
                },
                "start": 305,
                "end": 312
              },
              "value": null,
              "start": 298,
              "end": 312
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 323
              },
              "typeArguments": null,
              "start": 317,
              "end": 323
            },
            "start": 314,
            "end": 323
          },
          "start": 297,
          "end": 323
        },
        "start": 295,
        "end": 323
      },
      "body": null,
      "expression": false,
      "start": 237,
      "end": 324
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
            "name": "instrument",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enhancer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 359
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "extra",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 362,
                            "end": 367
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 369,
                              "end": 376
                            },
                            "start": 367,
                            "end": 376
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 362,
                          "end": 376
                        }
                      ],
                      "start": 360,
                      "end": 378
                    }
                  ],
                  "start": 359,
                  "end": 379
                },
                "start": 351,
                "end": 379
              },
              "start": 349,
              "end": 379
            },
            "start": 339,
            "end": 379
          },
          "init": null,
          "definite": false,
          "start": 339,
          "end": 379
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "persist",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enhancer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 398
                },
                "typeArguments": null,
                "start": 390,
                "end": 398
              },
              "start": 388,
              "end": 398
            },
            "start": 381,
            "end": 398
          },
          "init": null,
          "definite": false,
          "start": 381,
          "end": 398
        }
      ],
      "declare": true,
      "start": 325,
      "end": 399
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
            "name": "enhancer",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enhancer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 424
                },
                "typeArguments": null,
                "start": 416,
                "end": 424
              },
              "start": 414,
              "end": 424
            },
            "start": 406,
            "end": 424
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "compose",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 434
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "instrument",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 445
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "persist",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 454
              }
            ],
            "optional": false,
            "start": 427,
            "end": 455
          },
          "definite": false,
          "start": 406,
          "end": 455
        }
      ],
      "declare": false,
      "start": 400,
      "end": 456
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 456
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Enhancer",
    "start": 5,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "Extension",
    "start": 14,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 24,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 44,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 49,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 73,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Extension",
    "start": 83,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 94,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 102,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 122,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 127,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 168,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 171,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 188,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 191,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 203,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 214,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 226,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 229,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 237,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 245,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 254,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 270,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "functions",
    "start": 273,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 284,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 301,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 314,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 317,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 325,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 333,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "instrument",
    "start": 339,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "Enhancer",
    "start": 351,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 362,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 369,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "persist",
    "start": 381,
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
    "value": "Enhancer",
    "start": 390,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 400,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "enhancer",
    "start": 406,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "Enhancer",
    "start": 416,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "compose",
    "start": 427,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "instrument",
    "start": 435,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "persist",
    "start": 447,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  }
]
```
