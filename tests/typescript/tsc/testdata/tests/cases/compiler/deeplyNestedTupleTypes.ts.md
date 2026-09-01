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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 71
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 93
              },
              "typeParameters": null,
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
                      "name": "inners",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 108
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Inner",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 111,
                              "end": 116
                            },
                            "typeArguments": null,
                            "start": 111,
                            "end": 116
                          }
                        ],
                        "start": 110,
                        "end": 117
                      },
                      "start": 108,
                      "end": 117
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 102,
                    "end": 118
                  }
                ],
                "start": 96,
                "end": 122
              },
              "declare": false,
              "start": 83,
              "end": 123
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 76,
            "end": 123
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 143
              },
              "typeParameters": null,
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
                      "name": "mids",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 152,
                      "end": 156
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Mid",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 159,
                              "end": 162
                            },
                            "typeArguments": null,
                            "start": 159,
                            "end": 162
                          }
                        ],
                        "start": 158,
                        "end": 163
                      },
                      "start": 156,
                      "end": 163
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 152,
                    "end": 164
                  }
                ],
                "start": 146,
                "end": 168
              },
              "declare": false,
              "start": 133,
              "end": 169
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 126,
            "end": 169
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mid",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 187
              },
              "typeParameters": null,
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
                      "name": "leaves",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 202
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Leaf",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 205,
                              "end": 209
                            },
                            "typeArguments": null,
                            "start": 205,
                            "end": 209
                          }
                        ],
                        "start": 204,
                        "end": 210
                      },
                      "start": 202,
                      "end": 210
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 196,
                    "end": 211
                  }
                ],
                "start": 190,
                "end": 215
              },
              "declare": false,
              "start": 179,
              "end": 216
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 172,
            "end": 216
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Leaf",
                "optional": false,
                "typeAnnotation": null,
                "start": 231,
                "end": 235
              },
              "typeParameters": null,
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 244,
                      "end": 246
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 248,
                        "end": 254
                      },
                      "start": 246,
                      "end": 254
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 244,
                    "end": 255
                  }
                ],
                "start": 238,
                "end": 259
              },
              "declare": false,
              "start": 226,
              "end": 260
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 219,
            "end": 260
          }
        ],
        "start": 72,
        "end": 262
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 60,
      "end": 262
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 275
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Outer",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 297
              },
              "typeParameters": null,
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
                      "name": "inners",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 312
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Inner",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 315,
                              "end": 320
                            },
                            "typeArguments": null,
                            "start": 315,
                            "end": 320
                          }
                        ],
                        "start": 314,
                        "end": 321
                      },
                      "start": 312,
                      "end": 321
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 306,
                    "end": 322
                  }
                ],
                "start": 300,
                "end": 326
              },
              "declare": false,
              "start": 287,
              "end": 327
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 280,
            "end": 327
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 347
              },
              "typeParameters": null,
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
                      "name": "mids",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 356,
                      "end": 360
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Mid",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 363,
                              "end": 366
                            },
                            "typeArguments": null,
                            "start": 363,
                            "end": 366
                          }
                        ],
                        "start": 362,
                        "end": 367
                      },
                      "start": 360,
                      "end": 367
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 356,
                    "end": 368
                  }
                ],
                "start": 350,
                "end": 372
              },
              "declare": false,
              "start": 337,
              "end": 373
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 330,
            "end": 373
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mid",
                "optional": false,
                "typeAnnotation": null,
                "start": 388,
                "end": 391
              },
              "typeParameters": null,
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
                      "name": "leaves",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 400,
                      "end": 406
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Leaf",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 409,
                              "end": 413
                            },
                            "typeArguments": null,
                            "start": 409,
                            "end": 413
                          }
                        ],
                        "start": 408,
                        "end": 414
                      },
                      "start": 406,
                      "end": 414
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 400,
                    "end": 415
                  }
                ],
                "start": 394,
                "end": 419
              },
              "declare": false,
              "start": 383,
              "end": 420
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 376,
            "end": 420
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Leaf",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 439
              },
              "typeParameters": null,
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 448,
                      "end": 450
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 452,
                        "end": 458
                      },
                      "start": 450,
                      "end": 458
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 448,
                    "end": 459
                  }
                ],
                "start": 442,
                "end": 463
              },
              "declare": false,
              "start": 430,
              "end": 464
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 423,
            "end": 464
          }
        ],
        "start": 276,
        "end": 466
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 264,
      "end": 466
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 481
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 485,
                  "end": 486
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 492
                },
                "start": 485,
                "end": 492
              },
              "typeArguments": null,
              "start": 485,
              "end": 492
            },
            "start": 483,
            "end": 492
          },
          "start": 482,
          "end": 492
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
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
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 497,
                  "end": 498
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 504
                },
                "start": 497,
                "end": 504
              },
              "typeArguments": null,
              "start": 497,
              "end": 504
            },
            "start": 495,
            "end": 504
          },
          "start": 494,
          "end": 504
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 511
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 515
              },
              "start": 510,
              "end": 515
            },
            "directive": null,
            "start": 510,
            "end": 516
          }
        ],
        "start": 506,
        "end": 518
      },
      "expression": false,
      "start": 468,
      "end": 518
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 518
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 60,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 76,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 83,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "inners",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 111,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 126,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 133,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 138,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "mids",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "Mid",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 172,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 179,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "Mid",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "leaves",
    "start": 196,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "Leaf",
    "start": 205,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 219,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 226,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "Leaf",
    "start": 231,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 264,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 280,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 287,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 292,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "inners",
    "start": 306,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 315,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 330,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 337,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 342,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "mids",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "Mid",
    "start": 363,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 376,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 383,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "Mid",
    "start": 388,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "leaves",
    "start": 400,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "Leaf",
    "start": 409,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 423,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 430,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "Leaf",
    "start": 435,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 448,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 452,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 468,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 487,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "B",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 499,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  }
]
```
