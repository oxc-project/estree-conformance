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
                "start": 90,
                "end": 95
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
                      "start": 108,
                      "end": 114
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Inner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 116,
                            "end": 121
                          },
                          "typeArguments": null,
                          "start": 116,
                          "end": 121
                        },
                        "start": 116,
                        "end": 123
                      },
                      "start": 114,
                      "end": 123
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 108,
                    "end": 124
                  }
                ],
                "start": 98,
                "end": 130
              },
              "declare": false,
              "start": 85,
              "end": 130
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 78,
            "end": 130
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
                "start": 147,
                "end": 152
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
                      "start": 165,
                      "end": 169
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Mid",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 171,
                            "end": 174
                          },
                          "typeArguments": null,
                          "start": 171,
                          "end": 174
                        },
                        "start": 171,
                        "end": 176
                      },
                      "start": 169,
                      "end": 176
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 165,
                    "end": 177
                  }
                ],
                "start": 155,
                "end": 183
              },
              "declare": false,
              "start": 142,
              "end": 183
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 135,
            "end": 183
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
                "start": 200,
                "end": 203
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
                      "start": 216,
                      "end": 222
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Leaf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 224,
                            "end": 228
                          },
                          "typeArguments": null,
                          "start": 224,
                          "end": 228
                        },
                        "start": 224,
                        "end": 230
                      },
                      "start": 222,
                      "end": 230
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 216,
                    "end": 231
                  }
                ],
                "start": 206,
                "end": 237
              },
              "declare": false,
              "start": 195,
              "end": 237
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 188,
            "end": 237
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
                "start": 254,
                "end": 258
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
                      "start": 271,
                      "end": 273
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 275,
                        "end": 281
                      },
                      "start": 273,
                      "end": 281
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 271,
                    "end": 282
                  }
                ],
                "start": 261,
                "end": 288
              },
              "declare": false,
              "start": 249,
              "end": 288
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 242,
            "end": 288
          }
        ],
        "start": 72,
        "end": 290
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 60,
      "end": 290
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 302,
        "end": 303
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
                "start": 322,
                "end": 327
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
                      "start": 340,
                      "end": 346
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Inner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 348,
                            "end": 353
                          },
                          "typeArguments": null,
                          "start": 348,
                          "end": 353
                        },
                        "start": 348,
                        "end": 355
                      },
                      "start": 346,
                      "end": 355
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 340,
                    "end": 356
                  }
                ],
                "start": 330,
                "end": 362
              },
              "declare": false,
              "start": 317,
              "end": 362
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 310,
            "end": 362
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
                "start": 379,
                "end": 384
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
                      "start": 397,
                      "end": 401
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Mid",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 403,
                            "end": 406
                          },
                          "typeArguments": null,
                          "start": 403,
                          "end": 406
                        },
                        "start": 403,
                        "end": 408
                      },
                      "start": 401,
                      "end": 408
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 397,
                    "end": 409
                  }
                ],
                "start": 387,
                "end": 415
              },
              "declare": false,
              "start": 374,
              "end": 415
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 367,
            "end": 415
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
                "start": 432,
                "end": 435
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
                      "start": 448,
                      "end": 454
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Leaf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 456,
                            "end": 460
                          },
                          "typeArguments": null,
                          "start": 456,
                          "end": 460
                        },
                        "start": 456,
                        "end": 462
                      },
                      "start": 454,
                      "end": 462
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 448,
                    "end": 463
                  }
                ],
                "start": 438,
                "end": 469
              },
              "declare": false,
              "start": 427,
              "end": 469
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 420,
            "end": 469
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
                "start": 486,
                "end": 490
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
                      "start": 503,
                      "end": 505
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 507,
                        "end": 513
                      },
                      "start": 505,
                      "end": 513
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 503,
                    "end": 514
                  }
                ],
                "start": 493,
                "end": 520
              },
              "declare": false,
              "start": 481,
              "end": 520
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 474,
            "end": 520
          }
        ],
        "start": 304,
        "end": 522
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 292,
      "end": 522
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 533,
        "end": 537
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
                  "start": 541,
                  "end": 542
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 543,
                  "end": 548
                },
                "start": 541,
                "end": 548
              },
              "typeArguments": null,
              "start": 541,
              "end": 548
            },
            "start": 539,
            "end": 548
          },
          "start": 538,
          "end": 548
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
                  "start": 553,
                  "end": 554
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 555,
                  "end": 560
                },
                "start": 553,
                "end": 560
              },
              "typeArguments": null,
              "start": 553,
              "end": 560
            },
            "start": 551,
            "end": 560
          },
          "start": 550,
          "end": 560
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
                "start": 568,
                "end": 569
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 573
              },
              "start": 568,
              "end": 573
            },
            "directive": null,
            "start": 568,
            "end": 573
          }
        ],
        "start": 562,
        "end": 575
      },
      "expression": false,
      "start": 524,
      "end": 575
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 575
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
    "start": 78,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 85,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 90,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "inners",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 135,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 142,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 147,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "mids",
    "start": 165,
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
    "value": "Mid",
    "start": 171,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 188,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 195,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "Mid",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "leaves",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "Leaf",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 242,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 249,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "Leaf",
    "start": 254,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 271,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 275,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 292,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 310,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 317,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 322,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "inners",
    "start": 340,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 348,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 367,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 374,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 379,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "mids",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "Mid",
    "start": 403,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 420,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 427,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "Mid",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "leaves",
    "start": 448,
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
    "value": "Leaf",
    "start": 456,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 474,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 481,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "Leaf",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 507,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 524,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 533,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 543,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 555,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575
  }
]
```
