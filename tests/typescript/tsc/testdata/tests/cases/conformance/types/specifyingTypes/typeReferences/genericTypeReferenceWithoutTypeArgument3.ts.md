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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 107
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
              "start": 108,
              "end": 109
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 108,
            "end": 109
          }
        ],
        "start": 107,
        "end": 110
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 120
            },
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
                  "start": 122,
                  "end": 123
                },
                "typeArguments": null,
                "start": 122,
                "end": 123
              },
              "start": 120,
              "end": 123
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 117,
            "end": 124
          }
        ],
        "start": 111,
        "end": 126
      },
      "abstract": false,
      "declare": true,
      "start": 92,
      "end": 126
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 144
                },
                "typeArguments": null,
                "start": 143,
                "end": 144
              },
              "start": 141,
              "end": 144
            },
            "start": 140,
            "end": 144
          },
          "init": null,
          "definite": false,
          "start": 140,
          "end": 144
        }
      ],
      "declare": true,
      "start": 128,
      "end": 145
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
            "name": "a",
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
                      "start": 164,
                      "end": 165
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 167,
                          "end": 168
                        },
                        "typeArguments": null,
                        "start": 167,
                        "end": 168
                      },
                      "start": 165,
                      "end": 168
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 164,
                    "end": 168
                  }
                ],
                "start": 162,
                "end": 170
              },
              "start": 160,
              "end": 170
            },
            "start": 159,
            "end": 170
          },
          "init": null,
          "definite": false,
          "start": 159,
          "end": 170
        }
      ],
      "declare": true,
      "start": 147,
      "end": 171
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 193,
                              "end": 194
                            },
                            "typeArguments": null,
                            "start": 193,
                            "end": 194
                          },
                          "start": 191,
                          "end": 194
                        },
                        "start": 190,
                        "end": 194
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 197,
                          "end": 198
                        },
                        "typeArguments": null,
                        "start": 197,
                        "end": 198
                      },
                      "start": 195,
                      "end": 198
                    },
                    "start": 189,
                    "end": 198
                  }
                ],
                "start": 187,
                "end": 200
              },
              "start": 185,
              "end": 200
            },
            "start": 184,
            "end": 200
          },
          "init": null,
          "definite": false,
          "start": 184,
          "end": 200
        }
      ],
      "declare": true,
      "start": 172,
      "end": 201
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 223,
                              "end": 224
                            },
                            "typeArguments": null,
                            "start": 223,
                            "end": 224
                          },
                          "start": 221,
                          "end": 224
                        },
                        "start": 220,
                        "end": 224
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 227,
                          "end": 228
                        },
                        "typeArguments": null,
                        "start": 227,
                        "end": 228
                      },
                      "start": 225,
                      "end": 228
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 219,
                    "end": 228
                  }
                ],
                "start": 217,
                "end": 230
              },
              "start": 215,
              "end": 230
            },
            "start": 214,
            "end": 230
          },
          "init": null,
          "definite": false,
          "start": 214,
          "end": 230
        }
      ],
      "declare": true,
      "start": 202,
      "end": 231
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 251
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 256
              },
              "typeArguments": null,
              "start": 255,
              "end": 256
            },
            "start": 253,
            "end": 256
          },
          "start": 252,
          "end": 256
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 260
          },
          "typeArguments": null,
          "start": 259,
          "end": 260
        },
        "start": 257,
        "end": 260
      },
      "body": null,
      "expression": false,
      "start": 233,
      "end": 261
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 278
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 288
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 289,
        "end": 291
      },
      "abstract": false,
      "declare": true,
      "start": 263,
      "end": 291
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 312
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 333
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
                      "start": 334,
                      "end": 335
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 334,
                    "end": 335
                  }
                ],
                "start": 333,
                "end": 336
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 339,
                      "end": 342
                    },
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
                          "start": 344,
                          "end": 345
                        },
                        "typeArguments": null,
                        "start": 344,
                        "end": 345
                      },
                      "start": 342,
                      "end": 345
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 339,
                    "end": 345
                  }
                ],
                "start": 337,
                "end": 347
              },
              "abstract": false,
              "declare": false,
              "start": 326,
              "end": 347
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 319,
            "end": 347
          }
        ],
        "start": 313,
        "end": 349
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 293,
      "end": 349
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null,
        "start": 365,
        "end": 367
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 378,
          "end": 379
        },
        "optional": false,
        "computed": false,
        "start": 376,
        "end": 379
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 380,
        "end": 383
      },
      "abstract": false,
      "declare": true,
      "start": 351,
      "end": 383
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D3",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 400
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
              "start": 401,
              "end": 402
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 412
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 414
                },
                "start": 411,
                "end": 414
              },
              "typeArguments": null,
              "start": 411,
              "end": 414
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 401,
            "end": 414
          }
        ],
        "start": 400,
        "end": 415
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 416,
        "end": 419
      },
      "abstract": false,
      "declare": true,
      "start": 384,
      "end": 419
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 438,
        "end": 439
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
              "start": 440,
              "end": 441
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 451
              },
              "typeArguments": null,
              "start": 450,
              "end": 451
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 440,
            "end": 451
          }
        ],
        "start": 439,
        "end": 452
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 456,
                "end": 457
              },
              "typeArguments": null,
              "start": 456,
              "end": 457
            },
            "start": 454,
            "end": 457
          },
          "start": 453,
          "end": 457
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 421,
      "end": 459
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 478
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
              "start": 479,
              "end": 480
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 490
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 491,
                  "end": 492
                },
                "start": 489,
                "end": 492
              },
              "typeArguments": null,
              "start": 489,
              "end": 492
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 479,
            "end": 492
          }
        ],
        "start": 478,
        "end": 493
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 497,
                "end": 498
              },
              "typeArguments": null,
              "start": 497,
              "end": 498
            },
            "start": 495,
            "end": 498
          },
          "start": 494,
          "end": 498
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 460,
      "end": 500
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 500
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 92,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "declare",
    "start": 128,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 136,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 147,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 155,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 172,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 184,
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
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
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
    "value": "C",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 202,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 210,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 233,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 241,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 263,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 271,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 279,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 293,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 301,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 319,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 326,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 339,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 351,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 359,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "D2",
    "start": 365,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 368,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 384,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 392,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "D3",
    "start": 398,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 403,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 421,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 429,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 442,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 460,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 468,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 479,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 481,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  }
]
```
